// import FacebookLogin from "@greatsumini/react-facebook-login";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../../../services/operations/authAPI";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import { useLinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
// import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

const SocialLoginContainer = () => {
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

  const loginWithGoogleHandler = (response) => {
    dispatch(loginWithGoogle(response?.email, navigate));
  };

  return (
    <div className="flex justify-between gap-4">
      {/* <FacebookLogin
        appId="1088597931155576"
        style={{
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "4px 12px",
          border: "none",
          borderRadius: "4px",
        }}
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
      /> */}
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          loginWithGoogleHandler(jwtDecode(credentialResponse?.credential));
          // console.log(credentialResponse);
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

export default SocialLoginContainer;
