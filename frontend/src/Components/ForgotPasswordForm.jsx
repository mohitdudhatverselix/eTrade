import React, { useState } from "react";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [resetLink, setResetLink] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendInstructions = async () => {
    try {
      // Check if the email exists in the server
      const response = await fetch(
        `http://localhost:3001/users?email=${email}`
      );
      const userData = await response.json();
      console.log(userData);
      if (userData.length === 0) {
        // User with the provided email does not exist
        alert("User not found.");
      } else {
        // Generate a random link ID and store it in local storage
        const randomLinkId = generateRandomLinkId();
        localStorage.setItem("resetPasswordLinkId", randomLinkId);
        localStorage.setItem("email", email);

        // Display the reset link
        const link = `http://localhost:3000/reset-password.html?linkId=${randomLinkId}`;
        setResetLink(link);
        setIsSent(true);
      }
    } catch (error) {
      console.error("Error sending reset instructions:", error);
    }
  };

  const generateRandomLinkId = () => {
    // Implement your random link generation logic here
    return Math.random().toString(36).substr(2, 10);
  };

  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6">
        <div className="axil-signin-banner bg_image bg_image--10">
          <h2 className="title">We Offer the Best Products</h2>
        </div>
      </div>
      <div className="col-lg-6 offset-xl-2">
        <div className="axil-signin-form-wrap">
          <div className="axil-signin-form">
            <h3 className="title">Forgot Password?</h3>
            {isSent ? (
              <p className="b2 mb--55">
                Reset instructions sent to your email.
              </p>
            ) : (
              <p className="b2 mb--55">
                Enter the email address you used when you joined, and we’ll send
                you instructions to reset your password.
              </p>
            )}
            <form className="singin-form">
              {!isSent && (
                <>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      onClick={handleSendInstructions}
                      className="axil-btn btn-bg-primary submit-btn"
                    >
                      Send Reset Instructions
                    </button>
                  </div>
                </>
              )}
            </form>
            {resetLink && <p>Reset Link: {resetLink}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
