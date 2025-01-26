const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const adminRoutes = require("./routes/adminRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");
const contactRoutes = require("./routes/contactRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const jobRoutes = require("./routes/jobRoutes");
const companyRoutes = require("./routes/companyRoutes");

dotenv.config();

dbConnect();
const PORT = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

// Enable CORS
const allowedOrigins = [
  "http://localhost:5173", // development
  "http://localhost:5174", // development
  "http://localhost:5175", // development
  "http://localhost:3000", // development
  "https://vertexbuddy.com",
  "https://www.vertexbuddy.com",
  "https://recruiter.vertexbuddy.com",
  "https://admin.vertexbuddy.com",
  "https://vendor.vertexbuddy.com",
];

// Configure CORS with options
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the request origin is in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Enable credentials (e.g., cookies, authorization headers)
};

// Use the cors middleware with the configured options
app.use(cors(corsOptions));

app.use("/resumes", express.static(__dirname + "/resumes"));
//* ------------------------------------ ROUTES ----------------------------------

app.use("/api/v1/admin/auth", adminRoutes);
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/candidates", candidateRoutes);
app.use("/api/v1/recruiter", recruiterRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/vendors", vendorRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/company", companyRoutes);

app.get("/", (req, res) => {
  return res.json({
    suuces: true,
    message: "Your server is running",
  });
});

app.listen(PORT, () => console.log(`App is listening to ${PORT}`));
