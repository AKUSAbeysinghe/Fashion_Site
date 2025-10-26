import React from 'react';
import Women from "../assets/PageOnes/Women.jpeg";
import Bag from "../assets/PageOnes/Bag.jpeg";
 

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 md:p-16 lg:p-24 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Top Left Section: Image of Woman */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <img
            src= {Women} // Placeholder image
            alt="Woman wearing beige outfit"
            className="w-full h-auto object-cover"
          />
          {/* "MADE IN CALIFORNIA" text overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rotate-[-15deg] text-black text-lg font-semibold tracking-widest uppercase">
            <span className="inline-block px-4 py-2 bg-white bg-opacity-70 rounded-full">
              Made In California
            </span>
          </div>
        </div>

        {/* Top Right Section: "About the brand." */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4">
          <h2 className="text-4xl md:text-5xl font-light mb-6">About the brand.</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-lg">
            Small company offering simple, timeless pieces you can enjoy every day of the year.
            Collection is conceptually designed and ethically made in Los Angeles.
          </p>
        </div>

        {/* Bottom Left Section: "What have we done." */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4">
          <h2 className="text-4xl md:text-5xl font-light mb-6">What have we done.</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-lg">
            We redesigned the structure of the site, better presented the products and introduced a
            new modern and fresh visual language.
          </p>
        </div>

        {/* Bottom Right Section: Image of Clothes on Hanger */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <img
            src={Bag} // Placeholder image
            alt="Clothes on hanger"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Additional images (top right and bottom right in the original image)
          These are placed outside the main grid to mimic the original layout's floating nature.
          You might want to adjust their exact positioning with absolute classes if needed.
      */}
      <div className="absolute top-8 right-8 hidden lg:block">
        <img
          src="https://placehold.co/300x200/F0F0F0/444444?text=Top+Right+Image" // Placeholder image
          alt="Top right decorative image"
          className="w-64 h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <img
          src="https://placehold.co/300x200/F0F0F0/444444?text=Bottom+Right+Image" // Placeholder image
          alt="Bottom right decorative image"
          className="w-64 h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default App;

