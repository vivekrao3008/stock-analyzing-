import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 p-md-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#topics" style={{ textDecoration: "none", color: "#fff" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-3 p-md-5 mx-1 mx-md-3">
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control"
            placeholder="Eg. how do I activate F&O, why is my order rejected..."
          />
          <div className="d-flex flex-wrap gap-3 mt-3">
            <a href="#topics" style={{ color: "#fff" }}>
              Track account opening
            </a>
            <a href="#topics" style={{ color: "#fff" }}>
              Track segment activation
            </a>
            <a href="#topics" style={{ color: "#fff" }}>
              Intraday margins
            </a>
            <a href="#topics" style={{ color: "#fff" }}>
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#topics" style={{ color: "#fff" }}>
                Current Takeovers and Delisting - 2026
              </a>
            </li>
            <li>
              <a href="#topics" style={{ color: "#fff" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;