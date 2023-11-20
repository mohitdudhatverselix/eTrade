import React from "react";
import { AuthHeader } from "./AuthHeader";
import { AuthForm } from "./AuthForm";
// import { AuthHeader, AuthForm } from "./";
const Signin = () => {
  return (
    <div className="axil-signin-area">
      <AuthHeader page="sign-in" />
      <AuthForm isSignIn={true} />
    </div>
  );
};

export default Signin;
