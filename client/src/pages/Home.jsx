import { Link } from "react-router-dom";
import welcome from "../assets/welcome.png";
import CTAButton from "../components/commom/CTAButton";
import { Toaster } from "react-hot-toast";
const Home = () => {
  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center min-h-[90vh]">
      <div className="w-[45%]">
        <img src={welcome} alt="Welcome" />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[1.5rem] font-bold text-offset-black">
          Welcome to Vertex Buddy!
        </h1>
        <p className="opacity-60 font-medium">Managing Candidates made easy.</p>
      </div>
      <div className="flex justify-between gap-6">
        <Link to="/user/candidates/add-candidate">
          <CTAButton title={"Add Candidate"} />
        </Link>
        <Link to={"/user/candidates/all-candidates"}>
          <CTAButton title={"View Candidates"} />
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
