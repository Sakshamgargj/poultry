import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { motion } from 'framer-motion';
import {
    Eye,
    Heart,
    ShoppingCart,
    ArrowLeft,
    ArrowRight,
} from 'lucide-react';

const ITEMS_PER_PAGE = 6;

function Product() {
    const { id } = useParams();
    const { product } = useDataContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredItem, setHoveredItem] = useState(null);

    const filteredProducts = useMemo(() => {
        if (!product?.product) return [];
        return product.product.filter((item) => item.subcategory?.id?.toString() === id);
    }, [product, id]);

    useEffect(() => {
        const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
        if (currentPage > totalPages) setCurrentPage(1);
    }, [filteredProducts, currentPage]);

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

    const getDiscount = (original, price) => {
        return Math.round(((original - price) / original) * 100);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="w-full max-w-7xl mx-auto p-6 bg-white h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="text-3xl font-bold text-center text-darkprimary mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Our Products
                <div className="w-auto h-1 bg-darkprimary mx-auto mt-2 rounded-full"></div>
            </motion.h2>

            {filteredProducts.length === 0 ? (
                <motion.div
                    className="text-center py-16 text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    No products found in this category.
                </motion.div>
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {currentItems.map((item, index) => {
                        const originalPrice = item.originalPrice || (item.price * 1.3).toFixed(2);
                        const discount = getDiscount(originalPrice, item.price);

                        return (
                            <motion.div
                                key={index}
                                className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                                whileHover={{ y: -5 }}
                            >
                                {/* {discount >= 10 && (
                                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 flex items-center">
                                        <Percent size={12} className="mr-1" />
                                        {discount}%
                                    </div>
                                )} */}

                                {/* Quick view icon button positioned on the right */}


                                <div className="relative h-52 overflow-hidden bg-gray-100">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain p-4"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: hoveredItem === index ? 1.1 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Transparent overlay with quick actions */}
                                    <motion.div
                                        className="absolute inset-0 bg-transparent flex items-start justify-start"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute right-0 h-full w-12 py-2 space-y-3 px-2">
                                            <motion.button
                                                className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 hover:text-red-500 transition-colors duration-200"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Heart size={20} />
                                            </motion.button>
                                            <motion.button
                                                className="w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-md text-indigo-700 hover:text-black "
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                🔗
                                            </motion.button>

                                        </div>
                                    </motion.div>
                                </div>

                                <div className="p-4">
                                    <h4 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">{item.title}</h4>
                                    <div className="mt-2 flex items-center">
                                        <span className="text-darkText font-bold text-lg">₹{item.price}</span>
                                        {/* {originalPrice > item.price && (
                                            <span className="line-through text-gray-400 text-sm ml-2">₹{originalPrice}</span>
                                        )} */}
                                    </div>

                                    <motion.button
                                        className="mt-3 w-full bg-gradient-to-r from-primary to-darkprimary hover:bg-darkprimary text-white text-sm py-2 px-3 rounded-md transition-colors duration-300 flex items-center justify-center"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ShoppingCart size={16} className="mr-2" /> Add to Cart
                                    </motion.button>
                                </div>

                                {/* Quick view attractive tooltip */}
                                <motion.div
                                    className="absolute bottom-16 right-0 bg-transparent pointer-events-none"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{
                                        opacity: hoveredItem === index ? 1 : 0,
                                        x: hoveredItem === index ? 0 : 10
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-gradient-to-r from-primary to-darkprimary text-white text-xs py-1 px-3 rounded-l-md shadow-lg flex items-center">
                                        <Eye size={16} className="mr-1" /> Quick View
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}

            {/* Enhanced Pagination */}
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
        </motion.div>
    );
}

export default Product;