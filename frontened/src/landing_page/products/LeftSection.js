import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-2 mb-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <div className="d-flex gap-4 my-3">
            {tryDemo && (
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
          <div className="mt-4 d-flex gap-3">
            {googlePlay && (
              <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
              </a>
            )}
            {appStore && (
              <a href={appStore} target="_blank" rel="noopener noreferrer">
                <img src="media/images/appstoreBadge.svg" alt="App Store" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;