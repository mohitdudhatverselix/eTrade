import React from "react";
import Header from "../Components/Header";
import Breadcrumb from "../Components/BreadCrumb";
import ShopArea from "../Components/ShopArea";
import NewsLetter from "../Components/NewsLetter";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import Scripts from "./Scripts";

const Shop = () => {
  return (
    <div>
      <Header />
      <Breadcrumb currentLocation="Shop" Title="Explore All Products" />
      <ShopArea />
      <NewsLetter />
      <Service />
      <Footer />
    </div>
  );
};

export default Scripts(Shop);
