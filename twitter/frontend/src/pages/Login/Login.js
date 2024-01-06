import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import twitterImage from "../../assets/image/twitter.jpeg";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState('')
    // const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  // -------------------------------------google signup code-----------------------------------------------
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleGoogleSignIn = async (e) => {
      signInWithGoogle();
  };

  // ------------------------------------------------------------------------------------

  if (user || googleUser) {
    console.log("from login page: ", user);
    console.log("from login page: ", googleUser);
    // navigate('/') // only thing changed other then the vedio's content
    return <Navigate to="/" />;
  }

  if (error) {
    console.log(error.message);
  }

  if (loading) {
    console.log("loadinggg");
  }



//   return (
//     <>
//     <div>
//       <div className="login-container">
//         <div className="image-container">
//         <img className="image" src={twitterImage} alt="twitterImage" />
//       </div>

//       <div className="form-container">
//         <div className="form-box">
//           <TwitterIcon style={{ color: "skyblue" }} />
//           <h2 className="heading">Hapenning now</h2>
          
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               className="email"
//               placeholder="Email address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               className="password"
//               placeholder="password"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="btn-login">
//               <button type="submit" className="btn">
//                 Login
//               </button>
//             </div>
//           </form>

//           <hr />
//           <div>
//             <GoogleButton
//               className="g-btn"
//               type="light"
//               onClick={handleGoogleSignIn}
//             />
//           </div>
//         </div>

//         <div>
//           Don't have an account?
//           <Link
//             to="/signup"
//             style={{
//               textDecoration: "none",
//               color: "skyblue",
//               fontWeight: "600",
//               marginLeft: "5px",
//             }}
//           >
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img className=" image" src={twitterImage} alt="twitterImage" />
        </div>

        <div className="form-container">
          <div className="form-box">
            <TwitterIcon style={{ color: "skyblue" }} />
            <h2 className="heading">Happening now</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="btn-login">
                <button type="submit" className="btn">
                  Log In
                </button>
              </div>
            </form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn"
                type="light"
                onClick={handleGoogleSignIn}
              />
            </div>
          </div>
          <div>
            Don't have an account?
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "var(--twitter-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
