import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="fs-2 mb-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          {learnMore && (
            <div className="my-3">
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          )}
        </div>
        <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;