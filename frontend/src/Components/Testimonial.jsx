import React from "react";
const testimonialData = [
  {
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal; the only thing that has changed is my mindset and a few behaviors.",
    imageSrc: "assets/images/testimonial/image-1.png",
    designation: "Head Of Idea",
    title: "James C. Anderson",
  },
  {
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal; the only thing that has changed is my mindset and a few behaviors.",
    imageSrc: "assets/images/testimonial/image-2.png",
    designation: "Another Designation",
    title: "Another Name",
  },
  {
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal; the only thing that has changed is my mindset and a few behaviors.",
    imageSrc: "assets/images/testimonial/image-3.png",
    designation: "Head Of Idea",
    title: "James C. Anderson",
  },
  {
    text: "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal; the only thing that has changed is my mindset and a few behaviors.",
    imageSrc: "assets/images/testimonial/image-2.png",
    designation: "Another Designation",
    title: "Another Name",
  },
];
const Testimonial = () => {
  return (
    <div className="axil-testimoial-area axil-section-gap bg-vista-white">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-secondary">
            <i className="fal fa-quote-left"></i>Testimonials
          </span>
          <h2 className="title">Users Feedback</h2>
        </div>
        <div className="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="slick-single-layout testimonial-style-one px-5"
            >
              <div className="review-speech">
                <p>{testimonial.text}</p>
              </div>
              <div className="media">
                <div className="thumbnail">
                  <img src={testimonial.imageSrc} alt="testimonial" />
                </div>
                <div className="media-body">
                  <span className="designation">{testimonial.designation}</span>
                  <h6 className="title">{testimonial.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
