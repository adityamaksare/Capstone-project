import React, { useState } from "react";

function SignUpForm() {
  // State to manage form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      // Submit form data (you can replace this with your own logic)
      console.log("Sign Up Data:", { username, email, password });
      alert("Sign Up Successful!");
    } else {
      alert("Passwords don't match!");
    }
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
            className=" d-flex flex-column align-items-center "
            onSubmit={handleSubmit}
          >
            <h2>Sign Up</h2>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
