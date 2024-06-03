import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

function Slider() { 
  const slides = [
    { url: "https://stategisportal.nic.in/stategisportal/assets/img/slider/22/slider1.png" },
    { url: "https://stategisportal.nic.in/stategisportal/assets/img/slider/22/slider2.png" },
    { url: "https://stategisportal.nic.in/stategisportal/assets/img/slider/22/slider3.png" },
    { url: "https://meetmyholiders.com/wp-content/uploads/2019/08/chhattisgarh-banner.jpg" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null); // 

  const autoplayInterval = 3000; 
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (isAutoplayEnabled) {
      intervalRef.current = setInterval(() => {
        const newIndex = (currentSlide + 1) % slides.length;
        setCurrentSlide(newIndex);
      }, autoplayInterval);
    }

    // Ensure interval is cleared on component unmount
    return () => clearInterval(intervalRef.current);
  }, [currentSlide, autoplayInterval, isAutoplayEnabled]); // Updated dependencies

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);

    // Optional: Pause autoplay on manual slide change
    if (isAutoplayEnabled) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);

    // Optional: Pause autoplay on manual slide change
    if (isAutoplayEnabled) {
      clearInterval(intervalRef.current);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);

    // Optional: Pause autoplay on manual slide change
    if (isAutoplayEnabled) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className="w-full sm:h-48 md:h-72 lg:h-[500px] overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className="w-full h-full bg-center bg-cover duration-200 relative"
      >
        <span
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={nextSlide}
        >
          <FaArrowRight size={25} color="#a3b8c2" />
        </span>
        <span
          className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={prevSlide}
        >
          <FaArrowLeft size={25} color="#a3b8c2" />
        </span>
        {/* Navigation dots */}
        <div className="absolute bottom-5 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <div key={index} onClick={() => goToSlide(index)}>
              <RxDotFilled size={15} color={currentSlide === index ? '#a3b8c2' : '#ddd'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
