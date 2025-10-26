

import React from 'react';

const RepairsSection = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div 
        className="relative h-[400px] md:h-[500px] bg-black flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('http://googleusercontent.com/file_content/0')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide max-w-4xl mx-auto">
            Louis Vuitton Repairs
          </h1>
        </div>
      </div>

      {/* Text + Button Section */}
      <div className="bg-white py-16 px-6 sm:px-12 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg md:text-xl font-light mb-8 leading-relaxed">
            With the unique savoir-faire of the Maison’s 1200 artisans and specialists, 
            alongside the use of original materials for repairs, Louis Vuitton ensures the 
            longevity of your pieces, safeguarding precious memories. This commitment also 
            strengthens its dedication to a long-term sustainability journey.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-base font-semibold transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
            Request a Repair
          </button>
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
              Ensuring the Longevity of Your Louis Vuitton Pieces
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              With a history of repair services spanning over 160 years, dating back to the first recorded product repair in 1860, the Maison now rejuvenates thousands of pieces every year. This innovative repair process preserves Louis Vuitton creations for safe passage through generations — maintaining its legacy and commitment to expert craftsmanship through the complete restoration of historic trunks.
            </p>
            
            {/* Small Image */}
            <div className="mt-8">
              <img 
                src="http://googleusercontent.com/file_content/1" 
                alt="Close-up of a Louis Vuitton bag"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2">
            <img 
              src="http://googleusercontent.com/file_content/2" 
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
            A Client Advisor from your preferred Louis Vuitton store will be able to arrange the repair service for you.
          </p>
          <div className="flex space-x-6">
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
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src="http://googleusercontent.com/file_content/3" 
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
              src="http://googleusercontent.com/file_content/4" 
              alt="People holding hands in a field" 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Repairing is Caring for the Planet
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              In keeping with its broader sustainability efforts, Louis Vuitton collections 
              undergo environmental impact analyses throughout the entire creative process 
              optimizing repairability and ensuring a long product lifecycle. A global 
              network of 12 dedicated repair ateliers allows 98% of repairs to be 
              completed locally, thereby limiting transportation-related CO2 emissions.
            </p>
            <a 
              href="#" 
              className="text-gray-800 text-base border-b border-gray-800 hover:text-black hover:border-black transition-colors duration-200"
            >
              Discover Sustainability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CombinedPage = () => {
  return (
    <div className="bg-gray-50">
      <RepairsSection />
      <LongevitySection />
      <InStoreSection />
      <RepairingSection />
    </div>
  );
};

export default CombinedPage;
