import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSection = () => {
  const [brands1, setBrands1] = useState([]);
  const [brands2, setBrands2] = useState([]);

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
      { breakpoint: 1024, settings: { slidesToShow: 4, speed: 4000 } },
      { breakpoint: 768, settings: { slidesToShow: 3, speed: 3500 } },
      { breakpoint: 640, settings: { slidesToShow: 2, speed: 3000 } },
    ]
  };

  const fetchBrands = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}clientsImage/show`);
      if (res.data && res.data.clientsImage) {
        const all = res.data.clientsImage;
        setBrands1(all.slice(0, 5)); // first 5
        setBrands2(all.slice(5));    // remaining
      }
    } catch (error) {
      console.error("Failed to fetch brand data:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <section className="w-full select-none px-4 md:px-8 py-2 sm:py-4">
      <h2 className="text-center text-darkprimary text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Our Clients
      </h2>

      <div className="max-w-8xl mx-auto px-2">
        {/* Forward Scroll */}
        <div className="mb-4 sm:mb-6">
          <Slider {...sliderSettings}>
            {brands1.map((brand, index) => (
              <div key={`top-${index}`} className="px-2">
                {brand.link ? (
                  <a href={brand.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={brand.img}
                      alt={`Brand ${index + 1}`}
                      className="w-24 sm:w-32 md:w-40 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mx-auto transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                ) : (
                  <img
                    src={brand.img}
                    alt={`Brand ${index + 1}`}
                    className="w-24 sm:w-32 md:w-40 mx-auto transition-transform duration-300 hover:scale-110"
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* Reverse Scroll */}
        <div>
          <Slider {...{ ...sliderSettings, rtl: true, speed: 6000 }}>
            {brands2.slice().reverse().map((brand, index) => (
              <div key={`bottom-${index}`} className="px-2">
                {brand.link ? (
                  <a href={brand.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={brand.img}
                      alt={`Brand ${brands2.length - index}`}
                      className="w-24 sm:w-32 md:w-40 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mx-auto transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                ) : (
                  <img
                    src={brand.img}
                    alt={`Brand ${brands2.length - index}`}
                    className="w-24 sm:w-32 md:w-40 mx-auto transition-transform duration-300 hover:scale-110"
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
