import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="text-muted mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted mt-2">
            Thematic investment platform
          </p>
        </div>

        {/* Streak */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted mt-2">
            Systematic trading platform
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted mt-2">
            Options trading platform
          </p>
        </div>

        {/* Tijori Finance */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <h5>Tijori Finance</h5>
          <p className="text-small text-muted mt-2">
            Investment research platform
          </p>
        </div>

        {/* Ditto */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted mt-2">
            Insurance advisory platform
          </p>
        </div>

        {/* Zerodha Varsity */}
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
          <h5>Zerodha Varsity</h5>
          <p className="text-small text-muted mt-2">
            Financial education platform
          </p>
        </div>

        <div className="col-12 mt-4 mb-5">
          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5"
            style={{ minWidth: "200px", maxWidth: "240px", display: "inline-block" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;