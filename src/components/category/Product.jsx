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
// --- First UI
// import React, { useEffect, useMemo, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDataContext } from '../../context/DataContext';
// import { motion } from 'framer-motion';


// function Product() {
//     const { id } = useParams();
//     const { subcategory } = useDataContext();
//     console.log("subcategory",subcategory)

//     const filteredData = useMemo(() => {
//         if (!subcategory?.subcategory) return [];
//         return subcategory.subcategory.filter((item) => item._id === id);
//     }, [subcategory, id]);

//     console.log("object,",filteredData)
   
//     return (
//         <motion.div
//             className="w-full max-w-7xl mx-auto p-6 bg-white h-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
            

            

            
//         </motion.div>
//     );
// }

// export default Product;
// --- Second UI
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { motion } from 'framer-motion';

function Product() {
    const { id } = useParams();
    const { subcategory } = useDataContext();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const filteredData = useMemo(() => {
        if (!subcategory?.subcategory) return [];
        return subcategory.subcategory.filter((item) => item._id === id);
    }, [subcategory, id]);

    const product = filteredData[0] || {};

    useEffect(() => {
        if (Object.keys(product).length > 0) {
            setLoading(false);
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
            <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg font-medium text-gray-600">Loading product details...</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex mb-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                Home
                            </a>
                        </li>
                        {/* <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <a href="/products" className="text-sm font-medium text-gray-500 hover:text-blue-600 md:ml-2">Products</a>
                            </div>
                        </li> */}
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-sm font-medium text-blue-600 md:ml-2">{product.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Column - Images */}
                        <div className="w-full lg:w-1/2 p-6">
                            <div className="sticky top-6">
                                {/* Main Image */}
                                <motion.div 
                                    className="rounded-xl overflow-hidden shadow-lg mb-6 bg-gray-100 aspect-square"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={activeImageIndex}
                                >
                                    <img 
                                        src={allImages[activeImageIndex]} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain"
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
                                                className={`rounded-lg overflow-hidden cursor-pointer aspect-square ${
                                                    activeImageIndex === index 
                                                        ? 'ring-2 ring-blue-500' 
                                                        : 'hover:opacity-80'
                                                }`}
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => handleImageChange(index)}
                                            >
                                                <img 
                                                    src={image} 
                                                    alt={`Product view ${index + 1}`} 
                                                    className="w-full h-full object-cover"
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
                                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                            {product.address}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
                                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: product.description }} />
                                    {/* <td className="p-2 border text-sm" dangerouslySetInnerHTML={{ __html: prod.description }} /> */}

                                </div>

                                {/* Company Information */}
                                <div className="bg-gray-50 rounded-xl p-5 mb-8">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Company Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                        <div>
                                            <p className="text-sm text-gray-500">Contact Person</p>
                                            <p className="font-medium">{product.person}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <a href={`mailto:${product.email}`} className="font-medium text-blue-600 hover:underline">
                                                {product.email}
                                            </a>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Mobile</p>
                                            <p className="font-medium">{product.mobile}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Website</p>
                                            <a href={product.website} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline truncate block">
                                                {product.website}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto pt-8 flex flex-wrap gap-4">
                                    <a 
                                        href={`mailto:${product.email}?subject=Inquiry about ${product.name}`}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                                    >
                                        Contact Company
                                    </a>
                                    <a 
                                        href={product.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section - You can uncomment and implement this if needed */}
                {/* 
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Related products would go here */}
                {/* </div>
                </div>
                */}
            </div>
        </motion.div>
    );
}

export default Product;