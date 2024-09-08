import React from "react";
import SignIn from "../Components/SignIn";
import SignUpForm from "../Components/SignUp";

export const LoginPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default LoginPage;
