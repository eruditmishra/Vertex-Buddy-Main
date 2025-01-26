const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    accountType: {
      type: String,
      enum: ["admin", "internalUser", "externalUser"],
    },
    candidates: [
      {
        name: {
          type: String,
        },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Candidate",
        },
      },
    ],
    emailVerified: {
      type: Boolean,
      default: false,
    },
    company: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      name: {
        type: String,
      },
      companyID: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
