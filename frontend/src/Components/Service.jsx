import React from "react";

const serviceItems = [
  {
    iconSrc: "assets/images/icons/service1.png",
    title: "Fast & Secure Delivery",
    description: "Tell about your service.",
  },
  {
    iconSrc: "assets/images/icons/service2.png",
    title: "Money Back Guarantee",
    description: "Within 10 days.",
  },
  {
    iconSrc: "assets/images/icons/service3.png",
    title: "24 Hour Return Policy",
    description: "No question ask.",
  },
  {
    iconSrc: "assets/images/icons/service4.png",
    title: "Pro Quality Support",
    description: "24/7 Live support.",
  },
];

const Service = () => {
  return (
    <div className="service-area">
      <div className="container">
        <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
          {serviceItems.map((item, index) => (
            <div className="col" key={index}>
              <div className="service-box service-style-2">
                <div className="icon">
                  <img src={item.iconSrc} alt="Service" />
                </div>
                <div className="content">
                  <h6 className="title">{item.title}</h6>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Service;