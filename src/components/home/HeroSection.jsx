import Slider from "./Slider";
import Banner from "./Banner";

const HeroSection = () => {
  return (
    <main className="common-container px-4 px-md-3 mt-2 mt-md-4">
      <div className="d-flex flex-column-reverse flex-md-row gap-4 gap-md-5 hero-wrapper">
        {/* Slider (left) */}
        <section className="hero-left">
          <Slider />
        </section>

        {/* Side banner (right) */}
        <aside className="hero-right ">
          <Banner />
        </aside>
      </div>
    </main>
  );
};

export default HeroSection;
