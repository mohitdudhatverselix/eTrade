import React from "react";

const About = () => {
  return (
    <>
      <div className="axil-about-area about-style-1 axil-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="about-thumbnail">
                <div className="thumbnail">
                  <img src="assets/images/about/about-01.png" alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="about-content content-right">
                <span className="title-highlighter highlighter-primary2">
                  <i className="far fa-shopping-basket"></i>About Store
                </span>
                <h3 className="title">
                  Online shopping includes both buying things online.
                </h3>
                <span className="text-heading">
                  Salesforce B2C Commerce can help you create unified,
                  intelligent digital commerce experiences — both online and in
                  the store.
                </span>
                <div className="row">
                  <div className="col-xl-6">
                    <p>
                      Empower your sales teams with industry-tailored solutions
                      that support manufacturers as they go digital, and adapt
                      to changing markets & customers faster by creating new
                      business.
                    </p>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb--0">
                      Salesforce B2B Commerce offers buyers the seamless,
                      self-service experience of online shopping with all the
                      B2B.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-info-area">
        <div className="container">
          <div className="row row--20">
            <div className="col-lg-4">
              <div className="about-info-box">
                <div className="thumb">
                  <img src="assets/images/about/shape-01.png" alt="Shape" />
                </div>
                <div className="content">
                  <h6 className="title">40,000+ Happy Customers</h6>
                  <p>
                    Empower your sales teams with industry-tailored solutions
                    that support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-info-box">
                <div className="thumb">
                  <img src="assets/images/about/shape-02.png" alt="Shape" />
                </div>
                <div className="content">
                  <h6 className="title">16 Years of Experience</h6>
                  <p>
                    Empower your sales teams with industry-tailored solutions
                    that support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-info-box">
                <div className="thumb">
                  <img src="assets/images/about/shape-03.png" alt="Shape" />
                </div>
                <div className="content">
                  <h6 className="title">12 Awards Won</h6>
                  <p>
                    Empower your sales teams with industry-tailored solutions
                    that support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
