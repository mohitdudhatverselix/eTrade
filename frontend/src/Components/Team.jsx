import React, { useEffect } from "react";
import $ from "jquery";

const Team = () => {
  useEffect(() => {
    $(".team-slide-activation").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: false,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  const teamMembers = [
    {
      imgSrc: "assets/images/team/team-01.png",
      alt: "Rosalina D. Willson",
      subtitle: "Founder",
      title: "Rosalina D. Willson",
    },
    {
      imgSrc: "assets/images/team/team-02.png",
      alt: "Ukolilix X. Xilanorix",
      subtitle: "CEO",
      title: "Ukolilix X. Xilanorix",
    },
    {
      imgSrc: "assets/images/team/team-03.png",
      alt: "Alonso M. Miklonax",
      subtitle: "Designer",
      title: "Alonso M. Miklonax",
    },
    {
      imgSrc: "assets/images/team/team-04.png",
      alt: "Alonso M. Miklonax",
      subtitle: "Designer",
      title: "Alonso M. Miklonax",
    },
    {
      imgSrc: "assets/images/team/team-02.png",
      alt: "Alonso M. Miklonax",
      subtitle: "Designer",
      title: "Alonso M. Miklonax",
    },
  ];

  return (
    <div className="axil-team-area bg-wild-sand">
      <div className="team-left-fullwidth">
        <div className="container ml--xxl-0" style={{ overflow: "hidden" }}>
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-primary">
              <i className="fas fa-users"></i> Our Team
            </span>
            <h3 className="title">Expert Management Team</h3>
          </div>
          <div className="team-slide-activation slick-layout-wrapper--20 axil-slick-arrow  arrow-top-slide">
            {teamMembers.map((member, index) => (
              <div key={index} className="slick-single-layout">
                <div className="axil-team-member">
                  <div className="thumbnail">
                    <img src={member.imgSrc} alt={member.alt} />
                  </div>
                  <div className="team-content">
                    <span className="subtitle">{member.subtitle}</span>
                    <h5 className="title">{member.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
