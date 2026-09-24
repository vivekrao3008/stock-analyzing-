import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-12 col-md-7">
          <div className="row text-center g-2 g-md-3">
            <div className="col-6 p-3 p-md-4 border rounded">
              <h1 className="mb-3">₹0</h1>
              <p className="text-muted mb-0">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-6 p-3 p-md-4 border rounded">
              <h1 className="mb-3">₹20</h1>
              <p className="text-muted mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;