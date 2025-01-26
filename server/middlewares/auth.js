const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv");

// auth
exports.auth = async (req, res, next) => {
  try {
    // Grab token from the request body/ cookies/ header
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    //   Check if the token is missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "TOken is missing",
      });
    }

    //verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (err) {
      //verification - issue
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};

// Admin
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to perform this action.",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role can not be verified, please try again later",
      error: error.message,
    });
  }
};

// Internal User
exports.isInternalUser = async (req, res, next) => {
  try {
    if (req.user.accountType !== "internalUser") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to perform this action",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role can not be verified, please try again later",
      error: error.message,
    });
  }
};
