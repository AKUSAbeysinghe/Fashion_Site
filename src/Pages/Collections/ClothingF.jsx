



// import React, { useEffect, useState } from "react";

// import LookBook1 from "../../assets/WomenF/Women6.jpeg";
// import LookBook2 from "../../assets/WomenF/Women2.jpeg";
// import LookBook3 from "../../assets/WomenF/Women3.jpeg";
// import LookBook4 from "../../assets/WomenF/Women4.jpeg";
// import LookBook5 from "../../assets/WomenF/Women5.jpeg";
// import LinenJacket from "../../assets/Clothing/WomenC1.jpeg";
// import SuedeJacket from "../../assets/Clothing/WomenC2.jpeg";
// import SuedeJacketModel from "../../assets/Clothing/WomenC3.jpeg";
// import PleatedJacket from "../../assets/Clothing/WomenC4.jpeg";
// import LeatherJacket1 from "../../assets/Clothing/WomenC5.jpeg";
// import BackgroundImage from "../../assets/Background/Flower.jpeg";
// import w1 from "../../assets/Clothing/WomenC6.jpeg";
// import w2 from "../../assets/Clothing/WomenC9.jpeg";
// import w3 from "../../assets/Clothing/WomenC8.jpeg";
// import w4 from "../../assets/Clothing/WomenC7.jpeg";
// import w5 from "../../assets/Clothing/WomenC10.jpeg";
// import w6 from "../../assets/Clothing/WomenC11.jpeg";
// import w7 from "../../assets/Clothing/WomenC12.jpeg";
// import w8 from "../../assets/Clothing/WomenC13.jpeg";
// import w9 from "../../assets/Clothing/WomenC14.jpeg";
// import w10 from "../../assets/Clothing/WomenC15.jpeg";
// import w11 from "../../assets/Clothing/WomenC16.jpeg";

// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// const ProductCard = ({ product }) => {
//   const { image_url, name, price, collection } = product;

//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
//     `I'm interested in purchasing the ${name} from ${collection} priced at ${price} EUR. Please provide more details!`
//   )}`;

//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-md">
//       <div className="relative pb-[125%] overflow-hidden">
//         <img
//           src={image_url}
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
//         <p className="text-sm font-semibold mb-2">{price} EUR</p>
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
//     { id: 1, image_url: LinenJacket, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 2, image_url: SuedeJacket, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 3, image_url: SuedeJacketModel, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 4, image_url: PleatedJacket, collection: "PLEATED JACKET WITH TABS ZW COLLECTION", name: "LIMITED EDITION", price: "89.95" },
//     { id: 5, image_url: LeatherJacket1, collection: "ZW COLLECTION", name: "LEATHER JACKET LOOK 1", price: "149.95" },
//     { id: 6, image_url: w1, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 7, image_url: w3, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 8, image_url: w4, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 9, image_url: w2, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 10, image_url: w5, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 11, image_url: w6, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 12, image_url: w7, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 13, image_url: w8, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 14, image_url: w9, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 15, image_url: w10, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 16, image_url: w11, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//   ];

//   useEffect(() => {
//     // Fetch products
//     fetch("http://localhost/react_admin_db/get_products.php")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const mappedProducts = data.map((item) => ({
//             id: item.id,
//             name: item.subcategory || "Product",
//             collection: item.collection || "Collection",
//             price: item.price || "99.00",
//             image_url: `http://localhost/react_admin_db/uploads/${item.image}`,
//           }));
//           setProducts(mappedProducts);
//         } else {
//           setProducts(fallbackProducts);
//         }
//       })
//       .catch(() => setProducts(fallbackProducts));

//     // Fetch lookbooks
//     fetch("http://localhost/react_admin_db/get_lookbook.php")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const mappedLookbooks = data.map((l) => ({
//             id: l.id,
//             image_url: `http://localhost/react_admin_db/uploads/${l.image}`,
//             collection: l.collection || "Collection",
//             subcategory: l.subcategory || "Lookbook",
//           }));
//           setLookbooks(mappedLookbooks);
//         }
//       })
//       .catch((err) => console.log("Error fetching lookbooks:", err));
//   }, []);

