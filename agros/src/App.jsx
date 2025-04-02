









// import React, { useState } from 'react';
// import { assets } from './assets/assets';
// import {
//   RoundDriftFittings,
//   FlatDriftFittings,
//   MM20DripFittings,
//   LayflatFittings,
//   RainPipeFittings,
//   DripFittings,
//   BallValves
// } from './assets/assets';

// const App = () => {
//   const [showContact, setShowContact] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const contactNumbers = [
//     "6300996391",
//     "9849325063",
//     "9391135849"
//   ];

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setShowContact(true);
//   };

//   const handleCallClick = (number) => {
//     window.location.href = `tel:${number}`;
//   };

//   const closeContactModal = () => {
//     setShowContact(false);
//   };

//   // Organize Ball Valves by proper categories
//   const organizedBallValves = {
//     "Standard Ball Valve": [],
//     "Standard Ball Walve": [],
//     "Flush Valve": [],
//     "Union Ball Valve": [],
//     "Three Way Ball Valve": []
//   };
  
//   // Process BallValves array to organize them correctly
//   BallValves.forEach((item, index) => {
//     const name = item.name || "";
    
//     // Determine the correct category based on the image filename or name
//     let category;
//     if (item.category === "Flush") {
//       category = "Flush Valve";
//     } else if (item.category === "Union") {
//       category = "Union Ball Valve";
//     } else if (item.category === "Three Way") {
//       category = "Three Way Ball Valve";
//     } else if (item.image && item.image.toString().includes("BallWalve")) {
//       category = "Standard Ball Walve";
//     } else {
//       category = "Standard Ball Valve";
//     }
    
//     if (!organizedBallValves[category]) {
//       organizedBallValves[category] = [];
//     }
    
//     organizedBallValves[category].push({
//       id: `valve-${index}`,
//       name: name,
//       category: category,
//       length: item.length,
//       image: item.image || "/api/placeholder/150/150"
//     });
//   });

//   // Map the imported product collections to the categories structure
//   const categories = [
//     {
//       name: "ROUND DRIP FITTINGS",
//       products: RoundDriftFittings.map((item, index) => ({
//         id: `round-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150" // Fallback to placeholder if image is undefined
//       }))
//     },
//     {
//       name: "FLAT DRIP FITTINGS",
//       products: FlatDriftFittings.map((item, index) => ({
//         id: `flat-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "20 MM DRIP FITTINGS",
//       products: MM20DripFittings.map((item, index) => ({
//         id: `20mm-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "LAY FLAT FITTINGS",
//       products: LayflatFittings.map((item, index) => ({
//         id: `layflat-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "RAIN PIPE FITTINGS",
//       products: RainPipeFittings.map((item, index) => ({
//         id: `rainpipe-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "DRIP FITTINGS",
//       products: DripFittings.map((item, index) => ({
//         id: `drip-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "BALL VALVES",
//       specialCategory: true, // Mark for special handling in rendering
//       subcategories: Object.keys(organizedBallValves)
//         .filter(category => organizedBallValves[category].length > 0) // Only include non-empty categories
//         .map(category => ({
//           name: category.toUpperCase(),
//           products: organizedBallValves[category]
//         }))
//     },
//   ];

//   // Function to determine image size based on item length
//   const getImageHeightClass = (length) => {
//     if (!length) return "h-10 md:h-16"; // Default size - smaller for all sizes
    
//     // Extract numerical part from length if possible
//     const sizeMatch = length.toString().match(/\d+(\.\d+)?/);
//     const size = sizeMatch ? parseFloat(sizeMatch[0]) : 0;
    
//     if (size >= 3) return "h-14 md:h-20"; // Larger items
//     if (size >= 2) return "h-12 md:h-18"; // Medium-large items
//     if (size >= 1) return "h-10 md:h-16"; // Medium items
//     return "h-8 md:h-14"; // Smaller items
//   };

//   return (
//     <div className="bg-green-50 min-h-screen text-gray-900 font-sans">
//       {/* Header - Fixed logo sizing */}
//       <header className="bg-green-700 text-white shadow-md p-4 lg:p-6">
//         <div className="container mx-auto flex justify-center items-center">
//           <div className="flex items-center">
//             <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mr-4 md:mr-5 shadow-md">
//               <img src={assets.logo} alt="RR Logo" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
//             </div>
//             <div>
//               <h1 className="text-2xl md:text-4xl font-extrabold">RR AGROS</h1>
//               <p className="text-xs md:text-sm italic">MANUFACTURER - DRIP IRRIGATION PRODUCTS</p>
//             </div>
//           </div>
//         </div>
//       </header>
      
//       {/* Tagline with pipes2 image */}
//       <div className="bg-white text-green-700 p-3 md:p-6 shadow-sm">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
//           {/* Text Section */}
//           <div className="flex-1 md:max-w-[60%] lg:max-w-[65%] text-center md:text-left mb-4 md:mb-0">
//             <p className="text-lg md:text-2xl font-semibold leading-snug">
//               Efficient, Reliable & Cost-Effective Drip Irrigation Systems
//             </p>
//             <p className="text-green-600 text-sm md:text-base mt-2">
//               Top-quality drip irrigation solutions for maximum efficiency
//             </p>
//             <p className="text-green-600 text-sm md:text-base mt-2">
//               If quality products is your target, come to RR AGROS
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="flex-1 md:max-w-[40%] lg:max-w-[35%]">
//             <img 
//               src={assets.pipes2} 
//               alt="Irrigation Pipes" 
//               className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Introduction with highlighted text and second image */}
//       <div className="container mx-auto p-4 md:p-6 lg:p-8">
//         <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8 relative overflow-hidden">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 p-4 z-10">
//               <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
//                 Premium Drip Irrigation Solutions
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 RR AGROS provides high-quality drip irrigation products designed for efficiency and durability. 
//                 Our products help farmers optimize water usage and increase crop yields while reducing costs.
//               </p>
//               <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-600 font-medium text-green-800">
//                 Trusted by thousands of farmers across the region for reliable irrigation solutions.
//               </div>
//             </div>
//             <div className="md:w-1/2 p-4">
//               <img 
//                 src={assets.pipes} 
//                 alt="Drip Irrigation Pipes" 
//                 className="w-full h-auto max-h-64 md:max-h-80 object-contain rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Product Categories */}
//         {categories.map((category, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
//             <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-500">
//               {category.name}
//             </h2>

