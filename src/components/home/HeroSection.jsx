import React from "react";
import Slider from "./Slider";
import Banner from "./Banner";

const HeroSection = () => {
  return (
    <main className="common-container px-4 px-md-3 mt-4">
      <div className="d-flex flex-column flex-md-row gap-5 hero-wrapper">
        {/* Slider (left) */}
        <section className="hero-left flex-grow-1">
          <Slider />
        </section>

        {/* Side banner (right) */}
        <aside className="hero-right">
          <Banner />
        </aside>
      </div>
    </main>
  );
};

export default HeroSection;
