const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
    candidate: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      resume: {
        type: String,
        required: true,
      },
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
    },
    status: {
      type: String,
      enum: [
        "applied",
        "shortlisted",
        "rejected",
        "hired",
        "hidden",
        "withdrawn",
      ],
      default: "applied",
    },
    rounds: [
      {
        name: {
          type: String,
        },
        status: {
          type: String,
          enum: ["pending", "completed", "rejected"],
          default: "pending",
        },
        heldOn: {
          type: Date,
        },
        comments: {
          type: String,
        },
      },
    ],
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JobApplication", jobApplicationSchema);
