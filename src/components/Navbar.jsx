// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";
// import BackgroundImage from "../assets/Background/B4.jpeg";

// const Navbar = () => {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location.pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);
//   const toggleServices = () => setIsServicesOpen(!isServicesOpen);

//   const closeMenus = () => {
//     setIsMenuOpen(false);
//     setIsCollectionsOpen(false);
//     setIsServicesOpen(false);
//   };

//   return (
//     <div
//       className="relative w-full bg-cover bg-center overflow-visible z-50"
//       style={{
//         backgroundImage: `url(${BackgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "top center",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

//       <div className="relative z-10 bg-white w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
//         <nav className="border-b border-gray-300 relative overflow-visible">
//           <div className="flex items-center justify-between py-3 sm:py-4 md:py-5">
//             {/* Left section (mobile toggle) */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <button
//                 onClick={toggleMenu}
//                 className="md:hidden text-gray-800 focus:outline-none p-2"
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6 sm:w-7 sm:h-7" />
//                 ) : (
//                   <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
//                 )}
//               </button>
//             </div>

//             {/* Desktop menu (center) */}
//             <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm sm:text-base font-medium text-gray-800 flex-grow justify-center">
//               <Link to="/" className="hover:text-black">Home</Link>
//               <Link to="/About" className="hover:text-black">About</Link>

//               {/* Collections dropdown */}
//               <div className="relative group">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center hover:text-black"
//                 >
//                   Collections
//                   <ChevronDown
//                     className={`w-4 h-4 ml-1 transform transition-transform ${
//                       isCollectionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-md p-3 z-50 transition-all ${
//                     isCollectionsOpen
//                       ? "opacity-100 max-h-96"
//                       : "opacity-0 max-h-0 overflow-hidden"
//                   }`}
//                 >
//                   <div className="mb-3">
//                     <div className="font-semibold">Clothing</div>
//                     <ul className="ml-3 space-y-1">
//                       <li><Link to="/Product" onClick={closeMenus}>Men</Link></li>
//                       <li><Link to="/Collections/ClothingF" onClick={closeMenus}>Women</Link></li>
//                       <li><Link to="/Collections/Kids" onClick={closeMenus}>Kids</Link></li>
//                     </ul>
//                   </div>
//                   <div className="mb-3">
//                     <div className="font-semibold">Footwear</div>
//                     <ul className="ml-3 space-y-1">
//                       <li><Link to="/Collections/FootwareM" onClick={closeMenus}>Men</Link></li>
//                       <li><Link to="/Collections/FootwareF" onClick={closeMenus}>Women</Link></li>
//                     </ul>
//                   </div>
//                   <div className="space-y-1">
//                     <Link to="/Collections/Assessories" onClick={closeMenus}>Accessories</Link>
//                     <Link to="/Collections/Bags" onClick={closeMenus}>Bags</Link>
//                   </div>
//                 </div>
//               </div>



              

//               <Link to="/lookbook" className="hover:text-black">Lookbook</Link>

//               {/* Services dropdown */}
//               <div className="relative group">
//                 <button
//                   onClick={toggleServices}
//                   className="flex items-center hover:text-black"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`w-4 h-4 ml-1 transform transition-transform ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-md p-3 z-50 transition-all ${
//                     isServicesOpen
//                       ? "opacity-100 max-h-96"
//                       : "opacity-0 max-h-0 overflow-hidden"
//                   }`}
//                 >
//                   <ul className="space-y-2">
//                     <li><Link to="/Services/Personalization" onClick={closeMenus}>Personalization</Link></li>
//                     <li><Link to="/Galary" onClick={closeMenus}>Dress Gallery</Link></li>
//                     <li><Link to="/Services/Suplimentory" onClick={closeMenus}>Care Services</Link></li>
//                     <li><Link to="/Services/Sustainbility" onClick={closeMenus}>Sustainability</Link></li>
//                     <li><Link to="/Services/FashionEvent" onClick={closeMenus}>Events & Gifting</Link></li>
//                   </ul>
//                 </div>
//               </div>

//               <Link to="/Contact" className="hover:text-black">Contact</Link>
//             </div>

//             {/* Right section (social media icons) */}
//             <div className="hidden md:flex items-center space-x-4 text-gray-700">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaFacebookF size={18} />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaInstagram size={18} />
//               </a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaYoutube size={18} />
//               </a>
//               <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaTiktok size={18} />
//               </a>
//             </div>
//           </div>
//         </nav>

