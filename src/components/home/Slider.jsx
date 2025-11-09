import { useState } from "react";
import banner1 from "../../assets/images/home/banner1.png";
import banner2 from "../../assets/images/home/banner2.png";
// import banner3 from "../../assets/images/home/banner3.png";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import SliderSkeleton from "./skeltons/SliderSkeleton";

const Slider = () => {
  const slides = [banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="banner-border slider-wrapper position-relative overflow-hidden">

      {/* Slider container */}
      <div className={`d-flex`}>
        <div className="slider-wrapper flex-shrink-0">
          <img
            src={slides[currentIndex]}
            alt={`slider`}
            className="slider-img"
          />
        </div>
      </div>

      {/* Arrows + Dots group */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex align-items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <button
          onClick={handlePrev}
          className="slider-button border-0 bg-transparent fs-4 fw-bold"
        >
          <RiArrowLeftLine size={32} />
        </button>

        {/* Dots */}
        <div className="d-flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`slider-dots rounded-circle border-0 p-0 ${
                index === currentIndex ? "bg-dark" : "bg-light"
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="border-0 bg-transparent fs-4 fw-bold"
          style={{ cursor: "pointer" }}
        >
          <RiArrowRightLine size={32} />
        </button>
      </div>
    </main>
  );
};

export default Slider;
