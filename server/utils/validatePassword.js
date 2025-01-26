const passwordValidator = require("password-validator");

exports.validatePassword = (password) => {
  const schema = new passwordValidator();
  schema
    .is()
    .min(8)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits()
    .has()
    .symbols();

  return schema.validate(password);
};
