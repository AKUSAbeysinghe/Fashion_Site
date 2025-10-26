
import React from 'react';
import { Link } from 'react-router-dom';
import FlowerBackground from '../../assets/Background/Flower.jpeg';
import Personal1 from "../../assets/ServicePics/Per1.jpeg";
import Personal2 from "../../assets/ServicePics/Per2.jpeg";
import Personal3 from "../../assets/ServicePics/Per3.jpeg";
import Personal4 from "../../assets/ServicePics/Eslo2.jpeg";
import BackgroundImage from "../../assets/ServicePics/S1.jpeg";

const RepairsSection = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div 
        className="relative h-[400px] md:h-[500px] bg-black flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide max-w-4xl mx-auto">
            Personalized Styling
          </h1>
        </div>
      </div>

      {/* Text + Button Section */}
      <div className="bg-white py-16 px-6 sm:px-12 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg md:text-xl font-light mb-8 leading-relaxed">
            Our expert stylists help you craft the perfect look from daily wear to high-profile events.
          </p>
          {/* <button className="bg-black text-white px-8 py-3 rounded-full text-base font-semibold transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
            Request a 
          </button> */}
        </div>
      </div>
    </div>
  );
};

const LongevitySection = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-8">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Personalized Fashion Just for You
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
             
Discover styles that truly reflect who you are. Our smart personalization feature curates outfits, accessories, and trends based on your taste, size, and favorite colors. From custom-fit recommendations to handpicked seasonal looks, every visit feels like your own private styling session.
            </p>
            
            {/* Small Image */}
            <div className="mt-8">
              <img 
                src= {Personal1}
                alt="Close-up of a Louis Vuitton bag"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2">
            <img 
              src= {Personal2}
              alt="Artisan repairing a Louis Vuitton bag"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InStoreSection = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-20">
      <div className="flex flex-col lg:flex-row min-h-[600px] max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
          <h2 className="text-3xl font-normal text-gray-800 mb-4">
            In Store
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-md">
           Your style is unique and your shopping experience should be too. With our personalization feature, every collection adapts to your preferences, highlighting pieces that match your favorite colors, sizes, and trends. Whether you’re drawn to minimal elegance, bold streetwear, or timeless classics, our system curates options that speak to your individuality.
          </p>
          {/* <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-800 text-sm border-b border-gray-800 hover:text-black hover:border-black transition-colors duration-200"
            >
              Find a Store
            </a>
            <a 
              href="#" 
              className="text-gray-800 text-sm border-b border-gray-800 hover:text-black hover:border-black transition-colors duration-200"
            >
              Book an Appointment
            </a>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src= {Personal3} 
            alt="Interior of a luxury retail store" 
            className="w-full h-full object-cover rounded-lg shadow-md" 
          />
        </div>
      </div>
    </div>
  );
};

const RepairingSection = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src={Personal4}
              alt="People holding hands in a field" 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              From Fit to Finish Perfect Every Time
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
           No more guessing your size or spending hours searching. Our intelligent recommendations pair your measurements with the perfect fit, while styling suggestions help you create complete looks effortlessly. From custom embroidery to made-to-measure garments, we make sure every detail feels like it was designed just for you.
            </p>
            {/* <a 
              href="/Services/Sustainability"
              className="text-gray-800 text-base border-b border-gray-800 hover:text-black hover:border-black transition-colors duration-200"
            >
              Discover Sustainability
            </a> */}
            <Link to="/Services/Sustainbility" className="hover:text-black transition-colors duration-200">
                         Discover Sustainability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CombinedPage = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <div className="relative z-10 bg-white rounded-lg shadow-2xl w-[100%] max-w-[1700px] mx-auto text-gray-900 font-sans">
        <RepairsSection />
        <LongevitySection />
        <InStoreSection />
        <RepairingSection />
      </div>
    </div>
  );
};

export default CombinedPage;