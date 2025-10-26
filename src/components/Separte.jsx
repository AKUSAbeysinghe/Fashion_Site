

import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Flower from "../assets/Background/Flower.jpeg";
import PurseLady from "../assets/PageOnes/PurseLady.jpeg";
import Accessories from "../assets/PageOnes/Accessories.jpeg";
import ShirtMen from "../assets/PageOnes/Dress (2).jpeg";
import Model1 from "../assets/Background/Model1.jpeg";
import Model2 from "../assets/Background/Model2.jpeg";
import Model3 from "../assets/Background/Model3.jpeg";
import Model5 from "../assets/Background/Model5.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Flower})` }}
    >
      {/* White Box Wrapper */}
      <div className="w-[Full] mx-auto bg-white  shadow-xl">

        {/* Section 1: Products */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <div className="text-center mb-10">
            <h3 className="uppercase text-sm tracking-wider text-gray-500 mb-2">
              Choose by your choice
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-gray-800">
              Wear well. give well.
              <br />
              feel well.
            </h2>
            <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
              The best choice
              <br />
              for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: PurseLady, name: "Oversized hooded cardigan", price: "$395.00" },
              { img: Accessories, name: "Cupro long sleeve button down dress", price: "$340.00" },
              { img: ShirtMen, name: "Crewneck pull-on sweater", price: "$175.00" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img src={item.img} alt={item.name} className="w-full h-auto object-cover" />
                </div>
                <p className="font-semibold text-lg text-gray-800">{item.name}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Time Only */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 border-t">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
              time only.
            </h2>
            <p className="text-sm text-gray-600 mt-4 uppercase tracking-widest">
              Best on sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
            {[Model1, Model2, Model3].map((model, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                <img
                  src={model}
                  alt={`Model ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md mb-2"
                />
                {idx === 1 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Our Oath */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 border-t flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={Model5}
              alt="Woman drinking water"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-sm text-gray-600 uppercase mb-2">Way To Past</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
              Our oath,
              <br />
              You beautiful.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
              A small company offering simple, timeless pieces you can enjoy
              every day of the year. Our collection is conceptually designed and
              ethically made in Sri Lanka.
            </p>
            <button
              onClick={() => navigate("/Services/HistoryBeyond")}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span>Our History</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-16 py-8 text-center text-gray-600 border-t">
          <div className="flex justify-center space-x-6 mb-4">
            {[...Array(3)].map((_, i) => (
              <a href="#" className="hover:text-gray-900" key={i}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-2h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            ))}
          </div>
          <p className="text-xl font-semibold tracking-wide">#AURORA</p>
        </footer>

      </div>
    </div>
  );
};

export default Hero;




