

// import React from 'react';
// import Flower from "../assets/Background/Flower.jpeg";
// import IDET from "../assets/Background/IDET.jpeg";
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const backgroundImageUrl = Flower;

//   return (
//     <div
//       className="relative w-full bg-cover bg-center pb-6"
//       style={{
//         backgroundImage: `url(${backgroundImageUrl})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'bottom center',
//       }}
//     >
//       <footer className="relative z-10 bg-white rounded-b-lg shadow-2xl w-[Full] max-w-[1700px] mx-auto px-4 py-8 text-gray-800 text-sm">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
//           {/* About Louis Vuitton Section */}
//           <div>
//             <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">About AURORA</h4>
//             <ul className="space-y-2">
//               <li><Link to="/About" className="hover:text-gray-900">About</Link></li>
//               <li><Link to="/Galary" className="hover:text-gray-900">Our Fashion Galary</Link></li>
//               <li><Link to="/lookbook" className="hover:text-gray-900">LookBook</Link></li>
//               <li><Link to="/Services/Sustainbility" className="hover:text-gray-900">Sustainability</Link></li>
//               <li><Link to="/Services/HistoryBeyond" className="hover:text-gray-900">Foundation Aurora</Link></li>
//             </ul>
//           </div>

//           {/* Email and SMS Sign-up Section */}
//           <div>
//             <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Talk To our Advisor</h4>
//             <p className="mb-4">
//                Whatsapp Advisor for anything You are struggling 
//             </p>
//             <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Follow Us</h4>
//             {/* Add social media icons if needed */}
//           </div>
//         </div>

//         {/* Bottom Links */}
//         <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs w-full">
//           <div className="flex items-center space-x-2 mb-4 md:mb-0">
//             <span>© 2025 IDET (Private) Limited. All rights reserved.</span>
//             <img
//               src= {IDET}
//               alt="United States Flag"
//               className="w-4 h-auto"
//             />
//             <span>IDET</span>
//           </div>
//           <div className="flex flex-wrap justify-center md:justify-end space-x-4">
//            <Link to="/Contact" className="hover:text-gray-900">React Out</Link>

//             {/* <a href="#" className="hover:text-gray-900">Legal Notices</a> */}
//             {/* <a href="/Privacypolicy" className="hover:text-gray-900">Privacy Policy</a> */}
//             <Link to="/Privacypolicy" className="hover:text-gray-900">Privacy Policy</Link>

           

//              <Link to="/Privacypolicy" className="hover:text-gray-900">
//               Your Privacy Choices{' '}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 ml-1"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         <div className="text-center mt-8 text-xl font-bold tracking-widest text-gray-900">
//           AURORA
//         </div>
//       </footer>

//       {/* Chat Button */}
//       {/* <div className="fixed bottom-4 right-4 z-50">
//         <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg hover:bg-gray-50">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//             />
//           </svg>
//           Chat with us
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 ml-2 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
//           </svg>
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default Footer;






import React from 'react';
import Flower from "../assets/Background/Flower.jpeg";
import IDET from "../assets/Background/IDET.jpeg";
import { Link } from 'react-router-dom';

const Footer = () => {
  const backgroundImageUrl = Flower;

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <footer className="relative z-10 bg-white rounded-b-lg shadow-2xl w-full max-w-[1700px] mx-auto px-4 py-8 text-gray-800 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* About AURORA Section */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">About AURORA</h4>
            <ul className="space-y-2">
              <li><Link to="/About" className="hover:text-gray-900">About</Link></li>
              <li><Link to="/Galary" className="hover:text-gray-900">Our Fashion Galary</Link></li>
              <li><Link to="/lookbook" className="hover:text-gray-900">LookBook</Link></li>
              <li><Link to="/Services/Sustainbility" className="hover:text-gray-900">Sustainability</Link></li>
              <li><Link to="/Services/HistoryBeyond" className="hover:text-gray-900">Foundation Aurora</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Talk To our Advisor</h4>
            <p className="mb-4">
               Whatsapp Advisor for anything You are struggling 
            </p>
            <h4 className="font-semibold mb-4 text-gray-900 uppercase tracking-wide">Follow Us</h4>
            {/* Add social media icons here if needed */}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs w-full">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span>© 2025 IDET (Private) Limited. All rights reserved.</span>
            <img
              src={IDET}
              alt="United States Flag"
              className="w-4 h-auto"
            />
            <span>IDET</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link to="/Contact" className="hover:text-gray-900">React Out</Link>
            <Link to="/Privacypolicy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link to="/Privacypolicy" className="hover:text-gray-900 flex items-center">
              Your Privacy Choices
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-xl font-bold tracking-widest text-gray-900">
          AURORA
        </div>
      </footer>
    </div>
  );
};

export default Footer;

