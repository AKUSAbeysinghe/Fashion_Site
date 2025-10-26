// import React from 'react';
// import NewCollection from '../../components/NewClothing';
// import LookBook1 from '../../assets/Clothing/Acc1.jpeg';
// import LookBook2 from '../../assets/Clothing/Acc2.jpeg';
// import LookBook3 from '../../assets/Clothing/Acc3.jpeg';
// import LookBook4 from '../../assets/Clothing/Acc4.jpeg';
// import LookBook5 from '../../assets/Clothing/Acc5.jpeg';
// import LinenJacket from '../../assets/Clothing/Acc6.jpeg';
// import SuedeJacket from '../../assets/Clothing/Acc7.jpeg';
// import SuedeJacketModel from '../../assets/Clothing/Acc8.jpeg';
// import PleatedJacket from '../../assets/Clothing/Acc9.jpeg';
// import LeatherJacket1 from '../../assets/Clothing/Acc10.jpeg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';
// import w1 from "../../assets/Clothing/Acc11.jpeg";
// import w4 from "../../assets/Clothing/Acc12.jpeg";
// import w3 from "../../assets/Clothing/Accessory2.jpeg";
// import w2 from "../../assets/Clothing/Acc13.jpeg";
// import w5 from "../../assets/Clothing/Acc14.jpeg";
// import w6 from "../../assets/Clothing/Acc29.jpeg";
// import w7 from "../../assets/Clothing/Acc16.jpeg";
// import w8 from "../../assets/Clothing/Acc17.jpeg";
// import w9 from "../../assets/Clothing/Acc18.jpeg";
// import w10 from "../../assets/Clothing/Acc19.jpeg";
// import w11 from "../../assets/Clothing/Acc20.jpeg";
// import w12 from "../../assets/Clothing/Acc33.jpeg";
// import w13 from "../../assets/Clothing/Acc34.jpeg";
// import w14 from "../../assets/Clothing/Bag.jpeg";
// import w15 from "../../assets/Clothing/watch.jpeg";

// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// const ProductCard = ({ product }) => {
//   const { imageUrl, name, price, collection } = product;
//   // WhatsApp link with pre-filled message
//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
//     `I'm interested in purchasing the ${name} from ${collection} priced at ${price} EUR. Please provide more details!`
//   )}`;

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
//     { id: 17, imageUrl: w12, collection: 'ZW COLLECTION', name: 'OVERSIZED LINEN JACKET', price: '89.95' },
//     { id: 18, imageUrl: w13, collection: 'ZW COLLECTION LIMITED EDITION', name: 'OVERSIZED SUEDE JACKET', price: '299.00' },
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
//               Details Make<br/> the Difference
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">our collection offers the perfect finishing touches.</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Whether you’re dressing up for an occasion or adding flair to your everyday look, our accessories help you express yourself effortlessly.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   Style in Every Detail
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
//       <NewCollection/>
//     </div>
//   );
// };

// export default CombinedHomepage;




// import React, { useEffect, useState } from 'react';
// import NewCollection from '../../components/NewClothing';
// import LookBook1 from '../../assets/Clothing/Acc1.jpeg';
// import LookBook2 from '../../assets/Clothing/Acc2.jpeg';
// import LookBook3 from '../../assets/Clothing/Acc3.jpeg';
// import LookBook4 from '../../assets/Clothing/Acc4.jpeg';
// import LookBook5 from '../../assets/Clothing/Acc5.jpeg';
// import LinenJacket from '../../assets/Clothing/Acc6.jpeg';
// import SuedeJacket from '../../assets/Clothing/Acc7.jpeg';
// import SuedeJacketModel from '../../assets/Clothing/Acc8.jpeg';
// import PleatedJacket from '../../assets/Clothing/Acc9.jpeg';
// import LeatherJacket1 from '../../assets/Clothing/Acc10.jpeg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';
// import w1 from "../../assets/Clothing/Acc11.jpeg";
// import w4 from "../../assets/Clothing/Acc12.jpeg";
// import w3 from "../../assets/Clothing/Accessory2.jpeg";
// import w2 from "../../assets/Clothing/Acc13.jpeg";
// import w5 from "../../assets/Clothing/Acc14.jpeg";
// import w6 from "../../assets/Clothing/Acc29.jpeg";
// import w7 from "../../assets/Clothing/Acc16.jpeg";
// import w8 from "../../assets/Clothing/Acc17.jpeg";
// import w9 from "../../assets/Clothing/Acc18.jpeg";
// import w10 from "../../assets/Clothing/Acc19.jpeg";
// import w11 from "../../assets/Clothing/Acc20.jpeg";
// import w12 from "../../assets/Clothing/Acc33.jpeg";
// import w13 from "../../assets/Clothing/Acc34.jpeg";
// import w14 from "../../assets/Clothing/Bag.jpeg";
// import w15 from "../../assets/Clothing/watch.jpeg";

// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// const ProductCard = ({ product }) => {
//   const { imageUrl, name, price, collection } = product;
//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
//     `I'm interested in purchasing the ${name} from ${collection} priced at ${price} EUR. Please provide more details!`
//   )}`;

//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-md">
//       <div className="relative pb-[125%] overflow-hidden">
//         <img
//           src={imageUrl || '/fallback.png'}
//           alt={name}
//           className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           onError={(e) => (e.currentTarget.src = '/fallback.png')}
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
//   const [lookbookImages, setLookbookImages] = useState([
//     LookBook1, LookBook3, LookBook2, LookBook4, LookBook5
//   ]);

//   useEffect(() => {
//     // Fetch products from Admin Panel
//     fetch('http://localhost:5000/api/products') // replace with your Admin API
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error('Error fetching products:', err));

//     // Fetch lookbook images from Admin Panel (if needed)
//     fetch('http://localhost:5000/api/lookbook') // replace with your Admin API
//       .then((res) => res.json())
//       .then((data) => setLookbookImages(data.map(item => item.url)))
//       .catch((err) => console.error('Error fetching lookbook images:', err));
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
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//               Details Make<br /> the Difference
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">
//               our collection offers the perfect finishing touches.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Whether you’re dressing up for an occasion or adding flair to your everyday look, our accessories help you express yourself effortlessly.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">Style in Every Detail</p>
//               </div>
//             </div>
//           </main>
//         </div>

//         <div className="py-12">
//           <div className="w-full mx-auto rounded-xl p-6 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {lookbookImages.map((img, idx) => (
//                 <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//                   <img
//                     src={img}
//                     alt={`Lookbook ${idx + 1}`}
//                     className="w-full h-auto object-cover aspect-square md:aspect-auto"
//                   />
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
//       <NewCollection />
//     </div>
//   );
// };

// export default CombinedHomepage;




// import React, { useEffect, useState } from 'react';
// import NewCollection from '../../components/NewClothing';
// import LookBook1 from '../../assets/Clothing/Acc1.jpeg';
// import LookBook2 from '../../assets/Clothing/Acc2.jpeg';
// import LookBook3 from '../../assets/Clothing/Acc3.jpeg';
// import LookBook4 from '../../assets/Clothing/Acc4.jpeg';
// import LookBook5 from '../../assets/Clothing/Acc5.jpeg';
// import BackgroundImage from '../../assets/Background/Flower.jpeg';

// const Header = () => (
//   <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
//     <nav className="hidden md:flex items-center space-x-6"></nav>
//   </header>
// );

// const ProductCard = ({ product }) => {
//   const { imageUrl, name, price, collection } = product;
//   // WhatsApp link with pre-filled message
//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
//     `I'm interested in purchasing the ${name} from ${collection} priced at ${price} EUR. Please provide more details!`
//   )}`;

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
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           'http://localhost/react_admin_db/get_products.php?gender=women&category=accessories'
//         );
//         const data = await response.json();
//         if (Array.isArray(data)) {
//           // Map backend data to match ProductCard expected format
//           const formattedProducts = data.map((item) => ({
//             id: item.id,
//             imageUrl: item.image_url,
//             name: item.name,
//             price: Number(item.price).toFixed(2), // Ensure price is formatted as string with 2 decimals
//             collection: item.collection,
//           }));
//           setProducts(formattedProducts);
//         } else {
//           setError('Failed to load products.');
//         }
//       } catch (err) {
//         console.error(err);
//         setError('Error fetching products.');
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
//       <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
//         <Header />

//         <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
//           <main className="max-w-4xl w-full text-center">
//             <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
//             <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
//               Details Make<br/> the Difference
//             </h1>
//             <p className="text-xl italic text-gray-600 mb-8">our collection offers the perfect finishing touches.</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
//               <div className="border-l pl-8 border-gray-400">
//                 <p className="text-sm text-gray-600 leading-relaxed font-light">
//                   Whether you’re dressing up for an occasion or adding flair to your everyday look, our accessories help you express yourself effortlessly.
//                 </p>
//               </div>
//               <div className="text-gray-800">
//                 <p className="text-xl font-bold leading-snug">
//                   Style in Every Detail
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
//           {error && (
//             <div className="text-center text-red-500 mb-4">
//               {error}
//             </div>
//           )}
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
//       <NewCollection/>
//     </div>
//   );
// };

// export default CombinedHomepage;





