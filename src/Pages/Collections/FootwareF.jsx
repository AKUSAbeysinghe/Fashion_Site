
// import React from 'react';

// import LookBook1 from '../../assets/Footware/FG7.jpeg';
// import LookBook2 from '../../assets/Footware/FG6.jpeg';
// import LookBook3 from '../../assets/Footware/FG4.jpeg';
// import LookBook4 from '../../assets/Footware/FG5.jpeg';
// import LookBook5 from '../../assets/Footware/FG13.jpeg';
// import LinenJacket from '../../assets/Footware/Footware1.jpeg';
// import SuedeJacket from '../../assets/Footware/Footware2.jpeg';
// import SuedeJacketModel from '../../assets/Footware/footware3.jpeg';
// import PleatedJacket from '../../assets/Footware/footware4.jpeg';
// import LeatherJacket1 from '../../assets/Footware/footware5.jpeg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';
// import w1 from "../../assets/Footware/FG1.jpeg";
// import w4 from "../../assets/Footware/FG2.jpeg";
// import w3 from "../../assets/Footware/FG3.jpeg";
// import w2 from "../../assets/Footware/fwg3.jpg";
// import w5 from "../../assets/Footware/fwg2.jpg";
// import w6 from "../../assets/Footware/fwg1.jpg";
// import w7 from "../../assets/Footware/FG12.jpeg";
// import w8 from "../../assets/Footware/FG8.jpeg";
// import w9 from "../../assets/Footware/FG9.jpeg";
// import w10 from "../../assets/Footware/FG10.jpeg";
// import w11 from "../../assets/Footware/FG11.jpeg";
// import w12 from "../../assets/Footware/fwg4.jpg";
// import w13 from "../../assets/Footware/fwg5.jpg";
// import w14 from "../../assets/Footware/fwg6.jpg";
// import w15 from "../../assets/Footware/fwg7.jpg";


// const Header = () => (
//   // The line border class 'border-b border-gray-200' has been removed
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// const ProductCard = ({ product }) => {
//   const { imageUrl, name, price, collection } = product;
//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-md">
//       <div className="relative pb-[125%] overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={name}
//           className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute bottom-2 left-2 p-1 bg-white bg-opacity-75 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
//           +
//         </div>
//       </div>
//       <div className="p-4 text-center">
//         <p className="text-xs text-gray-500 mb-1 uppercase">{collection}</p>
//         <h3 className="text-base font-medium mb-1">{name}</h3>
//         <p className="text-sm font-semibold">{price} EUR</p>
//       </div>
//     </div>
//   );
// };

// const ProductListing = ({ products }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
//     {products.map((product) => (
//       <ProductCard key={product.id + product.name} product={product} />
//     ))}
//   </div>
// );

// const CombinedHomepage = () => {
//   const products = [
//     { id: 1, imageUrl: LinenJacket, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
//     { id: 2, imageUrl: SuedeJacket, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
//     { id: 3, imageUrl: SuedeJacketModel, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 4, imageUrl: PleatedJacket, collection: 'PLEATED JACKET WITH TABS ZW COLLECTION', name: 'LIMITED EDITION', price: '89.95' },
//     { id: 5, imageUrl: LeatherJacket1, collection: 'ZW COLLECTION', name: 'LEATHER JACKET LOOK 1', price: '149.95' },
//     { id: 6, imageUrl: w1, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
//     { id: 7, imageUrl: w3, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
//     { id: 8, imageUrl: w4, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 9, imageUrl: w2, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
//     { id: 10, imageUrl: w5, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
//     { id: 11, imageUrl: w6, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 12, imageUrl: w7, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
//     { id: 13, imageUrl: w8, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 14, imageUrl: w9, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
//     { id: 15, imageUrl: w10, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
//     { id: 16, imageUrl: w11, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 17, imageUrl: w12, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 18, imageUrl: w13, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 19, imageUrl: w14, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 20, imageUrl: w15, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//   ];

//   return (
//     <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//              Elegant Comfort
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">Stride in Style: Elegant & Comfy Footwear for Her</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Explore our range of women’s footwear that merges elegance with practicality. From chic heels and stylish flats to sporty sneakers and comfortable sandals, our designs cater to every lifestyle and preference.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   From Work to Weekend: Shoes That Empower
//                 </p>
//               </div>
//             </div>
//           </main>
//         </div>

//         <div className="py-12">
//           <div className="w-full mx-auto rounded-xl p-6 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[LookBook1, LookBook3, LookBook2, LookBook4, LookBook5].map((img, idx) => (
//                 <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//                   <img src={img} alt={`Lookbook ${idx + 1}`} className="w-full h-auto object-cover aspect-square md:aspect-auto" />
//                 </div>
//               ))}

