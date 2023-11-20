import React from "react";
import { Link } from "react-router-dom";

const posters = [
  {
    href: "shop.html",
    imgSrc: "assets/images/product/poster/poster-01.png",
    title: "Rich sound, for less.",
    subTitle: "Collections",
  },
  {
    href: "shop-sidebar.html",
    imgSrc: "assets/images/product/poster/poster-02.png",
    title: "Get VR Reality Glass",
    subTitle: "50% Offer In Winter",
  },
];

const Axil = () => {
  return (
    <div className="axil-poster">
      <div className="container">
        <div className="row">
          {posters.map((poster, index) => (
            <div className="col-lg-6 mb--30" key={index}>
              <div className="single-poster">
                <Link to={poster.href}>
                  <img src={poster.imgSrc} alt="eTrade promotion poster" />
                  <div className="poster-content">
                    <div className="inner">
                      {poster.subTitle && (
                        <span className="sub-title">{poster.subTitle}</span>
                      )}
                      <h3 className="title">{poster.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Axil;