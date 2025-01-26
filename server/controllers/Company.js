const Company = require("../models/Company");
const mongoose = require("mongoose");

//* @desc Complete company profile
//* @route POST /api/company/complete-profile/:companyId
//* @access Private
exports.completeProfile = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const { companyId } = req.params;
    const {
      website,
      gstNumber,
      location,
      addressLine1,
      city,
      state,
      country,
      zip,
      teamSize,
      industry,
      foundedYear,
      description,
      socialURLs,
    } = req.body;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    company.website = website;
    company.gstNumber = gstNumber;
    company.location = location;
    company.address = {
      addressLine1,
      city,
      state,
      country,
      zip,
    };
    company.teamSize = teamSize;
    company.industry = industry;
    company.foundedYear = foundedYear;
    company.description = description;
    company.socialURLs = socialURLs;

    await company.save();

    // TODO - Send email  for company profile completion

    return res
      .status(200)
      .json({ success: true, message: "Company profile updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//* @desc Get all companies
//* @route GET /api/company/allCompanies
//* @access Private
exports.getAllCompanies = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const companies = await Company.find();

    return res.status(200).json({ success: true, companies });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//* @desc Get company by id
//* @route GET /api/company/:companyId
//* @access Private
exports.getCompanyDetails = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const { companyId } = req.query;

    let company;

    // Look for company by id or companyID

    if (mongoose.Types.ObjectId.isValid(companyId)) {
      company = await Company.findById(companyId);
    } else {
      company = await Company.findOne({ companyID: companyId });
    }

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    return res.status(200).json({ success: true, company });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
