import { Route, Routes } from "react-router";
import Layout from "./components/common/Layout/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Vendors from "./pages/Vendors";
import CreateJob from "./pages/CreateJob";
import JobDetails from "./pages/JobDetails";
import JobApplicationDetails from "./pages/JobApplicationDetails";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import PrivateRoutes from "./components/common/PrivateRoutes";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route
          path="verify/user/:id/verify/:token"
          element={<EmailVerification />}
        />
        <Route
          path=""
          element={
            <PrivateRoutes>
              <Layout />
            </PrivateRoutes>
          }
        >
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="jobs">
              <Route index element={<Jobs />} />
              <Route path="create" element={<CreateJob />} />
              <Route path="job-details">
                <Route path=":jobId">
                  <Route index element={<JobDetails />} />
                  <Route path="application">
                    <Route
                      path=":applicationId"
                      element={<JobApplicationDetails />}
                    />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="vendors">
              <Route index element={<Vendors />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
