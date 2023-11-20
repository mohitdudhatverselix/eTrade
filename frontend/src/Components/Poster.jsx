import React from "react";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <div className="axil-poster-countdown">
      <div className="container">
        <div className="poster-countdown-wrap bg-lighter">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="poster-countdown-content">
                <div className="section-title-wrapper">
                  <span className="title-highlighter highlighter-secondary">
                    <i className="fal fa-headphones-alt"></i> Don’t Miss!!
                  </span>
                  <h2 className="title">Enhance Your Music Experience</h2>
                </div>
                <div className="poster-countdown countdown mb--40"></div>
                <Link to="/" className="axil-btn btn-bg-primary">
                  Check it Out!
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="poster-countdown-thumbnail">
                <img
                  src="assets/images/product/poster/poster-03.png"
                  alt="Poster Product"
                />
                <div className="music-singnal">
                  {[1, 2, 3, 4, 5].map((circle) => (
                    <div
                      key={circle}
                      className={`item-circle circle-${circle}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Poster;
