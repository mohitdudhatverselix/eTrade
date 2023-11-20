import React from "react";

const serviceItems = [
  {
    iconSrc: "assets/images/icons/service6.png",
    title: "Fast & Secure Delivery",
  },
  {
    iconSrc: "assets/images/icons/service7.png",
    title: "100% Guarantee On Product",
  },
  {
    iconSrc: "assets/images/icons/service8.png",
    title: "24 Hour Return Policy",
  },
  {
    iconSrc: "assets/images/icons/service9.png",
    title: "24 Hour Return Policy",
  },
  {
    iconSrc: "assets/images/icons/service10.png",
    title: "Next Level Pro Quality",
  },
];

const WhyChoose = () => {
  return (
    <div className="axil-why-choose-area pb--50 pb_sm--30">
      <div className="container">
        <div className="section-title-wrapper section-title-center">
          <span className="title-highlighter highlighter-secondary">
            <i className="fal fa-thumbs-up"></i>Why Us
          </span>
          <h2 className="title">Why People Choose Us</h2>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
          {serviceItems.map((item, index) => (
            <div className="col" key={index}>
              <div className="service-box">
                <div className="icon">
                  <img src={item.iconSrc} alt="Service" />
                </div>
                <h6 className="title">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;