import React, { useEffect, useState } from 'react';
import NewCollection from '../../components/NewClothing';
import LookBook1 from '../../assets/Clothing/Acc1.jpeg';
import LookBook2 from '../../assets/Clothing/Acc2.jpeg';
import LookBook3 from '../../assets/Clothing/Acc3.jpeg';
import LookBook4 from '../../assets/Clothing/Acc4.jpeg';
import LookBook5 from '../../assets/Clothing/Acc5.jpeg';
import BackgroundImage from '../../assets/Background/Flower.jpeg';

const Header = () => (
  <header className="flex justify-between items-center py-4 px-6 z-20 relative bg-white">
    <nav className="hidden md:flex items-center space-x-6"></nav>
  </header>
);

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `I'm interested in purchasing the ${name} priced at Rs ${price}. Please provide more details!`
  )}`;
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <div className="relative pb-[125%] overflow-hidden">
        <img
          src={imageUrl}
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
        <p className="text-sm font-semibold mb-2"> {price} Rs.</p>
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

const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [lookbooks, setLookbooks] = useState([]);
  const [error, setError] = useState('');

  const fallbackProducts = [
    { id: 1, imageUrl: LookBook1, collection: "Accessories", name: "LEATHER HANDBAG", price: "49.95" },
    { id: 2, imageUrl: LookBook2, collection: "Accessories", name: "SILK SCARF", price: "29.95" },
    { id: 3, imageUrl: LookBook3, collection: "Accessories", name: "GOLD NECKLACE", price: "79.95" },
    { id: 4, imageUrl: LookBook4, collection: "Accessories", name: "CROSSBODY BAG", price: "39.95" },
    { id: 5, imageUrl: LookBook5, collection: "Accessories", name: "SUNGLASSES", price: "59.95" },
  ];

  const fallbackLookbooks = [
    { id: 1, image_url: LookBook1, collection: "Accessories", gender: "Women" },
    { id: 2, image_url: LookBook2, collection: "Accessories", gender: "Women" },
    { id: 3, image_url: LookBook3, collection: "Accessories", gender: "Women" },
    { id: 4, image_url: LookBook4, collection: "Accessories", gender: "Women" },
    { id: 5, image_url: LookBook5, collection: "Accessories", gender: "Women" },
  ];

  useEffect(() => {
    // Fetch women’s accessories products
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'http://localhost/react_admin_db/get_products.php?gender=women&category=accessories'
        );
        const data = await response.json();
        console.log("Products API response:", data); // Debug log
        if (Array.isArray(data) && data.length > 0) {
          const formattedProducts = data.map((item) => ({
            id: item.id,
            imageUrl: item.image_url,
            name: item.name || "Accessory",
            price: item.price ? Number(item.price).toFixed(2) : "0.00",
            collection: item.collection || "Collection",
          }));
          setProducts(formattedProducts);
        } else {
          console.warn("No valid product data from API, using fallback");
          setProducts(fallbackProducts);
          setError('Failed to load products.');
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts(fallbackProducts);
        setError('Error fetching products.');
      }
    };

    // Fetch women’s accessories lookbooks
    const fetchLookbooks = async () => {
      try {
        const response = await fetch(
          'http://localhost/react_admin_db/get_lookbook.php?gender=women&collection=accessories'
        );
        const data = await response.json();
        console.log("Lookbook API response:", data); // Debug log
        if (Array.isArray(data) && data.length > 0) {
          const mappedLookbooks = data.map((l) => ({
            id: l.id,
            image_url: l.image_url,
            collection: l.collection || "Accessories",
            gender: l.gender || "Women",
          }));
          setLookbooks(mappedLookbooks);
        } else {
          console.warn("No valid lookbook data from API, using fallback");
          setLookbooks(fallbackLookbooks);
          setError('Failed to load lookbooks.');
        }
      } catch (err) {
        console.error("Error fetching lookbooks:", err);
        setLookbooks(fallbackLookbooks);
        setError('Error fetching lookbooks.');
      }
    };

    fetchProducts();
    fetchLookbooks();
  }, []);

  return (
    <div className="font-['Inter'] bg-cover bg-center bg-repeat min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="min-h-screen bg-white w-[100%] mx-auto py-10">
        <Header />

        <div className="p-8 sm:p-16 flex flex-col justify-center items-center">
          <main className="max-w-4xl w-full text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-2">Come Back Here</h2>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Details Make<br/> the Difference
            </h1>
            <p className="text-xl italic text-gray-600 mb-8">our collection offers the perfect finishing touches.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
              <div className="border-l pl-8 border-gray-400">
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Whether you’re dressing up for an occasion or adding flair to your everyday look, our accessories help you express yourself effortlessly.
                </p>
              </div>
              <div className="text-gray-800">
                <p className="text-xl font-bold leading-snug">
                  Style in Every Detail
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
      <NewCollection/>
    </div>
  );
};

export default AccessoriesPage;