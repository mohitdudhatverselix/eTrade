import React, { useEffect } from "react";
import Header from "../Components/Header";
import NewsLetter from "../Components/NewsLetter";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import SingleProduct from "./SingleProduct";
import Recents from "./Recents";
import { useNavigate } from "react-router-dom";

const SingleProductPage = () => {
 
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("user_id") &&
      !localStorage.getItem("user_data")
    ) {
      navigate("/sign-in.html");
    }
  }, []);
  return (
    <div>
      <Header />
      <SingleProduct />
      <Recents />
      <NewsLetter />
      <Service />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
