const express = require("express");
const { auth } = require("../middlewares/auth");
const {
  getAllCompanies,
  getCompanyDetails,
} = require("../controllers/Company");
const router = express.Router();

router.get("/get-all-companies", auth, getAllCompanies);

router.get("/get-company-details", auth, getCompanyDetails);

module.exports = router;
