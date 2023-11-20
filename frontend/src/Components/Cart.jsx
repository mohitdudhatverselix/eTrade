import React from "react";

const cartItems = [
  {
    id: 1,
    imgSrc: "assets/images/product/electric/product-01.png",
    altText: "Wireless PS Handler",
    rating: 5,
    ratingCount: 64,
    title: "Wireless PS Handler",
    price: 155.0,
    quantity: 15,
  },
  {
    id: 2,
    imgSrc: "assets/images/product/electric/product-02.png",
    altText: "Gradient Light Keyboard",
    rating: 5,
    ratingCount: 4,
    title: "Gradient Light Keyboard",
    price: 255.0,
    quantity: 5,
  },
  {
    id: 3,
    imgSrc: "assets/images/product/electric/product-03.png",
    altText: "HD CC Camera",
    rating: 5,
    ratingCount: 6,
    title: "HD CC Camera",
    price: 200.0,
    quantity: 100,
  },
];

export const Cart = () => {
  return (
    cartItems && (
      <div className="cart-dropdown" id="cart-dropdown">
        <div className="cart-content-wrap">
          <div className="cart-header">
            <h2 className="header-title">Cart review</h2>
            <button className="cart-close sidebar-close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="cart-body">
            <ul className="cart-item-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="item-img">
                    <a href="single-product.html">
                      <img src={item.imgSrc} alt={item.altText} />
                    </a>
                    <button className="close-btn">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="item-content">
                    <div className="product-rating">
                      <span className="icon">
                        {Array.from({ length: item.rating }, (_, index) => (
                          <i key={index} className="fas fa-star"></i>
                        ))}
                      </span>
                      <span className="rating-number">
                        ({item.ratingCount})
                      </span>
                    </div>
                    <h3 className="item-title">
                      <a href="single-product.html">{item.title}</a>
                    </h3>
                    <div className="item-price">
                      <span className="currency-symbol">$</span>
                      {item.price.toFixed(2)}
                    </div>
                    <div className="pro-qty item-quantity">
                      <input
                        type="number"
                        className="quantity-input"
                        defaultValue={item.quantity}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-footer">
            <h3 className="cart-subtotal">
              <span className="subtotal-title">Subtotal:</span>
              <span className="subtotal-amount">
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </h3>
            <div className="group-btn">
              <a
                href="cart.html"
                className="axil-btn btn-bg-primary viewcart-btn"
              >
                View Cart
              </a>
              <a
                href="checkout.html"
                className="axil-btn btn-bg-secondary checkout-btn"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
