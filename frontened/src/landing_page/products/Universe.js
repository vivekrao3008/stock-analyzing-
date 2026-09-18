
import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        {/* Streak */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Options trading platform
          </p>
        </div>

        {/* Tijori Finance */}
        <div className="col-4 p-3 mt-5">
          <h5>Tijori Finance</h5>
          <p className="text-small text-muted">
            Investment research platform
          </p>
        </div>

        {/* Ditto */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Insurance advisory platform
          </p>
        </div>

        {/* Zerodha Varsity */}
        <div className="col-4 p-3 mt-5">
          <h5>Zerodha Varsity</h5>
          <p className="text-small text-muted">
            Financial education platform
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;