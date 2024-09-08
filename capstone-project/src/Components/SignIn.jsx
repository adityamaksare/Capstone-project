import React from "react";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="login-form">
      <div className="row login-sides m-0">
        <div className="col p-0">
          <div className="card-content d-flex flex-column align-items-center login-form-leftside">
            <h3>Welcome Back!</h3>
            <p>
              we are so excited to have you here. If you haven’t create a
              account already, create an account to get access to exclusive
              offers, rewards and discounts.
            </p>
            <button>Don't have a account? Sign Up</button>
          </div>
        </div>
        <div className="col p-0">
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
            <h2>Sign In</h2>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