//             {category.specialCategory ? (
//               // Special handling for Ball Valves
//               <div>
//                 {/* Standard Ball Valves (first type) */}
//                 {organizedBallValves["Standard Ball Valve"].length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                       STANDARD BALL VALVES (TYPE 1)
//                     </h3>
//                     {/* MODIFIED: Fixed 7 columns for all screen sizes */}
//                     <div className="grid grid-cols-7 gap-1 md:gap-2">
//                       {organizedBallValves["Standard Ball Valve"].map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                           onClick={() => handleProductClick(product)}
//                         >
//                           <div className="p-1 md:p-3 flex flex-col items-center">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className={`w-full ${getImageHeightClass(product.length)} object-contain mb-1 md:mb-2`}
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "/api/placeholder/150/150";
//                               }}
//                             />
//                             <h4 className="text-center font-medium text-green-800 text-xs">
//                               {product.name}
//                               {product.length && <span className="block text-xs text-green-600">{product.length}</span>}
//                             </h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Standard Ball Walves (second type) */}
//                 {organizedBallValves["Standard Ball Walve"].length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                       STANDARD BALL VALVES (TYPE 2)
//                     </h3>
//                     {/* MODIFIED: Fixed 7 columns for all screen sizes */}
//                     <div className="grid grid-cols-7 gap-1 md:gap-2">
//                       {organizedBallValves["Standard Ball Walve"].map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                           onClick={() => handleProductClick(product)}
//                         >
//                           <div className="p-1 md:p-3 flex flex-col items-center">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className={`w-full ${getImageHeightClass(product.length)} object-contain mb-1 md:mb-2`}
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "/api/placeholder/150/150";
//                               }}
//                             />
//                             <h4 className="text-center font-medium text-green-800 text-xs">
//                               {product.name}
//                               {product.length && <span className="block text-xs text-green-600">{product.length}</span>}
//                             </h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Special Valve Categories (Flush, Union, Three Way) in a single row */}
//                 <div className="mb-4">
//                   <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                     SPECIAL VALVE TYPES
//                   </h3>
//                   <div className="grid grid-cols-3 gap-2 md:gap-4">
//                     {/* Flush Valves */}
//                     {organizedBallValves["Flush Valve"].length > 0 && (
//                       <div className="bg-green-50 p-2 md:p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           FLUSH VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 gap-1 md:gap-2">
//                           {organizedBallValves["Flush Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-1 md:p-2 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-1`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs text-green-600">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Union Ball Valves */}
//                     {organizedBallValves["Union Ball Valve"].length > 0 && (
//                       <div className="bg-green-50 p-2 md:p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           UNION BALL VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 gap-1 md:gap-2">
//                           {organizedBallValves["Union Ball Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-1 md:p-2 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-1`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs text-green-600">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Three Way Ball Valves */}
//                     {organizedBallValves["Three Way Ball Valve"].length > 0 && (
//                       <div className="bg-green-50 p-2 md:p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           THREE WAY BALL VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 gap-1 md:gap-2">
//                           {organizedBallValves["Three Way Ball Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-1 md:p-2 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-1`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs text-green-600">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // Regular categories without subcategories
//               // MODIFIED: Fixed 6 columns for all screen sizes
//               <div className="grid grid-cols-6 gap-1 md:gap-2">
//                 {category.products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                     onClick={() => handleProductClick(product)}
//                   >
//                     <div className="p-1 md:p-2 flex flex-col items-center">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className={`w-full ${getImageHeightClass(product.length)} object-contain mb-1`}
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "/api/placeholder/150/150";
//                         }}
//                       />
//                       <h4 className="text-center font-medium text-green-800 text-xs">
//                         {product.name}
//                         {product.length && <span className="block text-xs text-green-600">{product.length}</span>}
//                       </h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Contact Modal */}
//       {showContact && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-5 md:p-6 max-w-md w-full shadow-xl">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl md:text-2xl font-bold text-green-700">Contact Details</h2>
//               <button
//                 onClick={closeContactModal}
//                 className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </button>
//             </div>

//             {selectedProduct && (
//               <div className="flex items-center mb-5 p-3 bg-green-50 rounded-lg">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="w-16 h-16 md:w-20 md:h-20 object-contain mr-3 md:mr-4"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/150/150";
//                   }}
//                 />
//                 <div>
//                   <h3 className="text-lg md:text-xl font-semibold text-green-800">{selectedProduct.name}</h3>
//                   {selectedProduct.length && <p className="text-sm text-green-600">{selectedProduct.length}</p>}
//                 </div>
//               </div>
//             )}

