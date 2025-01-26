const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
  registerWithGoogle,
  loginWithGoogle,
  addRecruiter,
  verifyEmail,
  sendPasswordResetMail,
  forgotPassword,
  registerCompany,
  verifyCompanyEmail,
  loginCompany,
  loginVendor,
} = require("../controllers/Auth");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/logout", auth, logoutUser);

router.post("/registerWithGoogle", registerWithGoogle);

router.post("/loginWithGoogle", loginWithGoogle);

router.post("/addRecruiter", auth, addRecruiter);

router.get("/:id/verify/:token", verifyEmail);

router.post("/sendResetPasswordEmail", sendPasswordResetMail);

router.put("/forgotPassword/:id/:token", forgotPassword);

router.post("/company/register-company", registerCompany);

router.post("/company/verify-email/:id/verify/:token", verifyCompanyEmail);

router.post("/company/login", loginCompany);

router.post("/vendor/login", loginVendor);

module.exports = router;
