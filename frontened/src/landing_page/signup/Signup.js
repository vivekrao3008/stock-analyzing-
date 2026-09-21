import React from "react";

function Signup() {
  const handleSignup = () => {
    window.location.href =
  "https://stock-analyzing-g8saj02ki-vivekrao3008.vercel.app/signup";
  };

  return (
    <div className="container text-center mt-5">
      <h1>Signup</h1>
      <p>Open your Zerodha account</p>

      <button
        className="btn btn-primary"
        onClick={handleSignup}
      >
        Sign Up Now
      </button>
    </div>
  );
}

export default Signup;