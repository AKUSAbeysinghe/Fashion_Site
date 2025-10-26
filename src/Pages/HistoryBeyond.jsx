
import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import H1 from "../assets/Background/H1.jpeg";
import H2 from "../assets/Background/H2.jpeg";
import H3 from "../assets/Background/H3.jpeg";
import H4 from "../assets/Background/H4.jpeg";
import FlowerBackground from '../assets/Background/Flower.jpeg';

const TimelineComponent = () => {
  const timelineItems = [
    {
      day: '01',
      title: 'Humble Beginnings',
      year: 'Started as a small boutique with a vision to bring unique, high-quality fashion to our community.',
      image: H1,
    },
    {
      day: '02',
      title: 'Expanding Horizons',
      year: 'Introduced diverse collections for men, women, and children, blending global trends with local style.',
      image: H2,
    },
    {
      day: '03',
      title: 'Crafting Identity',
      year: 'Partnered with skilled designers and artisans to create exclusive pieces that reflect individuality.',
      image: H3,
    },
    {
      day: '04',
      title: 'Fashion for All',
      year: 'Evolved into a trusted name, offering clothing, footwear, and accessories that cater to every lifestyle.',
      image: H4,
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      {/* This is the main white container with shadow and rounded corners */}
      <div className="relative z-10 bg-white  shadow-2xl w-[Full] max-w-[1700px] mx-auto text-gray-900 font-['Inter']">
        {/* Top Banner for Browser Update */}
        {/* <div className="bg-gray-800 text-white text-center py-2 text-sm">
          <p>Please update to the latest version of your browser for the best experience on the website.</p>
        </div> */}

        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white p-2 text-lg font-bold">AU</div>
            <h1 className="text-xl font-semibold">A History of Our Journey</h1>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              <button className="text-gray-600 font-semibold hover:text-black">Day</button>
              <button className="text-black font-semibold hover:text-gray-600">Month</button>
            </div>
            <div className="flex space-x-4">
              <div><a href="/About" className="hover:underline">About</a></div>
              {/* <li><Link to="/iso1385Main" className="hover:text-white">ISO 13485:2016 Certification</Link></li> */}
              {/* <div><a href="/" className="hover:underline">Donate</a></div> */}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Month Selector */}
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-light mr-2">History</h2>
            <ChevronDownIcon className="h-6 w-6 text-gray-600" />
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex flex-col border border-gray-300">
                {/* Top section with day, title, and year */}
                <div className={`p-6 flex-1 flex flex-col justify-between ${index === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <div>
                    <div className="text-6xl font-bold mb-4">{item.day}</div>
                    <p className="font-semibold text-lg">{item.title}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">{item.year}</p>
                  </div>
                </div>

                {/* Bottom section with image */}
                <div className={`relative ${index === 0 ? 'bg-black' : 'bg-gray-100'}`}>
                  {/* The first card has a different style for the image and text */}
                  {index === 0 ? (
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={`Image for ${item.title}`}
                        className="w-full h-auto object-cover opacity-70"
                      />
                      <div className="absolute inset-x-0 bottom-0 text-white p-4">
                        <p className="text-lg font-semibold">7089</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={`Image for ${item.title}`}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TimelineComponent;