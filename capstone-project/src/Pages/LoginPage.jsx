import React, { useState } from "react";
import SignIn from "../Components/SignIn";
import { SignUp } from "../Components/SignUp";

export const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      {isSignIn ? (
        <SignIn toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default LoginPage;
