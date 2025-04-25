// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDataContext } from '../../context/DataContext';
// import { motion } from 'framer-motion';
// import { Phone, MapPin, Mail, Globe, ChevronRight, Star } from 'lucide-react';

// function Product() {
//   const { id } = useParams();
//   const { subcategory } = useDataContext();
//   const [activeTab, setActiveTab] = useState('overview');
  
//   const filteredData = React.useMemo(() => {
//     if (!subcategory?.subcategory) return [];
//     return subcategory.subcategory.filter((item) => item._id === id);
//   }, [subcategory, id]);

//   const product = filteredData[0] || {};
  
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     });
//   };

//   return (
//     <motion.div
//       className="w-full mx-auto bg-gray-50 min-h-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div 
//             className="flex flex-col md:flex-row justify-between items-center"
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <motion.h1 
//                 className="text-4xl md:text-5xl font-bold mb-4"
//                 variants={fadeIn}
//               >
//                 {product.name || "Company01"}
//               </motion.h1>
//               <motion.p 
//                 className="text-xl mb-6"
//                 variants={fadeIn}
//               >
//                 {product.description || "Good"}
//               </motion.p>
//               <motion.div 
//                 className="flex flex-wrap gap-4"
//                 variants={fadeIn}
//               >
//                 <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition">
//                   Contact Now
//                 </button>
//                 <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition">
//                   Learn More
//                 </button>
//               </motion.div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <motion.div
//                 className="relative w-64 h-64 md:w-80 md:h-80"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//               >
//                 <img 
//                   src={product.img || "/api/placeholder/400/400"} 
//                   alt={product.name || "Product Image"} 
//                   className="rounded-lg shadow-2xl object-cover w-full h-full"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex overflow-x-auto space-x-8 py-4">
//             {['overview', 'specifications', 'gallery', 'contact'].map((tab) => (
//               <button
//                 key={tab}
//                 className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {activeTab === 'overview' && (
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-12"
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           >
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About {product.name}</h2>
//               <p className="text-gray-700 mb-6">
//                 {product.description} - A powerful solution designed to meet your needs with advanced features and reliable performance.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-full">
//                     <Star className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Premium Quality</h3>
//                     <p className="text-sm text-gray-600">Built with attention to detail</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-full">
//                     <Globe className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Global Presence</h3>
//                     <p className="text-sm text-gray-600">Available in {product.address}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-full">
//                     <Mail className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Dedicated Support</h3>
//                     <p className="text-sm text-gray-600">24/7 customer assistance</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex justify-center items-center">
//               <img 
//                 src={product.img || "/api/placeholder/400/400"} 
//                 alt={product.name} 
//                 className="rounded-lg shadow-lg max-w-full h-auto"
//               />
//             </div>
//           </motion.div>
//         )}

//         {activeTab === 'specifications' && (
//           <motion.div 
//             className="bg-white rounded-lg shadow-lg p-8"
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           >
//             <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <div className="border-b pb-4">
//                   <h3 className="text-sm text-gray-500">Category ID</h3>
//                   <p className="font-medium">{product.categoryId || "N/A"}</p>
//                 </div>
                
//                 <div className="border-b pb-4">
//                   <h3 className="text-sm text-gray-500">Created Date</h3>
//                   <p className="font-medium">{formatDate(product.createdAt)}</p>
//                 </div>
                
//                 <div className="border-b pb-4">
//                   <h3 className="text-sm text-gray-500">Updated Date</h3>
//                   <p className="font-medium">{formatDate(product.updatedAt)}</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="border-b pb-4">
//                   <h3 className="text-sm text-gray-500">Product ID</h3>
//                   <p className="font-medium">{product._id || "N/A"}</p>
//                 </div>
                
//                 <div className="border-b pb-4">
//                   <h3 className="text-sm text-gray-500">Version</h3>
//                   <p className="font-medium">{product.__v || "0"}</p>
//                 </div>
                
//                 <div className="border-b pb-4">
//                   <h3 className="text-sm text-gray-500">Contact Person</h3>
//                   <p className="font-medium">{product.person || "N/A"}</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {activeTab === 'gallery' && (
//           <motion.div 
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           >
//             <h2 className="text-2xl font-bold mb-6">Product Gallery</h2>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Main Image */}
//               <div className="rounded-lg overflow-hidden shadow-lg">
//                 <img 
//                   src={product.img || "/api/placeholder/400/320"} 
//                   alt={product.name} 
//                   className="w-full h-64 object-cover"
//                 />
//               </div>
              
//               {/* Related Images */}
//               {(product.relatedImages || []).slice(0, 3).map((img, index) => (
//                 <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//                   <img 
//                     src={img || "/api/placeholder/400/320"} 
//                     alt={`${product.name} - ${index + 1}`} 
//                     className="w-full h-64 object-cover"
//                   />
//                 </div>
//               ))}
              
