// import React from 'react';
// import NewCollection from '../../components/NewClothing';
// import LookBook1 from '../../assets/Kids/G9.jpg';
// import LookBook2 from '../../assets/Kids/G10.jpg';
// import LookBook3 from '../../assets/Kids/B8.jpg';
// import LookBook4 from '../../assets/Kids/B2.jpg';
// import LookBook5 from '../../assets/Kids/B1.jpg';
// import LinenJacket from '../../assets/Kids/G1.jpg';
// import SuedeJacket from '../../assets/Kids/B3.jpg';
// import SuedeJacketModel from '../../assets/Kids/G2.jpg';
// // import PleatedJacket from '../../assets/Clothing/Acc9.jpeg';
// // import LeatherJacket1 from '../../assets/Clothing/Acc10.jpeg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';
// import w1 from "../../assets/Kids/B4.jpg";
// import w4 from "../../assets/Kids/G3.jpg";
// import w3 from "../../assets/Kids/B6.jpg";
// import w2 from "../../assets/Kids/G4.jpg";
// import w5 from "../../assets/Kids/B7.jpg";
// import w6 from "../../assets/Kids/G5.jpg";
// import w7 from "../../assets/Kids/G6.jpg";
// import w8 from "../../assets/Kids/G7.jpg";
// import w9 from "../../assets/Kids/G8.jpg";
// import w10 from "../../assets/Kids/K1.jpg";
// import w11 from "../../assets/Kids/K2.jpg";

// import w12 from "../../assets/Kids/KB1.jpg";
// import w13 from "../../assets/Kids/KB2.jpg";
// import w14 from "../../assets/Kids/K3.jpg";
// import w15 from "../../assets/Kids/K4.jpg";
// import w16 from "../../assets/Kids/KB3.jpg";
// import w17 from "../../assets/Kids/KB5.jpg";
// import w18 from "../../assets/Kids/K6.jpg";
// import w19 from "../../assets/Kids/K7.jpg";
// import w20 from "../../assets/Kids/KB6.jpg";
// import w21 from "../../assets/Kids/KB7.jpg";
// // import w22 from "../../assets/Kids/KB8.jpg";
// // import W23 from "../../assets/Kids/KB9.jpg";
// // import w24 from "../../assets/Kids/KB10.jpg";
// // import w25 from "../../assets/Kids/KB11.jpg";

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
//     // { id: 4, imageUrl: PleatedJacket, collection: 'PLEATED JACKET WITH TABS ZW COLLECTION', name: 'LIMITED EDITION', price: '89.95' },
//     // { id: 5, imageUrl: LeatherJacket1, collection: 'ZW COLLECTION', name: 'LEATHER JACKET LOOK 1', price: '149.95' },
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
//     { id: 17, imageUrl: w12, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
//     { id: 18, imageUrl: w13, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
//     { id: 19, imageUrl: w14, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 20, imageUrl: w15, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 21, imageUrl: w16, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 22, imageUrl: w17, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 23, imageUrl: w18, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 24, imageUrl: w19, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 25, imageUrl: w20, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     { id: 26, imageUrl: w21, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     // { id: 27, imageUrl: w22, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     // { id: 28, imageUrl: w23, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     // { id: 29, imageUrl: w24, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },
//     // { id: 30, imageUrl: w25, collection: 'SUEDE LEATHER JACKET ZW COLLECTION', name: 'LIMITED EDITION', price: '149.00' },

//   ];

//   return (
//     <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//               Fashion Meets Function
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">Your Everyday Essential</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Complete your look with our exclusive collection of bags that blend style, practicality, and premium quality. From sleek crossbody bags and trendy totes to spacious backpacks and elegant clutches, each design is crafted to suit your lifestyle. Whether you need a statement piece for a night out or a functional companion for your daily hustle, our bags are made to keep you stylishly organized wherever you go.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                 Carry It in Style
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
//       {/* <NewCollection/> */}
//     </div>
//   );
// };

// export default CombinedHomepage;




// import React, { useEffect, useState } from 'react';
// import LookBook1 from '../../assets/Kids/G9.jpg';
// import LookBook2 from '../../assets/Kids/G10.jpg';
// import LookBook3 from '../../assets/Kids/B8.jpg';
// import LookBook4 from '../../assets/Kids/B2.jpg';
// import LookBook5 from '../../assets/Kids/B1.jpg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';

// // --- Header ---
// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// // --- Product Card ---
// const ProductCard = ({ product }) => {
//   const { image_url, name, price, collection } = product;
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
//         <p className="text-sm font-semibold">{price} EUR</p>
//       </div>
//     </div>
//   );
// };

// // --- Product Listing ---
// const ProductListing = ({ products }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
//     {products.map((product) => (
//       <ProductCard key={product.id + product.name} product={product} />
//     ))}
//   </div>
// );

// // --- Main Kids Page ---
// const KidsPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost/react_admin_db/get_products.php?gender=Kids")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setProducts(
//             data.map((item) => ({
//               id: item.id,
//               name: item.name || "Product",
//               collection: item.collection || "Collection",
//               price: item.price || "0.00",
//               image_url:
//                 item.image_url ||
//                 `http://localhost/react_admin_db/uploads/${item.image}`,
//             }))
//           );
//         }
//       })
//       .catch(() => setProducts([]));
//   }, []);