//               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">TRY <br /> SOMETHING <br /> NEW</h2>
//                 <p className="text-gray-700 mb-4 text-sm">
//                   GIVE OVERALLS, CAMO, BANDANAS AND KICKING UP YOUR HEELS A SHOT.
//                 </p>
//                 <button className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1">
//                   SHOP NEW ARRIVALS
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow">
//           <div className="flex justify-end p-4 pr-6">
//             <div className="flex space-x-4 text-sm"></div>
//           </div>
//           <ProductListing products={products} />
//         </div>

//         <footer className="mt-24 text-center mb-10">
//           <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
//           <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">Branding & Design</div>
//         </footer>
//       </div>

//       {/* <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
//         <button className="bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm uppercase hidden md:block">CHAT</button>
//         <button className="bg-black text-white p-3 rounded-full shadow-lg">
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default CombinedHomepage;

// import React, { useEffect, useState } from 'react';

// import LookBook1 from '../../assets/Footware/FG7.jpeg';
// import LookBook2 from '../../assets/Footware/FG6.jpeg';
// import LookBook3 from '../../assets/Footware/FG4.jpeg';
// import LookBook4 from '../../assets/Footware/FG5.jpeg';
// import LookBook5 from '../../assets/Footware/FG13.jpeg';
// import LinenJacket from '../../assets/Footware/Footware1.jpeg';
// import SuedeJacket from '../../assets/Footware/Footware2.jpeg';
// import SuedeJacketModel from '../../assets/Footware/Footware3.jpeg';
// import PleatedJacket from '../../assets/Footware/Footware4.jpeg';
// import LeatherJacket1 from '../../assets/Footware/Footware5.jpeg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';
// import w1 from "../../assets/Footware/FG1.jpeg";
// import w4 from "../../assets/Footware/FG2.jpeg";
// import w3 from "../../assets/Footware/FG3.jpeg";
// import w2 from "../../assets/Footware/fwg3.jpg";
// import w5 from "../../assets/Footware/fwg2.jpg";
// import w6 from "../../assets/Footware/fwg1.jpg";
// import w7 from "../../assets/Footware/FG12.jpeg";
// import w8 from "../../assets/Footware/FG8.jpeg";
// import w9 from "../../assets/Footware/FG9.jpeg";
// import w10 from "../../assets/Footware/FG10.jpeg";
// import w11 from "../../assets/Footware/FG11.jpeg";
// import w12 from "../../assets/Footware/fwg4.jpg";
// import w13 from "../../assets/Footware/fwg5.jpg";
// import w14 from "../../assets/Footware/fwg6.jpg";
// import w15 from "../../assets/Footware/fwg7.jpg";

// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// const ProductCard = ({ product }) => {
//   const { image_url, name, price, collection } = product;

//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
//     `I'm interested in purchasing the ${name} from ${collection} priced at ${price}. Please provide more details!`
//   )}`;

//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-md">
//       <div className="relative pb-[125%] overflow-hidden">
//         <img
//           src={image_url}
//           alt={name}
//           onError={(e) => (e.currentTarget.src = LinenJacket)}
//           className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute bottom-2 left-2 p-1 bg-white bg-opacity-75 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
//           +
//         </div>
//       </div>
//       <div className="p-4 text-center">
//         <p className="text-xs text-gray-500 mb-1 uppercase">{collection}</p>
//         <h3 className="text-base font-medium mb-1">{name}</h3>
//         <p className="text-sm font-semibold mb-2">{price}</p>
//         <a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
//         >
//           Buy Now
//         </a>
//       </div>
//     </div>
//   );
// };

// const ProductListing = ({ products }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
//     {products.map((product) => (
//       <ProductCard key={product.id + product.name} product={product} />
//     ))}
//   </div>
// );

// const CombinedHomepage = () => {
//   const [products, setProducts] = useState([]);
//   const [lookbooks, setLookbooks] = useState([]);