//         {/* Branding */}
//         <div className="text-center py-3 sm:py-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-widest select-none">
//           AURORA
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import BackgroundImage from '../assets/Background/B4.jpeg';

// const Navbar = () => {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   useEffect(() => {
//     // Reset all dropdown and menu states when the path changes
//     setIsMenuOpen(false);
//     setIsCollectionsOpen(false);
//     setIsServicesOpen(false);
//   }, [location.pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);
//   const toggleServices = () => setIsServicesOpen(!isServicesOpen);

//   const closeMenus = () => {
//     setIsMenuOpen(false);
//     setIsCollectionsOpen(false);
//     setIsServicesOpen(false);
//   };

//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${BackgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top center',
//         fontFamily: 'Inter, sans-serif',
//       }}
//     >
//       <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
//       <div className="relative z-10 bg-white w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
//         <nav className="border-b border-gray-300">
//           <div className="flex items-center justify-between py-3 sm:py-4 md:py-5">
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               {/* Uncomment and replace with actual logo path if needed */}
//               {/* <Link to="/">
//                 <img
//                   src={LogoIcon}
//                   alt="Logo"
//                   className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
//                   onError={(e) => console.error('LogoIcon failed to load:', e)}
//                 />
//               </Link> */}
//               <button
//                 onClick={toggleMenu}
//                 className="md:hidden text-gray-800 focus:outline-none p-2"
//                 aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//                 aria-expanded={isMenuOpen}
//               >
//                 {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
//               </button>
//             </div>

//             <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm sm:text-base font-medium text-gray-800 flex-grow justify-center">
//               <Link to="/" className="hover:text-black transition-colors duration-200">Home</Link>
//               <Link to="/About" className="hover:text-black transition-colors duration-200">About</Link>
//               <div className="relative group">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center hover:text-black transition-colors duration-200"
//                   aria-expanded={isCollectionsOpen}
//                 >
//                   Collections
//                   <ChevronDown
//                     className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform duration-200 ${isCollectionsOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 <div
//                   className={`absolute left-0 top-full mt-2 w-48 sm:w-56 bg-white border rounded-lg shadow-md p-3 z-50 transition-all duration-200 ease-in-out ${
//                     isCollectionsOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
//                   }`}
//                 >
//                   <div className="mb-3">
//                     <div className="font-semibold text-sm sm:text-base">Clothing</div>
//                     <ul className="ml-3 space-y-1 text-sm sm:text-base">
//                       <li><Link to="/Product" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Men</Link></li>
//                       <li><Link to="/Collections/ClothingF" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Women</Link></li>
//                       <li><Link to="/Collections/Kids" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Kids</Link></li>
//                     </ul>
//                   </div>
//                   <div className="mb-3">
//                     <div className="font-semibold text-sm sm:text-base">Footwear</div>
//                     <ul className="ml-3 space-y-1 text-sm sm:text-base">
//                       <li><Link to="/Collections/FootwareM" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Men</Link></li>
//                       <li><Link to="/Collections/FootwareF" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Women</Link></li>
//                     </ul>
//                   </div>
//                   <div className="space-y-1">
//                     <div><Link to="/Collections/Assessories" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Accessories</Link></div>
//                     <div><Link to="/Collections/Bags" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Bags</Link></div>
//                   </div>
//                 </div>
//               </div>
//               <Link to="/lookbook" className="hover:text-black transition-colors duration-200">Lookbook</Link>
//               <div className="relative group">
//                 <button
//                   onClick={toggleServices}
//                   className="flex items-center hover:text-black transition-colors duration-200"
//                   aria-expanded={isServicesOpen}
//                 >
//                   Services
//                   <ChevronDown
//                     className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 <div
//                   className={`absolute left-0 top-full mt-2 w-48 sm:w-56 bg-white border rounded-lg shadow-md p-3 z-50 transition-all duration-200 ease-in-out ${
//                     isServicesOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
//                   }`}
//                 >
//                   <ul className="space-y-2 text-sm sm:text-base">
//                     <li><Link to="/Services/Personalization" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Personalization</Link></li>
//                     <li><Link to="/Galary" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Dress Gallery</Link></li>
//                     <li><Link to="/Services/Supplementary" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Care Services</Link></li>
//                     <li><Link to="/Services/Sustainability" className="hover:text-black transition-colors duration-200" onClick={closeMenus}>Sustainability</Link></li>
//                     <li><Link to="/Services/FashionEvent" className="block hover:text-black" onClick={closeMenus}>Events & Gifting</Link></li>
//                   </ul>
//                 </div>
//               </div>
//               <Link to="/Contact" className="hover:text-black transition-colors duration-200">Contact</Link>
//             </div>