//   return (
//     <div
//       className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">
//               Come Back Here
//             </h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//               Effortless Elegance
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">
//               Elevate your everyday with our women’s clothing line, offering a
//               perfect mix of elegance and ease. From chic dresses and statement
//               tops to comfortable yet stylish essentials, every item is made to
//               flatter and empower.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Whether you prefer bold, fashion-forward looks or timeless
//                   classics, our collection is designed to make you feel
//                   confident, beautiful, and ready for any occasion.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   Your Style, Your Story
//                 </p>
//               </div>
//             </div>
//           </main>
//         </div>

//         {/* Lookbook Section */}
//         <div className="py-12">
//           <div className="w-full mx-auto rounded-xl p-6 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {lookbooks.length > 0
//                 ? lookbooks.map((l) => (
//                     <div key={l.id} className="overflow-hidden rounded-lg shadow-md">
//                       <img
//                         src={l.image_url}
//                         alt={`${l.collection} ${l.subcategory}`}
//                         className="w-full h-auto object-cover aspect-square md:aspect-auto"
//                       />
//                     </div>
//                   ))
//                 : [LookBook1, LookBook2, LookBook3, LookBook4, LookBook5].map(
//                     (img, idx) => (
//                       <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//                         <img
//                           src={img}
//                           alt={`Lookbook ${idx + 1}`}
//                           className="w-full h-auto object-cover aspect-square md:aspect-auto"
//                         />
//                       </div>
//                     )
//                   )}

//               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   TRY <br /> SOMETHING <br /> NEW
//                 </h2>
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

//         {/* Product Listing Section */}
//         <div className="flex-grow">
//           <ProductListing products={products} />
//         </div>

//         <footer className="mt-24 text-center mb-10">
//           <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
//           <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">
//             Branding & Design
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default CombinedHomepage;





// import React, { useEffect, useState } from "react";

// // Lookbook fallback images
// import LookBook1 from "../../assets/WomenF/Women6.jpeg";
// import LookBook2 from "../../assets/WomenF/Women2.jpeg";
// import LookBook3 from "../../assets/WomenF/Women3.jpeg";
// import LookBook4 from "../../assets/WomenF/Women4.jpeg";
// import LookBook5 from "../../assets/WomenF/Women5.jpeg";

// // Clothing fallback images
// import LinenJacket from "../../assets/Clothing/WomenC1.jpeg";
// import SuedeJacket from "../../assets/Clothing/WomenC2.jpeg";
// import SuedeJacketModel from "../../assets/Clothing/WomenC3.jpeg";
// import PleatedJacket from "../../assets/Clothing/WomenC4.jpeg";
// import LeatherJacket1 from "../../assets/Clothing/WomenC5.jpeg";
// import BackgroundImage from "../../assets/Background/Flower.jpeg";
// import w1 from "../../assets/Clothing/WomenC6.jpeg";
// import w2 from "../../assets/Clothing/WomenC9.jpeg";
// import w3 from "../../assets/Clothing/WomenC8.jpeg";
// import w4 from "../../assets/Clothing/WomenC7.jpeg";
// import w5 from "../../assets/Clothing/WomenC10.jpeg";
// import w6 from "../../assets/Clothing/WomenC11.jpeg";
// import w7 from "../../assets/Clothing/WomenC12.jpeg";
// import w8 from "../../assets/Clothing/WomenC13.jpeg";
// import w9 from "../../assets/Clothing/WomenC14.jpeg";
// import w10 from "../../assets/Clothing/WomenC15.jpeg";
// import w11 from "../../assets/Clothing/WomenC16.jpeg";

// // Header
// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// // Single product card
// const ProductCard = ({ product }) => {
//   const { image_url, name, price, collection } = product;

//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
//     `I'm interested in purchasing the ${name} from ${collection} priced at ${price} EUR. Please provide more details!`
//   )}`;

//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-md">
//       <div className="relative pb-[125%] overflow-hidden">
//         <img
//           src={image_url}
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
//         <p className="text-sm font-semibold mb-2">{price} EUR</p>
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

// // Product listing grid
// const ProductListing = ({ products }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
//     {products.map((product) => (
//       <ProductCard key={product.id + product.name} product={product} />
//     ))}
//   </div>
// );

