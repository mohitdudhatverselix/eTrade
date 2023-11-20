import React from "react";

export const HeaderTop = () => {
  return (
    <div className="axil-header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="header-top-dropdown">
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Spanish
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      AUD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      EUR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="header-top-link">
              <ul className="quick-link">
                <li>
                  <a href="/">Help</a>
                </li>
                <li>
                  <a href="sign-up.html">Join Us</a>
                </li>
                <li>
                  <a href="sign-in.html">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
