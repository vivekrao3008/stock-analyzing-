import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-bottom text-center">
        <h1 className="fs-1">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row p-3 p-md-5 mt-3 text-center">
        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h2 className="fs-3">Free equity delivery</h2>
          <p className="text-muted mt-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h2 className="fs-3">Intraday and F&O trades</h2>
          <p className="text-muted mt-2">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free direct mutual funds"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h2 className="fs-3">Free direct MF</h2>
          <p className="text-muted mt-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;