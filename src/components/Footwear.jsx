
import React from 'react';
import LinenJacket from '../assets/Footware/footware1.jpeg';
import SuedeJacket from '../assets/Footware/footware2.jpeg';
import SuedeJacketModel from '../assets/Footware/footware3.jpeg';
import PleatedJacket from '../assets/Footware/footware4.jpeg';
import LeatherJacket1 from '../assets/Footware/footware5.jpeg';
import BackgroundImage from "../assets/Background/Flower.jpeg"; // Replace with your background image path

// Header Component
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      {/* <div className="text-2xl font-bold">ZARA</div> */}
      <nav className="hidden md:flex items-center space-x-6">
        {/* <span className="cursor-pointer text-sm font-medium hover:text-gray-800">SEARCH</span> */}
      </nav>
      {/* <div className="flex items-center space-x-6 text-sm">
        <a href="#login" className="text-gray-600 hover:text-gray-800">LOG IN</a>
        <a href="#help" className="text-gray-600 hover:text-gray-800">HELP</a>
        <a href="#shopping-bag" className="text-gray-600 hover:text-gray-800">SHOPPING BAG (0)</a>
      </div> */}
    </header>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const { imageUrl, name, price, collection } = product;

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <div className="relative pb-[125%] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 p-1 bg-white bg-opacity-75 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          +
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-xs text-gray-500 mb-1 uppercase">{collection}</p>
        <h3 className="text-base font-medium mb-1">{name}</h3>
        <p className="text-sm font-semibold">{price} EUR</p>
      </div>
    </div>
  );
};

// Product Listing Component
const ProductListing = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id + product.name} product={product} />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  const products = [
    {
      id: 1,
      imageUrl: LinenJacket,
      collection: 'ZW COLLECTION',
      name: 'OVERSIZED LINEN JACKET',
      price: '89.95',
    },
    {
      id: 2,
      imageUrl: SuedeJacket,
      collection: 'ZW COLLECTION LIMITED EDITION',
      name: 'OVERSIZED SUEDE JACKET',
      price: '299.00',
    },
    {
      id: 3,
      imageUrl: SuedeJacketModel,
      collection: 'SUEDE LEATHER JACKET ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '149.00',
    },
    {
      id: 4,
      imageUrl: PleatedJacket,
      collection: 'PLEATED JACKET WITH TABS ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '89.95',
    },
    {
      id: 5,
      imageUrl: LinenJacket,
      collection: 'ZW COLLECTION',
      name: 'OVERSIZED LINEN JACKET',
      price: '89.95',
    },
    {
      id: 6,
      imageUrl: SuedeJacket,
      collection: 'ZW COLLECTION LIMITED EDITION',
      name: 'OVERSIZED SUEDE JACKET',
      price: '299.00',
    },
    {
      id: 7,
      imageUrl: SuedeJacketModel,
      collection: 'SUEDE LEATHER JACKET ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '149.00',
    },
    {
      id: 8,
      imageUrl: PleatedJacket,
      collection: 'PLEATED JACKET WITH TABS ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '89.95',
    },
    {
      id: 9,
      imageUrl: LeatherJacket1,
      collection: 'ZW COLLECTION',
      name: 'LEATHER JACKET LOOK 1',
      price: '149.95',
    },
    {
      id: 10,
      imageUrl: SuedeJacket,
      collection: 'ZW COLLECTION LIMITED EDITION',
      name: 'OVERSIZED SUEDE JACKET',
      price: '299.00',
    },
    {
      id: 11,
      imageUrl: SuedeJacketModel,
      collection: 'SUEDE LEATHER JACKET ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '149.00',
    },
    {
      id: 12,
      imageUrl: PleatedJacket,
      collection: 'PLEATED JACKET WITH TABS ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '89.95',
    },
    {
      id: 13,
      imageUrl: LinenJacket,
      collection: 'ZW COLLECTION',
      name: 'OVERSIZED LINEN JACKET',
      price: '89.95',
    },
    {
      id: 14,
      imageUrl: SuedeJacket,
      collection: 'ZW COLLECTION LIMITED EDITION',
      name: 'OVERSIZED SUEDE JACKET',
      price: '299.00',
    },
    {
      id: 15,
      imageUrl: SuedeJacketModel,
      collection: 'SUEDE LEATHER JACKET ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '149.00',
    },
    {
      id: 16,
      imageUrl: PleatedJacket,
      collection: 'PLEATED JACKET WITH TABS ZW COLLECTION',
      name: 'LIMITED EDITION',
      price: '89.95',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-grow bg-cover bg-center py-10"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="w-[96%] mx-auto bg-white bg-opacity-95 rounded-xl shadow-lg p-4">
          <div className="flex justify-end pb-4 pr-4">
            <div className="flex space-x-4 text-sm">
              {/* Add View/Filter buttons here if needed */}
            </div>
          </div>
          <ProductListing products={products} />
        </div>
      </main>

      {/* Floating Chat Buttons */}
      {/* <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
        <button className="bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm uppercase hidden md:block">
          CHAT
        </button>
        <button className="bg-black text-white p-3 rounded-full shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default App;
