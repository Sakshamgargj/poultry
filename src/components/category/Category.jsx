import { useDataContext } from '../../context/DataContext';
import { useState, useRef, useEffect, useMemo } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Eye,ArrowLeft,ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

export default function CategorySidebar() {
  const { category, subcategory, product, adImages } = useDataContext();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const sidebarRef = useRef();

  // Set default category on first load
  useEffect(() => {
    if (!selectedCategory && category?.category?.length > 0) {
      setSelectedCategory(category.category[0]);
    }
  }, [category]);

  const filteredSubcategories = useMemo(() => {
    if (!selectedCategory || !subcategory?.subcategory) return [];

    return subcategory.subcategory.filter((sub) => {
      return (
        sub.categoryId === selectedCategory._id ||
        sub?.categoryId === selectedCategory?._id
      );
    });
  }, [selectedCategory, subcategory]);


  useEffect(() => {
    const totalPages = Math.ceil(filteredSubcategories.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredSubcategories]);

  const totalItems = filteredSubcategories.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredSubcategories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // console.log("totalItems", totalItems)
  // console.log("selectedCategory:", selectedCategory);
  // console.log("subcategory.subcategory:", subcategory?.subcategory);
  // console.log("filteredSubcategories:", filteredSubcategories);
  // console.log("currentItems:", currentItems);

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
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
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
    <div className="flex py-2 select-none px-4 md:px-8 flex-col md:flex-row h-auto">
      {/* Mobile Toggle */}
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
        className={`fixed top-0 left-0 h-screen md:h-auto w-64 bg-darkprimary md:bg-transparent pt-24 md:pt-0 border-r-2 border-gray-400 border-dotted transition-transform transform md:relative md:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 pb-2">
            <h2 className="text-xl text-center text-black sm:text-darkprimary md:py-4 mb-2">Buyers Guide</h2>
          </div>

          <div className="flex-1 max-h-screen overflow-y-auto px-4 pb-4">
            {category.category?.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-left p-2 rounded-lg mb-2 hover:bg-darkprimary transition-all ${selectedCategory?._id === item._id ? "bg-gradient-to-r from-primary to-darkprimary text-white" : ""
                  }`}
                onClick={() => {
                  setSelectedCategory(item);
                  setShowSidebar(false);
                  setCurrentPage(1);
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full text-lg text-center md:w-3/4 p-4">
        <h2 className="text-2xl text-darkprimary border-b-2 border-gray-400 border-dotted pb-2 mb-4">
          {selectedCategory?.name || "Select Category"}
        </h2>

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentItems.map((sub, index) => (
              <div
                key={index}
                className="md:relative group rounded-lg p-1 md:p-3 bg-white transition-all"
              >
                <Link
                  to={`/company-detail/${sub._id}`}>
                  <motion.img
                    src={sub.img}
                    alt={sub.name}
                    className="w-full h-20 md:h-32 object-cover rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Slide-in buttons on right */}
                  <div className="absolute top-2 right-2 flex pt-4 flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Product Details */}
                    <div
                      className="group flex items-center bg-white text-sm px-2 py-2 rounded shadow hover:bg-darkprimary hover:text-black transition-all duration-300 overflow-hidden"
                    >
                      <Eye size={20} className="mr-1" />
                    </div>
                  </div>

                  {/* Product Name */}
                  <p className="mt-3 font-mono text-center text-sm text-darkText">{sub.name}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-center text-sm text-darkText font-mono">No Company data exists</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="mt-10 flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gradient-to-r from-primary to-darkprimary/80 text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={16} className="mr-1" /> Prev
            </motion.button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-md ${currentPage === page
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-darkText hover:bg-gray-300'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gradient-to-r from-primary to-darkprimary/80 text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next <ArrowRight size={16} className="ml-1" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Ad Images */}
      <div className="relative w-full md:w-1/4 h-auto  overflow-hidden">
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
          {adImages.adImages.map((img, index) => (
            <img
              key={index}
              src={img.updateImg}
              alt={`Banner ${index + 1}`}
              className="w-full p-1 h-auto hover:scale-105 object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}


// import { useDataContext } from '../../context/DataContext';
// import { useState, useRef, useEffect } from "react";
// import { Menu } from "lucide-react";
// import { motion } from "framer-motion";

// const ITEMS_PER_PAGE = 15;

// export default function CategorySidebar() {
//   const { category, subcategory, product, adImages } = useDataContext();
//   console.log("category",category)
//   console.log("subcategory",subcategory)
//   console.log("product",product)
//   console.log("adImages",adImages)
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     if (!selectedCategory && category?.category?.length > 0) {
//       setSelectedCategory(category.category[0]);
//     }
//   }, [category]);
//     const [showSidebar, setShowSidebar] = useState(false);
//   const sidebarRef = useRef();
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalItems = selectedCategory?.subcategory.length;
//   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = selectedCategory?.subcategory.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setShowSidebar(false);
//       }
//     };

//     const handleScroll = (event) => {
//       if (!sidebarRef.current) return;

//       const sidebarEl = sidebarRef.current;
//       if (sidebarEl.contains(event.target)) {
//         setShowSidebar(true);  // scrolling inside sidebar
//       } else {
//         setShowSidebar(false); // scrolling outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("scroll", handleScroll, { capture: true, passive: true });

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("scroll", handleScroll, { capture: true });
//     };
//   }, []);

//   return (
//     <div className="flex select-none px-4 md:px-8 flex-col md:flex-row h-auto">
//       {/* Mobile Sidebar Toggle Button */}
//       <div className="md:hidden p-4">
//         <button
//           onClick={() => setShowSidebar(!showSidebar)}
//           className="bg-primary text-white p-2 rounded-md flex items-center"
//         >
//           <Menu className="mr-2" /> Categories
//         </button>
//       </div>

//       {/* Sidebar */}
//       <motion.div
//         ref={sidebarRef}
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 left-0 h-screen md:h-auto w-64 bg-darkprimary md:bg-transparent pt-24 md:pt-0 border-r-2 border-gray-400 border-dotted transition-transform transform md:relative md:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"
//           }`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="px-4 pb-2">
//             <h2 className="text-xl text-center text-white sm:text-darkprimary mb-2">
//               Buyers Guide
//             </h2>
//           </div>

//           <div className="flex-1 overflow-y-auto px-4 pb-4">
//             {category.category.map((item, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`block w-full text-left p-2 rounded-lg mb-2 hover:bg-darkprimary transition-all ${selectedCategory?.name === item.name
//                   ? "bg-gradient-to-r from-primary to-darkprimary/60 text-white"
//                   : ""
//                   }`}
//                 onClick={() => {
//                   setSelectedCategory(item);
//                   setShowSidebar(false);
//                 }}
//               >
//                 {item.name}
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </motion.div>


//       {/* Main Content */}
//       <div className="w-full text-lg text-center md:w-3/4 p-4">
//         <h2 className="text-2xl text-darkprimary border-b-2 border-gray-400 border-dotted pb-2 mb-4">
//           {selectedCategory?.name||"cds"}
//         </h2>

//         {/* <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
//           {currentItems.map((sub, index) => (
//             <div
//               key={index}
//               className="rounded-lg p-4 transition-all "
//             >
//               <motion.img
//                 src={sub.image}
//                 alt={sub.image}
//                 className="w-full h-20 md:h-32 object-cover rounded-md"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <p className="mt-3 font-mono text-center text-sm text-darkText">{sub.title}</p>
//             </div>
//           ))}
//         </div> */}

//         {totalPages > 1 && (
//           <div className="mt-6 flex justify-center items-center gap-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentPage === 1}
//               className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
//             >
//               Prev
//             </button>
//             <span className="text-sm">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Show all Ads Images in sequence */}
//       <div className="relative w-full md:w-1/4 h-auto rounded-2xl overflow-hidden">
//         <motion.div
//           className="absolute w-full flex flex-col items-center"
//           animate={{ y: ["0%", "-100%"] }}
//           transition={{
//             duration: 12,
//             ease: "linear",
//             repeat: Infinity,
//             repeatDelay: -5,
//           }}
//         >
//           {adImages.adImages.map((img, index) => (
//             <img
//               key={index}
//               src={img.updateImg}
//               alt={`Banner ${index + 1}`}
//               className="w-full p-1 h-auto rounded-2xl hover:scale-105 object-cover"
//             />
//           ))}
//         </motion.div>
//       </div>

//     </div>
//   );
// }
