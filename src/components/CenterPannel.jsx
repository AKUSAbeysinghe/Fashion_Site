import React from "react";
// import mainImage from "../assets/main-model.jpg"; // Replace with your model image
import img1 from "../assets/Background/About.jpeg";// Top small image
// import img2 from "../assets/img2.jpg"; // Bottom left image
// import img3 from "../assets/img3.jpg"; // Right small image

export default function GetTheLooks() {
  return (
    <div className="bg-[#e6ded8] flex justify-center py-10 px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row bg-[#8a67a3] relative overflow-hidden">
        {/* Left vertical text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-white text-sm tracking-widest">
          — Ms. Smith
        </div>

        {/* Left side small images */}
        <div className="hidden md:flex flex-col justify-between p-4">
          <img src={img1} alt="Left Bottom" className="w-28 h-28 object-cover" />
        </div>

        {/* Middle text block */}
        <div className="flex flex-col justify-center items-center px-8 py-16 md:w-1/3 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-4">
            GET <br /> THE <br /> LOOKS
          </h1>
          <span className="bg-[#e8e76d] text-black text-xs uppercase px-2 py-1 rounded-full mb-6">
            Awesome
          </span>
          <p className="text-sm max-w-xs mb-6">
            4/4 Shop up and coming designers and fashions for women at Ms.
            Smith. Keep your style fresh with the latest arrivals in bohemian +
            indie.
          </p>
        </div>

        {/* Main Image */}
        <div className="md:w-1/3 flex items-center justify-center p-4">
          <img
            src={img1}
            alt="Model"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right small image */}
        <div className="hidden md:flex flex-col justify-center items-center p-4">
          <img src={img1} alt="Right" className="w-28 h-28 object-cover" />
        </div>

        {/* Right vertical menu text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-white text-sm tracking-widest">
          Shop now — Menu
        </div>
      </div>
    </div>
  );
}