//             <div className="space-y-3">
//               {contactNumbers.map((number, index) => (
//                 <div
//                   key={index}
//                   className="bg-green-50 p-3 md:p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-100 transition-colors"
//                   onClick={() => handleCallClick(number)}
//                 >
//                   <div className="flex items-center">
//                     <div className="bg-green-600 p-2 rounded-full mr-3 text-white">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                       </svg>
//                     </div>
//                     <span className="text-base md:text-lg font-medium">{number}</span>
//                   </div>
//                   <button className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base">
//                     Call Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-green-800 text-white p-5 md:p-6 mt-8">
//         <div className="container mx-auto text-center">
//           <div className="flex justify-center items-center mb-4">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mr-2 shadow">
//               <img src={assets.logo} alt="RR Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
//             </div>
//             <h2 className="text-xl md:text-2xl font-bold">RR AGROS</h2>
//           </div>
//           <p className="text-xs md:text-sm opacity-90">Manufacturer - Drip Irrigation Products</p>
//           <p className="text-xs md:text-sm opacity-90 mt-2 mb-4">Contact Us:</p>
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//             {contactNumbers.map((number, index) => (
//               <a
//                 key={index}
//                 href={`tel:${number}`}
//                 className="bg-white text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full font-medium hover:bg-green-100 transition-colors text-sm md:text-base"
//               >
//                 {number}
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;





// import React, { useState } from 'react';
// import { assets } from './assets/assets';
// import {
//   RoundDriftFittings,
//   FlatDriftFittings,
//   MM20DripFittings,
//   LayflatFittings,
//   RainPipeFittings,
//   DripFittings,
//   BallValves
// } from './assets/assets';

// const App = () => {
//   const [showContact, setShowContact] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const contactNumbers = [
//     "6300996391",
//     "9849325063",
//     "9391135849"
//   ];

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setShowContact(true);
//   };

//   const handleCallClick = (number) => {
//     window.location.href = `tel:${number}`;
//   };

//   const closeContactModal = () => {
//     setShowContact(false);
//   };

//   // Organize Ball Valves by proper categories
//   const organizedBallValves = {
//     "Standard Ball Valve": [],
//     "Standard Ball Walve": [],
//     "Flush Valve": [],
//     "Union Ball Valve": [],
//     "Three Way Ball Valve": []
//   };
  
//   // Process BallValves array to organize them correctly
//   BallValves.forEach((item, index) => {
//     const name = item.name || "";
    
//     // Determine the correct category based on the image filename or name
//     let category;
//     if (item.category === "Flush") {
//       category = "Flush Valve";
//     } else if (item.category === "Union") {
//       category = "Union Ball Valve";
//     } else if (item.category === "Three Way") {
//       category = "Three Way Ball Valve";
//     } else if (item.image && item.image.toString().includes("BallWalve")) {
//       category = "Standard Ball Walve";
//     } else {
//       category = "Standard Ball Valve";
//     }
    
//     if (!organizedBallValves[category]) {
//       organizedBallValves[category] = [];
//     }
    
//     organizedBallValves[category].push({
//       id: `valve-${index}`,
//       name: name,
//       category: category,
//       length: item.length,
//       image: item.image || "/api/placeholder/150/150"
//     });
//   });

//   // Map the imported product collections to the categories structure
//   const categories = [
//     {
//       name: "ROUND DRIP FITTINGS",
//       products: RoundDriftFittings.map((item, index) => ({
//         id: `round-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150" // Fallback to placeholder if image is undefined
//       }))
//     },
//     {
//       name: "FLAT DRIP FITTINGS",
//       products: FlatDriftFittings.map((item, index) => ({
//         id: `flat-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "20 MM DRIP FITTINGS",
//       products: MM20DripFittings.map((item, index) => ({
//         id: `20mm-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "LAY FLAT FITTINGS",
//       products: LayflatFittings.map((item, index) => ({
//         id: `layflat-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "RAIN PIPE FITTINGS",
//       products: RainPipeFittings.map((item, index) => ({
//         id: `rainpipe-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "DRIP FITTINGS",
//       products: DripFittings.map((item, index) => ({
//         id: `drip-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "BALL VALVES",
//       specialCategory: true, // Mark for special handling in rendering
//       subcategories: Object.keys(organizedBallValves)
//         .filter(category => organizedBallValves[category].length > 0) // Only include non-empty categories
//         .map(category => ({
//           name: category.toUpperCase(),
//           products: organizedBallValves[category]
//         }))
//     },
//   ];

//   // Function to determine image size based on item length
//   const getImageHeightClass = (length) => {
//     if (!length) return "h-16 md:h-20"; // Increased default size
    
//     // Extract numerical part from length if possible
//     const sizeMatch = length.toString().match(/\d+(\.\d+)?/);
//     const size = sizeMatch ? parseFloat(sizeMatch[0]) : 0;
    
//     if (size >= 3) return "h-20 md:h-24"; // Larger items - increased
//     if (size >= 2) return "h-18 md:h-22"; // Medium-large items - increased
//     if (size >= 1) return "h-16 md:h-20"; // Medium items - increased
//     return "h-14 md:h-18"; // Smaller items - increased
//   };

//   return (
//     <div className="bg-green-50 min-h-screen text-gray-900 font-sans">
//       {/* Header - Fixed logo sizing */}
//       <header className="bg-green-700 text-white shadow-md p-4 lg:p-6">
//         <div className="container mx-auto flex justify-center items-center">
//           <div className="flex items-center">
//             <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mr-4 md:mr-5 shadow-md">
//               <img src={assets.logo} alt="RR Logo" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
//             </div>
//             <div>
//               <h1 className="text-2xl md:text-4xl font-extrabold">RR AGROS</h1>
//               <p className="text-xs md:text-sm italic">MANUFACTURER - DRIP IRRIGATION PRODUCTS</p>
//             </div>
//           </div>
//         </div>
//       </header>
      
