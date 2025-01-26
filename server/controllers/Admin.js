const express = require("express");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

exports.registerAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Admin.create({ userName, password: hashedPassword });

    return res.status(200).json({
      success: true,
      message: "Admin Register Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error -  Unable to create Admin",
    });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory" });
    }

    const userExists = await Admin.findOne({ userName });

    if (!userExists) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, userExists.password);

    if (!isValidPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Credentials" });
    }

    generateToken(res, userExists);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error -  Unable to Login Admin",
    });
  }
};
