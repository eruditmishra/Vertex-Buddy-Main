const Candidate = require("../models/Candidate");
// const Recruiter = require("../models/Recruiter");
const User = require("../models/User");
const fs = require("fs");

const ShortUniqueId = require("short-unique-id");
const Vendor = require("../models/Vendor");

const uid = new ShortUniqueId({
  dictionary: "number",
  length: 10,
});

//* @desc Add Candidate
//* @route POST /api/v1/candidates/addCandidate
//* @Access Private

exports.addCandidate = async (req, res) => {
  try {
    const userId = req?.user?.id;

    if (!userId) {
      return res
        .status(400)
        .json({ success: true, message: "Please Login to add a candidate" });
    }

    const {
      name,
      email,
      dateOfBirth,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills,
      currentCompany,
      currentDesignation,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      noticePeriod,
      lastWorkingDay,
      holdingAnyOffer,
      interestedRole,
      languagesKnown,
      profile,
      vendorName,
    } = req.body;

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !gender ||
      !highestQualification ||
      !skills ||
      !totalExperience ||
      !relevantExperience ||
      !currentLocation ||
      !preferredLocation ||
      !interestedRole ||
      !profile
    ) {
      return res.status(400).json({
        status: false,
        message: "Please fill all the mandatory details",
      });
    }

    // Create  a new file path
    const { originalname, path } = req.files[0];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    // check if the candidate already exists
    const isCandidateAlreadyExists = await Candidate.findOne({
      $or: [
        {
          email: email,
        },
        {
          phoneNumber: phoneNumber,
        },
      ],
    });

    if (isCandidateAlreadyExists) {
      return res.status(409).json({
        success: false,
        message: "Candidate already exists!! ",
      });
    }

    let candidateId;
    while (true) {
      candidateId = uid.rnd();
      if (!(await Candidate.findOne({ candidateId }))) {
        break;
      }
    }

    // Separate first, middle and last name
    const nameArray = name.split(" ");

    // Initialize variables for first, middle, and last names
    let firstName = "";
    let middleName = "";
    let lastName = "";

    // Determine the number of words in the name
    const nameLength = nameArray.length;

    // Extract first name
    if (nameLength > 0) {
      firstName = nameArray[0];
    }

    // Extract last name
    if (nameLength > 1) {
      lastName = nameArray[nameLength - 1];
    }

    // Extract middle name (if present)
    if (nameLength > 2) {
      middleName = nameArray.slice(1, nameLength - 1).join(" ");
    }

    const data = {
      user: userId ? userId : "Self",
      id: candidateId,
      firstName,
      middleName: middleName ? middleName : null,
      lastName: lastName ? lastName : null,
      email,
      dateOfBirth: dateOfBirth ? dateOfBirth : null,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills: skills ? skills : null,
      currentCompany: currentCompany ? currentCompany : null,
      currentDesignation: currentDesignation ? currentDesignation : null,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC: currentCTC ? currentCTC : null,
      expectedCTC: expectedCTC ? expectedCTC : null,
      noticePeriod: noticePeriod ? noticePeriod : null,
      lastWorkingDay: lastWorkingDay ? lastWorkingDay : null,
      holdingAnyOffer: holdingAnyOffer ? holdingAnyOffer : null,
      interestedRole: interestedRole ? interestedRole : null,
      languagesKnown: languagesKnown ? languagesKnown : null,
      resume: newPath,
      profile,
      vendorName: vendorName ? vendorName : null,
    };

    const candidate = await Candidate.create(data);

    const recruiter = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $push: { candidates: candidate._id },
      }
    );
    return res.status(200).json({
      success: true,
      message: "Candidate Details Added Successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to add candidate details",
      error: error.message,
    });
  }
};

//* @desc Get All Candidates Data
//* @route GET /api/candidates/allCandidates
//* @Access Private

exports.getAllCandidates = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated.",
      });
    }

    const candidates = await Candidate.find()
      .populate("id")
      .sort({ createdAt: -1 })
      .exec();

    if (!candidates) {
      return res.status(404).json({
        success: false,
        message: "No candidate found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate Details Fetched Successfuly",
      data: candidates,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to find Candidates data",
    });
  }
};

//* @desc Get My Candidates Data
//* @route GET /api/candidates/myCandidates
//* @Access Private

exports.getMyCandidatesData = async (req, res) => {
  try {
    const userId = req.user.id;

    console.log(req.user);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated.",
      });
    }

    console.log(userId);

    const candidates = await Candidate.find({ user: userId })
      .populate("id")
      .sort({ createdAt: -1 })
      .exec();

    if (!candidates) {
      return res.status(404).json({
        success: false,
        message: "No candidate found.",
      });
    }
    if (candidates.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No Candidate Found",
        data: candidates,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Candidate Details Fetched Successfuly",
      data: candidates,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to find Candidates data",
    });
  }
};

//* @desc Get Candidate Details
//* @route GET /api/candidates/candidate/:candidateId
//* @Access Private

