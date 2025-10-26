// import React from 'react';
// import LookBook1 from "../assets/LookBookMen/LookBookMen1.jpeg";
// import LookBook2 from "../assets/LookBookMen/LookBookMen2.jpeg";
// import LookBook3 from "../assets/LookBookMen/LookBookMen3.jpeg";
// import LookBook4 from "../assets/LookBookMen/LookBookMen4.jpeg";
// import LookBook5 from "../assets/LookBookMen/LookBookMen5.jpeg";
// import LookBook6 from "../assets/LookBookMen/LookBookMen6.jpeg";

// const HomepageSection = () => {
//   return (
//     <div className="bg-gray-50 py-10">
//       {/* Free Shipping Bar */}
//       {/* <div className="bg-yellow-100 text-center py-2 text-xs font-semibold text-gray-700">
//         FREE SHIPPING* ON ALL ORDERS.
//       </div> */}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
//         {/* Image 1 */}
//         <div className="relative overflow-hidden rounded-lg shadow-md">
//           <img
//             src={LookBook1} // Replace with your image URL
//             alt="Outfit 1"
//             className="w-full h-auto object-cover aspect-square md:aspect-auto"
//           />
//         </div>

//         {/* Image 2 */}
//         <div className="relative overflow-hidden rounded-lg shadow-md">
//           <img
//             src={LookBook3} // Replace with your image URL
//             alt="Shoes"
//             className="w-full h-auto object-cover aspect-square md:aspect-auto"
//           />
//         </div>

//         {/* Text Block */}
//         <div className="relative bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             TRY <br /> SOMETHING <br /> NEW
//           </h2>
//           <p className="text-gray-700 mb-4 text-sm">
//             GIVE OVERALLS, CAMO, BANDANAS AND KICKING UP YOUR HEELS A SHOT.
//           </p>
//           <button className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1">
//             SHOP NEW ARRIVALS
//           </button>
//         </div>

//         {/* Image 3 */}
//         <div className="relative overflow-hidden rounded-lg shadow-md">
//           <img
//             src={LookBook2} // Replace with your image URL
//             alt="Striped Top"
//             className="w-full h-auto object-cover aspect-square md:aspect-auto"
//           />
//         </div>

//         {/* Image 4 */}
//         <div className="relative overflow-hidden rounded-lg shadow-md">
//           <img
//             src={LookBook4} // Replace with your image URL
//             alt="Outfit 4"
//             className="w-full h-auto object-cover aspect-square md:aspect-auto"
//           />
//         </div>

//         {/* Image 5 */}
//         <div className="relative overflow-hidden rounded-lg shadow-md">
//           <img
//             src={LookBook6} // Replace with your image URL
//             alt="Jacket and Skirt"
//             className="w-full h-auto object-cover aspect-square md:aspect-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomepageSection;






// import React from 'react';
// import LookBook1 from "../assets/LookBookMen/LookBookMen1.jpeg";
// import LookBook2 from "../assets/LookBookMen/LookBookMen2.jpeg";
// import LookBook3 from "../assets/LookBookMen/LookBookMen3.jpeg";
// import LookBook4 from "../assets/LookBookMen/LookBookMen4.jpeg";
// import LookBook5 from "../assets/LookBookMen/LookBookMen5.jpeg";
// import LookBook6 from "../assets/LookBookMen/LookBookMen6.jpeg";
// import BackgroundImage from "../assets/Background/Flower.jpeg"; // Add your background here
// import Parse from "../Pages/Parses.jsx";

// const HomepageSection = () => {
//   return (
//     <div
      
//       className="w-full bg-cover bg-center py-12"
//       style={{
//         backgroundImage: `url(${BackgroundImage})`,
//       }}
//     >
//       <div className="w-[96%] mx-auto bg-white bg-opacity-95 rounded-xl shadow-lg p-6">
//         <Parse/>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Image 1 */}
//           <div className="overflow-hidden rounded-lg shadow-md">
//             <img
//               src={LookBook1}
//               alt="Outfit 1"
//               className="w-full h-auto object-cover aspect-square md:aspect-auto"
//             />
//           </div>

//           {/* Image 2 */}
//           <div className="overflow-hidden rounded-lg shadow-md">
//             <img
//               src={LookBook3}
//               alt="Shoes"
//               className="w-full h-auto object-cover aspect-square md:aspect-auto"
//             />
//           </div>

//           {/* Text Block */}
//           <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               TRY <br /> SOMETHING <br /> NEW
//             </h2>
//             <p className="text-gray-700 mb-4 text-sm">
//               GIVE OVERALLS, CAMO, BANDANAS AND KICKING UP YOUR HEELS A SHOT.
//             </p>
//             <button className="bg-gray-900 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1">
//               SHOP NEW ARRIVALS
//             </button>
//           </div>

//           {/* Image 3 */}
//           <div className="overflow-hidden rounded-lg shadow-md">
//             <img
//               src={LookBook2}
//               alt="Striped Top"
//               className="w-full h-auto object-cover aspect-square md:aspect-auto"
//             />
//           </div>

//           {/* Image 4 */}
//           <div className="overflow-hidden rounded-lg shadow-md">
//             <img
//               src={LookBook4}
//               alt="Outfit 4"
//               className="w-full h-auto object-cover aspect-square md:aspect-auto"
//             />
//           </div>

//           {/* Image 5 */}
//           <div className="overflow-hidden rounded-lg shadow-md">
//             <img
//               src={LookBook6}
//               alt="Jacket and Skirt"
//               className="w-full h-auto object-cover aspect-square md:aspect-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomepageSection;
