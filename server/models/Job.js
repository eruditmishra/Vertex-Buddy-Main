const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      companyID: {
        type: String,
        required: true,
      },
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
      },
    },
    location: {
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "Full Time",
        "Part Time",
        "Contract",
        "Internship",
        "Commission Only",
        "Temporary",
      ],
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
      },
    ],
    applicants: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "JobApplication",
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "closed", "hidden"],
      default: "active",
    },
    certificate: {
      type: String,
    },
    experience: {
      type: String,
    },
    languages: [
      {
        type: String,
      },
    ],
    vendors: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
