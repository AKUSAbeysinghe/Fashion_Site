
// import React from 'react';
// import BackgroundImage from '../assets/Background/Flower.jpeg'; // Your background image

// const AboutUsSection = () => {
//   return (
//     <section
//       className="w-full bg-cover bg-center py-0 px-0"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* 96% White Content Container */}
//       <div className="w-full mx-auto bg-white  shadow-xl px-6 sm:px-10 lg:px-16 py-16">
//         {/* Header Section */}
//         <div className="text-center mb-16 relative">
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gray-300"></div>
//           <h2 className="text-4xl font-light tracking-widest uppercase mt-16">OUR JOURNEY</h2>
//           <p className="text-sm text-gray-500 mt-2">The Way We Here</p>
//         </div>

//         {/* Stats Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 items-end">
//           {/* 38+ Tall Card */}
//           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
//             <h3 className="text-5xl lg:text-6xl font-light">38+</h3>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Years in Business</p>
//             </div>
//           </div>

//           {/* Infinity Card */}
//           <div className="bg-[#EBE7DF] p-8 flex flex-col justify-between min-h-[140px]">
//             <div className="text-5xl lg:text-6xl font-light mb-auto">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="64"
//                 height="64"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-gray-800"
//               >
//                 <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
//               </svg>
//             </div>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Ideas brought to life</p>
//             </div>
//           </div>

//           {/* 900+ Card */}
//           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between min-h-[140px]">
//             <h3 className="text-5xl lg:text-6xl font-light mb-auto">900+</h3>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Launched Products</p>
//             </div>
//           </div>

//           {/* 30+ Tall Card */}
//           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
//             <h3 className="text-5xl lg:text-6xl font-light mb-auto">30+</h3>
//             <div className="mt-auto">
//               <div className="h-px bg-gray-400 my-4"></div>
//               <p className="text-sm uppercase tracking-widest text-gray-700">Professionals</p>
//             </div>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-600">
//           <div>
//             <p className="text-sm leading-relaxed mb-4">
//               we bring you comfort, style, and quality in every stitch. Whether you’re aiming for bold elegance or timeless minimalism, our curated styles help you express your personality with confidence.
//             </p>
//             {/* <a
//               href="#"
//               className="flex items-center text-sm font-semibold uppercase tracking-widest text-gray-800 hover:text-black transition-colors duration-200"
//             >
//               More <span className="ml-2">&gt;</span>
//             </a> */}
//           </div>
//           <div>
//             <p className="text-sm leading-relaxed">
//               Discover our premium collection of men’s and women’s clothing designed for every moment of your life. From sharp office attire and casual weekend wear to statement pieces for special occasions,
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;





import React from "react";
import BackgroundImage from "../assets/Background/grayrose.jpeg"; // Your background image

