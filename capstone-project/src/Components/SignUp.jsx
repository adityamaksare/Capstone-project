import React, { useState } from "react";

export const SignUp = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert("Sign Up Successful!");
    console.log("Sign Up Data:", { username, email, password });
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center my-lg-5 my-md-4">
      <div
        className="shadow-lg"
        style={{ maxWidth: "742px", overflow: "hidden", borderRadius: "15px" }}
      >
        <div className="row g-0">
          <div
            className=" col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-center text-white"
            style={{ backgroundColor: "#495E57", padding: "120px 20px" }}
          >
            <h3 style={{ fontWeight: "300" }}>Welcome!</h3>
            <p>
              We're happy to have you here. Sign up to start your journey with
              us.
            </p>
            <button
              onClick={toggleForm}
              style={{ backgroundColor: "#A4D4C4", fontSize: "14px" }}
            >
              Already have an account? Sign in.
            </button>
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-center bg-white p-5">
            <h3 className="mb-3">Sign Up</h3>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div className="mb-3">
                <input
                  placeholder="set username"
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  placeholder="enter email"
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  placeholder="set password"
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  placeholder="confirm password"
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#495E57",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#A4D4C4",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