//   return (
//     <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         {/* Hero Section */}
//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//               Fashion Meets Function
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">Your Everyday Essential</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Complete your look with our exclusive collection of bags that blend style, practicality, and premium quality. 
//                   From sleek crossbody bags and trendy totes to spacious backpacks and elegant clutches, 
//                   each design is crafted to suit your lifestyle. 
//                   Whether you need a statement piece for a night out or a functional companion for your daily hustle, 
//                   our bags are made to keep you stylishly organized wherever you go.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   Carry It in Style
//                 </p>
//               </div>
//             </div>
//           </main>
//         </div>

//         {/* Lookbook Section */}
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

//         {/* Products Section */}
//         <div className="flex-grow">
//           <div className="flex justify-end p-4 pr-6">
//             <div className="flex space-x-4 text-sm"></div>
//           </div>
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

// export default KidsPage;







import React, { useEffect, useState } from 'react';
import LookBook1 from '../../assets/Kids/G9.jpg';
import LookBook2 from '../../assets/Kids/G10.jpg';
import LookBook3 from '../../assets/Kids/B8.jpg';
import LookBook4 from '../../assets/Kids/B2.jpg';
import LookBook5 from '../../assets/Kids/B1.jpg';
import BackgroundImage from '../../assets/Background/Flower.jpeg';

// --- Header ---
const Header = () => (
  <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
    <nav className="hidden md:flex items-center space-x-6"></nav>
  </header>
);

// --- Product Card ---
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
          onError={(e) => (e.currentTarget.src = LookBook1)} // Fallback to LookBook1
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

// --- Product Listing ---
const ProductListing = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
    {products.map((product) => (
      <ProductCard key={product.id + product.name} product={product} />
    ))}
  </div>
);

// --- Main Kids Page ---
const KidsPage = () => {
  const [products, setProducts] = useState([]);
  const [lookbooks, setLookbooks] = useState([]);
  const [error, setError] = useState('');

  const fallbackProducts = [
    { id: 1, image_url: LookBook1, collection: "Kids Collection", name: "KIDS COTTON T-SHIRT", price: "29.95" },
    { id: 2, image_url: LookBook2, collection: "Kids Collection", name: "KIDS DENIM JACKET", price: "59.95" },
    { id: 3, image_url: LookBook3, collection: "Kids Collection", name: "KIDS HOODIE", price: "39.95" },
    { id: 4, image_url: LookBook4, collection: "Kids Collection", name: "KIDS CARGO PANTS", price: "34.95" },
    { id: 5, image_url: LookBook5, collection: "Kids Collection", name: "KIDS SUMMER DRESS", price: "49.95" },
  ];

  const fallbackLookbooks = [
    { id: 1, image_url: LookBook1, collection: "Kids Collection", gender: "Kids" },
    { id: 2, image_url: LookBook2, collection: "Kids Collection", gender: "Kids" },
    { id: 3, image_url: LookBook3, collection: "Kids Collection", gender: "Kids" },
    { id: 4, image_url: LookBook4, collection: "Kids Collection", gender: "Kids" },
    { id: 5, image_url: LookBook5, collection: "Kids Collection", gender: "Kids" },
  ];

  useEffect(() => {
    // Fetch kids' products
    fetch("http://localhost/react_admin_db/get_products.php?gender=Kids")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products API response:", data); // Debug log
        if (Array.isArray(data) && data.length > 0) {
          const mappedProducts = data.map((item) => ({
            id: item.id,
            name: item.name || "Product",
            collection: item.collection || "Collection",
            price: Number(item.price).toFixed(2),
            image_url: item.image_url, // Use full URL from API
          }));
          setProducts(mappedProducts);
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

    // Fetch kids' lookbooks
    fetch("http://localhost/react_admin_db/get_lookbook.php?gender=Kids")
      .then((res) => res.json())
      .then((data) => {
        console.log("Lookbook API response:", data); // Debug log
        if (Array.isArray(data) && data.length > 0) {
          const mappedLookbooks = data.map((l) => ({
            id: l.id,
            image_url: l.image_url, // Use full URL from API
            collection: l.collection || "Kids Collection",
            gender: l.gender || "Kids",
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
    <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
        <Header />

        {/* Hero Section */}
        <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
          <main className="max-w-4xl w-full text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Fashion Meets Function
            </h1>
            <p className="text-xl italic text-gray-600 mb-8">Your Everyday Essential</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
              <div className="border-l pl-8 border-gray-400">
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Complete your look with our exclusive collection of bags that blend style, practicality, and premium quality. 
                  From sleek crossbody bags and trendy totes to spacious backpacks and elegant clutches, 
                  each design is crafted to suit your lifestyle. 
                  Whether you need a statement piece for a night out or a functional companion for your daily hustle, 
                  our bags are made to keep you stylishly organized wherever you go.
                </p>
              </div>
              <div className="text-gray-800">
                <p className="text-xl font-bold leading-snug">
                  Carry It in Style
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

        {/* Products Section */}
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

export default KidsPage;