import React from "react";
import { AuthHeader } from "./AuthHeader";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="axil-signin-area">
      <AuthHeader />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
