import React from "react";
import { Link, useLocation } from "react-router-dom";

export const AuthHeader = (props) => {
  const location = useLocation();
  const isForgotPassword = location.pathname === "/forgot-password.html";
  const isResetPassword = location.pathname === "/reset-password.html";
  const decision = isForgotPassword || isResetPassword;
  const isSignUp = props.page !== "sign-in";
  return (
    <div className="signin-header">
      <div className="row align-items-center">
        <div className={`col-${decision ? "xl-4 col-sm-6" : "sm-4"}`}>
          <Link href="index.html" className="site-logo">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </Link>
        </div>
        {decision && (
          <div className="col-md-2 d-lg-block d-none">
            <Link
              to={`${
                isForgotPassword ? "/sign-in.html" : "/forgot-password.html"
              }`}
              className="back-btn"
            >
              <i className="far fa-angle-left"></i>
            </Link>
          </div>
        )}
        <div className={`col-${decision ? "xl-6 col-lg-4 col-sm-6" : "sm-8"}`}>
          <div className="singin-header-btn">
            <p>{isSignUp ? "Already a member?" : "Not a member?"}</p>
            <Link
              to={isSignUp ? "/sign-in.html" : "/sign-up.html"}
              className="axil-btn btn-bg-secondary sign-up-btn"
            >
              {isSignUp ? "Sign In" : "Sign Up Now"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
AuthHeader.defaultProps = {
  page: "sign-up",
  isForgotPassword: false,
};
