const express = require("express");
const router = express.Router();
const {
  getAllRecruiters,
  deleteRecruiter,
} = require("../controllers/Recruiter");
const { auth, isAdmin } = require("../middlewares/auth");

// router.post("/addRecruiter", auth, addRecruiter);

router.get("/getAllRecruiters", auth, getAllRecruiters);

router.delete("/deleteRecruiter/:id", auth, isAdmin, deleteRecruiter);

module.exports = router;
