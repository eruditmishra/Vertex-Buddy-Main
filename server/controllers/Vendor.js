const crypto = require("crypto");
const Vendor = require("../models/Vendor");
const User = require("../models/User");
const Company = require("../models/Company");
const bcrypt = require("bcryptjs");

//* @desc Add a vendor
//* @route POST /api/v1/vendors/add-vendor
//* @access Private

exports.addVendor = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }

    const user = await Company.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    let vendorId;

    while (true) {
      vendorId = crypto.randomBytes(3).toString("hex");
      if (!(await Vendor.findOne({ id: vendorId }))) {
        break;
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const vendor = await Vendor.create({
      name,
      email,
      password: hashedPassword,
      id: vendorId,
      company: {
        _id: userId,
        name: user.companyName,
        companyID: user.companyID,
      },
    });

    user.vendors.push(vendor._id);

    await user.save();

    return res.status(200).json({
      success: true,
      data: vendor,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//* @desc Get all vendors
//* @route GET /api/v1/vendors/get-vendors
//* @access Private

exports.getVendors = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }

    const vendors = await Vendor.find({});

    return res.status(200).json({
      success: true,
      data: vendors,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//* @desc Get Vendors of a company
//* @route GET /api/v1/vendors/get-company-vendors
//* @access Private

exports.getCompanyVendors = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }

    const { companyId } = req.query;

    const company = await Company.findById(companyId);

    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }

    const vendors = await Vendor.find({
      "company._id": companyId,
    });

    return res.status(200).json({
      success: true,
      data: vendors,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//* @desc Get a vendor
//* @route GET /api/v1/vendors/get-vendor/:id
//* @access Private

exports.getVendor = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }

    const vendorId = req.params.id;

    const vendor = await Vendor.findById(vendorId);

    return res.status(200).json({
      success: true,
      data: vendor,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//  @desc Update a vendor
//  @route PUT /api/v1/vendors/update-vendor/:id
//  @access Private

exports.updateVendor = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }

    const vendorId = req.params.id;

    const vendor = await Vendor.findById(vendorId);

    if (!vendor) {
      return res
        .status(404)
        .json({ success: false, message: "Vendor not found" });
    }

    const { name, email, phone } = req.body;

    if (name) {
      vendor.name = name;
    }

    if (email) {
      vendor.email = email;
    }

    if (phone) {
      vendor.phone = phone;
    }

    await vendor.save();

    return res.status(200).json({
      success: true,
      data: vendor,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
