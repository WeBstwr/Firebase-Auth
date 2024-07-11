import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";
import { doSignOut } from "../../firebase/auth.js";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className="nav-header">
      {userLoggedIn ? (
        <button
          onClick={() => {
            doSignOut().then(() => {
              navigate("/signIn");
            });
          }}
        >
          Sign Out
        </button>
      ) : (
        <>
          <Link to="/signIn">Sign In</Link>
          <Link to="/signUp">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
