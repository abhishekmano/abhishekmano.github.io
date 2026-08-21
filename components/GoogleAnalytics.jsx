import React from "react";
import Script from "next/script";

const id = "G-DWSMVKXQS2";

// Analytics runs only on the deployed site. The hostname is checked inside the
// injected script rather than in React state, so a local run makes no request to
// Google at all -- not even the gtag.js fetch -- and the component needs no
// client boundary, no effect and no hydration guard.
const analyticsHosts = ["abhishekmano.github.io"];

const GoogleAnalytics = () => {
  return (
    <Script id="gtag-init" strategy="lazyOnload">
      {`
        (function () {
          if (!${JSON.stringify(analyticsHosts)}.includes(location.hostname)) return;

          var tag = document.createElement('script');
          tag.async = true;
          tag.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
          document.head.appendChild(tag);

          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', { page_path: location.pathname });
        })();
      `}
    </Script>
  );
};

export default GoogleAnalytics;
