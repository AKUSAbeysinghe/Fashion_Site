
import React from 'react';
import { Link } from 'react-router-dom';
import FlowerBackground from '../../assets/Background/Flower.jpeg';
import backgroundImage from "../../assets/ServicePics/Substainability.jpg";
import Sus1 from "../../assets/ServicePics/Sustainable.jpeg";
import Sus2 from "../../assets/Brands/Vg.jpeg";
import Cotton from "../../assets/Background/Cotton6.jpeg";
import Eslo from "../../assets/ServicePics/Eslo3.jpeg";

const RepairsSection = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div 
        className="relative h-[400px] md:h-[500px] bg-black flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide max-w-4xl mx-auto">
            Sustainability Commitment
          </h1>
        </div>
      </div>

      {/* Text + Button Section */}
      <div className="bg-white py-16 px-6 sm:px-12 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg md:text-xl font-light mb-8 leading-relaxed">
            Committed to eco-friendly materials and ethical sourcing
          </p>
          {/* <button className="bg-black text-white px-8 py-3 rounded-full text-base font-semibold transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
            Request a Repair
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
             Eco-friendly fashion for a better tomorrow.
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
             we believe that fashion should not come at the cost of our planet. That’s why sustainability is at the heart of everything we do. From sourcing eco-friendly materials to adopting ethical manufacturing practices, we strive to minimize our environmental footprint. Our commitment extends to reducing waste, using biodegradable packaging, and supporting fair labor conditions, ensuring that every piece you wear tells a story of care—for you and the Earth.
            </p>
            
            {/* Small Image */}
            <div className="mt-8"> 
              <img 
                src={Sus1}
                alt="Close-up of a Louis Vuitton bag"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2">
            <img 
              src= {Sus2}
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
           Style that respects people and the planet.
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-md">
          Sustainable fashion is more than a trend; it’s a responsibility. We carefully select organic and recycled fabrics, promote timeless designs that last beyond seasons, and encourage conscious consumption. By choosing our apparel, you are supporting a movement towards a cleaner, greener future—where style meets sustainability. Together, we can create a fashion industry that respects nature, empowers workers, and inspires positive change for generations to come.
          </p>
          <div className="flex space-x-6">
            {/* <a 
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
            </a> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={Eslo}
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
              src={Cotton} 
              alt="People holding hands in a field" 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Sustainable choices, lasting impact.
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Sustainability is core to our mission. We choose recycled fabrics and support fair working conditions to ensure our fashion is kind to both people and the planet.

We believe in creating timeless clothing that lasts longer and minimizes environmental impact. With us, style meets responsibility.
            </p>
            <Link to="/Services/Personalization" className="hover:text-black transition-colors duration-200">
                  Discover Personalization      
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