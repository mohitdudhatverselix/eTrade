import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const MyAccount = () => {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryRegion: "United Kingdom (UK)",
  });
  useEffect(() => {
    setFormData({
      firstName: userData?.accountDetails?.firstName || "",
      lastName: userData?.accountDetails?.lastName || "",
      countryRegion:
        userData?.accountDetails?.countryRegion || "United Kingdom (UK)",
    });
  }, [userData]);
  const orders = [
    {
      orderNumber: "#6523",
      orderDate: "September 10, 2020",
      orderStatus: "Processing",
      orderTotal: "$326.63 for 3 items",
    },
    // Add more orders as needed
  ];

  const addresses = [
    {
      type: "Shipping Address",
      name: "Annie Mario",
      email: "annie@example.com",
      phone: "1234 567890",
      address: "7398 Smoke Ranch Road\nLas Vegas, Nevada 89128",
    },
    // Add more addresses as needed
  ];
  const submitDetails = (e) => {
    e.preventDefault();
    console.log(formData);
    const updatedUserData = {
      ...userData,
      accountDetails: { ...userData.accountDetails, ...formData },
    };
    console.log(updatedUserData);
    axios
      .put(`http://localhost:3001/users_data/${userData.id}`, updatedUserData)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    axios
      .get(`http://localhost:3001/users_data?user_id=${user_id}`)
      .then((response) => {
        setUserData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    userData && (
      <div className="axil-dashboard-area axil-section-gap">
        <div className="container">
          <div className="axil-dashboard-warp">
            <div className="axil-dashboard-author">
              <div className="media">
                <div className="thumbnail">
                  <img
                    src="assets/images/product/author1.png"
                    alt="Hello Annie"
                  />
                </div>
                <div className="media-body">
                  <h5 className="title mb-0">Hello {`${userData.username}`}</h5>
                  <span className="joining-date">
                    {userData && userData.signUpDate
                      ? `eTrade Member Since ${new Date(
                          ...userData.signUpDate.split("/").reverse()
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}`
                      : "eTrade Member Since - Date Not Available"}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-4">
                <aside className="axil-dashboard-aside">
                  <nav className="axil-dashboard-nav">
                    <div className="nav nav-tabs" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        data-bs-toggle="tab"
                        href="#nav-dashboard"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-th-large"></i>Dashboard
                      </a>
                      <a
                        className="nav-item nav-link"
                        data-bs-toggle="tab"
                        href="#nav-orders"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="fas fa-shopping-basket"></i>Orders
                      </a>
                      <a
                        className="nav-item nav-link"
                        data-bs-toggle="tab"
                        href="#nav-downloads"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="fas fa-file-download"></i>Downloads
                      </a>
                      <a
                        className="nav-item nav-link"
                        data-bs-toggle="tab"
                        href="#nav-address"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="fas fa-home"></i>Addresses
                      </a>
                      <a
                        className="nav-item nav-link"
                        data-bs-toggle="tab"
                        href="#nav-account"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="fas fa-user"></i>Account Details
                      </a>
                      <a
                        className="nav-item nav-link"
                        href="sign-in.html"
                        onClick={() => localStorage.clear()}
                      >
                        <i className="fal fa-sign-out"></i> Logout
                      </a>
                    </div>
                  </nav>
                </aside>
              </div>
              <div className="col-xl-9 col-md-8">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="nav-dashboard"
                    role="tabpanel"
                  >
                    <div className="axil-dashboard-overview">
                      <div className="welcome-text">
                        Hello Annie (not <span>{`${userData.username}`}?</span>{" "}
                        <a href="sign-in.html">Log Out</a>)
                      </div>
                      <p>
                        From your account dashboard, you can view your recent
                        orders, manage your shipping and billing addresses, and
                        edit your password and account details.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-orders"
                    role="tabpanel"
                  >
                    <div className="axil-dashboard-order">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Total</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order, index) => (
                              <tr key={index}>
                                <th scope="row">{order.orderNumber}</th>
                                <td>{order.orderDate}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.orderTotal}</td>
                                <td>
                                  <a href="#" className="axil-btn view-btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-downloads"
                    role="tabpanel"
                  >
                    <div className="axil-dashboard-order">
                      <p>You don't have any downloads</p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-address"
                    role="tabpanel"
                  >
                    <div className="axil-dashboard-address">
                      <p className="notice-text">
                        The following addresses will be used on the checkout
                        page by default.
                      </p>
                      <div className="row row--30">
                        {addresses.map((address, index) => (
                          <div className="col-lg-6" key={index}>
                            <div className="address-info mb--40">
                              <div className="addrss-header d-flex align-items-center justify-content-between">
                                <h4 className="title mb-0">{address.type}</h4>
                                <a href="#" className="address-edit">
                                  <i className="far fa-edit"></i>
                                </a>
                              </div>
                              <ul className="address-details">
                                <li>Name: {address.name}</li>
                                <li>Email: {address.email}</li>
                                <li>Phone: {address.phone}</li>
                                <li className="mt--30">{address.address}</li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-account"
                    role="tabpanel"
                  >
                    <div className="col-lg-9">
                      <div className="axil-dashboard-account">
                        <form className="account-details-form">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={
                                    userData?.accountDetails?.firstName || ""
                                  }
                                  value={formData?.firstName}
                                  onChange={(e) => handleInputChange(e)}
                                  name="firstName"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  name="lastName"
                                  className="form-control"
                                  defaultValue={
                                    userData?.accountDetails?.lastName || ""
                                  }
                                  value={formData?.lastName}
                                  onChange={(e) => handleInputChange(e)}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb--40">
                                <label>Country/Region</label>
                                <select
                                  className="select2"
                                  name="countryRegion"
                                  onChange={(e) => handleInputChange(e)}
                                  value={formData.countryRegion}
                                >
                                  <option>United Kingdom (UK)</option>
                                  <option>United States (USA)</option>
                                  <option>United Arab Emirates (UAE)</option>
                                  <option>Australia</option>
                                </select>
                                <p className="b3 mt--10">
                                  This will be how your name will be displayed
                                  in the account section and in reviews
                                </p>
                              </div>
                            </div>
                            <div className="col-12">
                              <h5 className="title">Password Change</h5>
                              <div className="form-group">
                                <label>Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  value="123456789101112131415"
                                />
                              </div>
                              <div className="form-group">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Confirm New Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group mb--0">
                                <input
                                  type="submit"
                                  className="axil-btn"
                                  value="Save Changes"
                                  onClick={submitDetails}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default MyAccount;
