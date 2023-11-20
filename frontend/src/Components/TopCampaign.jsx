import React from "react";
import { Link } from "react-router-dom";
export const TopCampaign = () => {
  return (
    <div className="header-top-campaign">
      <div className="container position-relative">
        <div className="campaign-content">
          <p>
            Open Doors To A World Of Fashion&nbsp;
            <Link to="#"> Discover More</Link>
          </p>
        </div>
      </div>
      <button className="remove-campaign">
        <i className="fal fa-times"></i>
      </button>
    </div>
  );
};
