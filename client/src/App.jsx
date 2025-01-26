import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/commom/layout/Layout";
import Home from "./pages/Home";
import AddCandidate from "./pages/AddCandidate";
import Candidates from "./pages/common/Candidates";
import AdminHome from "./pages/admin/AdminHome";
import AddRecruiter from "./pages/admin/AddRecruiter";
import AllRecruiters from "./pages/admin/AllRecruiters";
import AdminLogin from "./pages/admin/AdminLogin";
import AllCandidates from "./pages/admin/AllCandidates";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import RecruiterProtectedRoute from "./components/RecruiterProtectedRoute";
import VerifyEmail from "./pages/VerifyEmail";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordEmail from "./pages/ForgotPasswordEmail";
import UpdatePassword from "./pages/UpdatePassword";
import ApplyForm from "./pages/ApplyForm";
import CandidateDetail from "./pages/common/CandidateDetail";
import EditCandidate from "./pages/common/EditCandidate";
import AllCompanies from "./pages/admin/AllCompanies";
import AllVendors from "./pages/admin/AllVendors";
import CompanyDetails from "./pages/admin/CompanyDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/verify-email" element={<VerifyEmail />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/user/forgot-password/email-sent"
          element={<ForgotPasswordEmail />}
        />
        <Route
          path="verify/user/:id/verify/:token"
          element={<EmailVerification />}
        />
        <Route
          path="/user/forgot-password/:userId/:token"
          element={<UpdatePassword />}
        />

        <Route path="/candidate/apply" element={<ApplyForm />} />

        <Route path="/" element={<Navigate to="/user" replace />} />
        <Route
          path="/user"
          element={
            <RecruiterProtectedRoute>
              <Layout />
            </RecruiterProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="candidates">
            <Route path="add-candidate" element={<AddCandidate />} />
            <Route path="all-candidates" element={<Candidates />} />
            <Route
              path="candidate/:candidateId"
              element={<CandidateDetail />}
            />
            <Route
              path="edit-candidate/:candidateId"
              element={<EditCandidate />}
            />
          </Route>
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <Layout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="recruiters">
            <Route path="all-recruiters" element={<AllRecruiters />} />
            <Route path="add-recruiter" element={<AddRecruiter />} />
          </Route>
          <Route path="candidates">
            <Route path="all-candidates" element={<AllCandidates />} />
            <Route
              path="candidate/:candidateId"
              element={<CandidateDetail />}
            />
            <Route path="add-candidate" element={<AddCandidate />} />
            <Route
              path="edit-candidate/:candidateId"
              element={<EditCandidate />}
            />
          </Route>
          <Route path="companies">
            <Route path="all-companies" element={<AllCompanies />} />
            <Route path=":companyId" element={<CompanyDetails />} />
          </Route>
          <Route path="vendors">
            <Route path="all-vendors" element={<AllVendors />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
