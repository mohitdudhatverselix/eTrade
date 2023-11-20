import React, { useEffect } from "react";
import sal from "sal.js";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  useEffect(() => {
    sal({
      threshold: 0.5,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="error-page onepage-screen-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="content"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="400"
              >
                <span className="title-highlighter highlighter-secondary">
                  <i className="fal fa-exclamation-circle"></i> Oops!
                  Something's missing.
                </span>
                <h1 className="title">Page not found</h1>
                <p>
                  It seems like we don't find what you searched. The page you
                  were looking for doesn't exist, isn't available, or is loading
                  incorrectly.
                </p>
                <a
                  href="index.html"
                  className="axil-btn btn-bg-secondary right-icon"
                >
                  Back To Home <i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="thumbnail"
                data-sal="zoom-in"
                data-sal-duration="800"
                data-sal-delay="400"
              >
                <img src="assets/images/others/404.png" alt="404" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ErrorPage;
