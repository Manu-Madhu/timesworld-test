import React from "react";

import banner2 from "../../assets/images/home/banner2.png";
const Banner = () => {
  return (
    <main className="banner-border" style={{ width: "100%", height: "670px" }}>
      <img src={banner2} alt="banner2" className="object-fit-cover" style={{ width: "100%", height: "100%" }} />
    </main>
  );
};

export default Banner;
