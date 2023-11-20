import React, { useEffect, useState } from "react";
function Scripts(Component) {
  return function ScriptLoader() {
    // useEffect(() => {
    //   const loadScript = (src, callback) => {
    //     const script = document.createElement("script");
    //     script.src = src;
    //     script.defer = true;
    //     script.onload = callback;
    //     document.body.appendChild(script);
    //   };

    //   // List of script sources to load
    //   const scriptSources = [
    //     "/assets/js/vendor/modernizr.min.js",
    //     "/assets/js/vendor/jquery.js",
    //     "/assets/js/vendor/popper.min.js",
    //     "/assets/js/vendor/bootstrap.min.js",
    //     "/assets/js/vendor/slick.min.js",
    //     "/assets/js/vendor/js.cookie.js",
    //     "/assets/js/vendor/jquery-ui.min.js",
    //     "/assets/js/vendor/jquery.ui.touch-punch.min.js",
    //     "/assets/js/vendor/jquery.countdown.min.js",
    //     "/assets/js/vendor/sal.js",
    //     "/assets/js/vendor/jquery.magnific-popup.min.js",
    //     "/assets/js/vendor/imagesloaded.pkgd.min.js",
    //     "/assets/js/vendor/isotope.pkgd.min.js",
    //     "/assets/js/vendor/counterup.js",
    //     "/assets/js/vendor/waypoints.min.js",
    //     "/assets/js/main.js",
    //   ];

    //   // Load each script in sequence
    //   const loadScripts = (index) => {
    //     if (index < scriptSources.length) {
    //       loadScript(scriptSources[index], () => loadScripts(index + 1));
    //     }
    //   };

    //   // setTimeout(() => {
    //   //   loadScripts(0);
    //   // }, 1500);

    //   // Remove scripts on unmount
    //   return () => {
    //     scriptSources.forEach((src) => {
    //       const scriptElement = document.querySelector(`script[src="${src}"]`);
    //       if (scriptElement && scriptElement.parentNode === document.body) {
    //         document.body.removeChild(scriptElement);
    //       }
    //     });
    //   };
    // }, []);

    return <Component />;
  };
}

export default Scripts;
