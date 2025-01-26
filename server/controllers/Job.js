const Company = require("../models/Company");
const Candidate = require("../models/Candidate");
const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");
const Vendor = require("../models/Vendor");
const crypto = require("crypto");

//* @desc Create a new job
//* @route POST /api/job/create/company/:companyId
//* @access Private
exports.createJob = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const { companyId } = req.query;

    if (!companyId) {
      return res
        .status(404)
        .json({ success: false, message: "Please provide a valid company Id" });
    }

    const company = await Company.findById(companyId);

    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid company id" });
    }

    const {
      jobTitle,
      country,
      state,
      city,
      description,
      minSalary,
      maxSalary,
      type,
      profile,
      skills,
      vendors,
      experience,
      languages,
    } = req.body;

    let jobId;

    while (true) {
      jobId = crypto.randomBytes(3).toString("hex");
      if (!(await Job.findOne({ jobId }))) {
        break;
      }
    }

    const job = await Job.create({
      title: jobTitle,
      jobId,
      company: {
        name: company.companyName,
        companyID: company.companyID,
        _id: company._id,
      },
      location: {
        country: country,
        state: state,
        city: city,
      },
      description,
      salary: `${minSalary} - ${maxSalary}`,
      type,
      profile,
      skills,
      vendors,
      experience,
      languages,
    });

    const updateCompany = await Company.findByIdAndUpdate(
      companyId,
      { $push: { jobs: job._id } },
      { new: true }
    );

    if (vendors && vendors.length > 0) {
      const updateVendors = await Promise.all(
        vendors.map(async (vendor) => {
          const updateVendor = await Vendor.findByIdAndUpdate(
            vendor,
            { $push: { openedJobs: job._id } },
            { new: true }
          );
        })
      );
    }

    return res.status(200).json({ success: true, message: "Job created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get all jobs
//* @route GET /api/job/getAllJobs
//* @access Private
exports.getAllJobs = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const jobs = await Job.find({
      status: { $ne: "hidden" },
    });

    return res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get job by id
//* @route GET /api/job/get-job-details
//* @access Private

exports.getJobDetails = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const { jobId } = req.query;

    const job = await Job.findOne({
      jobId,
    });

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    return res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log("Error during fetching job details", error);

    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get jobs by company id
//* @route GET /api/job/get-jobs-of-a-company
//* @access Private
exports.getJobsByCompany = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { companyId } = req.query;

    const company = await Company.findById(companyId);

    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }

    const jobs = await Job.find({
      "company._id": companyId,
      status: { $ne: "hidden" },
    });

    return res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Update job by id
//* @route PUT /api/job/updateJob/:jobId
//* @access Private
exports.updateJob = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const { jobId } = req.params;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    const { title, location, description, salary, type, profile, skills } =
      req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      {
        title,
        location,
        description,
        salary,
        type,
        profile,
        skills,
      },
      { new: true }
    );

    return res.status(200).json({ success: true, data: updatedJob });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Delete job by id
//* @route DELETE /api/job/deleteJob/:jobId
//* @access Private
exports.deleteJob = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ succesS: false, message: "Unauthorized" });
    }

    const { jobId } = req.params;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    job.status = "hidden";
    await job.save();

    return res.status(200).json({ success: true, message: "Job deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Close job by id
//* @route PUT /api/job/closeJob/:jobId
//* @access Private
exports.closeJob = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { jobId } = req.params;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    job.status = "closed";
    await job.save();

    return res.status(200).json({ success: true, message: "Job closed" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Apply for job
//* @route POST /api/job/apply
//* @access Private
exports.applyForJob = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { jobId } = req.query;
    const { candidateIds, rounds } = req.body;

    if (!Array.isArray(candidateIds) || candidateIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Candidate IDs must be an array and cannot be empty",
      });
    }

    const job = await Job.findOne({ jobId });

    const jobApplications = await Promise.all(
      candidateIds.map(async (candidateId) => {
        const candidate = await Candidate.findById(candidateId);

        if (!candidate) {
          throw new Error(`Candidate with ID ${candidateId} not found`);
        }

        const jobApplication = await JobApplication.create({
          job: job._id,
          candidate: {
            name:
              candidate.firstName +
              " " +
              `${candidate.middleName ? candidate.middleName + " " : ""}` +
              candidate.lastName,
            id: candidate.id,
            email: candidate.email,
            resume: candidate.resume,
            _id: candidate._id,
          },
          vendor: user,
        });

        // Update the job with the newly created application
        await Job.findByIdAndUpdate(job._id, {
          $push: { applications: jobApplication._id },
        });

        return jobApplication;
      })
    );

    return res.status(200).json({
      success: true,
      message: "Applied for job",
      applications: jobApplications,
    });
  } catch (error) {
    console.error("Error during applying for job", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get all job applications
//* @route GET /api/job/getAllApplications
//* @access Private
exports.getAllApplications = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const applications = await JobApplication.find({
      status: { $ne: "hidden" },
    });

    return res.status(200).json({ success: true, data: applications });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get job application by id
//* @route GET /api/job/get-job-application
//* @access Private
exports.getApplicationById = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { applicationId } = req.query;

    const application = await JobApplication.findById(applicationId);

    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found" });
    }

    return res.status(200).json({ success: true, data: application });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get applications by job id
//* @route GET /api/job/get-applications-by-job
//* @access Private
exports.getApplicationsByJob = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { jobId } = req.query;

    const applications = await JobApplication.find({
      job: jobId,
      status: { $ne: "hidden" },
    });

    return res.status(200).json({ success: true, data: applications });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Update application by id
//* @route PUT /api/job/updateApplication/:applicationId
//* @access Private
exports.updateApplication = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { applicationId } = req.params;

    const application = await JobApplication.findById(applicationId);

    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found" });
    }

    const { rounds } = req.body;

    const updatedApplication = await JobApplication.findByIdAndUpdate(
      applicationId,
      { rounds },
      { new: true }
    );

    return res.status(200).json({ success: true, data: updatedApplication });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Delete application by id
//* @route DELETE /api/job/deleteApplication/:applicationId
//* @access Private
exports.deleteApplication = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { applicationId } = req.params;

    const application = await JobApplication.findById(applicationId);

    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found" });
    }

    application.status = "hidden";

    await application.save();

    return res
      .status(200)
      .json({ success: true, message: "Application deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc GEt JObs by Vendor
//* @route GET /api/job/get-jobs-by-vendor
//* @access Private
exports.getJobsByVendor = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { vendorId } = req.query;

    const vendor = await Vendor.findById(vendorId);

    if (!vendor) {
      return res
        .status(404)
        .json({ success: false, message: "Vendor not found" });
    }

    const jobs = await Job.find({
      vendors: { $in: [vendor._id] },
    });

    return res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* @desc Get applications by vendor
//* @route GET /api/job/get-applications-by-vendor
//* @access Private
exports.getApplicationsByVendor = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { vendorId, jobId } = req.query;

    const vendor = await Vendor.findById(vendorId);

    if (!vendor) {
      return res
        .status(404)
        .json({ success: false, message: "Vendor not found" });
    }

    const applications = await JobApplication.find({
      job: jobId,
      vendor: vendor._id,
    });

    return res.status(200).json({ success: true, data: applications });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