const AboutUsSection = () => {
  return (
    <section className="w-full py-0 px-0">
      {/* White Content Container */}
      <div className="w-full mx-auto bg-white shadow-xl px-6 sm:px-10 lg:px-16 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gray-300"></div>
          {/* <h2 className="text-4xl font-light tracking-widest uppercase mt-16">
            OUR JOURNEY
          </h2> */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
            bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent 
            tracking-tight drop-shadow-sm">
           Our Journey
          </h2>
          {/* <p className="text-sm text-gray-500 mt-2">The Way We Here</p> */}
           <p className="text-lg md:text-xl text-gray-600 uppercase mb-4 tracking-[0.3em] font-semibold">
            The Way We Here
          </p>
        </div>

        {/* Stats Grid Section with background image ONLY here */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 items-end bg-cover bg-center p-6 rounded-lg"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          {/* 38+ Tall Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
            <h3 className="text-5xl lg:text-6xl font-light">38+</h3>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">
                Years in Business
              </p>
            </div>
          </div>

          {/* Infinity Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[140px]">
            <div className="text-5xl lg:text-6xl font-light mb-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
              >
                <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
              </svg>
            </div>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">
                Ideas brought to life
              </p>
            </div>
          </div>

          {/* 900+ Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[140px]">
            <h3 className="text-5xl lg:text-6xl font-light mb-auto">900+</h3>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">
                Launched Products
              </p>
            </div>
          </div>

          {/* 30+ Tall Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-between md:row-span-2 min-h-[300px]">
            <h3 className="text-5xl lg:text-6xl font-light mb-auto">30+</h3>
            <div className="mt-auto">
              <div className="h-px bg-gray-400 my-4"></div>
              <p className="text-sm uppercase tracking-widest text-gray-700">
                Professionals
              </p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-600">
          <div>
            <p className="text-sm leading-relaxed mb-4">
              we bring you comfort, style, and quality in every stitch. Whether
              you’re aiming for bold elegance or timeless minimalism, our
              curated styles help you express your personality with confidence.
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              Discover our premium collection of men’s and women’s clothing
              designed for every moment of your life. From sharp office attire
              and casual weekend wear to statement pieces for special occasions,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;







// import React from 'react';
// import BackgroundImage from '../assets/Background/Flower.jpeg'; // Main section background
// import YearsImage from '../assets/Background/B2.jpeg'; // Path for '38+' card background
// import IdeasImage from '../assets/Background/B3.jpeg'; // Path for 'Ideas' card background
// import ProductsImage from '../assets/Background/B2.jpeg'; // Path for '900+' card background
// import ProfessionalsImage from '../assets/Background/B2.jpeg'; // Path for '30+' card background

// const AboutUsSection = () => {
//   return (
//     <section
//       className="w-full bg-cover bg-center py-0 px-0"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* 96% Content Container with a blurred, semi-transparent background */}
//       <div className="w-full mx-auto bg-white/80 backdrop-blur-sm shadow-xl px-6 sm:px-10 lg:px-16 py-16">
        
//         {/* Header Section */}
//         <div className="text-center mb-16 relative">
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gray-300"></div>
//           <h2 className="text-4xl font-light tracking-widest uppercase mt-16">OUR JOURNEY</h2>
//           <p className="text-sm text-gray-500 mt-2">The Way We Here</p>
//         </div>

//         {/* Stats Grid Section with Image Backgrounds */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 items-end">
          
//           {/* 38+ Tall Card */}
//           <div 
//             className="relative p-8 flex flex-col justify-between md:row-span-2 min-h-[300px] bg-cover bg-center text-white"
//             style={{ backgroundImage: `url(${YearsImage})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>
//             <div className="relative z-10 flex flex-col justify-between h-full">
//               <h3 className="text-5xl lg:text-6xl font-light">38+</h3>
//               <div className="mt-auto">
//                 <div className="h-px bg-white/50 my-4"></div>
//                 <p className="text-sm uppercase tracking-widest">Years in Business</p>
//               </div>
//             </div>
//           </div>

//           {/* Infinity Card */}
//           <div 
//             className="relative p-8 flex flex-col justify-between min-h-[140px] bg-cover bg-center text-white"
//             style={{ backgroundImage: `url(${IdeasImage})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>
//             <div className="relative z-10 flex flex-col justify-between h-full">
//               <div className="text-5xl lg:text-6xl font-light mb-auto">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="64"
//                   height="64"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-white"
//                 >
//                   <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
//                 </svg>
//               </div>
//               <div className="mt-auto">
//                 <div className="h-px bg-white/50 my-4"></div>
//                 <p className="text-sm uppercase tracking-widest">Ideas brought to life</p>
//               </div>
//             </div>
//           </div>

//           {/* 900+ Card */}
//           <div 
//             className="relative p-8 flex flex-col justify-between min-h-[140px] bg-cover bg-center text-white"
//             style={{ backgroundImage: `url(${ProductsImage})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>
//             <div className="relative z-10 flex flex-col justify-between h-full">
//               <h3 className="text-5xl lg:text-6xl font-light mb-auto">900+</h3>
//               <div className="mt-auto">
//                 <div className="h-px bg-white/50 my-4"></div>
//                 <p className="text-sm uppercase tracking-widest">Launched Products</p>
//               </div>
//             </div>
//           </div>

//           {/* 30+ Tall Card */}
//           <div 
//             className="relative p-8 flex flex-col justify-between md:row-span-2 min-h-[300px] bg-cover bg-center text-white"
//             style={{ backgroundImage: `url(${ProfessionalsImage})` }}
//           >
//             <div className="absolute inset-0 bg-black/40"></div>
//             <div className="relative z-10 flex flex-col justify-between h-full">
//               <h3 className="text-5xl lg:text-6xl font-light mb-auto">30+</h3>
//               <div className="mt-auto">
//                 <div className="h-px bg-white/50 my-4"></div>
//                 <p className="text-sm uppercase tracking-widest">Professionals</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-600">
//           <div>
//             <p className="text-sm leading-relaxed mb-4">
//               we bring you comfort, style, and quality in every stitch. Whether you’re aiming for bold elegance or timeless minimalism, our curated styles help you express your personality with confidence.
//             </p>
//           </div>
//           <div>
//             <p className="text-sm leading-relaxed">
//               Discover our premium collection of men’s and women’s clothing designed for every moment of your life. From sharp office attire and casual weekend wear to statement pieces for special occasions,
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;


// // import React from 'react';
// // import BackgroundImage from '../assets/Background/Flower.jpeg'; // Your background image

// // const AboutUsSection = () => {
// //   return (
// //     <section
// //       className="w-full bg-cover bg-fixed bg-center py-20" // bg-fixed for parallax
// //       style={{ backgroundImage: `url(${BackgroundImage})` }}
// //     >
// //       {/* 96% White Content Container - Changed bg to a light cream for a softer look */}
// //       <div className="w-[96%] mx-auto bg-stone-50/90 shadow-2xl rounded-xl px-6 sm:px-10 lg:px-16 py-20">
        
// //         {/* Header Section */}
// //         <div className="text-center mb-16 relative">
// //           <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gray-300"></div>
// //           <h2 className="text-4xl sm:text-5xl font-light tracking-widest uppercase mt-16 text-gray-800">
// //             OUR JOURNEY
// //           </h2>
// //           <p className="text-lg text-gray-500 mt-2 font-serif italic">The Way We Came Here</p>
// //         </div>

// //         {/* Stats Grid Section - Added group and hover effects */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
          
// //           {/* 38+ Tall Card */}
// //           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[350px] transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg">
// //             <h3 className="text-6xl font-extralight text-gray-900">38+</h3>
// //             <div className="mt-auto">
// //               <div className="h-0.5 bg-gray-400 w-1/4 mb-4"></div>
// //               <p className="text-base uppercase tracking-wider font-semibold text-gray-700">Years in Business</p>
// //             </div>
// //           </div>

// //           {/* Infinity Card */}
// //           <div className="bg-[#EBE7DF] p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg">
// //             <div className="text-6xl font-extralight text-gray-900 mb-auto">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="80"
// //                 height="80"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="1"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 className="text-gray-800"
// //               >
// //                 <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
// //               </svg>
// //             </div>
// //             <div className="mt-auto">
// //               <div className="h-0.5 bg-gray-400 w-1/4 mb-4"></div>
// //               <p className="text-base uppercase tracking-wider font-semibold text-gray-700">Ideas brought to life</p>
// //             </div>
// //           </div>

// //           {/* 900+ Card */}
// //           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg">
// //             <h3 className="text-6xl font-extralight text-gray-900 mb-auto">900+</h3>
// //             <div className="mt-auto">
// //               <div className="h-0.5 bg-gray-400 w-1/4 mb-4"></div>
// //               <p className="text-base uppercase tracking-wider font-semibold text-gray-700">Launched Products</p>
// //             </div>
// //           </div>

// //           {/* 30+ Tall Card */}
// //           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-between md:row-span-2 min-h-[350px] transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg">
// //             <h3 className="text-6xl font-extralight text-gray-900 mb-auto">30+</h3>
// //             <div className="mt-auto">
// //               <div className="h-0.5 bg-gray-400 w-1/4 mb-4"></div>
// //               <p className="text-base uppercase tracking-wider font-semibold text-gray-700">Professionals</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Text Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-700">
// //           <div>
// //             <p className="text-sm leading-relaxed mb-4">
// //               We bring you comfort, style, and quality in every stitch. Whether you’re aiming for bold elegance or timeless minimalism, our curated styles help you express your personality with confidence. Each piece is crafted with care, combining modern design with durable, comfortable fabrics to create clothing that lasts.
// //             </p>
// //           </div>
// //           <div>
// //             <p className="text-sm leading-relaxed">
// //               Discover our premium collection of men’s and women’s clothing designed for every moment of your life. From sharp office attire and casual weekend wear to statement pieces for special occasions, our apparel is a testament to our dedication to excellence and our passion for fashion.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUsSection;




// // import React from 'react';
// // import BackgroundImage from '../assets/Background/Flower.jpeg';

// // const AboutUsSection = () => {
// //   return (
// //     <section className="w-full py-20 px-4 sm:px-8 bg-[#F8F6F4]">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
// //         {/* Left Column: Main Text & Header */}
// //         <div className="flex flex-col justify-center h-full pt-16 lg:pt-0">
// //           <div className="relative mb-8">
// //             <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Our Journey</span>
// //             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gray-400"></div>
// //           </div>
// //           <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 leading-tight mb-6">
// //             Crafting elegance since 1987.
// //           </h2>
// //           <p className="text-base text-gray-600 leading-relaxed mb-6">
// //             We are more than just a brand; we are a legacy built on comfort, quality, and timeless style. For over three decades, we have been dedicated to creating apparel that empowers you to express your true self with confidence.
// //           </p>
// //           <p className="text-base text-gray-600 leading-relaxed">
// //             Our commitment is to every stitch, every fabric, and every design—from the sharp lines of our office wear to the relaxed feel of our casual collection. We believe great style is a journey, and we're here to walk it with you.
// //           </p>
// //         </div>

// //         {/* Right Column: Asymmetrical Stats Grid */}
// //         <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
          
// //           {/* 38+ Years Card (Tall) */}
// //           <div className="col-span-2 bg-[#EAE8E4] p-8 min-h-[280px] flex flex-col justify-end shadow-lg transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
// //             <div className="mb-4">
// //               <h3 className="text-6xl font-light text-gray-900">38+</h3>
// //               <div className="h-px bg-gray-400 w-1/4 my-4"></div>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Years of Heritage</p>
// //             </div>
// //           </div>

// //           {/* Infinity Card (Small) */}
// //           <div className="bg-[#EBE7DF] p-8 flex flex-col justify-end shadow-md transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
// //             <div className="mb-4">
// //               <div className="text-5xl text-gray-800">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="50"
// //                   height="50"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
// //                 </svg>
// //               </div>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700 mt-2">Endless ideas</p>
// //             </div>
// //           </div>
          
// //           {/* 900+ Products Card (Small) */}
// //           <div className="bg-[#EAE8E4] p-8 flex flex-col justify-end shadow-md transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
// //             <div className="mb-4">
// //               <h3 className="text-4xl md:text-5xl font-light text-gray-900">900+</h3>
// //               <div className="h-px bg-gray-400 w-1/2 my-2"></div>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Products launched</p>
// //             </div>
// //           </div>

// //           {/* 30+ Professionals Card (Tall) */}
// //           <div className="col-span-2 bg-[#EBE7DF] p-8 min-h-[280px] flex flex-col justify-end shadow-lg transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
// //             <div className="mb-4">
// //               <h3 className="text-6xl font-light text-gray-900">30+</h3>
// //               <div className="h-px bg-gray-400 w-1/4 my-4"></div>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Dedicated professionals</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUsSection;




// // import React from 'react';
// // import BackgroundImage from '../assets/Background/Flower.jpeg'; // Your background image

// // const AboutUsSection = () => {
// //   return (
// //     <section
// //       className="w-full py-20 bg-cover bg-center"
// //       style={{ backgroundImage: `url(${BackgroundImage})` }}
// //     >
// //       <div className="w-[96%] mx-auto relative z-10">
        
// //         {/* Main Content Card with Shadow and Rounded Corners */}
// //         <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl px-6 sm:px-10 lg:px-16 py-16">
          
// //           {/* Header Section */}
// //           <div className="text-center mb-16 relative">
// //             <h2 className="text-5xl sm:text-6xl font-light tracking-wide uppercase text-gray-800">
// //               OUR STORY
// //             </h2>
// //             <p className="text-base text-gray-500 mt-2 italic font-serif">A Journey of Passion and Purpose</p>
// //           </div>

// //           {/* Stats Grid Section */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
            
// //             {/* 38+ Tall Card */}
// //             <div className="bg-gradient-to-br from-[#EAE8E4] to-[#C9C6C1] p-8 flex flex-col justify-end min-h-[300px] rounded-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
// //               <h3 className="text-6xl font-light text-gray-900 leading-none">38+</h3>
// //               <div className="h-px bg-gray-600 w-1/4 my-4"></div>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Years in Business</p>
// //             </div>

// //             {/* Infinity Card */}
// //             <div className="bg-gradient-to-br from-[#EBE7DF] to-[#CCC8BE] p-8 flex flex-col justify-end min-h-[140px] rounded-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
// //               <div className="text-6xl font-light text-gray-900 leading-none mb-4">
// //                 <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
// //                   <path d="M12 12c-3.13 0-6.13-1-9-3c-1.45 1.45-2 3.12-2 5s.55 3.55 2 5c2.87-2 5.87-3 9-3s6.13 1 9 3c1.45-1.45 2-3.12 2-5s-.55-3.55-2-5c-2.87 2-5.87 3-9 3z" />
// //                 </svg>
// //               </div>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Ideas brought to life</p>
// //             </div>

// //             {/* 900+ Card */}
// //             <div className="bg-gradient-to-br from-[#EAE8E4] to-[#C9C6C1] p-8 flex flex-col justify-end min-h-[140px] rounded-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
// //               <h3 className="text-6xl font-light text-gray-900 leading-none mb-4">900+</h3>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Launched Products</p>
// //             </div>

// //             {/* 30+ Tall Card */}
// //             <div className="bg-gradient-to-br from-[#EBE7DF] to-[#CCC8BE] p-8 flex flex-col justify-end min-h-[300px] rounded-md shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
// //               <h3 className="text-6xl font-light text-gray-900 leading-none mb-4">30+</h3>
// //               <p className="text-sm uppercase tracking-wider font-semibold text-gray-700">Professionals</p>
// //             </div>
// //           </div>

// //           {/* Text Section */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-16 text-gray-600">
// //             <div>
// //               <p className="text-base leading-relaxed mb-4">
// //                 we bring you comfort, style, and quality in every stitch. Whether you’re aiming for bold elegance or timeless minimalism, our curated styles help you express your personality with confidence.
// //               </p>
// //             </div>
// //             <div>
// //               <p className="text-base leading-relaxed">
// //                 Discover our premium collection of men’s and women’s clothing designed for every moment of your life. From sharp office attire and casual weekend wear to statement pieces for special occasions,
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUsSection;





