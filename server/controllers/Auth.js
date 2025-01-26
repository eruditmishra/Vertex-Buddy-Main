const User = require("../models/User");
const { generateToken } = require("../utils/generateToken");
const mailSender = require("../utils/mailSender");
const { validatePassword } = require("../utils/validatePassword");
const bcrypt = require("bcryptjs");
const Token = require("../models/Token");
const verifyEmail = require("../mail/templates/verifyEmail");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const passwordResetEmail = require("../mail/templates/passwordResetEmail");
const Company = require("../models/Company");
const Vendor = require("../models/Vendor");

//* @desc Login User
//* @route POST /api/v1/auth/login
//* @access Public
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    // Find the user with the given email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      // User has not been registered with us
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (!user.emailVerified) {
      let token = await Token.findOne({
        userId: user._id,
      });

      console.log(token);

      if (!token) {
        const token = await Token.create({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        });

        const url = `${process.env.BASE_URL}/verify/user/${user._id}/verify/${token.token}`;

        console.log(url);

        const emailVerificationMail = await mailSender(
          email,
          "Verify Email",
          verifyEmail(url)
        );
        console.log(emailVerificationMail);
      }

      return res.status(400).json({
        success: false,
        message: "Email has been sent to verify your email address.",
      });
    }

    // Generate JWT token and compare the password
    if (await bcrypt.compare(password, user.password)) {
      generateToken(res, user);
      // res.status(200).json({
      //   success: true,
      //   message: "User logged in successfully",
      // });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// * @desc Login with google
// *  @route POST /api/v1/auth/loginWithGoogle
//  * @access Public

exports.loginWithGoogle = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Provide a valid email id",
      });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please Sign Up to continue",
      });
    }

    generateToken(res, user);
  } catch (error) {
    console.error("Error during login with google", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Login Failed",
    });
  }
};

//* @desc Register New Vendor
//* @route POST /api/v1/auth/register
//* @access Public
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // chek if the  user already exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "The user already exists. Please Log in instead.",
      });
    }

    // Checking Password Length
    // if (validatePassword(password)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Choose a stronger password",
    //   });
    // }

    // Separate first, middle and last name
    const nameArray = name.split(" ");

    // Initialize variables for first, middle, and last names
    let firstName = "";
    let middleName = "";
    let lastName = "";

    // Determine the number of words in the name
    const nameLength = nameArray.length;

    // Extract first name
    if (nameLength > 0) {
      firstName = nameArray[0];
    }

    // Extract last name
    if (nameLength > 1) {
      lastName = nameArray[nameLength - 1];
    }

    // Extract middle name (if present)
    if (nameLength > 2) {
      middleName = nameArray.slice(1, nameLength - 1).join(" ");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      middleName,
      email,
      password: hashedPassword,
      accountType: "externalUser",
    });

    const token = await Token.create({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    const url = `${process.env.BASE_URL}/verify/user/${user._id}/verify/${token.token}`;

    console.log("email url", url);

    const verifyEmailMail = await mailSender(
      email,
      "Verify Email",
      verifyEmail(url)
    );

    return res.status(200).json({
      success: true,
      message: "Email has been sent to verify your email address.",
    });

    // return res.status(200).json({
    //   success: true,
    //   message: "User has been registered successfully",
    // });
    // generateToken(res, user._id);
  } catch (error) {
    console.error("Error during registering user", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//* @desc Logout User
//* POST /api/v1/auth/register
//* @access Private
exports.logoutUser = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    success: true,
    messge: "Logged out user",
  });
};

//* @desc Generate Password Reset Mail
//* POST /api/v1/auth/sendPasswordResetMail
//* @access Public
exports.sendPasswordResetMail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "This account does not exist",
      });
    }

    const secret =
      process.env.JWT_SECRET + crypto.randomBytes(32).toString("hex");

    const payload = {
      email: user.email,
      id: user._id,
    };

    const token = await Token.create({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    const link = `${process.env.BASE_URL}/user/forgot-password/${user._id}/${token.token}`;

    try {
      const sendEmail = await mailSender(
        `${email}`,
        "Update Password",
        passwordResetEmail(link)
      );

      return res.status(200).json({
        success: true,
        message: "An email has been sent to your registered email address.",
      });
    } catch (error) {
      console.log("Error sending Email ", error);
      return res.status(500).json({
        success: false,
        error: "Internal Server Error - Failed to Send Email",
      });
    }
  } catch (error) {
    console.error("Error during forgot password: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to Process Request",
      error: error.message,
    });
  }
};

//* @desc Forgot Password
//* POST /api/v1/auth/forgotPassword/:id/:token
//* @access Public
exports.forgotPassword = async (req, res) => {
  try {
    const { id, token } = req.params;

    // check if the id or token doesn't exists
    if (!id || !token) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid URL Parameters Provided! Please provide a valid User ID and Token.",
      });
    }

    // Check if a user exists with this id
    let user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No account found with provided credentials",
      });
    }

    const secret =
      process.env.JWT_SECRET + crypto.randomBytes(32).toString("hex");

    // const payload = jwt.verify(token, secret);

    const tokenExists = await Token.findOne({
      token: token,
    });

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Expired or Invalid Token!",
      });
    }

    const { password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log("Error during updating the password: ", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error! - Unable to update Password",
    });
  }
};