// // Main women’s homepage
// const Women = () => {
//   const [products, setProducts] = useState([]);
//   const [lookbooks, setLookbooks] = useState([]);

//   // Fallback demo products
//   const fallbackProducts = [
//     { id: 1, image_url: LinenJacket, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 2, image_url: SuedeJacket, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 3, image_url: SuedeJacketModel, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 4, image_url: PleatedJacket, collection: "PLEATED JACKET WITH TABS ZW COLLECTION", name: "LIMITED EDITION", price: "89.95" },
//     { id: 5, image_url: LeatherJacket1, collection: "ZW COLLECTION", name: "LEATHER JACKET LOOK 1", price: "149.95" },
//     { id: 6, image_url: w1, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 7, image_url: w3, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 8, image_url: w4, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 9, image_url: w2, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 10, image_url: w5, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 11, image_url: w6, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 12, image_url: w7, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 13, image_url: w8, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//     { id: 14, image_url: w9, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
//     { id: 15, image_url: w10, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
//     { id: 16, image_url: w11, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
//   ];

//   useEffect(() => {
//     // Fetch products from backend
//     fetch("http://localhost/react_admin_db/get_products.php?gender=women")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const mappedProducts = data.map((item) => ({
//             id: item.id,
//             name: item.subcategory || "Product",
//             collection: item.collection || "Collection",
//             price: item.price || "99.00",
//             image_url: `http://localhost/react_admin_db/uploads/${item.image}`,
//           }));
//           setProducts(mappedProducts);
//         } else {
//           setProducts(fallbackProducts);
//         }
//       })
//       .catch(() => setProducts(fallbackProducts));

//     // Fetch lookbooks
//     fetch("http://localhost/react_admin_db/get_lookbook.php?gender=women")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const mappedLookbooks = data.map((l) => ({
//             id: l.id,
//             image_url: `http://localhost/react_admin_db/uploads/${l.image}`,
//             collection: l.collection || "Collection",
//             subcategory: l.subcategory || "Lookbook",
//           }));
//           setLookbooks(mappedLookbooks);
//         }
//       })
//       .catch((err) => console.log("Error fetching lookbooks:", err));
//   }, []);

//   return (
//     <div
//       className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         {/* Hero Section */}
//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">
//               Come Back Here
//             </h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//               Effortless Elegance
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">
//               Elevate your everyday with our women’s clothing line, offering a
//               perfect mix of elegance and ease. From chic dresses and statement
//               tops to comfortable yet stylish essentials, every item is made to
//               flatter and empower.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Whether you prefer bold, fashion-forward looks or timeless
//                   classics, our collection is designed to make you feel
//                   confident, beautiful, and ready for any occasion.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   Your Style, Your Story
//                 </p>
//               </div>
//             </div>
//           </main>
//         </div>

//         {/* Lookbook Section */}
//         <div className="py-12">
//           <div className="w-full mx-auto rounded-xl p-6 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {lookbooks.length > 0
//                 ? lookbooks.map((l) => (
//                     <div key={l.id} className="overflow-hidden rounded-lg shadow-md">
//                       <img
//                         src={l.image_url}
//                         alt={`${l.collection} ${l.subcategory}`}
//                         className="w-full h-auto object-cover aspect-square md:aspect-auto"
//                       />
//                     </div>
//                   ))
//                 : [LookBook1, LookBook2, LookBook3, LookBook4, LookBook5].map(
//                     (img, idx) => (
//                       <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//                         <img
//                           src={img}
//                           alt={`Lookbook ${idx + 1}`}
//                           className="w-full h-auto object-cover aspect-square md:aspect-auto"
//                         />
//                       </div>
//                     )
//                   )}

//               <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   TRY <br /> SOMETHING <br /> NEW
//                 </h2>
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

//         {/* Product Listing Section */}
//         <div className="flex-grow">
//           <ProductListing products={products} />
//         </div>

//         {/* Footer */}
//         <footer className="mt-24 text-center mb-10">
//           <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
//           <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">
//             Branding & Design
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";

