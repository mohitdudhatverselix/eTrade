import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import {
  ErrorPage,
  Home,
  Shop,
  SingleProductPage,
  CartPage,
  WishlistPage,
  CheckOutPage,
  PrivacyPolicyPage,
  AboutUs,
  MyAccountPage,
  ContactPage,
  AdminProduct,
  SearchModal,
  Dashboard,
  Signin,
  Signup,
  ResetPassword,
  ForgotPassword,
  LoadingBar,
  axilBackToTop,
  axilSlickActivation,
  salActivation,
  quantityRanger,
  scrollSmoth,
  counterUpActivation,
  onLoadClassAdd,
  dropdownMenuSlide,
  axilMasonary,
  colorVariantActive,
  headerCampaignRemove,
  offerPopupActivation,
  campaignCountdown,
  sideOffcanvasToggle,
  magnificPopupActivation,
  shopFilterWidget,
  mobileMenuActivation,
  headerIconToggle,
  priceRangeSlider,
  countdownInit,
  menuLinkActive,
  initFunction,
} from "./Components";

function App() {
  const [progress, setProgress] = useState(0);
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = callback;
      document.head.appendChild(script);
    };
    const scriptSources = [
      "/assets/js/vendor/modernizr.min.js",
      "/assets/js/vendor/jquery.js",
      "/assets/js/vendor/popper.min.js",
      "/assets/js/vendor/bootstrap.min.js",
      "/assets/js/vendor/slick.min.js",
      "/assets/js/vendor/js.cookie.js",
      "/assets/js/vendor/jquery-ui.min.js",
      "/assets/js/vendor/jquery.ui.touch-punch.min.js",
      "/assets/js/vendor/jquery.countdown.min.js",
      "/assets/js/vendor/sal.js",
      "/assets/js/vendor/jquery.magnific-popup.min.js",
      "/assets/js/vendor/imagesloaded.pkgd.min.js",
      "/assets/js/vendor/isotope.pkgd.min.js",
      "/assets/js/vendor/counterup.js",
      "/assets/js/vendor/waypoints.min.js",
      "/assets/js/main.js",
    ];
    const loadScripts = (index) => {
      if (index < scriptSources.length) {
        loadScript(scriptSources[index], () => loadScripts(index + 1));
      }
    };
    $(document).on("turbo:before-cache", function () {
      const sliders = document.querySelectorAll(".slick-initialized");

      sliders.forEach((item) => {
        $(item).slick("unslick");
      });
    });
    setProgress(progress + 10);
    setProgress(progress + 20);
    setProgress(progress + 30);
    setProgress(100);
    setTimeout(() => {
      loadScripts(0);
      // initFunction();
    }, 1500);

    return () => {
      scriptSources.forEach((src) => {
        const scriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptElement) {
          scriptElement.remove();
        }
      });
    };
  }, []);
  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => {
          setProgress(100);
          setRender(!render);
          setLoading(true);
        }}
      />
      {loading && (
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/admin/product" element={<AdminProduct />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/shop.html" element={<Shop />} />
            <Route
              path="/single-product.html/:id"
              element={<SingleProductPage />}
            />
            <Route path="/cart.html" element={<CartPage />} />
            <Route path="/wishlist.html" element={<WishlistPage />} />
            <Route path="/checkout.html" element={<CheckOutPage />} />
            <Route path="/sign-in.html" element={<Signin />} />
            <Route path="/sign-up.html" element={<Signup />} />
            <Route path="/reset-password.html" element={<ResetPassword />} />
            <Route path="/forgot-password.html" element={<ForgotPassword />} />
            <Route
              path="/privacy-policy.html"
              element={<PrivacyPolicyPage />}
            />
            <Route path="/error-page.html" element={<ErrorPage />} />
            <Route path="/about-us.html" element={<AboutUs />} />
            <Route path="/my-account.html" element={<MyAccountPage />} />
            <Route path="/contact.html" element={<ContactPage />} />
          </Routes>
          <SearchModal />
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
