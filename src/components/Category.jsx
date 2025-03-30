import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import image1 from '../assets/images/banner2.png';

const CategoryData = [
  {
    category: 'Dairy Farms and Breeders',
    subcategories: [
      { image: image1, title: 'Dairy 1' },
      { image: image1, title: 'Dairy 2' },
      { image: image1, title: 'Dairy 3' },
      { image: image1, title: 'Dairy 4' },
      { image: image1, title: 'Dairy 5' },
      { image: image1, title: 'Dairy 6' },
      { image: image1, title: 'Dairy 7' },
    ]
  },
  {
    category: 'Beverages Manufacturers',
    subcategories: [
      { image: image1, title: 'Beverage 1' },
      { image: image1, title: 'Beverage 2' },
      { image: image1, title: 'Beverage 3' },
      { image: image1, title: 'Beverage 4' },
      { image: image1, title: 'Beverage 5' },
    ]
  },
  {
    category: 'Books & Stationary',
    subcategories: [
      { image: image1, title: 'Book 1' },
      { image: image1, title: 'Book 2' },
      { image: image1, title: 'Book 3' },
      { image: image1, title: 'Book 4' },
      { image: image1, title: 'Book 5' },
    ]
  },
  {
    category: 'Cooling Plants, Freezers ',
    subcategories: [
      { image: image1, title: 'Plant 1' },
      { image: image1, title: 'Plant 2' },
      { image: image1, title: 'Plant 3' },
      { image: image1, title: 'Plant 4' },
      { image: image1, title: 'Plant 5' },
    ]
  },
  {
    category: 'Food Processing Equipment',
    subcategories: [
      { image: image1, title: 'Equipment 1' },
      { image: image1, title: 'Equipment 2' },
      { image: image1, title: 'Equipment 3' },
      { image: image1, title: 'Equipment 4' },
      { image: image1, title: 'Equipment 5' },
    ]
  },
  {
    category: 'Food Products Bulk Sellers',
    subcategories: [
      { image: image1, title: ' Food 1' },
      { image: image1, title: ' Food 2' },
      { image: image1, title: ' Food 3' },
      { image: image1, title: ' Food 4' },
      { image: image1, title: ' Food 5' },
    ]
  },
  {
    category: 'Ice Cream Dealers',
    subcategories: [
      { image: image1, title: 'Cream 1' },
      { image: image1, title: 'Cream 2' },
      { image: image1, title: 'Cream 3' },
      { image: image1, title: 'Cream 4' },
      { image: image1, title: 'Cream 5' },
    ]
  },
  {
    category: 'Ice Cream Machines',
    subcategories: [
      { image: image1, title: 'Product 1' },
      { image: image1, title: 'Product 2' },
      { image: image1, title: 'Product 3' },
      { image: image1, title: 'Product 4' },
      { image: image1, title: 'Product 5' },
    ]
  },
  {
    category: 'Ice Cream Manufacturers',
    subcategories: [
      { image: image1, title: 'Manufacturer 1' },
      { image: image1, title: 'Manufacturer 2' },
      { image: image1, title: 'Manufacturer 3' },
      { image: image1, title: 'Manufacturer 4' },
      { image: image1, title: 'Manufacturer 5' },
    ]
  },
  {
    category: 'Livestock Products',
    subcategories: [
      { image: image1, title: 'Livestock 1' },
      { image: image1, title: 'Livestock 2' },
      { image: image1, title: 'Livestock 3' },
      { image: image1, title: 'Livestock 4' },
      { image: image1, title: 'Livestock 5' },
    ]
  },
  {
    category: 'Scientific and Testing Instruments',
    subcategories: [
      { image: image1, title: 'Instrument 1' },
      { image: image1, title: 'Instrument 2' },
      { image: image1, title: 'Instrument 3' },
      { image: image1, title: 'Instrument 4' },
      { image: image1, title: 'Instrument 5' },
    ]
  },
  {
    category: 'Weighing Machines',
    subcategories: [
      { image: image1, title: 'Weighing 1' },
      { image: image1, title: 'Weighing 2' },
      { image: image1, title: 'Weighing 3' },
      { image: image1, title: 'Weighing 4' },
      { image: image1, title: 'Weighing 5' },
    ]
  },
];

export default function CategorySidebar() {
  const [selectedCategory, setSelectedCategory] = useState(CategoryData[0]);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex pt-20 flex-col md:flex-row min-h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-yellow-500 text-white p-2 rounded-md flex items-center"
        >
          <Menu className="mr-2" /> Categories
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-y-0 left-0 w-64 bg-yellow-200 md:bg-transparent p-4 border-r-2 border-gray-400 border-dotted transition-transform transform md:relative md:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-lg text-center font-mono text-yellow-600 mb-4">Latest Category</h2>
        {CategoryData.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`block w-full text-left p-2 rounded-lg mb-2 bg-white hover:bg-yellow-300 transition-all ${selectedCategory.category === item.category ? "bg-yellow-500 text-white" : ""}`}
            onClick={() => { setSelectedCategory(item); setShowSidebar(false); }}
          >
            {item.category}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="w-full text-lg text-center md:w-3/4 p-4">
        <h2 className="text-2xl font-mono text-yellow-600 border-b-2 border-gray-400 border-dotted pb-2 mb-4">{selectedCategory.category}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {selectedCategory.subcategories.map((sub, index) => (
            <div
              key={index}
              className="rounded-lg p-4 shadow-md hover:shadow-lg transition-all bg-white"
            >
              <motion.img
                src={sub.image}
                alt={sub.image}
                className="w-full h-40 object-cover rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="mt-3 font-mono text-center text-yellow-600">{sub.title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
