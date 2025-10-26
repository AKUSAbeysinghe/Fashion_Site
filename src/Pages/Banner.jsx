
import React from "react";
import Background from "../assets/Background/WOMENL.webp";
import SideBackground from "../assets/Background/Flower.jpeg";

const App = () => {
  return (
    <div className="w-full bg-[#f5f5f5] flex justify-center items-center">
      <div className="w-full flex flex-row relative">
        {/* Left Background Section */}
        <div
          className="w-[2%] min-w-[8px] bg-cover bg-center"
          style={{ backgroundImage: `url(${SideBackground})` }}
        ></div>

        {/* Main Image Section */}
        <div className="w-[96%] max-w-[1700px] mx-auto relative">
          <img
            src={Background}
            alt="Fashion Full"
            className="w-full h-full object-cover sm:object-cover"
            style={{ aspectRatio: "16/9" }}
          />

          {/* Text and Animated Arrow */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-xl sm:text-5xl font-bold mb-4 drop-shadow-lg text-center">
              Wear well. Give well. Feel Well.
            </h1>
            <p className="text-sm sm:text-xl max-w-lg text-center drop-shadow-md">
              Discover the latest trends and styles that define your unique look.
            </p>

            <div className="mt-8 animate-bounce text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Background Section */}
        <div
          className="w-[2%] min-w-[8px] bg-cover bg-center"
          style={{ backgroundImage: `url(${SideBackground})` }}
        ></div>
      </div>
    </div>
  );
};

export default App;
