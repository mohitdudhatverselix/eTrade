import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProduct = () => {
  const navigate = useNavigate();
  const initialFormData ={
    productTitle: "",
    price: "",
    oldPrice: "",
    discountCode: "",
    description: "",
    category: "3", // Default category value
    discountPercentage: "",
    discountText: "",
    isProductInStock: false,
    isFreeDeliveryAvailable: false,
    thumbnail: "",
    colors:[],
    sizes:[],
    images:[],
    // colors:["", "", ""],
    // sizes:["", "", "", "", ""],
    // images:["", "", "", ""],
  }
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [editId, setEditId] = useState(false);
  const url = `${process.env.REACT_APP_API_URL}/products`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const FormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleViewDetails = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/${productId}`
      );
      setSelectedProduct(response.data);
    } catch (error) {
      console.error(
        `Error fetching product details for ID ${productId}:`,
        error
      );
    }
  };


  const handleAddProduct = async () => {
    if (editId) {
      try {
        const {
          slick_1,
          slick_2,
          slick_3,
          slick_4,
          size_1,
          size_2,
          size_3,
          size_4,
          size_5,
          color_1,
          color_2,
          color_3,
          ...newformData
        } = formData;
        const response = await axios.put(
          `${url}/${editId}`,
          {
            ...newformData,
            images: [...formData.images],
            colors:[...formData.colors],
            sizes:[...formData.sizes],
            thumbnail: formData.thumbnail,
            discount: {
              discountPercentage: parseFloat(formData.discountAmount),
              discountText: formData.discountText,
            },
            category: formData.category,
          }
        );

        fetchData();
        console.log(`Updated product with ID ${response.data.id}`);
        setEditId(false);
        setFormData({
          productTitle: "",
          price: "",
          oldPrice: "",
          discountCode: "",
          description: "",
          category: "3", // Default category value
          discountPercentage: "",
          discountText: "",
          isProductInStock: false,
          isFreeDeliveryAvailable: false,
          thumbnail: "",
          images: [...formData.images],
          colors:[...formData.colors],
          sizes:[...formData.sizes],
        });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/products`, {
          ...formData,
          discount: {
            discountPercentage: parseFloat(formData.discountPercentage),
            discountText: formData.discountText,
          },
        });

        const newProducts = [...products, response.data];
        setProducts(newProducts);
        setFormData(initialFormData);
        console.log(newProducts);
        console.log(`Added product with ID ${response.data._id}`);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };
  const handleEditProduct = (productId) => {
    console.log(`Edit product with ID ${productId}`);
    axios
      .get(`${url}/${productId}`)
      .then((res) => {
        setFormData({
          ...res.data,
          colors:[res.data.colors],
          sizes:[res.data.sizes],
          images:[res.data.images],
          discountText: res.data.discount.discountText,
          discountPercentage: res.data.discount.discountPercentage,
        });
        console.log(formData);
        setEditId(productId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/products/${productId}`)
      .then(() => {
        fetchData();
        console.log(`Product with ID ${productId} deleted.`);
      })
      .catch((error) => {
        console.error(`Error deleting product with ID ${productId}:`, error);
      });
  };

  useEffect(() => {
    fetchData();
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData.username.includes("@admin")) {
      alert("You are admiin");
    } else {
      alert("You can't access this page");
      navigate("/");
    }
  }, []);

  return (
    <div className="container overflow-hidden">
      <h1>Product List</h1>
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
                <button onClick={() => handleEditProduct(product.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteProduct(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <div>
          <h2>Product Details</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Name: {selectedProduct.productTitle}</p>
          <p>
            Stock:{" "}
            {selectedProduct.isProductInStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      )}

      <div className="axil-checkout-billing">
        <h4 className="title mb--40">
          {editId ? "Edit Product" : "Add Product"}
        </h4>
        <div className="row">
          <div className="form-group">
            <label>
              Product Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="#Product Name Here"
              name="productTitle"
              value={formData.productTitle}
              onChange={(e) => FormChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                Current Price<span>*</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Current Price"
                value={formData.price}
                onChange={(e) => FormChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                Old Price<span>*</span>
              </label>
              <input
                type="text"
                name="oldPrice"
                placeholder="Old Price"
                onChange={(e) => FormChange(e)}
                value={formData.oldPrice}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>COUPON CODE</label>
          <input
            type="text"
            name="discountCode"
            onChange={(e) => FormChange(e)}
            value={formData.discountCode}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows={2}
            name="description"
            placeholder="Description about your product"
            defaultValue={""}
            value={formData.description}
            onChange={(e) => FormChange(e)}
          />
        </div>
        <div className="row">
          {Array.from({ length: 3 }, (_, i) => (
            <div className="col-lg-4" key={i}>
              <div className="form-group">
                <label>
                  Color {i + 1} <span>*</span>
                </label>
                <input
                  type="text"
                  name={`color-${i + 1}`}
                  placeholder={`#Your Color Product ${i + 1}`}
                  value={formData?.colors[i] || ""}
                  onChange={(e) => {
                    const updatedColor =  [...formData.colors];
                    updatedColor[i] = e.target.value;
                    setFormData({ ...formData, colors: updatedColor })}}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {Array.from({ length: 5 }, (_, i) => (
            <div className="col-lg-2" key={i}>
              <div className="form-group">
                <label>
                  Size {i + 1} <span>*</span>
                </label>
                <input
                  type="text"
                  name={`size_${i + 1}`}
                  placeholder={`Product Size ${i + 1}`}
                  onChange={(e)=>{
                    const updatedSize =  [...formData.sizes];
                    updatedSize[i] = e.target.value;
                    setFormData({ ...formData, sizes: updatedSize })
                  }}
                  value={formData?.sizes[i] || ""}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4>Slick Images</h4>
          {[1, 2, 3, 4].map((item, i) => {
            return (
              <div className="form-group">
                <label>
                  Slick Image {item}
                  <span>*</span>
                </label>
                <input
                  type="text"
                  id={`slick_${item}`}
                  name={`slick_${item}`}
                  placeholder={`Slick Url ${item} `}
                  value={formData?.images[i] || ""}
                  onChange={(e) => {
                    const updatedImages =  [...formData.images];
                    updatedImages[i] = e.target.value;
                    setFormData({ ...formData, images: updatedImages})
                  }}
                />
              </div>
            );
          })}

          {/* <form className="image-upload-form" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <div className="dropzone" id="slick-images-dropzone">
                Drag &amp; drop images here, or click to select images
                <input
                  type="file"
                  id="slick-images-input"
                  className="imageInput"
                  name="slick-images"
                  multiple
                  accept="image/*"
                />
              </div>
            </div>
          </form>
          <div id="slick-image-previews" className="preview-row"></div> */}
        </div>
        <div>
          <h4>ThumbNail Images</h4>
          <div className="form-group">
            <label>
              Upload Image<span>*</span>
            </label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              placeholder="Image Url"
              value={formData.thumbnail}
              onChange={(e) => {
                FormChange(e);
              }}
            />
          </div>
          {/* <form className="image-upload-form" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <div className="dropzone" id="thumbnail-images-dropzone">
                Drag &amp; drop images here, or click to select images
                <input
                  type="file"
                  id="thumbnail-images-input"
                  className="imageInput"
                  name="thumbnail-images"
                  multiple
                  accept="image/*"
                />
              </div>
            </div>
          </form>
          <div id="thumbnail-image-previews" className="preview-row"> */}
          {/* Image previews will be displayed here */}
          {/* </div> */}
        </div>
        <div className="form-group">
          <label>
            Categories <span>*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => FormChange(e)}
          >
            <option>Electronics</option>
            <option>Electronics</option>
            <option>Electronics Zealand</option>
            <option>Electronics</option>
            <option>Electronics Kingdom (UK)</option>
            <option>Electronics States (USA)</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Discount<span>*</span>
          </label>
          <input
            type="number"
            id="discount-amount"
            name="discountPercentage"
            placeholder="Discount Percentage"
            onChange={(e) => {
              FormChange(e);
            }}
            value={formData.discountPercentage}
          />
          <input
            type="text"
            className="mt-5"
            id="discount-text"
            name="discountText"
            placeholder="Discount Text"
            onChange={(e) => {
              FormChange(e);
            }}
            value={formData.discountText}
          />
        </div>
        <div className="form-group input-group">
          <div className="col-lg-3">
            <input
              type="checkbox"
              id="in-stock-checkbox"
              name="isProductInStock"
              checked={formData.isProductInStock}
              onChange={(e) => {
                const name = e.target.name;
                const checked = e.target.checked;
                setFormData({ ...formData, [name]: checked });
              }}
            />
            <label htmlFor="in-stock-checkbox">In Stock</label>
          </div>
          <div className="col-lg-3">
            <input
              type="checkbox"
              id="free-delivery-checkbox"
              name="isFreeDeliveryAvailable"
              checked={formData.isFreeDeliveryAvailable}
              onChange={(e) => {
                const name = e.target.name;
                const checked = e.target.checked;
                setFormData({ ...formData, [name]: checked });
              }}
            />
            <label htmlFor="free-delivery-checkbox">Free Delivery</label>
          </div>
        </div>

        <button
          type="submit"
          className="axil-btn btn-bg-primary w-25 py-3 px-3 mb-4"
          onClick={() => handleAddProduct()}
        >
          {editId ? "Edit Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AdminProduct;