//       {/* Tagline with pipes2 image */}
//       <div className="bg-white text-green-700 p-3 md:p-6 shadow-sm">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
//           {/* Text Section */}
//           <div className="flex-1 md:max-w-[60%] lg:max-w-[65%] text-center md:text-left mb-4 md:mb-0">
//             <p className="text-lg md:text-2xl font-semibold leading-snug">
//               Efficient, Reliable & Cost-Effective Drip Irrigation Systems
//             </p>
//             <p className="text-green-600 text-sm md:text-base mt-2">
//               Top-quality drip irrigation solutions for maximum efficiency
//             </p>
//             <p className="text-green-600 text-sm md:text-base mt-2">
//               If quality products is your target, come to RR AGROS
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="flex-1 md:max-w-[40%] lg:max-w-[35%]">
//             <img 
//               src={assets.pipes2} 
//               alt="Irrigation Pipes" 
//               className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Introduction with highlighted text and second image */}
//       <div className="container mx-auto p-4 md:p-6 lg:p-8">
//         <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8 relative overflow-hidden">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 p-4 z-10">
//               <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
//                 Premium Drip Irrigation Solutions
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 RR AGROS provides high-quality drip irrigation products designed for efficiency and durability. 
//                 Our products help farmers optimize water usage and increase crop yields while reducing costs.
//               </p>
//               <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-600 font-medium text-green-800">
//                 Trusted by thousands of farmers across the region for reliable irrigation solutions.
//               </div>
//             </div>
//             <div className="md:w-1/2 p-4">
//               <img 
//                 src={assets.pipes} 
//                 alt="Drip Irrigation Pipes" 
//                 className="w-full h-auto max-h-64 md:max-h-80 object-contain rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Product Categories */}
//         {categories.map((category, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
//             <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-500">
//               {category.name}
//             </h2>

//             {category.specialCategory ? (
//               // Special handling for Ball Valves
//               <div>
//                 {/* Standard Ball Valves (first type) */}
//                 {organizedBallValves["Standard Ball Valve"].length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                       STANDARD BALL VALVES (TYPE 1)
//                     </h3>
//                     {/* Modified: Changed to 3 columns on mobile, 5 on md, 7 on lg screens */}
//                     <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
//                       {organizedBallValves["Standard Ball Valve"].map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                           onClick={() => handleProductClick(product)}
//                         >
//                           <div className="p-2 md:p-3 flex flex-col items-center">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "/api/placeholder/150/150";
//                               }}
//                             />
//                             <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                               {product.name}
//                               {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                             </h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Standard Ball Walves (second type) */}
//                 {organizedBallValves["Standard Ball Walve"].length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                       STANDARD BALL VALVES (TYPE 2)
//                     </h3>
//                     {/* Modified: Changed to 3 columns on mobile, 5 on md, 7 on lg screens */}
//                     <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
//                       {organizedBallValves["Standard Ball Walve"].map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                           onClick={() => handleProductClick(product)}
//                         >
//                           <div className="p-2 md:p-3 flex flex-col items-center">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "/api/placeholder/150/150";
//                               }}
//                             />
//                             <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                               {product.name}
//                               {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                             </h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Special Valve Categories (Flush, Union, Three Way) */}
//                 <div className="mb-4">
//                   <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                     SPECIAL VALVE TYPES
//                   </h3>
//                   {/* Modified: Changed to stack vertically on mobile, 3 columns on md+ */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {/* Flush Valves */}
//                     {organizedBallValves["Flush Valve"].length > 0 && (
//                       <div className="bg-green-50 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           FLUSH VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
//                           {organizedBallValves["Flush Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-2 md:p-3 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Union Ball Valves */}
//                     {organizedBallValves["Union Ball Valve"].length > 0 && (
//                       <div className="bg-green-50 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           UNION BALL VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
//                           {organizedBallValves["Union Ball Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-2 md:p-3 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Three Way Ball Valves */}
//                     {organizedBallValves["Three Way Ball Valve"].length > 0 && (
//                       <div className="bg-green-50 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           THREE WAY BALL VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
//                           {organizedBallValves["Three Way Ball Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-2 md:p-3 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // Regular categories without subcategories
//               // Modified: Changed to 3 columns on mobile, 4 on md, 6 on lg screens
//               <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
//                 {category.products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                     onClick={() => handleProductClick(product)}
//                   >
//                     <div className="p-2 md:p-3 flex flex-col items-center">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "/api/placeholder/150/150";
//                         }}
//                       />
//                       <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                         {product.name}
//                         {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                       </h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Contact Modal */}
//       {showContact && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-5 md:p-6 max-w-md w-full shadow-xl">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl md:text-2xl font-bold text-green-700">Contact Details</h2>
//               <button
//                 onClick={closeContactModal}
//                 className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </button>
//             </div>

//             {selectedProduct && (
//               <div className="flex items-center mb-5 p-3 bg-green-50 rounded-lg">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="w-16 h-16 md:w-20 md:h-20 object-contain mr-3 md:mr-4"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/150/150";
//                   }}
//                 />
//                 <div>
//                   <h3 className="text-lg md:text-xl font-semibold text-green-800">{selectedProduct.name}</h3>
//                   {selectedProduct.length && <p className="text-sm text-green-600">{selectedProduct.length}</p>}
//                 </div>
//               </div>
//             )}

//             <div className="space-y-3">
//               {contactNumbers.map((number, index) => (
//                 <div
//                   key={index}
//                   className="bg-green-50 p-3 md:p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-100 transition-colors"
//                   onClick={() => handleCallClick(number)}
//                 >
//                   <div className="flex items-center">
//                     <div className="bg-green-600 p-2 rounded-full mr-3 text-white">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                       </svg>
//                     </div>
//                     <span className="text-base md:text-lg font-medium">{number}</span>
//                   </div>
//                   <button className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base">
//                     Call Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-green-800 text-white p-5 md:p-6 mt-8">
//         <div className="container mx-auto text-center">
//           <div className="flex justify-center items-center mb-4">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mr-2 shadow">
//               <img src={assets.logo} alt="RR Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
//             </div>
//             <h2 className="text-xl md:text-2xl font-bold">RR AGROS</h2>
//           </div>
//           <p className="text-xs md:text-sm opacity-90">Manufacturer - Drip Irrigation Products</p>
//           <p className="text-xs md:text-sm opacity-90 mt-2 mb-4">Contact Us:</p>
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//             {contactNumbers.map((number, index) => (
//               <a
//                 key={index}
//                 href={`tel:${number}`}
//                 className="bg-white text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full font-medium hover:bg-green-100 transition-colors text-sm md:text-base"
//               >
//                 {number}
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;






