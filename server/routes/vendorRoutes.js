const express = require("express");
const {
  addVendor,
  getCompanyVendors,
  getVendors,
  getVendor,
  updateVendor,
} = require("../controllers/Vendor");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/add-vendor", auth, addVendor);

router.get("/get-vendor", auth, getVendor);

router.get("/get-vendors", auth, getVendors);

router.get("/get-company-vendors", auth, getCompanyVendors);

router.put("/update-vendor", auth, updateVendor);

module.exports = router;
