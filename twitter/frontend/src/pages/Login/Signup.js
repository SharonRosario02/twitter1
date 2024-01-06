import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import twitterImage from "../../assets/image/twitter.jpeg";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

import "./Login.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  // -------------------------------------google signup code-----------------------------------------------

  const handleGoogleSignIn = () => {
      signInWithGoogle();
  };

  // ------------------------------------------------------------------------------------

  if (googleUser) {
      console.log("from singup page: ", googleUser);
      navigate('/')
    }
    
    if(user){
        console.log("from singup page: ", user);
  }

  if (error) {
    console.log(error.message);
  }

  if (loading) {
    console.log("loadinggg");
  }

  return (
    <div className="login-container">
      <div className="image-container">
        <img className="image" src={twitterImage} alt="" />
      </div>
      <div className="form-container">
        <div className="form-box">
          <TwitterIcon className="Twittericon" style={{ color: "skyblue" }} />
          <h2 className="heading">Hapenning now</h2>
          <h3 className="heading1"> Join Twitter today </h3>
          <form onSubmit={handleSubmit}>
            <input
              className="display-name"
              style={{ backgroudColor: "red" }}
              type="text"
              placeholder="@username "
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="display-name"
              style={{ backgroudColor: "red" }}
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="btn-login">
              <button type="submit" className="btn">
                {" "}
                Signup{" "}
              </button>
            </div>
          </form>

          <hr />
          <div className="google-button">
            <GoogleButton
              className="g-btn"
              type="light"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div>
            Already have an account?
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "skyblue",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
