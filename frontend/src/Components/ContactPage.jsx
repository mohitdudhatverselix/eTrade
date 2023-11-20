import React from "react";
import Header from "./Header";
import Breadcrumb from "./BreadCrumb";
import NewsLetter from "./NewsLetter";
import Service from "./Service";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
const ContactPage = () => {
  return (
    <div>
      <Header />
      <Breadcrumb currentLocation="Contact" Title="Contact With Us" />
      <ContactForm />
      <NewsLetter />
      <Service />
      <Footer />
    </div>
  );
};

export default ContactPage;
