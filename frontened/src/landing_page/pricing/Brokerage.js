import React, { useState } from "react";

function Brokerage() {
  const [buyPrice, setBuyPrice] = useState(1000);
  const [sellPrice, setSellPrice] = useState(1100);
  const [quantity, setQuantity] = useState(10);

  const buyTurnover = Number(buyPrice) * Number(quantity);
  const sellTurnover = Number(sellPrice) * Number(quantity);
  const totalTurnover = buyTurnover + sellTurnover;

  const grossPnL = (Number(sellPrice) - Number(buyPrice)) * Number(quantity);

  // Brokerage: ₹20 flat or 0.03% whichever is lower for each leg
  const buyBrokerage = Math.min(20, buyTurnover * 0.0003);
  const sellBrokerage = Math.min(20, sellTurnover * 0.0003);
  const totalBrokerage = buyBrokerage + sellBrokerage;

  // STT / CTT: 0.025% on sell side (intraday equity)
  const stt = sellTurnover * 0.00025;

  // Exchange txn charge: 0.00345% of total turnover
  const exchangeTxn = totalTurnover * 0.0000345;

  // GST: 18% on (brokerage + exchange txn charge)
  const gst = (totalBrokerage + exchangeTxn) * 0.18;

  // SEBI charges: ₹10 per crore (0.0001%)
  const sebiCharges = totalTurnover * 0.000001;

  // Stamp duty: 0.003% on buy turnover
  const stampDuty = buyTurnover * 0.00003;

  const totalTaxCharges =
    totalBrokerage + stt + exchangeTxn + gst + sebiCharges + stampDuty;
  const netPnL = grossPnL - totalTaxCharges;

  return (
    <div className="container mt-4 mb-5">
      {/* Interactive Brokerage Calculator */}
      <div className="card shadow-sm border-0 mb-5 p-4 p-md-5">
        <h2 className="fs-3 text-center mb-4 text-primary">
          <i className="fa fa-calculator me-2"></i> Interactive Brokerage Calculator
        </h2>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <label className="form-label fw-bold">Buy Price (₹)</label>
            <input
              type="number"
              className="form-control"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label fw-bold">Sell Price (₹)</label>
            <input
              type="number"
              className="form-control"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label fw-bold">Quantity</label>
            <input
              type="number"
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div className="row mt-4 p-3 bg-light rounded text-center g-3">
          <div className="col-6 col-md-3">
            <small className="text-muted">Turnover</small>
            <h5 className="mt-1">₹{totalTurnover.toFixed(2)}</h5>
          </div>
          <div className="col-6 col-md-3">
            <small className="text-muted">Brokerage</small>
            <h5 className="mt-1">₹{totalBrokerage.toFixed(2)}</h5>
          </div>
          <div className="col-6 col-md-3">
            <small className="text-muted">Total Taxes & Charges</small>
            <h5 className="mt-1 text-danger">₹{totalTaxCharges.toFixed(2)}</h5>
          </div>
          <div className="col-6 col-md-3">
            <small className="text-muted">Net P&L</small>
            <h5 className={`mt-1 ${netPnL >= 0 ? "text-success" : "text-danger"}`}>
              {netPnL >= 0 ? "+" : ""}₹{netPnL.toFixed(2)}
            </h5>
          </div>
        </div>
      </div>

      <div className="row p-3 p-md-5 text-center border-top">
        <div className="col-12 col-md-8 p-3 text-start">
          <h3 className="fs-5 mb-3 text-primary">Brokerage details & charges</h3>
          <ul
            style={{ lineHeight: "2.2", fontSize: "13px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-3 text-md-start">
          <h3 className="fs-5 mb-3 text-primary">List of charges</h3>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            STT/CTT, Stamp Duty, GST, and SEBI Turnover charges are levied as
            prescribed by the statutory and regulatory authorities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;