//* @desc Register new Google User
//* @route POST /api/v1/auth/registerWithGoogle
//* @access public
exports.registerWithGoogle = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Separate first, middle and last name
    const nameArray = name.split(" ");

    // Initialize variables for first, middle, and last names
    let firstName = "";
    let middleName = "";
    let lastName = "";

    // Determine the number of words in the name
    const nameLength = nameArray.length;

    // Extract first name
    if (nameLength > 0) {
      firstName = nameArray[0];
    }

    // Extract last name
    if (nameLength > 1) {
      lastName = nameArray[nameLength - 1];
    }

    // Extract middle name (if present)
    if (nameLength > 2) {
      middleName = nameArray.slice(1, nameLength - 1).join(" ");
    }

    const user = await User.create({
      firstName,
      middleName: middleName ? middleName : "",
      lastName,
      email,
      accountType: "externalUser",
      emailVerified: true,
    });

    generateToken(res, user);
  } catch (error) {
    console.error("Error during registering with google", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Unable to register with google.",
    });
  }
};

//* @desc Add Recruiter
//* @route POST /api/v1/auth/AddRecruiter
//* @access Private
exports.addRecruiter = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "You are not logged in",
      });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        succesS: false,
        message: "All fields are mandatory",
      });
    }

    // Check if email already exists
    const existingRecruiter = await User.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({
        succesS: false,
        message: "Email already exists",
      });
    }

    // Separate first, middle and last name
    const nameArray = name.split(" ");

    // Initialize variables for first, middle, and last names
    let firstName = "";
    let middleName = "";
    let lastName = "";

    // Determine the number of words in the name
    const nameLength = nameArray.length;

    // Extract first name
    if (nameLength > 0) {
      firstName = nameArray[0];
    }

    // Extract last name
    if (nameLength > 1) {
      lastName = nameArray[nameLength - 1];
    }

    // Extract middle name (if present)
    if (nameLength > 2) {
      middleName = nameArray.slice(1, nameLength - 1).join(" ");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      middleName,
      email,
      password: hashedPassword,
      accountType: "internalUser",
      emailVerified: true,
    });

    res.status(201).json({
      success: true,
      message: "Recruiter registered successfully",
    });
  } catch (error) {
    console.error("Error registering recruiter:", error);
    res.status(500).json({
      succesS: false,
      error: "Internal server error",
    });
  }
};

//* @desc Verify User TOken
//* @route /api/v1/auth/:id/verify/:token
//* @access public
exports.verifyEmail = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("Params", req.params);
    const token = req.params.token;

    console.log("User Id", userId);
    console.log("Token", token);

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid User",
      });
    }

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token",
      });
    }

    const user = await User.findOne({
      _id: userId,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid link",
      });
    }

    const tokenValid = await Token.findOne({
      userId: user._id,
      token: token,
    });

    if (!tokenValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid Link",
      });
    }

    await User.updateOne(
      {
        _id: user._id,
      },
      { emailVerified: true }
    );

    return res.status(200).json({
      success: true,
      message: "Email verified Successfully",
    });
  } catch (error) {
    console.error("Error during verifying email", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Email Verification Failed",
    });
  }
};

//* @desc Register Company
//* @route POST /api/v1/auth/registerCompany
//* @access Public
exports.registerCompany = async (req, res) => {
  try {
    const { name, companyName, email, phone, password } = req.body;

    if (!name || !companyName || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const existingCompany = await Company.findOne({
      email: email,
    });

    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: "Company already exists",
      });
    }

    const companyId = crypto.randomBytes(3).toString("hex");

    const hashedPassword = await bcrypt.hash(password, 10);

    const company = await Company.create({
      name,
      companyName,
      email,
      phone,
      password: hashedPassword,
      companyID: companyId,
    });

    const token = await Token.create({
      userId: company._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    const url = `${process.env.COMPANY_BASE_URL}/verify/user/${company._id}/verify/${token.token}`;

    console.log("email url", url);

    const verifyEmailMail = await mailSender(
      email,
      "Verify Email",
      verifyEmail(url)
    );

    return res.status(201).json({
      success: true,
      message: "Company registered successfully",
    });
  } catch (error) {
    console.error("Error registering company:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//* @desc Verify Company Email
//* @route /api/v1/auth/company/:id/verify/:token
//* @access public
exports.verifyCompanyEmail = async (req, res) => {
  try {
    const companyId = req.params.id;
    const token = req.params.token;
    console.log("Params", req.params);

    if (!companyId) {
      return res.status(400).json({
        success: false,
        message: "Invalid Company",
      });
    }

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token",
      });
    }

    const company = await Company.findById(companyId);

    if (!company) {
      console.log("Invalid company");

      return res.status(400).json({
        success: false,
        message: "Invalid link",
      });
    }

    const tokenValid = await Token.findOne({
      userId: company._id,
      token: token,
    });

    if (!tokenValid) {
      console.log("INvalid Token");
      return res.status(400).json({
        success: false,
        message: "Invalid Link",
      });
    }

    await Company.updateOne(
      {
        _id: company._id,
      },
      { emailVerified: true }
    );

    return res.status(200).json({
      success: true,
      message: "Email verified Successfully",
    });
  } catch (error) {
    console.error("Error during verifying email", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error - Email Verification Failed",
    });
  }
};

// @desc Login Company
// @route POST /api/v1/auth/company/login
// @access Public

exports.loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    const user = await Company.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (!user.emailVerified) {
      let token = await Token.findOne({
        userId: user._id,
      });

      console.log(token);

      if (!token) {
        const token = await Token.create({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        });

        const url = `${process.env.BASE_URL}/verify/company/${user._id}/verify/${token.token}`;

        console.log(url);

        const emailVerificationMail = await mailSender(
          email,
          "Verify Email",
          verifyEmail(url)
        );
        console.log(emailVerificationMail);
      }

      return res.status(400).json({
        success: false,
        message: "Email has been sent to verify your email address.",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      generateToken(res, user);
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// @desc Login Vendor
// @route POST /api/v1/auth/vendor/login
// @access Public

exports.loginVendor = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    const user = await Vendor.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      generateToken(res, user);
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
