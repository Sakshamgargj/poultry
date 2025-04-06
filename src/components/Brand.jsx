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

const brands1 = [brand1, brand2, brand3, brand4, brand5];
const brands2 = [ brand6, brand7, brand8, brand9, brand10];

const BrandSection = () => {
  // Responsive slider settings
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          speed: 4000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          speed: 3500,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          speed: 3000,
        }
      },
    ]
  };

  return (
    <section className="w-full h-auto py-2 sm:py-4">
      <h2 className="text-center text-darkprimary text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Our Clients</h2>
      <div className="max-w-8xl mx-auto px-2 sm:px-4">

        <div className="mb-4 sm:mb-6">
          <Slider {...sliderSettings}>
            {brands1.map((brand, index) => (
              <div key={`top-${index}`} className="px-2">
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-24 sm:w-32 md:w-40 mx-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <Slider {...{ ...sliderSettings, rtl: true, speed: 6000 }}>
            {brands2.slice().reverse().map((brand, index) => (
              <div key={`bottom-${index}`} className="px-2">
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-24 sm:w-32 md:w-40 mx-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;