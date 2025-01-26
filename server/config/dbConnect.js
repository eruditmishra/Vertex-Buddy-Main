const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection successful");
    })
    .catch((error) => {
      console.log("Error connecting to DB", error);
      process.exit(1);
    });
};
