import React from "react";
import Header from "./Header";
import Breadcrumb from "./BreadCrumb";
import NewsLetter from "./NewsLetter";
import Service from "./Service";
import Footer from "./Footer";
import MyAccount from "./MyAccount";
const MyAccountPage = () => {
  return (
    <div>
      <Header />
      <Breadcrumb currentLocation="My Account" Title="Explore All Products" />
      <MyAccount />
      <NewsLetter />
      <Service />
      <Footer />
    </div>
  );
};

export default MyAccountPage;
