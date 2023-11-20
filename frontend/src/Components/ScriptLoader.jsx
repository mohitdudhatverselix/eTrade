import React, { useEffect } from "react";

function ScriptLoader() {
  useEffect(() => {
    // Create an array of script URLs to load
    const scriptUrls = [
      "assets/js/vendor/modernizr.min.js",
      "assets/js/vendor/jquery.js",
      "assets/js/vendor/popper.min.js",
      "assets/js/vendor/bootstrap.min.js",
      "assets/js/vendor/slick.min.js",
      "assets/js/vendor/js.cookie.js",
      "assets/js/vendor/jquery-ui.min.js",
      "assets/js/vendor/jquery.ui.touch-punch.min.js",
      "assets/js/vendor/jquery.countdown.min.js",
      "assets/js/vendor/sal.js",
      "assets/js/vendor/jquery.magnific-popup.min.js",
      "assets/js/vendor/imagesloaded.pkgd.min.js",
      "assets/js/vendor/isotope.pkgd.min.js",
      "assets/js/vendor/counterup.js",
      "assets/js/vendor/waypoints.min.js",
      "assets/js/main.js",
    ];

    // Function to load scripts dynamically
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    // Load all scripts using Promise.all
    Promise.all(scriptUrls.map(loadScript))
      .then(() => {
        // All scripts are loaded and executed
        console.log("All scripts are loaded.");
      })
      .catch((error) => {
        console.error("Script loading error:", error);
      });
  }, []);

  return null;
}

export default ScriptLoader;
