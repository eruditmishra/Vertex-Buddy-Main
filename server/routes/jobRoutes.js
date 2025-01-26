const express = require("express");
const {
  createJob,
  getJobsByCompany,
  getJobDetails,
  getJobsByVendor,
  applyForJob,
  getApplicationsByVendor,
  getApplicationsByJob,
  getApplicationById,
} = require("../controllers/Job");
const router = express.Router();
const { auth } = require("../middlewares/auth");

// Create a job post
router.post("/create-new-job", auth, createJob);

router.get("/get-jobs-of-a-company", auth, getJobsByCompany);

router.get("/get-job-details", auth, getJobDetails);

router.get("/get-jobs-by-vendor", auth, getJobsByVendor);

router.post("/apply", auth, applyForJob);

router.get("/get-applications-by-vendor", auth, getApplicationsByVendor);

router.get("/get-applications-by-job", auth, getApplicationsByJob);

router.get("/get-job-application", auth, getApplicationById);

module.exports = router;
