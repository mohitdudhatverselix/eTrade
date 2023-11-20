import React from "react";
import Header from "./Header";
import YourWishList from "./YourWishList";
import Service from "./Service";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
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
      <YourWishList />
      <Service />
      <Footer />
    </div>
  );
};

export default WishlistPage;