//             <div className="hidden md:flex items-center space-x-4 lg:space-x-5 text-gray-700">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="Facebook">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="Instagram">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.981-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </a>
//               <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="TikTok">
//                 <img
//                   src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg"
//                   alt="TikTok"
//                   className="w-5 h-5 sm:w-6 sm:h-6"
//                 />
//               </a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="YouTube">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12a31.247 31.247 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12a31.247 31.247 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {isMenuOpen && (
//             <div className="md:hidden bg-white border-t border-gray-300 shadow-md w-full px-4 sm:px-6 py-4 space-y-4 font-medium text-gray-800">
//               <Link to="/" className="block hover:text-black transition-colors duration-200" onClick={closeMenus}>Home</Link>
//               <Link to="/About" className="block hover:text-black transition-colors duration-200" onClick={closeMenus}>About</Link>
//               <div>
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center w-full hover:text-black transition-colors duration-200 text-sm sm:text-base"
//                   aria-expanded={isCollectionsOpen}
//                 >
//                   Collections
//                   <ChevronDown
//                     className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform duration-200 ${isCollectionsOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="pl-4 mt-2 space-y-2 text-sm sm:text-base">
//                     <Link to="/Product" className="block hover:text-black" onClick={closeMenus}>Men</Link>
//                     <Link to="/Collections/ClothingF" className="block hover:text-black" onClick={closeMenus}>Women</Link>
//                     <Link to="/Collections/Kids" className="block hover:text-black" onClick={closeMenus}>Kids</Link>
//                     <Link to="/Collections/FootwareM" className="block hover:text-black" onClick={closeMenus}>Footwear Men</Link>
//                     <Link to="/Collections/FootwareF" className="block hover:text-black" onClick={closeMenus}>Footwear Women</Link>
//                     <Link to="/Collections/Assessories" className="block hover:text-black" onClick={closeMenus}>Accessories</Link>
//                     <Link to="/Collections/Bags" className="block hover:text-black" onClick={closeMenus}>Bags</Link>
//                   </div>
//                 )}
//               </div>
//               <Link to="/lookbook" className="block hover:text-black transition-colors duration-200" onClick={closeMenus}>Lookbook</Link>
//               <div>
//                 <button
//                   onClick={toggleServices}
//                   className="flex items-center w-full hover:text-black transition-colors duration-200 text-sm sm:text-base"
//                   aria-expanded={isServicesOpen}
//                 >
//                   Services
//                   <ChevronDown
//                     className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {isServicesOpen && (
//                   <div className="pl-4 mt-2 space-y-2 text-sm sm:text-base">
//                     <Link to="/Services/Personalization" className="block hover:text-black" onClick={closeMenus}>Personalization</Link>
//                     <Link to="/Galary" className="block hover:text-black" onClick={closeMenus}>Dress Gallery</Link>
//                     <Link to="/Services/Supplementary" className="block hover:text-black" onClick={closeMenus}>Care Services</Link>
//                     <Link to="/Services/FashionEvent" className="block hover:text-black" onClick={closeMenus}>Events & Gifting</Link>
//                     <li><Link to="/Services/Sustainability" className="block hover:text-black" onClick={closeMenus}>Sustainability</Link></li>
//                   </div>
//                 )}
//               </div>
//               <Link to="/Contact" className="block hover:text-black transition-colors duration-200" onClick={closeMenus}>Contact</Link>
//               <div className="flex space-x-6 pt-2 text-gray-700">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="Facebook">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="Instagram">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.981-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>
//                 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="TikTok">
//                   <img
//                     src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg"
//                     alt="TikTok"
//                     className="w-5 h-5 sm:w-6 sm:h-6"
//                   />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200" aria-label="YouTube">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12a31.247 31.247 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12a31.247 31.247 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           )}
//         </nav>
//         <div className="text-center py-3 sm:py-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-widest select-none">
//           AURORA
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";
// import BackgroundImage from "../assets/Background/B4.jpeg";