// import React, { useState } from 'react';
// import { assets } from './assets/assets';
// import {
//   RoundDriftFittings,
//   FlatDriftFittings,
//   MM20DripFittings,
//   LayflatFittings,
//   RainPipeFittings,
//   DripFittings,
//   BallValves
// } from './assets/assets';

// const App = () => {
//   const [showContact, setShowContact] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const contactNumbers = [
//     "6300996391",
//     "9849325063",
//     "9391135849"
//   ];

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setShowContact(true);
//   };

//   const handleCallClick = (number) => {
//     window.location.href = `tel:${number}`;
//   };

//   const closeContactModal = () => {
//     setShowContact(false);
//   };

//   // Organize Ball Valves by proper categories
//   const organizedBallValves = {
//     "Standard Ball Valve": [],
//     "Standard Ball Walve": [],
//     "Flush Valve": [],
//     "Union Ball Valve": [],
//     "Three Way Ball Valve": []
//   };
  
//   // Process BallValves array to organize them correctly
//   BallValves.forEach((item, index) => {
//     const name = item.name || "";
    
//     // Determine the correct category based on the image filename or name
//     let category;
//     if (item.category === "Flush") {
//       category = "Flush Valve";
//     } else if (item.category === "Union") {
//       category = "Union Ball Valve";
//     } else if (item.category === "Three Way") {
//       category = "Three Way Ball Valve";
//     } else if (item.image && item.image.toString().includes("BallWalve")) {
//       category = "Standard Ball Walve";
//     } else {
//       category = "Standard Ball Valve";
//     }
    
//     if (!organizedBallValves[category]) {
//       organizedBallValves[category] = [];
//     }
    
//     organizedBallValves[category].push({
//       id: `valve-${index}`,
//       name: name,
//       category: category,
//       length: item.length,
//       image: item.image || "/api/placeholder/150/150"
//     });
//   });

//   // Map the imported product collections to the categories structure
//   const categories = [
//     {
//       name: "ROUND DRIP FITTINGS",
//       products: RoundDriftFittings.map((item, index) => ({
//         id: `round-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150" // Fallback to placeholder if image is undefined
//       }))
//     },
//     {
//       name: "FLAT DRIP FITTINGS",
//       products: FlatDriftFittings.map((item, index) => ({
//         id: `flat-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "20 MM DRIP FITTINGS",
//       products: MM20DripFittings.map((item, index) => ({
//         id: `20mm-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "LAY FLAT FITTINGS",
//       products: LayflatFittings.map((item, index) => ({
//         id: `layflat-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "RAIN PIPE FITTINGS",
//       products: RainPipeFittings.map((item, index) => ({
//         id: `rainpipe-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "DRIP FITTINGS",
//       products: DripFittings.map((item, index) => ({
//         id: `drip-${index}`,
//         name: item.name,
//         length: item.length,
//         image: item.image || "/api/placeholder/150/150"
//       }))
//     },
//     {
//       name: "BALL VALVES",
//       specialCategory: true, // Mark for special handling in rendering
//       subcategories: Object.keys(organizedBallValves)
//         .filter(category => organizedBallValves[category].length > 0) // Only include non-empty categories
//         .map(category => ({
//           name: category.toUpperCase(),
//           products: organizedBallValves[category]
//         }))
//     },
//   ];

//   // Function to determine image size based on item length
//   const getImageHeightClass = (length) => {
//     if (!length) return "h-16 md:h-20"; // Increased default size
    
//     // Extract numerical part from length if possible
//     const sizeMatch = length.toString().match(/\d+(\.\d+)?/);
//     const size = sizeMatch ? parseFloat(sizeMatch[0]) : 0;
    
//     if (size >= 3) return "h-20 md:h-24"; // Larger items - increased
//     if (size >= 2) return "h-18 md:h-22"; // Medium-large items - increased
//     if (size >= 1) return "h-16 md:h-20"; // Medium items - increased
//     return "h-14 md:h-18"; // Smaller items - increased
//   };

//   return (
//     <div className="bg-green-50 min-h-screen text-gray-900 font-sans">
//       {/* Header - Fixed logo sizing */}
//       <header className="bg-green-700 text-white shadow-md p-4 lg:p-6">
//         <div className="container mx-auto flex justify-center items-center">
//           <div className="flex items-center">
//             <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mr-4 md:mr-5 shadow-md">
//               <img src={assets.logo} alt="RR Logo" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
//             </div>
//             <div>
//               <h1 className="text-2xl md:text-4xl font-extrabold">RR AGROS</h1>
//               <p className="text-xs md:text-sm italic">MANUFACTURER - DRIP IRRIGATION PRODUCTS</p>
//             </div>
//           </div>
//         </div>
//       </header>
      
