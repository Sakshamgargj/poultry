import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import image1 from '../../assets/images/img1.jpg';
import image2 from '../../assets/images/img2.jpg';
import image3 from '../../assets/images/img3.jpg';
import image4 from '../../assets/images/img4.jpg';
import image5 from '../../assets/images/img5.jpg';
import image6 from '../../assets/images/img6.jpg';
import image7 from '../../assets/images/img7.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7];

const CategoryData = [
  {
    category: 'Dairy Farms and Breeders',
    subcategories: [
      { image: image1, title: 'Dairy 1' },
      { image: image2, title: 'Dairy 2' },
      { image: image3, title: 'Dairy 3' },
      { image: image4, title: 'Dairy 4' },
      { image: image5, title: 'Dairy 5' },
      { image: image6, title: 'Dairy 6' },
      { image: image7, title: 'Dairy 7' },
    ]
  },
  {
    category: 'Beverages Manufacturers',
    subcategories: [
      { image: image1, title: 'Beverage 1' },
      { image: image2, title: 'Beverage 2' },
      { image: image3, title: 'Beverage 3' },
      { image: image4, title: 'Beverage 4' },
      { image: image5, title: 'Beverage 5' },
    ]
  },
  {
    category: 'Books & Stationary',
    subcategories: [
      { image: image1, title: 'Book 1' },
      { image: image2, title: 'Book 2' },
      { image: image3, title: 'Book 3' },
      { image: image4, title: 'Book 4' },
      { image: image5, title: 'Book 5' },
    ]
  },
  {
    category: 'Cooling Plants, Freezers ',
    subcategories: [
      { image: image1, title: 'Plant 1' },
      { image: image2, title: 'Plant 2' },
      { image: image3, title: 'Plant 3' },
      { image: image4, title: 'Plant 4' },
      { image: image5, title: 'Plant 5' },
    ]
  },
  {
    category: 'Food Processing Equipment',
    subcategories: [
      { image: image1, title: 'Equipment 1' },
      { image: image2, title: 'Equipment 2' },
      { image: image3, title: 'Equipment 3' },
      { image: image4, title: 'Equipment 4' },
      { image: image5, title: 'Equipment 5' },
    ]
  },
  {
    category: 'Food Products Bulk Sellers',
    subcategories: [
      { image: image1, title: ' Food 1' },
      { image: image2, title: ' Food 2' },
      { image: image3, title: ' Food 3' },
      { image: image4, title: ' Food 4' },
      { image: image5, title: ' Food 5' },
    ]
  },
  {
    category: 'Ice Cream Dealers',
    subcategories: [
      { image: image1, title: 'Cream 1' },
      { image: image2, title: 'Cream 2' },
      { image: image3, title: 'Cream 3' },
      { image: image4, title: 'Cream 4' },
      { image: image5, title: 'Cream 5' },
    ]
  },
  {
    category: 'Ice Cream Machines',
    subcategories: [
      { image: image1, title: 'Product 1' },
      { image: image2, title: 'Product 2' },
      { image: image3, title: 'Product 3' },
      { image: image4, title: 'Product 4' },
      { image: image5, title: 'Product 5' },
    ]
  },
  {
    category: 'Ice Cream Manufacturers',
    subcategories: [
      { image: image1, title: 'Manufacturer 1' },
      { image: image2, title: 'Manufacturer 2' },
      { image: image3, title: 'Manufacturer 3' },
      { image: image4, title: 'Manufacturer 4' },
      { image: image5, title: 'Manufacturer 5' },
    ]
  },
  {
    category: 'Livestock Products',
    subcategories: [
      { image: image1, title: 'Livestock 1' },
      { image: image2, title: 'Livestock 2' },
      { image: image3, title: 'Livestock 3' },
      { image: image4, title: 'Livestock 4' },
      { image: image5, title: 'Livestock 5' },
    ]
  },
  {
    category: 'Scientific and Testing Instruments',
    subcategories: [
      { image: image1, title: 'Instrument 1' },
      { image: image2, title: 'Instrument 2' },
      { image: image3, title: 'Instrument 3' },
      { image: image4, title: 'Instrument 4' },
      { image: image5, title: 'Instrument 5' },
    ]
  },
  {
    category: 'Weighing Machines',
    subcategories: [
      { image: image1, title: 'Weighing 1' },
      { image: image2, title: 'Weighing 2' },
      { image: image3, title: 'Weighing 3' },
      { image: image4, title: 'Weighing 4' },
      { image: image5, title: 'Weighing 5' },
    ]
  },
];
const ITEMS_PER_PAGE = 15;

export default function CategorySidebar() {
  const [selectedCategory, setSelectedCategory] = useState(CategoryData[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = selectedCategory.subcategories.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = selectedCategory.subcategories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    const handleScroll = (event) => {
      if (!sidebarRef.current) return;

      const sidebarEl = sidebarRef.current;
      if (sidebarEl.contains(event.target)) {
        setShowSidebar(true);  // scrolling inside sidebar
      } else {
        setShowSidebar(false); // scrolling outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, { capture: true, passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  return (
    <div className="flex select-none px-4 md:px-8 flex-col md:flex-row h-auto">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-primary text-white p-2 rounded-md flex items-center"
        >
          <Menu className="mr-2" /> Categories
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 h-screen w-64 bg-darkprimary md:bg-transparent pt-16 md:pt-0 border-r-2 border-gray-400 border-dotted transition-transform transform md:relative md:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 pb-2">
            <h2 className="text-xl text-center text-white sm:text-darkprimary mb-2">
              Buyers Guide
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {CategoryData.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-left p-2 rounded-lg mb-2 hover:bg-darkprimary transition-all ${selectedCategory.category === item.category
                  ? "bg-gradient-to-r from-primary to-darkprimary/60 text-white"
                  : ""
                  }`}
                onClick={() => {
                  setSelectedCategory(item);
                  setShowSidebar(false);
                }}
              >
                {item.category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Main Content */}
      <div className="w-full text-lg text-center md:w-3/4 p-4">
        <h2 className="text-2xl text-darkprimary border-b-2 border-gray-400 border-dotted pb-2 mb-4">
          {selectedCategory.category}
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {currentItems.map((sub, index) => (
            <div
              key={index}
              className="rounded-lg p-4 transition-all "
            >
              <motion.img
                src={sub.image}
                alt={sub.image}
                className="w-full h-20 md:h-32 object-cover rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="mt-3 font-mono text-center text-sm text-darkText">{sub.title}</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Show all Ads Images in sequence */}
      <div className="relative w-full md:w-1/4 h-auto overflow-hidden">
        <motion.div
          className="absolute w-full flex flex-col items-center"
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: -5,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full p-1 h-auto rounded-2xl hover:scale-105 object-cover"
            />
          ))}
        </motion.div>
      </div>

    </div>
  );
}
