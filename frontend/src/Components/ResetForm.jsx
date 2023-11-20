import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ResetForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const linkIdFromURL = queryParams.get("linkId");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");

    if (linkIdFromURL) {
      const storedLinkId = localStorage.getItem("resetPasswordLinkId");

      if (linkIdFromURL === storedLinkId) {
        if (newPassword === confirmPassword) {
          axios
            .get(`http://localhost:3001/users?email=${email}`)
            .then((response) => {
              setUserData(response.data[0]);
              const updatedAuth = {
                ...response.data[0],
                password: newPassword,
              };
              axios
                .put(
                  `http://localhost:3001/users/${response.data[0].id}`,
                  updatedAuth
                )
                .then((response) => {
                  setResetSuccess(true);
                  setError("");
                })
                .catch((err) => {
                  console.log(err);
                  setError("Failed to update the password. Please try again.");
                  setResetSuccess(false);
                });
            })
            .catch((error) => {
              console.log(error);
              setError("User not found. Please check your email.");
              setResetSuccess(false);
            });
        } else {
          setError("Passwords do not match. Please try again.");
          setResetSuccess(false);
        }
      } else {
        setError("Link expired or invalid. Please request a new reset link.");
        setResetSuccess(false);
      }
    } else {
      setError("Link not found in URL. Please use a valid reset link.");
      setResetSuccess(false);
    }
  };

  useEffect(() => {
    // localStorage.removeItem("resetPasswordLinkId");
    // localStorage.removeItem("email");
  }, []);

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
            <h3 className="title mb--35">Reset Password</h3>
            <form className="signin-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>New password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password1"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary submit-btn"
                >
                  Reset Password
                </button>
              </div>
            </form>
            {error && <p className="error-message">{error}</p>}
            {resetSuccess && (
              <p className="success-message">Password reset successful.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
