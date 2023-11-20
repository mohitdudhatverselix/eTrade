import React from "react";
import { Link } from "react-router-dom";

export const OfferModal = () => {
  return (
    <>
      <div className="offer-popup-modal" id="offer-popup-modal">
        <div className="offer-popup-wrap">
          <div className="card-body">
            <button className="popup-close">
              <i className="fas fa-times"></i>
            </button>
            <div className="content">
              <div className="section-title-wrapper">
                <span className="title-highlighter highlighter-primary">
                  <i className="far fa-shopping-basket"></i> Don’t Miss!!
                </span>
                <h3 className="title">
                  Best Sales Offer
                  <br />
                  Grab Yours
                </h3>
              </div>
              <div className="poster-countdown countdown"></div>
              <Link href="shop.html" className="axil-btn btn-bg-primary">
                Shop Now <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="closeMask"></div>
    </>
  );
};