//       {/* Tagline with pipes2 image */}
//       <div className="bg-white text-green-700 p-3 md:p-6 shadow-sm">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
//           {/* Text Section */}
//           <div className="flex-1 md:max-w-[60%] lg:max-w-[65%] text-center md:text-left mb-4 md:mb-0">
//             <p className="text-lg md:text-2xl font-semibold leading-snug">
//               Efficient, Reliable & Cost-Effective Drip Irrigation Systems
//             </p>
//             <p className="text-green-600 text-sm md:text-base mt-2">
//               Top-quality drip irrigation solutions for maximum efficiency
//             </p>
//             <p className="text-green-600 text-sm md:text-base mt-2">
//               If quality products is your target, come to RR AGROS
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="flex-1 md:max-w-[40%] lg:max-w-[35%]">
//             <img 
//               src={assets.pipes2} 
//               alt="Irrigation Pipes" 
//               className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Introduction with highlighted text and second image */}
//       <div className="container mx-auto p-4 md:p-6 lg:p-8">
//         <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8 relative overflow-hidden">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 p-4 z-10">
//               <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
//                 Premium Drip Irrigation Solutions
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 RR AGROS provides high-quality drip irrigation products designed for efficiency and durability. 
//                 Our products help farmers optimize water usage and increase crop yields while reducing costs.
//               </p>
//               <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-600 font-medium text-green-800">
//                 Trusted by thousands of farmers across the region for reliable irrigation solutions.
//               </div>
//             </div>
//             <div className="md:w-1/2 p-4">
//               <img 
//                 src={assets.pipes} 
//                 alt="Drip Irrigation Pipes" 
//                 className="w-full h-auto max-h-64 md:max-h-80 object-contain rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Product Categories */}
//         {categories.map((category, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
//             <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-500">
//               {category.name}
//             </h2>

//             {category.specialCategory ? (
//               // Special handling for Ball Valves
//               <div>
//                 {/* Standard Ball Valves (first type) */}
//                 {organizedBallValves["Standard Ball Valve"].length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                       STANDARD BALL VALVES (TYPE 1)
//                     </h3>
//                     {/* Modified: Changed to 3 columns on mobile, 5 on md, 7 on lg screens */}
//                     <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
//                       {organizedBallValves["Standard Ball Valve"].map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                           onClick={() => handleProductClick(product)}
//                         >
//                           <div className="p-2 md:p-3 flex flex-col items-center">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "/api/placeholder/150/150";
//                               }}
//                             />
//                             <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                {product.name}
//                               {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                             </h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Standard Ball Walves (second type) */}
//                 {organizedBallValves["Standard Ball Walve"].length > 0 && (
//                   <div className="mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                       STANDARD BALL VALVES (TYPE 2)
//                     </h3>
//                     {/* Modified: Changed to 3 columns on mobile, 5 on md, 7 on lg screens */}
//                     <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
//                       {organizedBallValves["Standard Ball Walve"].map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                           onClick={() => handleProductClick(product)}
//                         >
//                           <div className="p-2 md:p-3 flex flex-col items-center">
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "/api/placeholder/150/150";
//                               }}
//                             />
//                             <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                               {product.name}
//                               {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                             </h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Special Valve Categories (Flush, Union, Three Way) */}
//                 <div className="mb-4">
//                   <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
//                     SPECIAL VALVE TYPES
//                   </h3>
//                   {/* Modified: Changed to stack vertically on mobile, 3 columns on md+ */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {/* Flush Valves */}
//                     {organizedBallValves["Flush Valve"].length > 0 && (
//                       <div className="bg-green-50 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           FLUSH VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
//                           {organizedBallValves["Flush Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-2 md:p-3 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Union Ball Valves */}
//                     {organizedBallValves["Union Ball Valve"].length > 0 && (
//                       <div className="bg-green-50 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           UNION BALL VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
//                           {organizedBallValves["Union Ball Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-2 md:p-3 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Three Way Ball Valves */}
//                     {organizedBallValves["Three Way Ball Valve"].length > 0 && (
//                       <div className="bg-green-50 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
//                           THREE WAY BALL VALVES
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
//                           {organizedBallValves["Three Way Ball Valve"].map((product) => (
//                             <div
//                               key={product.id}
//                               className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                               onClick={() => handleProductClick(product)}
//                             >
//                               <div className="p-2 md:p-3 flex flex-col items-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                                   onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/api/placeholder/150/150";
//                                   }}
//                                 />
//                                 <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                                   {product.name}
//                                   {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                                 </h5>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // Regular categories without subcategories
//               // Modified: Changed to 3 columns on mobile, 4 on md, 6 on lg screens
//               <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
//                 {category.products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
//                     onClick={() => handleProductClick(product)}
//                   >
//                     <div className="p-2 md:p-3 flex flex-col items-center">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "/api/placeholder/150/150";
//                         }}
//                       />
//                       <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
//                         {product.name}
//                         {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
//                       </h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Contact Modal */}
//       {showContact && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-5 md:p-6 max-w-md w-full shadow-xl">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl md:text-2xl font-bold text-green-700">Contact Details</h2>
//               <button
//                 onClick={closeContactModal}
//                 className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </button>
//             </div>

//             {selectedProduct && (
//               <div className="flex items-center mb-5 p-3 bg-green-50 rounded-lg">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="w-16 h-16 md:w-20 md:h-20 object-contain mr-3 md:mr-4"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/150/150";
//                   }}
//                 />
//                 <div>
//                   <h3 className="text-lg md:text-xl font-semibold text-green-800">{selectedProduct.name}</h3>
//                   {selectedProduct.length && <p className="text-sm text-green-600">{selectedProduct.length}</p>}
//                 </div>
//               </div>
//             )}

//             <div className="space-y-3">
//               {contactNumbers.map((number, index) => (
//                 <div
//                   key={index}
//                   className="bg-green-50 p-3 md:p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-100 transition-colors"
//                   onClick={() => handleCallClick(number)}
//                 >
//                   <div className="flex items-center">
//                     <div className="bg-green-600 p-2 rounded-full mr-3 text-white">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                       </svg>
//                     </div>
//                     <span className="text-base md:text-lg font-medium">{number}</span>
//                   </div>
//                   <button className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base">
//                     Call Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-green-800 text-white p-5 md:p-6 mt-8">
//         <div className="container mx-auto text-center">
//           <div className="flex justify-center items-center mb-4">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mr-2 shadow">
//               <img src={assets.logo} alt="RR Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
//             </div>
//             <h2 className="text-xl md:text-2xl font-bold">RR AGROS</h2>
//           </div>
//           <p className="text-xs md:text-sm opacity-90">Manufacturer - Drip Irrigation Products</p>
//           <p className="text-xs md:text-sm opacity-90 mt-2 mb-4">Contact Us:</p>
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//             {contactNumbers.map((number, index) => (
//               <a
//                 key={index}
//                 href={`tel:${number}`}
//                 className="bg-white text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full font-medium hover:bg-green-100 transition-colors text-sm md:text-base"
//               >
//                 {number}
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;





