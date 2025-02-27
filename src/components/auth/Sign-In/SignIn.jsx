import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignInWithFacebook,
} from "../../../firebase/auth.js";
import { useAuth } from "../../../context/authContext/authContext.jsx";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await doSignInWithGoogle();
    } catch (error) {
      setError(error.message);
      setIsSigningIn(false);
    }
  };

  const onFacebookSignIn = async () => {
    try {
      setIsSigningIn(true);
      await doSignInWithFacebook();
    } catch (error) {
      setError(error.message);
      setIsSigningIn(false);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/home" replace />}
      <form onSubmit={onSubmit}>
        <h2>Sign In</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isSigningIn}>
          {isSigningIn ? "Signing In..." : "Sign In"}
        </button>
        <button type="button" onClick={onGoogleSignIn} disabled={isSigningIn}>
          {isSigningIn ? "Signing In..." : "Sign In with Google"}
        </button>
        <button type="button" onClick={onFacebookSignIn} disabled={isSigningIn}>
          {isSigningIn ? "Signing In..." : "Sign In with Facebook"}
        </button>
        <Link to="/signUp">Don't have an account? Sign Up</Link>
      </form>
    </>
  );
};

export default SignIn;
