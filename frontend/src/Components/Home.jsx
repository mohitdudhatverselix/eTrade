import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Category from "../Components/Category";
import Poster from "../Components/Poster";
import Explore from "../Components/Explore";
import Testimonial from "../Components/Testimonial";
import Arrival from "../Components/Arrival";
import Trending from "../Components/Trending";
import Axil from "../Components/Axil";
import NewsLetter from "../Components/NewsLetter";
import Service from "../Components/Service";
import WhyChoose from "../Components/WhyChoose";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Header TopCampaign={true} style={1} />
      <Banner />
      <Category />
      <Poster />
      <Explore />
      <Testimonial />
      <Arrival />
      <Trending />
      <WhyChoose />
      <Axil />
      <NewsLetter />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