//   const fallbackProducts = [
//     { id: 1, image_url: LinenJacket, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '₹89.95' },
//     { id: 2, image_url: SuedeJacket, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '₹299.00' },
//     { id: 3, image_url: SuedeJacketModel, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 4, image_url: PleatedJacket, collection: 'PLEATED JACKET WITH TABS ZW COLLECTION', name: 'LIMITED EDITION', price: '₹89.95' },
//     { id: 5, image_url: LeatherJacket1, collection: 'ZW COLLECTION', name: 'LEATHER JACKET LOOK 1', price: '₹149.95' },
//     { id: 6, image_url: w1, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '₹89.95' },
//     { id: 7, image_url: w3, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '₹299.00' },
//     { id: 8, image_url: w4, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 9, image_url: w2, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '₹89.95' },
//     { id: 10, image_url: w5, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '₹299.00' },
//     { id: 11, image_url: w6, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 12, image_url: w7, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '₹299.00' },
//     { id: 13, image_url: w8, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 14, image_url: w9, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '₹89.95' },
//     { id: 15, image_url: w10, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '₹299.00' },
//     { id: 16, image_url: w11, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 17, image_url: w12, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 18, image_url: w13, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 19, image_url: w14, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//     { id: 20, image_url: w15, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '₹149.00' },
//   ];

//   useEffect(() => {
//     fetch("http://localhost/react_admin_db/get_products.php?gender=women&category=footwear")
//       .then((res) => res.json())
//       .then((response) => {
//         console.log("Products API response:", response); // Debug log
//         // Handle direct array response from get_products.php
//         if (Array.isArray(response) && response.length > 0) {
//           const mappedProducts = response.map((item) => ({
//             id: item.id,
//             name: item.name || "Footwear",
//             collection: item.collection || "Collection",
//             price: item.price ? `₹${Number(item.price).toFixed(2)}` : "₹0.00",
//             image_url: item.image_url || LinenJacket,
//           }));
//           setProducts(mappedProducts);
//         } else {
//           console.warn("No valid footwear data from API, using fallback:", response);
//           setProducts(fallbackProducts);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts(fallbackProducts);
//       });

//     fetch("http://localhost/react_admin_db/get_lookbook.php?gender=women")
//       .then((res) => res.json())
//       .then((response) => {
//         console.log("Lookbook API response:", response); // Debug log
//         // Handle direct array response from get_lookbook.php
//         if (Array.isArray(response) && response.length > 0) {
//           const mappedLookbooks = response.map((l) => ({
//             id: l.id,
//             image_url: l.image_url,
//             collection: l.collection || "Collection",
//             subcategory: l.subcategory || "Lookbook",
//           }));
//           setLookbooks(mappedLookbooks);
//         } else {
//           console.warn("No valid lookbook data from API");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching lookbooks:", err);
//       });
//   }, []);

//   return (
//     <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//              Elegant Comfort
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">Stride in Style: Elegant & Comfy Footwear for Her</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Explore our range of women’s footwear that merges elegance with practicality. From chic heels and stylish flats to sporty sneakers and comfortable sandals, our designs cater to every lifestyle and preference.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   From Work to Weekend: Shoes That Empower
//                 </p>
//               </div>
//             </div>
//           </main>
//         </div>

//         <div className="py-12">
//           <div className="w-full mx-auto rounded-xl p-6 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {lookbooks.length > 0
//                 ? lookbooks.map((l) => (
//                     <div key={l.id} className="overflow-hidden rounded-lg shadow-md">
//                       <img
//                         src={l.image_url}
//                         alt={`${l.collection} ${l.subcategory}`}
//                         onError={(e) => (e.currentTarget.src = LookBook1)}
//                         className="w-full h-auto object-cover aspect-square md:aspect-auto"
//                       />
//                     </div>
//                   ))
//                 : [LookBook1, LookBook3, LookBook2, LookBook4, LookBook5].map((img, idx) => (
//                     <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//                       <img src={img} alt={`Lookbook ${idx + 1}`} className="w-full h-auto object-cover aspect-square md:aspect-auto" />
//                     </div>
//                   ))}

//               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">TRY <br /> SOMETHING <br /> NEW</h2>
//                 <p className="text-gray-700 mb-4 text-sm">
//                   GIVE OVERALLS, CAMO, BANDANAS AND KICKING UP YOUR HEELS A SHOT.
//                 </p>
//                 <button className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1">
//                   SHOP NEW ARRIVALS
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow">
//           <ProductListing products={products} />
//         </div>

//         <footer className="mt-24 text-center mb-10">
//           <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
//           <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">Branding & Design</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default CombinedHomepage;



import React, { useEffect, useState } from 'react';

