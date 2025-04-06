import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/marquee.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(false);

  const mobileMenuRef = useRef(null);
  const dropdownRefs = useRef([]);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle dropdown click outside
  useEffect(() => {
    const handleDropdownClickOutside = (event) => {
      if (dropdownOpen !== null && clickedDropdown) {
        const currentDropdownRef = dropdownRefs.current[dropdownOpen];
        if (currentDropdownRef && !currentDropdownRef.contains(event.target)) {
          setDropdownOpen(null);
          setClickedDropdown(false);
        }
      }
    };

    document.addEventListener("mousedown", handleDropdownClickOutside);
    return () => document.removeEventListener("mousedown", handleDropdownClickOutside);
  }, [dropdownOpen, clickedDropdown]);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
    setClickedDropdown(true);
  };

  const handleDropdownHover = (index) => {
    if (!clickedDropdown) {
      setDropdownOpen(index);
    }
  };

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { 
      title: "Industry Directory", 
      dropdown: [
        { name: "Manufacturers", link: "/directory/manufacturers" },
        { name: "Trader & Wholeseller", link: "/directory/trader" },
        { name: "Service Provider", link: "/directory/service" },
        { name: "Exporter", link: "/directory/exporter" },
        { name: "Others", link: "/directory/others" }
      ]
    },
    { title: "List Business", link: "/list-business" },
    { title: "Requirements", link: "/post-requirements" },
    { 
      title: "Publications", 
      dropdown: [
        { name: "Buying-Selling", link: "/publications/buying-selling" },
        { name: "Job Posting", link: "/publications/career" },
      ]
    },
    { title: "Membership Plan", link: "/membership" },
    { title: "Contact Us", link: "/contact" },
  ];

  // Function to allocate ref for dropdown
  const allocateDropdownRef = (index) => {
    if (!dropdownRefs.current[index]) {
      dropdownRefs.current[index] = React.createRef();
    }
    return dropdownRefs.current[index];
  };

  return (
    <nav
      className={`fixed select-none left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 top-0 shadow-lg py-2" 
          : "bg-white backdrop-blur-lg py-1"
      }`}
    >
      <div className="px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-primary">POULTRY</span>
          <span className="text-darkText">DIGITAL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="relative"
              ref={item.dropdown ? (ref) => dropdownRefs.current[index] = ref : null}
            >
              {item.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    onMouseEnter={() => handleDropdownHover(index)}
                    className={`text-gray-700 hover:text-primary transition-all font-medium text-sm px-2 py-2 rounded-md hover:bg-darkText ${
                      dropdownOpen === index ? "text-primary bg-darkText" : ""
                    }`}
                  >
                    {item.title}
                    {/* <FaChevronDown 
                      className={`ml-1 text-xs transition-transform duration-300 ${
                        dropdownOpen === index ? "rotate-180" : ""
                      }`} 
                    /> */}
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-1 bg-white shadow-xl rounded-lg w-56 py-2 z-20 border border-gray-100"
                        onMouseLeave={() => !clickedDropdown && setDropdownOpen(null)}
                      >
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                        
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-darkText hover:text-primary transition-all"
                            onClick={() => {
                              setDropdownOpen(null);
                              setClickedDropdown(false);
                            }}
                          >
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.05 * subIndex }}
                            >
                              {subItem.name}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={item.link || "#"}
                  className="flex text-center text-gray-700 hover:text-primary transition-all font-medium text-sm px-3 py-2 rounded-md hover:bg-darkText"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          
          {/* Auth Buttons */}
          <div className="flex items-center ml-4 space-x-4">
            <Link to="/login">
              <motion.span 
                className="text-sm font-medium text-primary hover:text-darkprimary transition-colors" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.span>
            </Link>
            
            <Link to="/register">
              <motion.div 
                className="px-4 py-2 text-white text-sm font-medium bg-primary rounded-md hover:bg-darkprimary transition-colors" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Mobile Auth Buttons */}
        {/* <div className="flex items-center md:hidden space-x-2 mr-2">
          <Link to="/login">
            <motion.span 
              className="text-sm font-medium text-yellow-600" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.span>
          </Link>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-700 hover:bg-yellow-50 p-2 rounded-md"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 flex flex-col py-8 px-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-primary">
                POULTRY DIGITAL
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:bg-gray-100 p-2 rounded-full"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                        className="flex justify-between items-center w-full text-gray-800 font-medium py-2"
                      >
                        {item.title}
                        <span className="ml-2">
                          {dropdownOpen === index ? (
                            <FaTimes size={12} />
                          ) : (
                            <span className="text-lg">+</span>
                          )}
                        </span>
                      </button>

                      {dropdownOpen === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-600 py-2"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-800 font-medium py-2"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="mt-auto pt-6 gap-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.span 
                  className="text-xl pb-2 font-medium text-primary hover:text-darkprimary transition-colors block text-center" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.span>
              </Link>
              
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="px-8 py-3 text-white text-lg font-medium bg-darkprimary rounded-md transition-colors text-center" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;