// // Lookbook fallback images
// import LookBook1 from "../../assets/WomenF/Women6.jpeg";
// import LookBook2 from "../../assets/WomenF/Women2.jpeg";
// import LookBook3 from "../../assets/WomenF/Women3.jpeg";
// import LookBook4 from "../../assets/WomenF/Women4.jpeg";
// import LookBook5 from "../../assets/WomenF/Women5.jpeg";

// // Clothing fallback images
// import LinenJacket from "../../assets/Clothing/WomenC1.jpeg";
// import SuedeJacket from "../../assets/Clothing/WomenC2.jpeg";
// import SuedeJacketModel from "../../assets/Clothing/WomenC3.jpeg";
// import PleatedJacket from "../../assets/Clothing/WomenC4.jpeg";
// import LeatherJacket1 from "../../assets/Clothing/WomenC5.jpeg";
// import BackgroundImage from "../../assets/Background/Flower.jpeg";
// import w1 from "../../assets/Clothing/WomenC6.jpeg";
// import w2 from "../../assets/Clothing/WomenC9.jpeg";
// import w3 from "../../assets/Clothing/WomenC8.jpeg";
// import w4 from "../../assets/Clothing/WomenC7.jpeg";
// import w5 from "../../assets/Clothing/WomenC10.jpeg";
// import w6 from "../../assets/Clothing/WomenC11.jpeg";
// import w7 from "../../assets/Clothing/WomenC12.jpeg";
// import w8 from "../../assets/Clothing/WomenC13.jpeg";
// import w9 from "../../assets/Clothing/WomenC14.jpeg";
// import w10 from "../../assets/Clothing/WomenC15.jpeg";
// import w11 from "../../assets/Clothing/WomenC16.jpeg";

// // Header
// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// // Single product card
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
//           onError={(e) => (e.currentTarget.src = LinenJacket)} // fallback
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

// // Product listing grid
// const ProductListing = ({ products }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
//     {products.map((product) => (
//       <ProductCard key={product.id + product.name} product={product} />
//     ))}
//   </div>
// );

// // Main women’s page
// const Women = () => {
//   const [products, setProducts] = useState([]);
//   const [lookbooks, setLookbooks] = useState([]);

//   // fallback products
//   const fallbackProducts = [
//     { id: 1, image_url: LinenJacket, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "₹89.95" },
//     { id: 2, image_url: SuedeJacket, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "₹299.00" },
//     { id: 3, image_url: SuedeJacketModel, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "₹149.00" },
//     { id: 4, image_url: PleatedJacket, collection: "PLEATED JACKET WITH TABS ZW COLLECTION", name: "LIMITED EDITION", price: "₹89.95" },
//     { id: 5, image_url: LeatherJacket1, collection: "ZW COLLECTION", name: "LEATHER JACKET LOOK 1", price: "₹149.95" },
//     { id: 6, image_url: w1, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "₹89.95" },
//     { id: 7, image_url: w2, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "₹299.00" },
//     { id: 8, image_url: w3, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "₹149.00" },
//     { id: 9, image_url: w4, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "₹89.95" },
//     { id: 10, image_url: w5, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "₹299.00" },
//     { id: 11, image_url: w6, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "₹149.00" },
//     { id: 12, image_url: w7, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "₹299.00" },
//     { id: 13, image_url: w8, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "₹149.00" },
//     { id: 14, image_url: w9, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "₹89.95" },
//     { id: 15, image_url: w10, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "₹299.00" },
//     { id: 16, image_url: w11, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "₹149.00" },
//   ];

//   useEffect(() => {
//     // fetch women products
//     fetch("http://localhost/react_admin_db/get_products.php?gender=women&category=clothing")
//       .then((res) => res.json())
//       .then((response) => {
//         console.log("Products API response:", response); // Debug log
//         // Handle direct array response from get_products.php
//         if (Array.isArray(response) && response.length > 0) {
//           const mappedProducts = response
//             .filter((item) => item.gender?.toLowerCase() === "women")
//             .map((item) => ({
//               id: item.id,
//               name: item.name || "Product",
//               collection: item.collection || "Collection",
//               price: item.price ? `₹${Number(item.price).toFixed(2)}` : "₹0.00",
//               image_url: item.image_url || LinenJacket,
//             }));
//           setProducts(mappedProducts.length > 0 ? mappedProducts : fallbackProducts);
//         } else {
//           console.warn("No valid product data from API, using fallback");
//           setProducts(fallbackProducts);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts(fallbackProducts);
//       });

