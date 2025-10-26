import React from 'react';
// Importing icons from lucide-react for the new Navbar
import { Menu, Search, Heart, User, ShoppingBag } from 'lucide-react';
// Keep Heroicons for other parts of the App if needed, or remove if not used elsewhere
// import { ShoppingBagIcon, SearchIcon } from '@heroicons/react/outline';
import BackG from "../assets/Background/Flower.jpeg";

// New Navbar Component
const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300">
      {/* Adjusted max-w-full and px-8 md:px-12 lg:px-16 for full width and consistent padding */}
      <div className="max-w-full mx-auto px-8 md:px-12 lg:px-16 py-3 flex items-center justify-between font-sans">

        {/* Left Section */}
        <div className="flex items-center space-x-6 text-sm">
          <Menu className="w-5 h-5" />
          <span>Menu</span>
          <Search className="w-5 h-5" />
          <span>Search</span>
        </div>

        {/* Center Logo */}
        <div className="text-xl font-semibold tracking-wide">
          LOUIS VUITTON
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5 text-sm">
          <span className="hover:underline">Contact Us</span>
          <Heart className="w-5 h-5" />
          <User className="w-5 h-5" />
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background Image/Pattern - Adjust as needed */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          // backgroundImage: `url('https://placehold.co/1920x1080/222222/555555?text=Dark+Floral+Background')`, // Placeholder for dark floral background
          backgroundImage: `url(${BackG})`,
          backgroundAttachment: 'fixed', // Makes the background fixed
        }}
      ></div>

      {/* Main Content Card - Changed max-w-screen-2xl to w-[96vw] and removed my-12 */}
      <div className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col items-center lg:items-start w-[96vw] mx-auto">
        {/* Navbar spans full width of the white box */}
        <Navbar />

        {/* Content below Navbar, with its own padding */}
        <div className="flex flex-col lg:flex-row w-full p-8 md:p-12 lg:p-16 pt-0"> {/* pt-0 to avoid double top padding */}
            {/* Left Section: Text Content */}
            <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
                {/* Main Text Content */}
                <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6 font-serif">
                    Women's New
                    <br />
                    Arrivals.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
                    Discover fresh pieces perfect for every occasion with
                    <br />
                    easy purchases.
                </p>

                {/* Call to Action Button */}
                <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition duration-300 self-start">
                    Shop Collection
                </button>
            </div>

            {/* Right Section: Images and Icons */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[500px] lg:h-auto">
                {/* Main Model Image */}
                <img
                    src="https://placehold.co/400x600/D0D0D0/333333?text=Main+Model" // Placeholder image for main model
                    alt="Woman in black top"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0 w-64 md:w-80 lg:w-auto h-auto max-h-full rounded-lg shadow-xl object-cover"
                    style={{ zIndex: 2 }} // Ensure it's above other images
                />

                {/* Top Right Small Image */}
                <img
                    src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+1" // Placeholder image
                    alt="Woman in white dress"
                    className="absolute top-12 right-0 md:right-12 lg:right-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
                    style={{ zIndex: 1 }}
                />

                {/* Bottom Left Small Image */}
                <img
                    src="https://placehold.co/200x250/E0E0E0/444444?text=Small+Model+2" // Placeholder image
                    alt="Woman in white t-shirt"
                    className="absolute bottom-12 left-0 md:left-12 lg:left-0 w-32 md:w-40 h-auto rounded-lg shadow-md object-cover"
                    style={{ zIndex: 1 }}
                />

                {/* Top Right Icons - These were originally part of the main content card,
                    and are now separate from the new Navbar's icons.
                    If these are meant to be the same as the Navbar's right icons,
                    you might want to remove them here or adjust the Navbar's placement.
                */}
                <div className="absolute top-0 right-0 flex flex-col space-y-4 text-gray-600">
                    <ShoppingBag className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
                    <Search className="h-6 w-6 hover:text-gray-900 cursor-pointer" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
