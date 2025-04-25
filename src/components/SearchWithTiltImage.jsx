import cow from '../assets/images/cow.png';
import React, { useState, useEffect } from "react";

const SearchWithTiltImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse movement for the 3D effect
  const handleMouseMove = (e) => {
    if (!isHovering) return;

    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();

    // Calculate cursor position relative to container
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setPosition({ x, y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  // Set hovering state when mouse enters
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Smooth transition back to original position when not hovering
  useEffect(() => {
    if (!isHovering) {
      const timer = setTimeout(() => {
        setPosition({ x: 0, y: 0 });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isHovering]);

  //  hidden sm:inline
  return (
    <div
      className="h-auto flex items-center justify-center px-4 py-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center md:gap-6">
          {/* Left Content: Text and Search */}
          <div className="w-full lg:w-1/2 space-y-2">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-darkText">
                Discover {" "} 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-darkprimary">
                  Poultry Digital
                </span>
              </h1>
              <p className="text-sm md:text-lg text-gray-700 ">
                The future of livestock management through cutting-edge digital solutions
              </p>
            </div>

            {/* <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-indigo-200 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transform hover:-translate-y-1 transition-all">
                Learn More
              </button>
            </div> */}
          </div>

          {/* Right Content: 3D Tilt Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full relative mt-2">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full px-6 py-4 rounded-full border-2 border-primary/35 shadow-lg focus:outline-none focus:ring-2 focus:ring-darkprimary text-darkText text-lg transition-all"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-darkprimary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
                Search
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWithTiltImage;


{/* <div 
              className="perspective-1000 relative w-full max-w-md"
              style={{
                transform: isHovering ? 
                  `perspective(1000px) rotateY(${-position.x * 30}deg) rotateX(${position.y * 20}deg)` : 
                  'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
              }}
            >

              <div 
                className="relative z-10 transform transition-transform duration-300 ease-out  overflow-hidden"
                style={{
                  transform: `translateZ(50px)`,
                }}
              >
                <img
                  src={cow}
                  alt="Poultry Digital"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div 
                className="absolute top-8 -right-8 w-48 h-48 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 blur-xl"
                style={{
                  transform: `translateZ(-50px) translate(${position.x * -30}px, ${position.y * -30}px)`,
                  transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }}
              ></div>
              
              <div 
                className="absolute -bottom-8 -left-8 w-64 h-48 bg-gradient-to-r from-green-500 to-green-900 rounded-full opacity-20 blur-xl"
                style={{
                  transform: `translateZ(-80px) translate(${position.x * -40}px, ${position.y * -40}px)`,
                  transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }}
              ></div>
            </div> */}