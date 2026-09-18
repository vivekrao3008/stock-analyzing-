import React from "react";

function Signup() {
  return (
    <div className="container text-center mt-5">
      <h1>Dashboard Signup</h1>
      <p>Create your dashboard account</p>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control mb-3"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;