//               {/* If less than 4 images total, add placeholders */}
//               {(product.relatedImages?.length || 0) < 3 && (
//                 <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
//                   <img 
//                     src="/api/placeholder/400/320" 
//                     alt="Placeholder" 
//                     className="w-full h-64 object-cover opacity-50"
//                   />
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}

//         {activeTab === 'contact' && (
//           <motion.div 
//             className="bg-white rounded-lg shadow-lg p-8"
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           >
//             <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <MapPin className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-lg">Address</h3>
//                     <p className="text-gray-600">{product.address || "N/A"}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <Mail className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-lg">Email</h3>
//                     <p className="text-gray-600">{product.email || "N/A"}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <Phone className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-lg">Phone</h3>
//                     <p className="text-gray-600">{product.mobile || "N/A"}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <Globe className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-lg">Website</h3>
//                     <p className="text-gray-600">{product.website || "N/A"}</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-100 rounded-lg p-6">
//                 <h3 className="font-medium text-lg mb-4">Send us a message</h3>
//                 <form className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                     <input 
//                       type="text" 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Your name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input 
//                       type="email" 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Your email"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                     <textarea 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32"
//                       placeholder="Your message"
//                     />
//                   </div>
                  
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {/* Featured Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-10 text-center">Why Choose {product.name}?</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div 
//               className="bg-white rounded-lg p-6 shadow-md"
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                 <Star className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
//               <p className="text-gray-600">Experience excellence with our carefully crafted products designed to exceed expectations.</p>
//             </motion.div>
            
//             <motion.div 
//               className="bg-white rounded-lg p-6 shadow-md"
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                 <Globe className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Global Reach</h3>
//               <p className="text-gray-600">Our products are trusted and available in multiple countries around the world.</p>
//             </motion.div>
            
//             <motion.div 
//               className="bg-white rounded-lg p-6 shadow-md"
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                 <Mail className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
//               <p className="text-gray-600">Our team is always ready to assist you with any questions or concerns.</p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-blue-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to experience {product.name}?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Take the next step and discover why our customers love our products.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition">
//               Contact Sales
//             </button>
//             <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Product;

// --- UI
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { motion } from 'framer-motion';

function Product() {
    const { id } = useParams();
    const { category, subcategory } = useDataContext();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const filteredData = useMemo(() => {
        if (!subcategory?.subcategory) return [];
        return subcategory.subcategory.filter((item) => item._id === id);
    }, [subcategory, id]);
    const product = filteredData[0] || {};

    const filteredCategory = useMemo(() => {
        if (!category?.category) return [];
        return category.category.filter((item) => item._id === product.categoryId);
    }, [category, id]);
    // console.log("object",filteredCategory)
    const categorydata = filteredCategory[0] || {};
    // console.log("categorydata.name",categorydata._id)

    const filteredSubcategories = useMemo(() => {
        if ( !subcategory?.subcategory) return [];
    
        return subcategory.subcategory.filter((sub) => {
          return (
            sub.categoryId === categorydata._id ||
            sub?.categoryId === categorydata?._id
          );
        });
      }, [categorydata._id, subcategory]);
    //   console.log("filteredSubcategories: ",filteredSubcategories)

    useEffect(() => {
        if (Object.keys(product).length > 0) {
            setLoading(false);
            // Scroll to top when product loads
            window.scrollTo(0, 0);
        }
    }, [product]);

    // Format creation date
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const handleImageChange = (index) => {
        setActiveImageIndex(index);
    };

    const allImages = useMemo(() => {
        if (!product) return [];
        return [product.img, ...(product.relatedImages || [])].filter(Boolean);
    }, [product]);

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg font-medium text-blue-800">Loading product details...</p>
                </div>
            </div>
        );
    }

    // Truncate the description for initial view
    const shortDescription = product.description && product.description.length > 250 
        ? `${product.description.substring(0, 250)}...` 
        : product.description;

    return (
        <motion.div
            className="h-auto bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-8xl px-4 mx-auto">
                {/* Breadcrumb */}
                <nav className="flex mb-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-darkprimary transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-darkprimary transition-colors md:ml-2">Products</Link>
                            </div>
                        </li> */}
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-sm font-medium text-darkprimary md:ml-2">{product.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Column - Images */}
                        <div className="w-full lg:w-1/2 p-6 bg-gray-50">
                            <div className="sticky top-6">
                                {/* Main Image */}
                                <motion.div 
                                    className="rounded-xl overflow-hidden shadow-lg mb-6 bg-white aspect-square flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={activeImageIndex}
                                >
                                    <img 
                                        src={allImages[activeImageIndex]} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain p-4"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x600?text=Image+Not+Available";
                                        }}
                                    />
                                </motion.div>

                                {/* Thumbnail Gallery */}
                                {allImages.length > 1 && (
                                    <div className="grid grid-cols-5 gap-3">
                                        {allImages.map((image, index) => (
                                            <motion.div 
                                                key={index}
                                                className={`rounded-lg overflow-hidden cursor-pointer aspect-square bg-white ${
                                                    activeImageIndex === index 
                                                        ? 'ring-2 ring-darkprimary shadow-md' 
                                                        : 'hover:opacity-80 border border-gray-200'
                                                }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleImageChange(index)}
                                            >
                                                <img 
                                                    src={image} 
                                                    alt={`Product view ${index + 1}`} 
                                                    className="w-full h-full object-cover p-1"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "https://via.placeholder.com/150x150?text=Image";
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Product Details */}
                        <div className="w-full lg:w-1/2 p-8 lg:border-l border-gray-200">
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-start">
                                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mb-4">
                                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-600">{product.address}</span>
                                    </div>
                                    
                                    {product.categoryId && (
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-darkprimary text-white">
                                            {categorydata.name}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-pretty" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2zm0 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                        </svg>
                                        Description
                                    </h2>
                                    
                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                        {showFullDescription ? (
                                            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: product.description }} />
                                        ) : (
                                            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: shortDescription }} />
                                        )}
                                        
                                        {product.description && product.description.length > 250 && (
                                            <button 
                                                onClick={() => setShowFullDescription(!showFullDescription)}
                                                className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                                            >
                                                {showFullDescription ? 'Show less' : 'Read more'}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Company Information */}
                                <div className="bg-primary/20 rounded-xl p-6 mb-8 border border-blue-100">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-darkprimary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path>
                                        </svg>
                                        Company Information
                                    </h2>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Contact Person</p>
                                            <p className="font-medium text-gray-800 flex items-center">
                                                <svg className="w-4 h-4 mr-1 text-darkprimary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                                </svg>
                                                {product.person || 'Not specified'}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Email</p>
                                            <a href={`mailto:${product.email}`} className="font-medium text-gray-800 hover:text-darkprimary hover:underline flex items-center transition-colors">
                                                <svg className="w-4 h-4 mr-1 text-darkprimary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                                {product.email || 'Not specified'}
                                            </a>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Mobile</p>
                                            <a href={`tel:${product.mobile}`} className="font-medium text-gray-800 flex items-center hover:text-darkprimary transition-colors">
                                                <svg className="w-4 h-4 mr-1 text-darkprimary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>
                                                {product.mobile || 'Not specified'}
                                            </a>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Website URL</p>
                                            <a href={product.website} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 hover:text-darkprimary hover:underline truncate  flex items-center transition-colors">
                                                <svg className="w-4 h-4 mr-1 text-darkprimary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="truncate">{product.website || 'Not specified'}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Last Updated */}
                                {product.createdAt && (
                                    <div className="text-sm text-gray-500 mb-6">
                                        Last updated: {formatDate(product.createdAt)}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="mt-auto pt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <motion.a 
                                            href={`mailto:${product.email}?subject=Inquiry about ${product.name}`}
                                            className="bg-darkprimary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center flex items-center justify-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            Contact Company
                                        </motion.a>
                                        <motion.a 
                                            href={product.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-300 text-center flex items-center justify-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Visit Website
                                        </motion.a>
                                    </div>
                                    
                                    {/* Share buttons */}
                                    {/* <div className="mt-6 flex justify-center">
                                        <p className="text-sm text-gray-500 mr-4">Share:</p>
                                        <div className="flex space-x-3">
                                            <motion.button 
                                                className="text-blue-600 hover:text-blue-800"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="Share on Facebook"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406 C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914 c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643 h2.516V4.458z"></path>
                                                </svg>
                                            </motion.button>
                                            <motion.button 
                                                className="text-blue-400 hover:text-blue-600"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="Share on Twitter"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"></path>
                                                </svg>
                                            </motion.button>
                                            <motion.button 
                                                className="text-blue-700 hover:text-blue-900"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="Share on LinkedIn"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.5,18h3V6.9h-3V18z M4,2C2.8,2,2,2.8,2,4s0.8,2,2,2s2-0.8,2-2S5.2,2,4,2z M16,18h3v-5.7c0-3.7-2.5-5.4-4.5-5.4c-1.5,0-2.7,0.9-3.5,2h0v-2h-3V18h3v-5.6c0-1.1,0.7-2,1.8-2c1.1,0,1.2,0.8,1.2,2V18z"></path>
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Products Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Buyers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredSubcategories.map((e, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 bg-gray-100 flex items-center justify-center">
                                <img 
                                        src={e.img} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain p-4"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x600?text=Image+Not+Available";
                                        }}
                                    />                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">{e.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1"dangerouslySetInnerHTML={{ __html: e.description }} />
                                    <div className="mt-4">
                                        <Link to={`/company-detail/${e._id}`} className="text-darkprimary hover:text-primary text-sm font-medium">View Details</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Product;