//     // fetch women lookbooks
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
//     <div
//       className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         {/* Hero Section */}
//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">Effortless Elegance</h1>
//             <p className="text-xl italic text-gray-600 mb-8">
//               Elevate your everyday with our women’s clothing line, offering a perfect mix of elegance and ease.
//             </p>
//           </main>
//         </div>

//         {/* Lookbook Section */}
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
//                 : [LookBook1, LookBook2, LookBook3, LookBook4, LookBook5].map((img, idx) => (
//                     <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//                       <img src={img} alt={`Lookbook ${idx + 1}`} className="w-full h-auto object-cover aspect-square md:aspect-auto" />
//                     </div>
//                   ))}
//             </div>
//           </div>
//         </div>

//         {/* Product Listing Section */}
//         <div className="flex-grow">
//           <ProductListing products={products} />
//         </div>

//         {/* Footer */}
//         <footer className="mt-24 text-center mb-10">
//           <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
//           <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">Branding & Design</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Women;
import React, { useEffect, useState } from "react";

// Lookbook fallback images
import LookBook1 from "../../assets/WomenF/Women6.jpeg";
import LookBook2 from "../../assets/WomenF/Women2.jpeg";
import LookBook3 from "../../assets/WomenF/Women3.jpeg";
import LookBook4 from "../../assets/WomenF/Women4.jpeg";
import LookBook5 from "../../assets/WomenF/Women5.jpeg";

// Clothing fallback images
import LinenJacket from "../../assets/Clothing/WomenC1.jpeg";
import SuedeJacket from "../../assets/Clothing/WomenC2.jpeg";
import SuedeJacketModel from "../../assets/Clothing/WomenC3.jpeg";
import PleatedJacket from "../../assets/Clothing/WomenC4.jpeg";
import LeatherJacket1 from "../../assets/Clothing/WomenC5.jpeg";
import BackgroundImage from "../../assets/Background/Flower.jpeg";
import w1 from "../../assets/Clothing/WomenC6.jpeg";
import w2 from "../../assets/Clothing/WomenC9.jpeg";
import w3 from "../../assets/Clothing/WomenC8.jpeg";
import w4 from "../../assets/Clothing/WomenC7.jpeg";
import w5 from "../../assets/Clothing/WomenC10.jpeg";
import w6 from "../../assets/Clothing/WomenC11.jpeg";
import w7 from "../../assets/Clothing/WomenC12.jpeg";
import w8 from "../../assets/Clothing/WomenC13.jpeg";
import w9 from "../../assets/Clothing/WomenC14.jpeg";
import w10 from "../../assets/Clothing/WomenC15.jpeg";
import w11 from "../../assets/Clothing/WomenC16.jpeg";

// Header
const Header = () => (
  <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
    <nav className="hidden md:flex items-center space-x-6"></nav>
  </header>
);

// Single product card
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
          onError={(e) => (e.currentTarget.src = LinenJacket)} // Fallback to LinenJacket
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

// Product listing grid
const ProductListing = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
    {products.map((product) => (
      <ProductCard key={product.id + product.name} product={product} />
    ))}
  </div>
);

