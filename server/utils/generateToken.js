const jwt = require("jsonwebtoken");

exports.generateToken = (res, user) => {
  const token = jwt.sign(
    {
      email: user.email || user.userName,
      id: user._id,
      accountType: user.accountType,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  // Set cookie for token and return success response
  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie("token", token, options).status(200).json({
    success: true,
    token,
    user,
    message: `Success`,
  });
};
