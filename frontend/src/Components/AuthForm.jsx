import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const AuthForm = ({ isSignIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const formTitle = isSignIn ? "Sign in to eTrade." : "I'm New Here";
  const buttonText = isSignIn ? "Sign In" : "Create Account";
  const usernameField = isSignIn ? null : (
    <div className="form-group">
      <label>User Name</label>
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="anniemario"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
    </div>
  );
  const validateFormData = () => {
    if (!isSignIn && !formData.username) {
      alert("Username is required");
      return false;
    }
    if (!formData.email) {
      alert("Email is required");
      return false;
    }

    if (!formData.password) {
      alert("Password is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user;
    if (validateFormData() && !isSignIn) {
      user = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      console.log("User Object:", user);
    }
    if (validateFormData() && isSignIn) {
      user = {
        email: formData.email,
        password: formData.password,
      };

      console.log("User Object:", user);
    }
    console.log(user);
    try {
      // Check if the user already exists

      if (isSignIn) {
        const existingUserResponse = await axios.get(
          `http://localhost:3001/users?email=${formData.email}&username=${formData.password}`
        );
        console.log(existingUserResponse.data);
        localStorage.setItem(
          "user_id",
          JSON.stringify(existingUserResponse.data[0].id)
        );
        const user_data = await axios.get(
          `http://localhost:3001/users_data?user_id=${existingUserResponse.data[0].id}`
        );
        console.log(user_data);
        localStorage.setItem("user_data", JSON.stringify(user_data.data[0]));
        window.location.href = "/";
      } else {
        const existingUserResponse = await axios.get(
          `http://localhost:3001/users?email=${formData.email}&username=${formData.username}`
        );
        if (existingUserResponse.data.length > 0 && !isSignIn) {
          alert("A user with this email or username already exists.");
        } else {
          // User doesn't exist, proceed to create the user
          const createUserResponse = await axios.post(
            `http://localhost:3001/users`,
            user
          );
          console.log("User Object:", user);
          console.log(createUserResponse.data);
          const currentDate = new Date();
          const formattedDate = new Intl.DateTimeFormat("en-GB").format(
            currentDate
          );

          console.log(formattedDate); // Output the formatted date

          const user_data = {
            signUpDate: formattedDate,
            username: "p",
            username: createUserResponse.data.username,
            email: createUserResponse.data.email,
            user_id: createUserResponse.data.id,
            cart: [],
            wishlist: [],
            PendingOrders: [],
            shippingAddress: [],
          };
          console.log(user_data);
          const createUserdata = await axios.post(
            `http://localhost:3001/users_data`,
            user_data
          );
          console.log(createUserdata.data);
        }
      }
    } catch (error) {
      console.error("Error checking/creating user:", error);
    }
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6">
        <div
          className={`axil-signin-banner bg_image bg_image--${
            isSignIn ? 9 : 10
          }`}
        >
          <h3 className="title">We Offer the Best Products</h3>
        </div>
      </div>
      <div className="col-lg-6 offset-xl-2">
        <div className="axil-signin-form-wrap">
          <div className="axil-signin-form">
            <h3 className="title">{formTitle}</h3>
            <p className="b2 mb--55">Enter your details below</p>
            <form className="signin-form">
              {usernameField}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  placeholder="annie@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control fs-5 fw-lighter"
                  name="password"
                  placeholder="●●●●●●●●●●"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <button
                  type="button"
                  className="axil-btn btn-bg-primary submit-btn"
                  onClick={(e) => handleSubmit(e)}
                >
                  {buttonText}
                </button>
                {isSignIn && ( // Show "Forgot Password" for sign-up form
                  <a href="forgot-password.html" className="forgot-btn">
                    Forgot password?
                  </a>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
AuthForm.defaultProps = {
  isSignIn: false,
};
