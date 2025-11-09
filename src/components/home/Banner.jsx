import React from "react";

import banner2 from "../../assets/images/home/banner2.png";
import bannerMobile from "../../assets/images/home/bannerMobile2.png";
const Banner = () => {
  return (
    <main className="hero-right  banner-border">
      {/* Show desktop */}
      <img
        src={banner2}
        alt="banner2"
        className="d-none d-md-block object-fit-cover"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Show mobile */}
      <img
        src={bannerMobile}
        alt="banner-sm"
        className="d-block d-md-none object-fit-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </main>
  );
};

export default Banner;