// const Navbar = () => {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location.pathname]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);
//   const toggleServices = () => setIsServicesOpen(!isServicesOpen);

//   const closeMenus = () => {
//     setIsMenuOpen(false);
//     setIsCollectionsOpen(false);
//     setIsServicesOpen(false);
//   };

//   return (
//     <div
//       className="relative w-full bg-cover bg-center overflow-visible z-50"
//       style={{
//         backgroundImage: `url(${BackgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "top center",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

//       <div className="relative z-10 bg-white w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
//         <nav className="border-b border-gray-300 relative overflow-visible">
//           <div className="flex items-center justify-between py-3 sm:py-4 md:py-5">
//             {/* Left section (mobile toggle) */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <button
//                 onClick={toggleMenu}
//                 className="md:hidden text-gray-800 focus:outline-none p-2"
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6 sm:w-7 sm:h-7" />
//                 ) : (
//                   <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
//                 )}
//               </button>
//             </div>

//             {/* Desktop menu (center) */}
//             <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm sm:text-base font-medium text-gray-800 flex-grow justify-center">
//               <Link to="/" className="hover:text-black">Home</Link>
//               <Link to="/About" className="hover:text-black">About</Link>

//               {/* Collections dropdown */}
//               <div className="relative group">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center hover:text-black"
//                 >
//                   Collections
//                   <ChevronDown
//                     className={`w-4 h-4 ml-1 transform transition-transform ${
//                       isCollectionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-md p-3 z-50 transition-all ${
//                     isCollectionsOpen
//                       ? "opacity-100 max-h-96"
//                       : "opacity-0 max-h-0 overflow-hidden"
//                   }`}
//                 >
//                   <div className="mb-3">
//                     <div className="font-semibold">Clothing</div>
//                     <ul className="ml-3 space-y-1">
//                       <li><Link to="/Product" onClick={closeMenus}>Men</Link></li>
//                       <li><Link to="/Collections/ClothingF" onClick={closeMenus}>Women</Link></li>
//                       <li><Link to="/Collections/Kids" onClick={closeMenus}>Kids</Link></li>
//                     </ul>
//                   </div>
//                   <div className="mb-3">
//                     <div className="font-semibold">Footwear</div>
//                     <ul className="ml-3 space-y-1">
//                       <li><Link to="/Collections/FootwareM" onClick={closeMenus}>Men</Link></li>
//                       <li><Link to="/Collections/FootwareF" onClick={closeMenus}>Women</Link></li>
//                     </ul>
//                   </div>
//                   <div className="mb-3">
//                     <div className="font-semibold">Accessories</div>
//                     <ul className="ml-3 space-y-1">
//                       <li><Link to="/Collections/Assessories" onClick={closeMenus}>Accessories</Link></li>
//                       <li><Link to="/Collections/Bags" onClick={closeMenus}>Bags</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <Link to="/lookbook" className="hover:text-black">Lookbook</Link>

//               {/* Services dropdown */}
//               <div className="relative group">
//                 <button
//                   onClick={toggleServices}
//                   className="flex items-center hover:text-black"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`w-4 h-4 ml-1 transform transition-transform ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-md p-3 z-50 transition-all ${
//                     isServicesOpen
//                       ? "opacity-100 max-h-96"
//                       : "opacity-0 max-h-0 overflow-hidden"
//                   }`}
//                 >
//                   <ul className="space-y-2">
//                     <li><Link to="/Services/Personalization" onClick={closeMenus}>Personalization</Link></li>
//                     <li><Link to="/Galary" onClick={closeMenus}>Dress Gallery</Link></li>
//                     <li><Link to="/Services/Suplimentory" onClick={closeMenus}>Care Services</Link></li>
//                     <li><Link to="/Services/Sustainbility" onClick={closeMenus}>Sustainability</Link></li>
//                     <li><Link to="/Services/FashionEvent" onClick={closeMenus}>Events & Gifting</Link></li>
//                   </ul>
//                 </div>
//               </div>

//               <Link to="/Contact" className="hover:text-black">Contact</Link>
//             </div>

