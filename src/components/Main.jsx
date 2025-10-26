import React from 'react';

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4"
      style={{ backgroundImage: "url('http://googleusercontent.com/image_generation_content/0')" }} // Flower background image
    >
      <div className="w-96 mx-auto bg-white p-6 rounded-lg shadow-xl overflow-y-auto max-h-[85vh]"> {/* w-96 width and centered */}
        <h1 className="text-2xl font-light text-gray-900 mb-5">Contact Us</h1>

        <p className="text-gray-700 text-base mb-7">
          Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.
        </p>

        {/* Phone Number Section */}
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-600 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.996.93l-.507 4.288a1 1 0 00.271.916l3.755 3.755a1 1 0 00.916.271l4.288-.507a1 1 0 01.93.996V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a
            href="tel:1866VUITTON"
            className="text-gray-900 text-base hover:underline transition-colors duration-200"
          >
            +1.866.VUITTON
          </a>
        </div>

        {/* Chat with an Advisor Section */}
        <div className="flex items-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-600 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <div>
            <span className="text-gray-900 text-base">Chat with an Advisor</span>
            <p className="text-xs text-gray-500">Available</p>
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* Need Help? Section */}
        <h2 className="text-xl font-normal text-gray-900 mb-5">Need Help?</h2>
        <ul className="space-y-3 text-gray-700 text-base">
          <li>
            <a href="#" className="hover:underline transition-colors duration-200">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition-colors duration-200">
              Care Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition-colors duration-200">
              Find a Store
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;