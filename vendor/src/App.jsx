import { Route, Routes } from "react-router";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import AddCandidates from "./pages/AddCandidates";
import CandidateDetails from "./pages/CandidateDetails";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import SelectCandidates from "./pages/SelectCandidates";
import JobApplicationDetails from "./pages/JobApplicationDetails";
import PrivateRoutes from "./components/common/PrivateRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Layout />
            </PrivateRoutes>
          }
        >
          <Route index element={<Home />} />
          <Route path="jobs">
            <Route index element={<Jobs />} />
            <Route path=":id">
              <Route index element={<JobDetails />} />
              <Route path="application">
                <Route
                  path=":applicationId"
                  element={<JobApplicationDetails />}
                />
              </Route>
            </Route>
            <Route path="select-candidates" element={<SelectCandidates />} />
          </Route>
          <Route path="candidates">
            <Route index element={<Candidates />} />
            <Route path="add-candidate" element={<AddCandidates />} />
            <Route path=":id" element={<CandidateDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
