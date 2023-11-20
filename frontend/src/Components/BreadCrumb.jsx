import React from "react";

const Breadcrumb = ({ currentLocation, Title }) => {
  return (
    <div className="axil-breadcrumb-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="inner">
              <ul className="axil-breadcrumb">
                <li className="axil-breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="separator"></li>
                <li className="axil-breadcrumb-item active" aria-current="page">
                  {currentLocation}
                </li>
              </ul>
              <h1 className="title"> {Title}</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="inner">
              <div className="bradcrumb-thumb">
                <img src="assets/images/product/product-45.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Breadcrumb);