exports.getCandidateDetail = async (req, res) => {
  try {
    const candidateId = req.params.candidateId;

    if (!candidateId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a candidate id.",
      });
    }

    const candidate = await Candidate.findOne({ id: candidateId });

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message:
          "Unable to find Candidate Detials - Please Enter a valid Candidate Id",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate Detials Fetched Successfully",
      data: candidate,
    });
  } catch (error) {
    console.error("Error while fetching the client detail: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to get candidate details - Internal Server Error",
      error: error.message,
    });
  }
};

//* @desc Update Candidate Details
//* @route PUT /api/candidates/updateCandidateDetails/:candidateId
//* @Access Private

exports.updateCandidateDetails = async (req, res) => {
  try {
    const candidateId = req.params.candidateId;
    if (!candidateId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a candidate id.",
      });
    }

    const {
      name,
      email,
      dateOfBirth,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills,
      currentCompany,
      currentDesignation,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      noticePeriod,
      lastWorkingDay,
      holdingAnyOffer,
      interestedRole,
      languagesKnown,
      profile,
      vendorName,
    } = req.body;

    console.log(req.body);

    let newPath;

    if (req.files && req.files.length > 0) {
      // Create  a new file path
      const { originalname, path } = req.files[0];
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      newPath = path + "." + ext;
      fs.renameSync(path, newPath);
    }

    const oldCandidate = await Candidate.findOne({ id: candidateId });

    const updatedData = {
      dateOfBirth: dateOfBirth ? dateOfBirth : null,
      email,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      resume: newPath ? newPath : oldCandidate.resume,
      skills: skills ? skills : null,
      currentCompany: currentCompany ? currentCompany : null,
      currentDesignation: currentDesignation ? currentDesignation : null,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC: currentCTC,
      expectedCTC: expectedCTC,
      noticePeriod: noticePeriod,
      lastWorkingDay: lastWorkingDay ? lastWorkingDay : null,
      holdingAnyOffer: holdingAnyOffer ? holdingAnyOffer : null,
      interestedRole: interestedRole ? interestedRole : null,
      languagesKnown: languagesKnown ? languagesKnown : null,
      profile: profile,
      vendorName: vendorName ? vendorName : null,
    };

    const updatedCandidate = await Candidate.findOneAndUpdate(
      { id: candidateId },
      updatedData,
      { new: true }
    );

    console.log(updatedCandidate);

    return res.status(200).json({
      success: true,
      message: "Candidate updated successfully",
      data: updatedCandidate,
    });
  } catch (error) {
    console.error("Error during updating candidates details:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error! Can't update candidate details.",
      error: error.message,
    });
  }
};

//* @desc Apply Candidate
//* @route  POST /api/candidates/addCandidateOpen
//* @access Public

exports.applyCandidate = async (req, res) => {
  try {
    const {
      name,
      email,
      dateOfBirth,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills,
      currentCompany,
      currentDesignation,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      noticePeriod,
      lastWorkingDay,
      holdingAnyOffer,
      interestedRole,
      languagesKnown,
      profile,
      vendorName,
    } = req.body;

    if (
      !name ||
      !email ||
      !gender ||
      !phoneNumber ||
      !highestQualification ||
      !skills ||
      !totalExperience ||
      !relevantExperience ||
      !currentLocation ||
      !preferredLocation ||
      !interestedRole ||
      !profile
    ) {
      return res.status(400).json({
        status: false,
        message: "Please fill all the mandatory details",
      });
    }

    // Create  a new file path
    const { originalname, path } = req.files[0];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    // check if the candidate already exists
    const isCandidateAlreadyExists = await Candidate.findOne({ email });

    if (isCandidateAlreadyExists) {
      return res.status(409).json({
        success: false,
        message: "Candidate already exists!! ",
      });
    }

    let candidateId;
    while (true) {
      candidateId = uid.rnd();
      if (!(await Candidate.findOne({ candidateId }))) {
        break;
      }
    }

    // Separate first, middle and last name
    const nameArray = name.split(" ");

    // Initialize variables for first, middle, and last names
    let firstName = "";
    let middleName = "";
    let lastName = "";

    // Determine the number of words in the name
    const nameLength = nameArray.length;

    // Extract first name
    if (nameLength > 0) {
      firstName = nameArray[0];
    }

    // Extract last name
    if (nameLength > 1) {
      lastName = nameArray[nameLength - 1];
    }

    // Extract middle name (if present)
    if (nameLength > 2) {
      middleName = nameArray.slice(1, nameLength - 1).join(" ");
    }

    const data = {
      id: candidateId,
      firstName,
      middleName: middleName ? middleName : null,
      lastName: lastName ? lastName : null,
      email,
      dateOfBirth: dateOfBirth ? dateOfBirth : null,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills: skills ? skills : null,
      currentCompany: currentCompany ? currentCompany : null,
      currentDesignation: currentDesignation ? currentDesignation : null,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC: currentCTC ? currentCTC : null,
      expectedCTC: expectedCTC ? expectedCTC : null,
      noticePeriod: noticePeriod ? noticePeriod : null,
      lastWorkingDay: lastWorkingDay ? lastWorkingDay : null,
      holdingAnyOffer: holdingAnyOffer ? holdingAnyOffer : null,
      interestedRole: interestedRole ? interestedRole : null,
      languagesKnown: languagesKnown ? languagesKnown : null,
      resume: newPath,
      profile,
      vendorName: vendorName ? vendorName : null,
    };

    const candidate = await Candidate.create(data);

    return res.status(200).json({
      success: true,
      message: "Candidate Details Added Successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to add candidate details",
      error: error.message,
    });
  }
};

