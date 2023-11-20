import React from "react";
import Header from "./Header";
import Breadcrumb from "./BreadCrumb";
import About from "./About";
import Team from "./Team";
import AboutFeatures from "./AboutFeatures";
import NewsLetter from "./NewsLetter";
import Service from "./Service";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Breadcrumb currentLocation="About Us" Title="About Our Store" />
      <About />
      <Team />
      <AboutFeatures />
      <NewsLetter />
      <Service />
      <Footer />
    </div>
  );
};

export default AboutUs;