import LookBook1 from '../../assets/Footware/FG7.jpeg';
import LookBook2 from '../../assets/Footware/FG6.jpeg';
import LookBook3 from '../../assets/Footware/FG4.jpeg';
import LookBook4 from '../../assets/Footware/FG5.jpeg';
import LookBook5 from '../../assets/Footware/FG13.jpeg';
import LinenJacket from '../../assets/Footware/Footware1.jpeg';
import SuedeJacket from '../../assets/Footware/Footware2.jpeg';
import SuedeJacketModel from '../../assets/Footware/Footware3.jpeg';
import PleatedJacket from '../../assets/Footware/Footware4.jpeg';
import LeatherJacket1 from '../../assets/Footware/Footware5.jpeg';
import BackgroundImage from '../../assets/Background/Flower.jpeg';
import w1 from "../../assets/Footware/FG1.jpeg";
import w4 from "../../assets/Footware/FG2.jpeg";
import w3 from "../../assets/Footware/FG3.jpeg";
import w2 from "../../assets/Footware/fwg3.jpg";
import w5 from "../../assets/Footware/fwg2.jpg";
import w6 from "../../assets/Footware/fwg1.jpg";
import w7 from "../../assets/Footware/FG12.jpeg";
import w8 from "../../assets/Footware/FG8.jpeg";
import w9 from "../../assets/Footware/FG9.jpeg";
import w10 from "../../assets/Footware/FG10.jpeg";
import w11 from "../../assets/Footware/FG11.jpeg";
import w12 from "../../assets/Footware/fwg4.jpg";
import w13 from "../../assets/Footware/fwg5.jpg";
import w14 from "../../assets/Footware/fwg6.jpg";
import w15 from "../../assets/Footware/fwg7.jpg";

const Header = () => (
  <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
    <nav className="hidden md:flex items-center space-x-6"></nav>
  </header>
);

