const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gstNumber: {
      type: String,
    },
    location: {
      type: String,
    },
    address: {
      addressLine1: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      zip: {
        type: String,
      },
    },
    teamSize: {
      type: Number,
    },
    industry: {
      type: String,
    },
    foundedYear: {
      type: Number,
    },
    description: {
      type: String,
    },
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    vendors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    emailVerified: {
      type: Boolean,
      default: false,
    },
    companyID: {
      type: String,
      required: true,
    },
    socialURLs: {
      linkedin: {
        type: String,
      },
      facebook: {
        type: String,
      },
      twitter: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
    password: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
