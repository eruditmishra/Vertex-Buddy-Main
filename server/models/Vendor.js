const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
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
    openedJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    activeJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