//             {/* Right section (social media icons) */}
//             <div className="hidden md:flex items-center space-x-4 text-gray-700">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaFacebookF size={18} />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaInstagram size={18} />
//               </a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaYoutube size={18} />
//               </a>
//               <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                 <FaTiktok size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           {isMenuOpen && (
//             <div className="md:hidden bg-white border-t border-gray-300 shadow-md w-full px-4 sm:px-6 py-4 space-y-4 font-medium text-gray-800">
//               <Link to="/" className="block hover:text-black" onClick={closeMenus}>Home</Link>
//               <Link to="/About" className="block hover:text-black" onClick={closeMenus}>About</Link>
//               <div>
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center w-full hover:text-black text-sm sm:text-base"
//                 >
//                   Collections
//                   <ChevronDown
//                     className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform ${
//                       isCollectionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {isCollectionsOpen && (
//                   <div className="pl-4 mt-2 space-y-2 text-sm sm:text-base">
//                     <Link to="/Product" className="block hover:text-black" onClick={closeMenus}>Men</Link>
//                     <Link to="/Collections/ClothingF" className="block hover:text-black" onClick={closeMenus}>Women</Link>
//                     <Link to="/Collections/Kids" className="block hover:text-black" onClick={closeMenus}>Kids</Link>
//                     <Link to="/Collections/FootwareM" className="block hover:text-black" onClick={closeMenus}>Footwear Men</Link>
//                     <Link to="/Collections/FootwareF" className="block hover:text-black" onClick={closeMenus}>Footwear Women</Link>
//                     <Link to="/Collections/Assessories" className="block hover:text-black" onClick={closeMenus}>Accessories</Link>
//                     <Link to="/Collections/Bags" className="block hover:text-black" onClick={closeMenus}>Bags</Link>
//                   </div>
//                 )}
//               </div>
//               <Link to="/lookbook" className="block hover:text-black" onClick={closeMenus}>Lookbook</Link>
//               <div>
//                 <button
//                   onClick={toggleServices}
//                   className="flex items-center w-full hover:text-black text-sm sm:text-base"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {isServicesOpen && (
//                   <div className="pl-4 mt-2 space-y-2 text-sm sm:text-base">
//                     <Link to="/Services/Personalization" className="block hover:text-black" onClick={closeMenus}>Personalization</Link>
//                     <Link to="/Galary" className="block hover:text-black" onClick={closeMenus}>Dress Gallery</Link>
//                     <Link to="/Services/Suplimentory" className="block hover:text-black" onClick={closeMenus}>Care Services</Link>
//                     <Link to="/Services/Sustainbility" className="block hover:text-black" onClick={closeMenus}>Sustainability</Link>
//                     <Link to="/Services/FashionEvent" className="block hover:text-black" onClick={closeMenus}>Events & Gifting</Link>
//                   </div>
//                 )}
//               </div>
//               <Link to="/Contact" className="block hover:text-black" onClick={closeMenus}>Contact</Link>
//               <div className="flex space-x-6 pt-2 text-gray-700">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                   <FaFacebookF size={18} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                   <FaInstagram size={18} />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                   <FaYoutube size={18} />
//                 </a>
//                 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
//                   <FaTiktok size={18} />
//                 </a>
//               </div>
//             </div>
//           )}
//         </nav>

