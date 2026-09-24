import React from "react";

function CreateTicket() {
  return (
    <div className="container" id="topics">
      <div className="row p-3 p-md-5 mt-3 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening */}
        <div className="col-12 col-md-4 p-3 p-md-4 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i>
            Account Opening
          </h4>
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account Opening
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges at Zerodha
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-12 col-md-4 p-3 p-md-4 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i>
            Your Zerodha Account
          </h4>
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login and Password
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Details
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile Settings
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Closure
          </a>
        </div>

        {/* Kite */}
        <div className="col-12 col-md-4 p-3 p-md-4 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i>
            Kite
          </h4>
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading on Kite
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Orders and Trades
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Marketwatch
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts and Indicators
          </a>
        </div>

        {/* Funds */}
        <div className="col-12 col-md-4 p-3 p-md-4 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i>
            Funds
          </h4>
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Funds
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw Funds
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Transfer
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Payment Issues
          </a>
        </div>

        {/* Console */}
        <div className="col-12 col-md-4 p-3 p-md-4 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i>
            Console
          </h4>
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Tax Reports
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Tradebook
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Holdings and Positions
          </a>
        </div>

        {/* Coin */}
        <div className="col-12 col-md-4 p-3 p-md-4 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i>
            Coin
          </h4>
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mutual Funds
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            SIP
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Investments
          </a>
          <br />
          <a href="#topics" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mutual Fund Orders
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;