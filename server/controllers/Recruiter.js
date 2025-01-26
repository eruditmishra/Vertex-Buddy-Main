const User = require("../models/User");

// exports.addRecruiter = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     if (!userId) {
//       return res.status(401).json({
//         success: false,
//         message: "You are not logged in",
//       });
//     }

//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({
//         succesS: false,
//         message: "All fields are mandatory",
//       });
//     }

//     // Check if email already exists
//     const existingRecruiter = await Recruiter.findOne({ email });
//     if (existingRecruiter) {
//       return res.status(400).json({
//         succesS: false,
//         message: "Email already exists",
//       });
//     }

//     const recruiter = await Recruiter.create({ email, name, password });

//     res.status(201).json({
//       success: true,
//       message: "Recruiter registered successfully",
//     });
//   } catch (error) {
//     console.error("Error registering recruiter:", error);
//     res.status(500).json({
//       succesS: false,
//       error: "Internal server error",
//     });
//   }
// };

exports.getAllRecruiters = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "You are not logged in",
      });
    }

    // const recruiters = await User.find()
    //   .populate({ path: "email", select: "-password" })
    //   .exec();

    const recruiters = await User.find({ emailVerified: true }, { password: 0 })
      .populate("email")
      .sort({ createdAt: -1 })
      .exec();

    if (!recruiters) {
      return res.status(404).json({
        success: false,
        message: "No recruiters found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Recruiters  retrieved successfully",
      data: recruiters,
    });
  } catch (error) {
    console.log("Error getting all recruiters: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to fetch recruiters",
    });
  }
};

exports.deleteRecruiter = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "You are not logged in",
      });
    }

    const recruiterId = req.params.id;

    const recruiter = await User.findOneAndDelete({ _id: recruiterId });

    const updatedRecruiters = await User.find(
      { emailVerified: true },
      { password: 0 }
    ).exec();

    return res.status(200).json({
      success: true,
      message: "Recruiter Deleted Successfully",
      data: updatedRecruiters,
    });
  } catch (error) {
    console.error("Error During Deleting the recruiter");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to delete recruiter",
    });
  }
};
