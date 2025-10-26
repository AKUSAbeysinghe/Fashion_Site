import React from 'react';
import About from "../assets/Background/About.jpeg";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-6xl h-[70vh] bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 grid-rows-[1fr,5fr] md:grid-rows-1">
        {/* Left Sidebar */}
        <div className="col-span-1 row-span-2 md:row-span-1 bg-gray-100 flex flex-col justify-between p-6 relative">
          <div className="absolute top-1/2 -left-8 transform -rotate-90 -translate-x-1/2 text-lg font-light tracking-widest text-gray-500">
            Ms.Smith
          </div>
          <div className="mt-auto">
            <img src={About} alt="Ms. Smith" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
          <div className="absolute bottom-6 left-6 text-sm text-gray-400">4/4</div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 row-span-1 bg-purple-600 flex flex-col md:flex-row p-6 md:p-12 relative overflow-hidden">
          {/* Top Yellow Bar */}
          <div className="absolute top-0 left-0 w-full h-24 bg-yellow-400">
            <img src={About} alt="Shopping cart" className="absolute right-0 bottom-0 h-full w-auto" />
          </div>

          {/* Right Blue Bar */}
          <div className="absolute top-0 right-0 h-full w-24 bg-blue-400">
            <div className="absolute top-1/2 -right-8 transform -rotate-90 -translate-x-1/2 text-lg font-light tracking-widest text-white">
              Shop now
            </div>
          </div>
          <div className="absolute top-12 right-6 cursor-pointer">
            <span className="text-white">Menu</span>
          </div>

          {/* Text and Button */}
          <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-12 md:mt-0">
              GET <br />
              THE <br />
              LOOKS
            </h1>
            <p className="mt-4 max-w-sm text-sm text-gray-200">
              Shop up-and-coming designs and fashions for women at Ms. Smith. Keep your style fresh with the latest arrivals in bohemian + indie.
            </p>
          </div>

          {/* Image */}
          <div className="relative z-10 flex items-center justify-center md:justify-start h-full mt-8 md:mt-0">
            <img src= {About} alt="Smiling model" className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg transform translate-x-1/4" />
          </div>

          {/* "Awesome" circle */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 transform rotate-12 bg-lime-300 w-24 h-24 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 shadow-lg">
            Awesome
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;