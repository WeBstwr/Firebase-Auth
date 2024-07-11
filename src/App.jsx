import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext/authContext";
import Header from "./components/Header/Header";
import SignUp from "./components/auth/Sign-Up/SignUp";
import SignIn from "./components/auth/Sign-In/SignIn";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
