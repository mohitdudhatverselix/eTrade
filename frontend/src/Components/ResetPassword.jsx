import React from "react";
import { AuthHeader } from "./AuthHeader";
import { ResetForm } from "./ResetForm";

const ResetPassword = () => {
  return (
    <div className="axil-signin-area">
      <AuthHeader />
      <ResetForm />
    </div>
  );
};

export default ResetPassword;
