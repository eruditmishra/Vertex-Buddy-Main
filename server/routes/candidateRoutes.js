const express = require("express");
const {
  addCandidate,
  getAllCandidates,
  getCandidateDetail,
  updateCandidateDetails,
  getMyCandidatesData,
  applyCandidate,
  addCandidateByVendor,
  getCandidatesByVendor,
} = require("../controllers/Candidates");
const { auth } = require("../middlewares/auth");
const router = express.Router();
const multer = require("multer");

const uploadMiddleware = multer({ dest: "./resumes" });

router.post("/addCandidate", auth, uploadMiddleware.any(), addCandidate);

router.get("/getAllCandidates", auth, getAllCandidates);

router.get("/getCandidateDetails/:candidateId", auth, getCandidateDetail);

router.put(
  "/updateCandidateDetails/:candidateId",
  auth,
  uploadMiddleware.any(),
  updateCandidateDetails
);

router.get("/myCandidates", auth, getMyCandidatesData);

router.post("/addCandidateOpen", uploadMiddleware.any(), applyCandidate);

router.post(
  "/add-candidate-by-vendor",
  auth,
  uploadMiddleware.any(),
  addCandidateByVendor
);

router.get("/vendor/get-candidates", auth, getCandidatesByVendor);

module.exports = router;
