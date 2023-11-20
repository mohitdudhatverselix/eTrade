import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Category from "./Category";

const categories = [
  {
    title: "Total Users",
    imgSrc: "/assets/images/product/categories/elec-4.png",
  },
  {
    title: "Category",
    imgSrc: "/assets/images/product/categories/elec-5.png",
  },
  {
    title: "Total Product",
    imgSrc: "/assets/images/product/categories/elec-11.png",
  },
  {
    title: "Current Admins",
    imgSrc: "/assets/images/product/categories/elec-6.png",
  },
  {
    title: "Add / Edit Product",
    imgSrc: "/assets/images/product/categories/elec-2.png",
    link: "/admin/product",
  },
];
const DashboardFunctions = () => {
  const [activeFunction, setActiveFunction] = useState(false);

  return (
    <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-secondary">
            <i className="far fa-tags"></i> Categories
          </span>
          <h2 className="title">Admin Dashboard</h2>
        </div>
        <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="categrie-product"
                data-sal="zoom-out"
                data-sal-delay={category.salDelay || 0}
                data-sal-duration="500"
              >
                <Link
                  to={category.link}
                  onClick={() => setActiveFunction(category.title)}
                >
                  <img
                    className="img-fluid"
                    src={category.imgSrc}
                    alt="product category"
                  />
                  <h6 className="cat-title">{category.title}</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeFunction === "Total Product" && <ProductTable />}
      {activeFunction === "Total Users" && <Users />}
      {activeFunction === "Current Admins" && <Admin />}
      {activeFunction === "Category" && <CategoryAdd />}
    </div>
  );
};
const ProductTable = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleDeleteProduct = (productId) => {
    console.log(`Delete product with ID ${productId}`);
    axios
      .delete(`http://localhost:3001/products/${productId}`)
      .then(() => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
        console.log(`Product with ID ${productId} deleted.`);
      })
      .catch((error) => {
        console.error(`Error deleting product with ID ${productId}:`, error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      <h4>Total Products : - {products.length}</h4>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th colSpan={2}>Stock</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt="Thumbnail"
                  width="50"
                  height="50"
                  className="img-thumbnail"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;{product.productTitle}
              </td>
              <td>{product.isProductInStock ? "In Stock" : "Out of Stock"}</td>
              <td>
                <button onClick={() => navigate("/admin/product")}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  const updateRole = async (id) => {
    const user = users.find((user) => id === user.id);

    const isAdmin = user.role === "Admin"; // Check if the initial role is "Admin"

    const newRole = isAdmin ? "User" : "Admin";
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}`, {
        role: newRole,
      });
      console.log("Updated User Role to", newRole, "Response:", response.data);
      fetchUser();
    } catch (error) {
      console.error("Error Updating Role:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      <h4>Total Users : - {users.length}</h4>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => {
                    updateRole(user.id);
                  }}
                >
                  Change Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const fetchAdmin = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/users?role=Admin"
      );
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  const updateRole = async (id) => {
    const user = admins.find((user) => id === user.id);

    const isAdmin = user.role === "Admin"; // Check if the initial role is "Admin"

    const newRole = isAdmin ? "User" : "Admin";
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}`, {
        role: newRole,
      });
      console.log("Updated User Role to", newRole, "Response:", response.data);
      fetchAdmin();
    } catch (error) {
      console.error("Error Updating Role:", error);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);
  return (
    <>
      <h1>Admins</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => {
                    updateRole(user.id);
                  }}
                >
                  Change Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const CategoryAdd = () => {
  const [category, setCategory] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(false);
  const addCategory = async () => {
    if (editId) {
      try {
        const response = await axios.patch(
          `http://localhost:3001/categories/${editId}`,
          {
            title: category,
            imgSrc,
          }
        );
        setImgSrc("");
        setCategory("");
        setEditId(false);
        console.log("Category Updated");
      } catch (error) {
        console.error("Error Updating the Category:", error);
      }
    } else {
      try {
        const response = await axios.post(`http://localhost:3001/categories`, {
          title: category,
          imgSrc,
        });
        setImgSrc("");
        setCategory("");
        console.log("Category added");
      } catch (error) {
        console.error("Error Updating Role:", error);
      }
    }
    fetchCategories();
  };
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/categories/${id}`
      );
      setImgSrc("");
      setCategory("");
      fetchCategories();
      console.log("Category Deleted");
    } catch (error) {
      console.error("Error Deleting the Category:", error);
    }
  };
  const editCategory = async (id) => {
    const data = categories.find((c) => c.id === id);
    console.log(data);
    setImgSrc(data.imgSrc);
    setCategory(data.title);
    setEditId(data.id);
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/categories`);
      setCategories(response.data);
      console.log("Category Fetched");
    } catch (error) {
      console.error("Error Fetching the Category:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="container">
        <div className="form-group">
          <label>
            Category Name<span>*</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Category Name"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>
        <div className="form-group">
          <label>
            Img Url<span>*</span>
          </label>
          <input
            type="text"
            name="ImgSrc"
            placeholder="Img Url"
            onChange={(e) => setImgSrc(e.target.value)}
            value={imgSrc}
          />
          <button
            type="submit"
            className="axil-btn btn-bg-primary w-25 py-3 px-3 mt-4 d-block mx-auto"
            onClick={() => addCategory()}
          >
            {editId ? "Edit Category" : "Add Category"}
          </button>
        </div>
        <h1>Admins</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Images</th>
              <th>Category Name</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.imgSrc}</td>
                <td>{category.title}</td>
                <td>
                  <button onClick={() => editCategory(category.id)}>
                    Edit
                  </button>{" "}
                </td>
                <td>
                  <button onClick={() => deleteCategory(category.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
const Dashboard = () => {
  return (
    <div>
      <DashboardFunctions />
    </div>
  );
};

export default Dashboard;