//* @desc Get all candidates of a profile
//* @route GET /api/candidates/profile/:profile
//* @access Private

exports.getCandidatesByProfile = async (req, res) => {
  try {
    const { profile } = req.params;

    if (!profile) {
      return res.status(400).json({
        success: false,
        message: "Please provide a profile.",
      });
    }

    const candidates = await Candidate.find({ profile });

    if (!candidates) {
      return res.status(404).json({
        success: false,
        message: "No candidate found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate Details Fetched Successfuly",
      data: candidates,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to find Candidates data",
    });
  }
};

//* @desc Add a candidate by vendor
//* @route POST /api/candidates/vendor/add-candidate
//* @access Private

exports.addCandidateByVendor = async (req, res) => {
  try {
    const userId = req?.user?.id;

    if (!userId) {
      return res
        .status(400)
        .json({ success: true, message: "Please Login to add a candidate" });
    }

    const {
      name,
      email,
      phone,
      alternateNumber,
      dateOfBirth,
      gender,
      qualification,
      skills,
      profile,
      languages,
      experience,
      relevantExperience,
      currentCompany,
      currentDesignation,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      interestedRole,
      noticePeriod,
      isOnNoticePeriod,
      lastWorkingDay,
      isHoldingOffer,
      offeredCTC,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !dateOfBirth ||
      !gender ||
      !qualification ||
      !skills ||
      !profile ||
      !experience ||
      !relevantExperience ||
      !currentCompany ||
      !currentDesignation ||
      !currentLocation ||
      !preferredLocation ||
      !currentCTC ||
      !expectedCTC ||
      !interestedRole ||
      !noticePeriod ||
      !isOnNoticePeriod ||
      !isHoldingOffer
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the mandatory details",
      });
    }

    const { vendorId, vendorName } = req.query;

    // Create  a new file path
    const { originalname, path } = req.files[0];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    // check if the candidate already exists
    const isCandidateAlreadyExists = await Candidate.findOne({
      $or: [
        {
          email: email,
        },
        {
          phoneNumber: phone,
        },
      ],
    });

    if (isCandidateAlreadyExists) {
      return res.status(409).json({
        success: false,
        message: "Candidate already exists!! ",
      });
    }

    let candidateId;
    while (true) {
      candidateId = uid.rnd();
      if (!(await Candidate.findOne({ candidateId }))) {
        break;
      }
    }

    // Separate first, middle and last name
    const nameArray = name.split(" ");

    // Initialize variables for first, middle, and last names
    let firstName = "";
    let middleName = "";
    let lastName = "";

    // Determine the number of words in the name
    const nameLength = nameArray.length;

    // Extract first name
    if (nameLength > 0) {
      firstName = nameArray[0];
    }

    // Extract last name
    if (nameLength > 1) {
      lastName = nameArray[nameLength - 1];
    }

    // Extract middle name (if present)
    if (nameLength > 2) {
      middleName = nameArray.slice(1, nameLength - 1).join(" ");
    }

    const languagesArray = languages
      .split(",")
      .map((language) => language.trim());

    const data = {
      id: candidateId,
      firstName,
      middleName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber: phone,
      alternatePhoneNumber: alternateNumber,
      gender,
      highestQualification: qualification,
      skills,
      profile,
      languages: languagesArray,
      totalExperience: experience,
      relevantExperience,
      currentCompany,
      currentDesignation,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      interestedRole,
      noticePeriod,
      isOnNoticePeriod,
      lastWorkingDay,
      isHoldingOffer,
      offeredCTC,
      resume: newPath,
      vendor: {
        id: vendorId,
        name: vendorName,
      },
    };

    const candidate = await Candidate.create(data);

    const vendor = await Vendor.findOneAndUpdate(
      {
        _id: vendorId,
      },
      {
        $push: { candidates: candidate._id },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Candidate Details Added Successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to add candidate details",
      error: error.message,
    });
  }
};

//* @desc Get all candidates of a vendor
//* @route GET /api/candidates/vendor/get-candidates
//* @access Private

exports.getCandidatesByVendor = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const vendorId = req.query.vendorId;

    if (!vendorId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a vendor id.",
      });
    }

    const candidates = await Candidate.find({ "vendor.id": user });

    return res.status(200).json({
      success: true,
      message: "Candidate Details Fetched Successfully",
      data: candidates,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
