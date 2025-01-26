import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupWithGoogle } from "../../../services/operations/authAPI";
import { jwtDecode } from "jwt-decode";
// import { useLinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
// import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

const SocialRegister = () => {
  // const { linkedInLogin } = useLinkedIn({
  //   clientId: "86vhj2q7ukf83q",
  //   redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
  //   onSuccess: (code) => {
  //     console.log(code);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signupWithGoogleHandler = (credentialResponse) => {
    // console.log("Inside signup with google");
    dispatch(signupWithGoogle(credentialResponse, navigate));
  };

  return (
    <div className="flex justify-between gap-4">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          // console.log(jwtDecode(credentialResponse?.credential));
          signupWithGoogleHandler(jwtDecode(credentialResponse?.credential));
        }}
        onError={() => {
          // console.log("Login Failed");
        }}
        useOneTap
      />
      {/* <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Sign in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      /> */}
    </div>
  );
};

export default SocialRegister;
