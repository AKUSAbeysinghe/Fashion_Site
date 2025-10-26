import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgImage from '../assets/Background/Flower.jpeg'; // Background image for the sides

const App = () => {
  const navigate = useNavigate();  // <-- Initialize navigate here
  const [showcaseImages, setShowcaseImages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch showcase images from backend
  const fetchShowcase = async () => {
    try {
      const res = await fetch('http://localhost/react_admin_db/get_showcase.php');
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      console.log('Fetched showcase data:', data); // Debug log
      if (Array.isArray(data)) {
        setShowcaseImages(data);
      } else {
        setError('No showcase images found.');
        setShowcaseImages([]);
      }
    } catch (e) {
      console.error('Fetch showcase error:', e);
      setError('⚠️ Could not fetch showcase images.');
      setShowcaseImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowcase();
  }, []);

  // Map showcase images to grid (use first 8 images, with placeholders if needed)
  const gridImages = [
    showcaseImages[0]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[1]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[2]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[3]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[4]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[5]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[6]?.image_url || 'https://via.placeholder.com/300x400',
    showcaseImages[7]?.image_url || 'https://via.placeholder.com/300x400',
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Left Background */}
      <div
        className="absolute top-0 left-0 w-[2%] h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      {/* Right Background */}
      <div
        className="absolute top-0 right-0 w-[2%] h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      {/* Top Background */}
      <div
        className="absolute top-0 left-[2%] w-[Full] h-[2%] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />
      {/* Bottom Background */}
      <div
        className="absolute bottom-0 left-[2%] w-[96%] h-[2%] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      />

      {/* Main Content Area - Centered and White */}
      <div className="relative z-10 mx-auto w-[Full] bg-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8 font-sans">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <svg
            className="mx-auto mb-2 w-10 h-10 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 7V3m8 4V3m-4 18v-4m0 0h.01M12 12V3m0 9H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-7zm-4 0h8"
            ></path>
          </svg>
          <h1 className="text-2xl md:text-3xl font-serif tracking-wider text-gray-800">
            Crafted for the Soul
          </h1>
        </header>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium max-w-4xl w-full">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="mb-8 p-4 text-center text-gray-600 max-w-4xl w-full">
            Loading showcase images...
          </div>
        )}

        {/* Image Grid with Center Text */}
        <div className="relative w-full max-w-4xl grid grid-cols-2 gap-2 md:gap-4 overflow-hidden rounded-lg shadow-lg">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[0]}
              alt="Showcase Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[1]}
              alt="Showcase Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[2]}
              alt="Showcase Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[3]}
              alt="Showcase Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[4]}
              alt="Showcase Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[5]}
              alt="Showcase Image 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[6]}
              alt="Showcase Image 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={gridImages[7]}
              alt="Showcase Image 8"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-widest uppercase text-gray-800 mb-2">
                Essentials
              </h2>
              <p className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
                The season's
                <br />
                key pieces to love
              </p>
            </div>
          </div>
        </div>

        {/* Shop Buttons */}
        <div className="flex space-x-8 md:space-x-16 mt-8 md:mt-12">
          <button
            onClick={() => navigate('/Collections/ClothingF')}
            className="text-lg font-medium text-gray-800 uppercase tracking-wider hover:underline focus:outline-none"
          >
            For Her
          </button>
          <button
            onClick={() => navigate('/Product')}
            className="text-lg font-medium text-gray-800 uppercase tracking-wider hover:underline focus:outline-none"
          >
            For Him
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
