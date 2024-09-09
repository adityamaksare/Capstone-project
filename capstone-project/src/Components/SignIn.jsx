import React, { useState } from "react";

export const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    // Clear the error message after validation
    setErrorMessage("");

    // Normally here, you'd make an API call for login
    console.log("Login Successful", { email, password });
    alert("Login Successful");
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
            <h3 style={{ fontWeight: "300" }}>Welcome back!</h3>
            <p>
              We are so happy to have you here. It’s great to see you again. We
              hope you had safe and enjoyable time away.
            </p>
            <button
              onClick={toggleForm}
              style={{ backgroundColor: "#A4D4C4", fontSize: "14px" }}
            >
              Don't have an account? Sign up.
            </button>
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-center bg-white p-5">
            <h3 className="mb-3">Sign In</h3>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div className="mb-3">
                <input
                  placeholder="username"
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="password"
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#495E57",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#A4D4C4",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