import React, { useState } from 'react';
import { assets } from './assets/assets';
import {
  RoundDriftFittings,
  FlatDriftFittings,
  MM20DripFittings,
  LayflatFittings,
  RainPipeFittings,
  DripFittings,
  BallValves
} from './assets/assets';

const App = () => {
  const [showContact, setShowContact] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const contactNumbers = [
    "6300996391",
    "9849325063",
    "9391135849"
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowContact(true);
  };

  const handleCallClick = (number) => {
    window.location.href = `tel:${number}`;
  };

  const closeContactModal = () => {
    setShowContact(false);
  };

  // Organize Ball Valves by proper categories
  const organizedBallValves = {
    "Standard Ball Valve": [],
    "Standard Ball Walve": [],
    "Flush Valve": [],
    "Union Ball Valve": [],
    "Three Way Ball Valve": []
  };
  
  // Process BallValves array to organize them correctly
  BallValves.forEach((item, index) => {
    const name = item.name || "";
    
    // Determine the correct category based on the image filename or name
    let category;
    if (item.category === "Flush") {
      category = "Flush Valve";
    } else if (item.category === "Union") {
      category = "Union Ball Valve";
    } else if (item.category === "Three Way") {
      category = "Three Way Ball Valve";
    } else if (item.image && item.image.toString().includes("BallWalve")) {
      category = "Standard Ball Walve";
    } else {
      category = "Standard Ball Valve";
    }
    
    if (!organizedBallValves[category]) {
      organizedBallValves[category] = [];
    }
    
    organizedBallValves[category].push({
      id: `valve-${index}`,
      name: name,
      category: category,
      length: item.length,
      image: item.image || "/api/placeholder/150/150"
    });
  });

  // Map the imported product collections to the categories structure
  const categories = [
    {
      name: "ROUND DRIP FITTINGS",
      products: RoundDriftFittings.map((item, index) => ({
        id: `round-${index}`,
        name: item.name,
        length: item.length,
        image: item.image || "/api/placeholder/150/150" // Fallback to placeholder if image is undefined
      }))
    },
    {
      name: "FLAT DRIP FITTINGS",
      products: FlatDriftFittings.map((item, index) => ({
        id: `flat-${index}`,
        name: item.name,
        length: item.length,
        image: item.image || "/api/placeholder/150/150"
      }))
    },
    {
      name: "20 MM DRIP FITTINGS",
      products: MM20DripFittings.map((item, index) => ({
        id: `20mm-${index}`,
        name: item.name,
        length: item.length,
        image: item.image || "/api/placeholder/150/150"
      }))
    },
    {
      name: "LAY FLAT FITTINGS",
      products: LayflatFittings.map((item, index) => ({
        id: `layflat-${index}`,
        name: item.name,
        length: item.length,
        image: item.image || "/api/placeholder/150/150"
      }))
    },
    {
      name: "RAIN PIPE FITTINGS",
      products: RainPipeFittings.map((item, index) => ({
        id: `rainpipe-${index}`,
        name: item.name,
        length: item.length,
        image: item.image || "/api/placeholder/150/150"
      }))
    },
    {
      name: "DRIP FITTINGS",
      products: DripFittings.map((item, index) => ({
        id: `drip-${index}`,
        name: item.name,
        length: item.length,
        image: item.image || "/api/placeholder/150/150"
      }))
    },
    {
      name: "BALL VALVES",
      specialCategory: true, // Mark for special handling in rendering
      subcategories: Object.keys(organizedBallValves)
        .filter(category => organizedBallValves[category].length > 0) // Only include non-empty categories
        .map(category => ({
          name: category.toUpperCase(),
          products: organizedBallValves[category]
        }))
    },
  ];

  // Function to determine image size based on item length
  const getImageHeightClass = (length) => {
    if (!length) return "h-16 md:h-20"; // Increased default size
    
    // Extract numerical part from length if possible
    const sizeMatch = length.toString().match(/\d+(\.\d+)?/);
    const size = sizeMatch ? parseFloat(sizeMatch[0]) : 0;
    
    if (size >= 4) return "h-24 md:h-28"; // Largest items
    if (size >= 3) return "h-22 md:h-26"; // Larger items
    if (size >= 2) return "h-20 md:h-24"; // Medium-large items
    if (size >= 1) return "h-18 md:h-22"; // Medium items
    return "h-16 md:h-20"; // Smaller items
  };

  return (
    <div className="bg-green-50 min-h-screen text-gray-900 font-sans">
      {/* Header - Fixed logo sizing */}
      <header className="bg-green-700 text-white shadow-md p-4 lg:p-6">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mr-4 md:mr-5 shadow-md">
              <img src={assets.logo} alt="RR Logo" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold">RR AGROS</h1>
              <p className="text-xs md:text-sm italic">MANUFACTURER - DRIP IRRIGATION PRODUCTS</p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Tagline with pipes2 image */}
      <div className="bg-white text-green-700 p-3 md:p-6 shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Text Section */}
          <div className="flex-1 md:max-w-[60%] lg:max-w-[65%] text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg md:text-2xl font-semibold leading-snug">
              Efficient, Reliable & Cost-Effective Drip Irrigation Systems
            </p>
            <p className="text-green-600 text-sm md:text-base mt-2">
              Top-quality drip irrigation solutions for maximum efficiency
            </p>
            <p className="text-green-600 text-sm md:text-base mt-2">
              If quality products is your target, come to RR AGROS
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 md:max-w-[40%] lg:max-w-[35%]">
            <img 
              src={assets.pipes2} 
              alt="Irrigation Pipes" 
              className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Introduction with highlighted text and second image */}
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 z-10">
              <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                Premium Drip Irrigation Solutions
              </h2>
              <p className="text-gray-700 mb-4">
                RR AGROS provides high-quality drip irrigation products designed for efficiency and durability. 
                Our products help farmers optimize water usage and increase crop yields while reducing costs.
              </p>
              <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-600 font-medium text-green-800">
                Trusted by thousands of farmers across the region for reliable irrigation solutions.
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <img 
                src={assets.pipes} 
                alt="Drip Irrigation Pipes" 
                className="w-full h-auto max-h-64 md:max-h-80 object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Product Categories */}
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-500">
              {category.name}
            </h2>

            {category.specialCategory ? (
              // Special handling for Ball Valves
              <div>
                {/* Standard Ball Valves (first type) */}
                {organizedBallValves["Standard Ball Valve"].length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
                      STANDARD BALL VALVES (TYPE 1)
                    </h3>
                    {/* Modified: Changed to 3 columns on mobile, 5 on md, 7 on lg screens */}
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
                      {organizedBallValves["Standard Ball Valve"].map((product) => (
                        <div
                          key={product.id}
                          className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className="p-2 md:p-3 flex flex-col items-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/api/placeholder/150/150";
                              }}
                            />
                            <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
                               {product.name}
                              {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Standard Ball Walves (second type) */}
                {organizedBallValves["Standard Ball Walve"].length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
                      STANDARD BALL VALVES (TYPE 2)
                    </h3>
                    {/* Modified: Changed to 3 columns on mobile, 5 on md, 7 on lg screens */}
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
                      {organizedBallValves["Standard Ball Walve"].map((product) => (
                        <div
                          key={product.id}
                          className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className="p-2 md:p-3 flex flex-col items-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/api/placeholder/150/150";
                              }}
                            />
                            <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
                              {product.name}
                              {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Valve Categories (Flush, Union, Three Way) */}
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3 mt-4 bg-green-50 p-2 rounded">
                    SPECIAL VALVE TYPES
                  </h3>
                  {/* Modified: Changed to stack vertically on mobile, 3 columns on md+ */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Flush Valves */}
                    {organizedBallValves["Flush Valve"].length > 0 && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
                          FLUSH VALVES
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                          {organizedBallValves["Flush Valve"].map((product) => (
                            <div
                              key={product.id}
                              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
                              onClick={() => handleProductClick(product)}
                            >
                              <div className="p-2 md:p-3 flex flex-col items-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/api/placeholder/150/150";
                                  }}
                                />
                                <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
                                  {product.name}
                                  {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
                                </h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Union Ball Valves */}
                    {organizedBallValves["Union Ball Valve"].length > 0 && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
                          UNION BALL VALVES
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                          {organizedBallValves["Union Ball Valve"].map((product) => (
                            <div
                              key={product.id}
                              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
                              onClick={() => handleProductClick(product)}
                            >
                              <div className="p-2 md:p-3 flex flex-col items-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/api/placeholder/150/150";
                                  }}
                                />
                                <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
                                  {product.name}
                                  {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
                                </h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Three Way Ball Valves */}
                    {organizedBallValves["Three Way Ball Valve"].length > 0 && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-800 text-center mb-2 pb-1 border-b border-green-200">
                          THREE WAY BALL VALVES
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                          {organizedBallValves["Three Way Ball Valve"].map((product) => (
                            <div
                              key={product.id}
                              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
                              onClick={() => handleProductClick(product)}
                            >
                              <div className="p-2 md:p-3 flex flex-col items-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/api/placeholder/150/150";
                                  }}
                                />
                                <h5 className="text-center font-medium text-green-800 text-xs md:text-sm">
                                  {product.name}
                                  {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
                                </h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Regular categories without subcategories
              // Modified: Changed to 3 columns on mobile, 4 on md, 6 on lg screens
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-green-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="p-2 md:p-3 flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full ${getImageHeightClass(product.length)} object-contain mb-2`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/150/150";
                        }}
                      />
                      <h4 className="text-center font-medium text-green-800 text-xs md:text-sm">
                        {product.name}
                        {product.length && <span className="block text-xs md:text-sm text-green-600 mt-1">{product.length}</span>}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-5 md:p-6 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-green-700">Contact Details</h2>
              <button
                onClick={closeContactModal}
                className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {selectedProduct && (
              <div className="flex items-center mb-5 p-3 bg-green-50 rounded-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mr-3 md:mr-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/150/150";
                  }}
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-green-800">{selectedProduct.name}</h3>
                  {selectedProduct.length && <p className="text-sm text-green-600">{selectedProduct.length}</p>}
                </div>
              </div>
            )}

            <div className="space-y-3">
              {contactNumbers.map((number, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-3 md:p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-green-100 transition-colors"
                  onClick={() => handleCallClick(number)}
                >
                  <div className="flex items-center">
                    <div className="bg-green-600 p-2 rounded-full mr-3 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-base md:text-lg font-medium">{number}</span>
                  </div>
                  <button className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base">
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-green-800 text-white p-5 md:p-6 mt-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mr-2 shadow">
              <img src={assets.logo} alt="RR Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">RR AGROS</h2>
          </div>
          <p className="text-xs md:text-sm opacity-90">Manufacturer - Drip Irrigation Products</p>
          <p className="text-xs md:text-sm opacity-90 mt-2 mb-4">Contact Us:</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {contactNumbers.map((number, index) => (
              <a
                key={index}
                href={`tel:${number}`}
                className="bg-white text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full font-medium hover:bg-green-100 transition-colors text-sm md:text-base"
              >
                {number}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;