//         {/* Branding */}
//         <div className="text-center py-3 sm:py-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-widest select-none">
//           AURORA
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import BackgroundImage from "../assets/Background/B4.jpeg";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsCollectionsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <div
      className="relative w-full bg-cover bg-center overflow-visible z-50"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      <div className="relative z-10 bg-white w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
        <nav className="border-b border-gray-300 relative overflow-visible">
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-5">
            {/* Left section (mobile toggle) */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-800 focus:outline-none p-2"
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
                )}
              </button>
            </div>

            {/* Desktop menu (center) */}
            <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm sm:text-base font-medium text-gray-800 flex-grow justify-center">
              <Link to="/" className="hover:text-black">Home</Link>
              <Link to="/About" className="hover:text-black">About</Link>

              {/* Collections dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleCollections}
                  className="flex items-center hover:text-black"
                >
                  Collections
                  <ChevronDown
                    className={`w-4.5 h-4.5 ml-1 transform transition-transform ${
                      isCollectionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-md p-3 z-50 transition-all ${
                    isCollectionsOpen
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="mb-3">
                    <div className="font-semibold">Clothing</div>
                    <ul className="ml-3 space-y-1">
                      <li><Link to="/Product" onClick={closeMenus}>Men</Link></li>
                      <li><Link to="/Collections/ClothingF" onClick={closeMenus}>Women</Link></li>
                      <li><Link to="/Collections/Kids" onClick={closeMenus}>Kids</Link></li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="font-semibold">Footwear</div>
                    <ul className="ml-3 space-y-1">
                      <li><Link to="/Collections/FootwareM" onClick={closeMenus}>Men</Link></li>
                      <li><Link to="/Collections/FootwareF" onClick={closeMenus}>Women</Link></li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="font-semibold">Accessories</div>
                    <ul className="ml-3 space-y-1">
                      <li><Link to="/Collections/Assessories" onClick={closeMenus}>Accessories</Link></li>
                      <li><Link to="/Collections/Bags" onClick={closeMenus}>Bags</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/lookbook" className="hover:text-black">Lookbook</Link>

              {/* Services dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleServices}
                  className="flex items-center hover:text-black"
                >
                  Services
                  <ChevronDown
                    className={`w-4.5 h-4.5 ml-1 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-md p-3 z-50 transition-all ${
                    isServicesOpen
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <ul className="space-y-2">
                    <li><Link to="/Services/Personalization" onClick={closeMenus}>Personalization</Link></li>
                    <li><Link to="/Galary" onClick={closeMenus}>Dress Gallery</Link></li>
                    <li><Link to="/Services/Supplementary" onClick={closeMenus}>Care Services</Link></li>
                    <li><Link to="/Services/Sustainbility" onClick={closeMenus}>Sustainability</Link></li>
                    <li><Link to="/Services/FashionEvent" onClick={closeMenus}>Events & Gifting</Link></li>
                  </ul>
                </div>
              </div>

              <Link to="/Contact" className="hover:text-black">Contact</Link>
            </div>

            {/* Right section (social media icons) */}
            <div className="hidden md:flex items-center space-x-4 text-gray-700">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaYoutube size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-300 shadow-md w-full px-4 sm:px-6 py-4 space-y-4 font-medium text-gray-800">
              <Link to="/" className="block hover:text-black" onClick={closeMenus}>Home</Link>
              <Link to="/About" className="block hover:text-black" onClick={closeMenus}>About</Link>
              <div>
                <button
                  onClick={toggleCollections}
                  className="flex items-center w-full hover:text-black text-sm sm:text-base"
                >
                  Collections
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 ml-1 transform transition-transform ${
                      isCollectionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCollectionsOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-sm sm:text-base">
                    <Link to="/Product" className="block hover:text-black" onClick={closeMenus}>Men</Link>
                    <Link to="/Collections/ClothingF" className="block hover:text-black" onClick={closeMenus}>Women</Link>
                    <Link to="/Collections/Kids" className="block hover:text-black" onClick={closeMenus}>Kids</Link>
                    <Link to="/Collections/FootwareM" className="block hover:text-black" onClick={closeMenus}>Footwear Men</Link>
                    <Link to="/Collections/FootwareF" className="block hover:text-black" onClick={closeMenus}>Footwear Women</Link>
                    <Link to="/Collections/Assessories" className="block hover:text-black" onClick={closeMenus}>Accessories</Link>
                    <Link to="/Collections/Bags" className="block hover:text-black" onClick={closeMenus}>Bags</Link>
                  </div>
                )}
              </div>
              <Link to="/lookbook" className="block hover:text-black" onClick={closeMenus}>Lookbook</Link>
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center w-full hover:text-black text-sm sm:text-base"
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 ml-1 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-sm sm:text-base">
                    <Link to="/Services/Personalization" className="block hover:text-black" onClick={closeMenus}>Personalization</Link>
                    <Link to="/Galary" className="block hover:text-black" onClick={closeMenus}>Dress Gallery</Link>
                    <Link to="/Services/Supplementary" className="block hover:text-black" onClick={closeMenus}>Care Services</Link>
                    <Link to="/Services/Sustainbility" className="block hover:text-black" onClick={closeMenus}>Sustainability</Link>
                    <Link to="/Services/FashionEvent" className="block hover:text-black" onClick={closeMenus}>Events & Gifting</Link>
                  </div>
                )}
              </div>
              <Link to="/Contact" className="block hover:text-black" onClick={closeMenus}>Contact</Link>
              <div className="flex space-x-6 pt-2 text-gray-700">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaInstagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaYoutube size={20} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Branding */}
        <div className="text-center py-3 sm:py-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-widest select-none">
          AURORA
        </div>
      </div>
    </div>
  );
};

export default Navbar;