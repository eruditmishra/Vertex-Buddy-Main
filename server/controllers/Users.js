const User = require("../models/User");

//* @desc Get All Users
//* @route GET /ap/v1/users/getAllUsers
//* @access Private Admin

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find().populate("_id");

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error while fetching all users list");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to fetch all users list",
    });
  }
};
