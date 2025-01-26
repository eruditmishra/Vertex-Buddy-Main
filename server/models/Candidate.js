const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
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
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    alternatePhoneNumber: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    highestQualification: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
    },
    currentCompany: {
      type: String,
    },
    profile: {
      type: String,
    },
    currentDesignation: {
      type: String,
    },
    totalExperience: {
      type: String,
      required: true,
    },
    relevantExperience: {
      type: String,
      required: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
    preferredLocation: [
      {
        type: String,
        required: true,
      },
    ],
    currentCTC: {
      type: String,
    },
    expectedCTC: {
      type: String,
    },
    noticePeriod: {
      type: String,
    },
    lastWorkingDay: {
      type: String,
    },
    holdingAnyOffer: {
      type: String,
    },
    interestedRole: {
      type: String,
      enum: ["Permanent", "Contractual", "Both"],
      required: true,
    },
    vendorName: {
      type: String,
    },
    languagesKnown: [
      {
        type: String,
      },
    ],
    vendor: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      name: {
        type: String,
      },
    },
    isHoldingOffer: {
      type: Boolean,
    },
    offeredCTC: {
      type: String,
    },
    isOnNoticePeriod: {
      type: Boolean,
    },
    status: {
      type: String,
      enum: ["Pending", "Shortlisted", "Rejected", "Selected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);
