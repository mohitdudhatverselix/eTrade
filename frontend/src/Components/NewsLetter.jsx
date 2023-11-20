import React from "react";

const newsletterData = {
  titleHighlighter: <i className="fas fa-envelope-open"></i>,
  title: "Newsletter",
  subtitle: "Get weekly update",
  placeholder: "example@gmail.com",
  buttonText: "Subscribe",
};

const NewsLetter = () => {
  return (
    <div className="axil-newsletter-area axil-section-gap pt--0">
      <div className="container">
        <div className="etrade-newsletter-wrapper bg_image bg_image--5">
          <div className="newsletter-content">
            <span className="title-highlighter highlighter-primary2">
              {newsletterData.titleHighlighter}
              {newsletterData.title}
            </span>
            <h2 className="title mb--40 mb_sm--30">
              {newsletterData.subtitle}
            </h2>
            <div className="input-group newsletter-form">
              <div className="position-relative newsletter-inner mb--15">
                <input placeholder={newsletterData.placeholder} type="text" />
              </div>
              <button type="submit" className="axil-btn mb--15">
                {newsletterData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
