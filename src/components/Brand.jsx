import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brand1 from "../assets/brands/brand-1.png";
import brand2 from "../assets/brands/brand-2.png";
import brand3 from "../assets/brands/brand-3.png";
import brand4 from "../assets/brands/brand-4.png";
import brand5 from "../assets/brands/brand-5.png";
import brand6 from "../assets/brands/brand-6.png";
import brand7 from "../assets/brands/brand-7.png";
import brand8 from "../assets/brands/brand-8.png";
import brand9 from "../assets/brands/brand-9.png";
import brand10 from "../assets/brands/brand-10.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10];

// Slider settings
const sliderSettings = {
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
};

const BrandSection = () => {
  return (
    <section className="w-full py-10">
      <h2 className="text-center text-2xl font-semibold mb-6">Our Clients</h2>
      <div className="max-w-8xl mx-auto">
        {/* First Row */}
        <Slider {...sliderSettings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-2">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-40 mx-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </Slider>

        {/* Second Row - Reverse Direction */}
        <Slider {...{ ...sliderSettings, rtl: true, speed: 6000 }}>
          {brands.reverse().map((brand, index) => (
            <div key={index} className="px-2">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-40 mx-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandSection;
