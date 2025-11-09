import { useState } from "react";

import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import CountriesSection from "../components/home/CountriesSection";
import TitleSection from "../components/home/TitleSection";

const Home = () => {
  const [active, setActive] = useState("All");

  const navItems = ["All", "Asia", "Europe"];

  return (
    <>
      {/* Navbar section*/}
      <Navbar active={active} navItems={navItems} setActive={setActive} />

      {/* Title section */}
      <TitleSection />

      {/* Hero section */}
      <HeroSection />

      {/* Country list section */}
      <CountriesSection />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