// Main women's page
const Women = () => {
  const [products, setProducts] = useState([]);
  const [lookbooks, setLookbooks] = useState([]);
  const [error, setError] = useState('');

  // Fallback products
  const fallbackProducts = [
    { id: 1, image_url: LinenJacket, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
    { id: 2, image_url: SuedeJacket, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
    { id: 3, image_url: SuedeJacketModel, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
    { id: 4, image_url: PleatedJacket, collection: "PLEATED JACKET WITH TABS ZW COLLECTION", name: "LIMITED EDITION", price: "89.95" },
    { id: 5, image_url: LeatherJacket1, collection: "ZW COLLECTION", name: "LEATHER JACKET LOOK 1", price: "149.95" },
    { id: 6, image_url: w1, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
    { id: 7, image_url: w2, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
    { id: 8, image_url: w3, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
    { id: 9, image_url: w4, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
    { id: 10, image_url: w5, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
    { id: 11, image_url: w6, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
    { id: 12, image_url: w7, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
    { id: 13, image_url: w8, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
    { id: 14, image_url: w9, collection: "ZW COLLECTION", name: "OVERSIZED LINEN JACKET", price: "89.95" },
    { id: 15, image_url: w10, collection: "ZW COLLECTION LIMITED EDITION", name: "OVERSIZED SUEDE JACKET", price: "299.00" },
    { id: 16, image_url: w11, collection: "SUEDE LEATHER JACKET ZW COLLECTION", name: "LIMITED EDITION", price: "149.00" },
  ];

  const fallbackLookbooks = [
    { id: 1, image_url: LookBook1, collection: "Clothing", gender: "Women" },
    { id: 2, image_url: LookBook2, collection: "Clothing", gender: "Women" },
    { id: 3, image_url: LookBook3, collection: "Clothing", gender: "Women" },
    { id: 4, image_url: LookBook4, collection: "Clothing", gender: "Women" },
    { id: 5, image_url: LookBook5, collection: "Clothing", gender: "Women" },
  ];

  useEffect(() => {
    // Fetch women products
    fetch("http://localhost/react_admin_db/get_products.php?gender=women&category=clothing")
      .then((res) => res.json())
      .then((response) => {
        console.log("Products API response:", response); // Debug log
        if (Array.isArray(response) && response.length > 0) {
          const mappedProducts = response
            .filter((item) => item.gender?.toLowerCase() === "women")
            .map((item) => ({
              id: item.id,
              name: item.name || "Product",
              collection: item.collection || "Collection",
              price: Number(item.price).toFixed(2),
              image_url: item.image_url, // Use full URL from API
            }));
          setProducts(mappedProducts.length > 0 ? mappedProducts : fallbackProducts);
        } else {
          console.warn("No valid product data from API, using fallback");
          setProducts(fallbackProducts);
          setError("Failed to load products.");
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts(fallbackProducts);
        setError("Error fetching products.");
      });

    // Fetch women lookbooks
    fetch("http://localhost/react_admin_db/get_lookbook.php?gender=women&collection=clothing")
      .then((res) => res.json())
      .then((response) => {
        console.log("Lookbook API response:", response); // Debug log
        if (Array.isArray(response) && response.length > 0) {
          const mappedLookbooks = response.map((l) => ({
            id: l.id,
            image_url: l.image_url,
            collection: l.collection || "Clothing",
            gender: l.gender || "Women",
          }));
          setLookbooks(mappedLookbooks);
        } else {
          console.warn("No valid lookbook data from API, using fallback");
          setLookbooks(fallbackLookbooks);
          setError("Failed to load lookbooks.");
        }
      })
      .catch((err) => {
        console.error("Error fetching lookbooks:", err);
        setLookbooks(fallbackLookbooks);
        setError("Error fetching lookbooks.");
      });
  }, []);

  return (
    <div
      className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
        <Header />

        {/* Hero Section */}
        <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
          <main className="max-w-4xl w-full text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">Effortless Elegance</h1>
            <p className="text-xl italic text-gray-600 mb-8">
              Elevate your everyday with our women's clothing line, offering a perfect mix of elegance and ease.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
              <div className="border-l pl-8 border-gray-400">
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Discover our curated collection of women’s clothing, blending timeless elegance with modern comfort. From sophisticated dresses to versatile jackets, each piece is designed to enhance your style effortlessly.
                </p>
              </div>
              <div className="text-gray-800">
                <p className="text-xl font-bold leading-snug">
                  Timeless Style, Modern Comfort
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Lookbook Section */}
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

        {/* Product Listing Section */}
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

        {/* Footer */}
        <footer className="mt-24 text-center mb-10">
          <div className="font-['Cursive'] text-4xl text-gray-800">castlyn</div>
          <div className="text-xs uppercase tracking-widest text-gray-600 mt-2">Branding & Design</div>
        </footer>
      </div>
    </div>
  );
};

export default Women;