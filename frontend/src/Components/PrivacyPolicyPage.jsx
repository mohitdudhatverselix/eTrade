import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./BreadCrumb";
import PrivacyPolicy from "./PrivacyPolicy";
import Service from "./Service";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header />
      <Breadcrumb currentLocation="Pages" Title="Privacy Policy" />
      <PrivacyPolicy />
      <Service />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
