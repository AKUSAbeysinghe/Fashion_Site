
// import React from 'react';
// import {
//   HeartIcon,
//   PuzzlePieceIcon,
//   HandRaisedIcon,
// } from '@heroicons/react/24/outline';
// import BackgroundImg from '../assets/Background/Flower.jpeg';

// const ValueCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// const ValuesSection = () => {
//   const values = [
//     {
//       icon: <HeartIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Quality First',
//       description:
//         'We believe in craftsmanship, premium materials, and lasting style.',
//     },
//     {
//       icon: <PuzzlePieceIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Customer-Centric',
//       description:
//         'Every decision is made with our customers’ needs and satisfaction in mind.',
//     },
//     {
//       icon: <HandRaisedIcon className="w-8 h-8 text-gray-800" />,
//       title: 'Sustainable Style',
//       description:
//         'Committed to eco-conscious practices and ethical sourcing in fashion.',
//     },
//   ];

//   return (
//     <section
//       className="relative w-full bg-cover bg-bottom"
//       style={{
//         backgroundImage: `url(${BackgroundImg})`,
//       }}
//     >
//       <div className="flex justify-center w-full">
//         {/* Reduced vertical padding */}
//         <div className="w-[100%] bg-white py-8 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               {/* <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//                 Our values
//               </h2> */}

//                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
//             bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent 
//             tracking-tight drop-shadow-sm">
//            Our Values
//           </h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {values.map((value, index) => (
//                 <ValueCard
//                   key={index}
//                   icon={value.icon}
//                   title={value.title}
//                   description={value.description}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Removed extra bottom spacer */}
//     </section>
//   );
// };

// export default ValuesSection;










import React from 'react';
import {
  HeartIcon,
  PuzzlePieceIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import BackgroundImg from '../assets/Background/Flower.jpeg';

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="mb-4">
        {React.cloneElement(icon, { className: 'w-8 h-8 text-gray-800' })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: <HeartIcon />,
      title: 'Quality First',
      description:
        'We believe in craftsmanship, premium materials, and lasting style.',
    },
    {
      icon: <PuzzlePieceIcon />,
      title: 'Customer-Centric',
      description:
        'Every decision is made with our customers’ needs and satisfaction in mind.',
    },
    {
      icon: <HandRaisedIcon />,
      title: 'Sustainable Style',
      description:
        'Committed to eco-conscious practices and ethical sourcing in fashion.',
    },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      <div className="flex justify-center w-full">
        {/* Changed background to white with subtle gray borders for a clean look */}
        <div className="w-[100%] bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              {/* Bold, high-contrast title using a serif font */}
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
                text-gray-900 tracking-tight drop-shadow-sm">
                Our Values
              </h2>
            </div>
            {/* Added subtle interactivity to the cards for an enhanced user experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;