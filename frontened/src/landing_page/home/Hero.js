import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="mb-5 img-fluid"
            style={{ maxWidth: "800px" }}
          />
          <h1 className="mt-4 fs-1">Invest in everything</h1>
          <p className="fs-5 text-muted mt-3">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5 mb-5 mt-3"
            style={{ minWidth: "200px", maxWidth: "240px", margin: "0 auto" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;