const ProductCard = ({ product }) => {
  const { image_url, name, price } = product;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `I'm interested in purchasing the ${name} priced at Rs ${price}. Please provide more details!`
  )}`;
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <div className="relative pb-[125%] overflow-hidden">
        <img
          src={image_url}
          alt={name}
          onError={(e) => (e.currentTarget.src = LinenJacket)}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 p-1 bg-white bg-opacity-75 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          +
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base font-medium mb-1">{name}</h3>
        <p className="text-sm font-semibold mb-2">{price} Rs.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

const ProductListing = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
    {products.map((product) => (
      <ProductCard key={product.id + product.name} product={product} />
    ))}
  </div>
);

const FootwearPage = () => {
  const [products, setProducts] = useState([]);
  const [lookbooks, setLookbooks] = useState([]);
  const [error, setError] = useState('');

  const fallbackProducts = [
    { id: 1, image_url: LinenJacket, collection: 'ZW COLLECTION', name: 'CLASSIC SNEAKERS', price: '89.95' },
    { id: 2, image_url: SuedeJacket, collection: 'ZW COLLECTION LIMITED EDITION', name: 'SUEDE ANKLE BOOTS', price: '299.00' },
    { id: 3, image_url: SuedeJacketModel, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LEATHER SANDALS', price: '149.00' },
    { id: 4, image_url: PleatedJacket, collection: 'PLEATED JACKET WITH TABS ZW COLLECTION', name: 'CASUAL FLATS', price: '89.95' },
    { id: 5, image_url: LeatherJacket1, collection: 'ZW COLLECTION', name: 'HIGH HEELS', price: '149.95' },
    { id: 6, image_url: w1, collection: 'ZW COLLECTION', name: 'SPORTY SNEAKERS', price: '89.95' },
    { id: 7, image_url: w3, collection: 'ZW COLLECTION LIMITED EDITION', name: 'WEDGE SANDALS', price: '299.00' },
    { id: 8, image_url: w4, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LOAFERS', price: '149.00' },
    { id: 9, image_url: w2, collection: 'ZW COLLECTION', name: 'BALLET FLATS', price: '89.95' },
    { id: 10, image_url: w5, collection: 'ZW COLLECTION LIMITED EDITION', name: 'CHELSEA BOOTS', price: '299.00' },
    { id: 11, image_url: w6, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'SLIP-ON SNEAKERS', price: '149.00' },
    { id: 12, image_url: w7, collection: 'ZW COLLECTION LIMITED EDITION', name: 'PLATFORM HEELS', price: '299.00' },
    { id: 13, image_url: w8, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'ESPADRILLES', price: '149.00' },
    { id: 14, image_url: w9, collection: 'ZW COLLECTION', name: 'ANKLE STRAP SANDALS', price: '89.95' },
    { id: 15, image_url: w10, collection: 'ZW COLLECTION LIMITED EDITION', name: 'KNEE-HIGH BOOTS', price: '299.00' },
    { id: 16, image_url: w11, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'CASUAL SNEAKERS', price: '149.00' },
    { id: 17, image_url: w12, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'SLINGBACK HEELS', price: '149.00' },
    { id: 18, image_url: w13, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'FLIP FLOPS', price: '149.00' },
    { id: 19, image_url: w14, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'MARY JANE FLATS', price: '149.00' },
    { id: 20, image_url: w15, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'COMBAT BOOTS', price: '149.00' },
  ];

  useEffect(() => {
    fetch("http://localhost/react_admin_db/get_products.php?gender=women&category=footwear")
      .then((res) => res.json())
      .then((response) => {
        console.log("Products API response:", response); // Debug log
        if (Array.isArray(response) && response.length > 0) {
          const mappedProducts = response.map((item) => ({
            id: item.id,
            name: item.name || "Footwear",
            collection: item.collection || "Collection",
            price: Number(item.price).toFixed(2),
            image_url: item.image_url, // Use full URL from API
          }));
          setProducts(mappedProducts);
        } else {
          console.warn("No valid footwear data from API, using fallback:", response);
          setProducts(fallbackProducts);
          setError("Failed to load products.");
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts(fallbackProducts);
        setError("Error fetching products.");
      });

    fetch("http://localhost/react_admin_db/get_lookbook.php?gender=women&collection=footwear")
      .then((res) => res.json())
      .then((response) => {
        console.log("Lookbook API response:", response); // Debug log
        if (Array.isArray(response) && response.length > 0) {
          const mappedLookbooks = response.map((l) => ({
            id: l.id,
            image_url: l.image_url, // Use full URL from API
            collection: l.collection || "Footwear",
            gender: l.gender || "Women",
          }));
          setLookbooks(mappedLookbooks);
        } else {
          console.warn("No valid lookbook data from API, using fallback");
          setLookbooks([
            { id: 1, image_url: LookBook1, collection: "Footwear", gender: "Women" },
            { id: 2, image_url: LookBook2, collection: "Footwear", gender: "Women" },
            { id: 3, image_url: LookBook3, collection: "Footwear", gender: "Women" },
            { id: 4, image_url: LookBook4, collection: "Footwear", gender: "Women" },
            { id: 5, image_url: LookBook5, collection: "Footwear", gender: "Women" },
          ]);
          setError("Failed to load lookbooks.");
        }
      })
      .catch((err) => {
        console.error("Error fetching lookbooks:", err);
        setLookbooks([
          { id: 1, image_url: LookBook1, collection: "Footwear", gender: "Women" },
          { id: 2, image_url: LookBook2, collection: "Footwear", gender: "Women" },
          { id: 3, image_url: LookBook3, collection: "Footwear", gender: "Women" },
          { id: 4, image_url: LookBook4, collection: "Footwear", gender: "Women" },
          { id: 5, image_url: LookBook5, collection: "Footwear", gender: "Women" },
        ]);
        setError("Error fetching lookbooks.");
      });
  }, []);

  return (
    <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
        <Header />

        <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
          <main className="max-w-4xl w-full text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Elegant Comfort
            </h1>
            <p className="text-xl italic text-gray-600 mb-8">Stride in Style: Elegant & Comfy Footwear for Her</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
              <div className="border-l pl-8 border-gray-400">
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Explore our range of women's footwear that merges elegance with practicality. From chic heels and stylish flats to sporty sneakers and comfortable sandals, our designs cater to every lifestyle and preference.
                </p>
              </div>
              <div className="text-gray-800">
                <p className="text-xl font-bold leading-snug">
                  From Work to Weekend: Shoes That Empower
                </p>
              </div>
            </div>
          </main>
        </div>

        <div className="py-12">
          <div className="w-full mx-auto rounded-xl p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lookbooks.map((l) => (
                <div key={l.id} className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={l.image_url}
                    alt={`${l.collection} ${l.gender}`}
                    onError={(e) => (e.currentTarget.src = LookBook1)}
                    className="w-full h-auto object-cover aspect-square md:aspect-auto"
                  />
                </div>
              ))}

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">TRY <br /> SOMETHING <br /> NEW</h2>
                <p className="text-gray-700 mb-4 text-sm">
                  GIVE OVERALLS, CAMO, BANDANAS AND KICKING UP YOUR HEELS A SHOT.
                </p>
                <button className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1">
                  SHOP NEW ARRIVALS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          {error && (
            <div className="text-center text-red-500 mb-4">
              {error}
            </div>
          )}
          <div className="flex justify-end p-4 pr-6">
            <div className="flex space-x-4 text-sm"></div>
          </div>
          <ProductListing products={products} />
        </div>

        <footer className="mt-24 text-center mb-10">
          <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
          <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">Branding & Design</div>
        </footer>
      </div>
    </div>
  );
};

export default FootwearPage;