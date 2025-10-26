// import React from "react";

// // Data for Fashion Events
// const events = [
//   {
//     id: 1,
//     title: "Summer Fashion Week",
//     date: "Aug 25, 2025",
//     location: "Colombo, Sri Lanka",
//     image: "https://source.unsplash.com/600x400/?black-and-white-fashion,runway",
//     description:
//       "Showcasing the latest summer trends with top designers and models from around the world.",
//   },
//   {
//     id: 2,
//     title: "Luxury Fashion Gala",
//     date: "Sep 10, 2025",
//     location: "Paris, France",
//     image: "https://source.unsplash.com/600x400/?black-and-white-luxury,fashion",
//     description:
//       "An evening of elegance and glamour featuring exclusive collections by luxury brands.",
//   },
//   {
//     id: 3,
//     title: "Streetwear Expo",
//     date: "Oct 5, 2025",
//     location: "New York, USA",
//     image: "https://source.unsplash.com/600x400/?black-and-white-streetwear,style",
//     description:
//       "Celebrating urban culture with streetwear designers, live music, and interactive workshops.",
//   },
// ];

// const FashionEventsPage = () => {
//   return (
//     <div className="bg-neutral-900">
//       {/* Fashion Events Section */}
//       <section className="py-16 px-4 md:px-8">
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-bold text-white tracking-wide">
//             Upcoming Fashion Events
//           </h2>
//           <p className="text-lg text-neutral-400 mt-4">
//             Experience the pinnacle of style and creativity.
//           </p>
//           <p className="mt-2 text-base text-neutral-500 max-w-2xl mx-auto">
//             From haute couture showcases to vibrant streetwear expos, our curated list of events connects you with the cutting-edge of the fashion world. Mark your calendar and secure your spot to witness these unforgettable moments.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out"
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-neutral-800">
//                   {event.title}
//                 </h3>
//                 <p className="text-base text-neutral-500 mt-2">
//                   {event.date} • {event.location}
//                 </p>
//                 <p className="mt-4 text-neutral-700 leading-relaxed">
//                   {event.description}
//                 </p>
//                 <button className="mt-6 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition duration-300 ease-in-out">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12 max-w-4xl mx-auto">
//           <p className="text-lg text-neutral-400">
//             Want to stay ahead of the trends? <span className="text-white font-semibold">Subscribe to our newsletter</span> for the latest updates and exclusive invitations to upcoming events.
//           </p>
//         </div>
//       </section>

//       ---

//       {/* Gifting & Vouchers Section */}
//       <section className="py-16 px-4 md:px-8 text-white">
//         {/* Hero Section */}
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <h2 className="text-4xl font-bold tracking-wide mb-4">
//             Gifting & Vouchers
//           </h2>
//           <p className="text-lg text-neutral-400">
//             Give the gift of timeless style and exceptional taste.
//           </p>
//           <p className="mt-2 text-base text-neutral-500 max-w-2xl mx-auto">
//             Our exclusive gift vouchers and curated collections offer a perfect way to celebrate any occasion. From digital convenience to a bespoke experience, find the ideal present that speaks volumes.
//           </p>
//         </div>

//         {/* Gift Vouchers Section */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <h3 className="text-3xl font-bold text-center mb-10">
//             Purchase a Gift Voucher
//           </h3>
//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Digital Gift Card */}
//             <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
//               <img
//                 src="https://source.unsplash.com/800x600/?digital,gift-card,monochrome"
//                 alt="Digital Gift Card"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-8 text-neutral-800">
//                 <h4 className="text-xl font-bold mb-2">Digital Gift Card</h4>
//                 <p className="text-neutral-600 leading-relaxed text-sm">
//                   Instant delivery via email. Choose from various denominations and add a personal message. Perfect for last-minute surprises.
//                 </p>
//                 <button className="mt-6 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition duration-300 ease-in-out">
//                   Purchase Now
//                 </button>
//               </div>
//             </div>

//             {/* Physical Gift Voucher */}
//             <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
//               <img
//                 src="https://source.unsplash.com/800x600/?physical,gift-voucher,monochrome"
//                 alt="Physical Gift Voucher"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-8 text-neutral-800">
//                 <h4 className="text-xl font-bold mb-2">Physical Gift Voucher</h4>
//                 <p className="text-neutral-600 leading-relaxed text-sm">
//                   A beautifully crafted voucher delivered in a signature box. A tangible and elegant gift for a special someone.
//                 </p>
//                 <button className="mt-6 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition duration-300 ease-in-out">
//                   Buy a Voucher
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Personalized Gifting Section */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <h3 className="text-3xl font-bold text-center mb-10">
//             Personalized Gifting Services
//           </h3>
//           <div className="bg-neutral-800 rounded-2xl overflow-hidden shadow-xl p-8 md:p-12 text-center">
//             <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
//               For a truly unique gesture, explore our bespoke gifting services. Our advisors will assist you in selecting the perfect items and provide exclusive services like <span className="text-white font-semibold">customized wrapping, personalized notes, and dedicated delivery</span>.
//             </p>
//             <button className="mt-8 px-8 py-4 bg-white text-neutral-900 rounded-full font-bold hover:bg-neutral-200 transition duration-300 ease-in-out">
//               Arrange a Consultation
//             </button>
//           </div>
//         </div>
//         
//         {/* Closing Statement */}
//         <div className="text-center mt-12 max-w-4xl mx-auto">
//           <p className="text-lg text-neutral-400">
//             Celebrate life's moments with style and elegance. For any gifting inquiries, please feel free to <span className="text-white font-semibold">contact our client services team.</span>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FashionEventsPage;





import React from "react";
import V1 from "../../assets/ServicePics/v1.jpeg";
import V2 from "../../assets/ServicePics/v2.jpeg";
import Event1 from "../../assets/ServicePics/event1.jpeg";
import E2 from "../../assets/ServicePics/event2.jpeg";
import E3 from "../../assets/ServicePics/event3.jpeg";


// Data for Fashion Events
const events = [
  {
    id: 1,
    title: "Summer Fashion Week",
    date: "Aug 25, 2025",
    location: "Colombo, Sri Lanka",
    image:Event1,
    description:
      "Showcasing the latest summer trends with top designers and models from around the world.",
  },
  {
    id: 2,
    title: "Luxury Fashion Gala",
    date: "Sep 10, 2025",
    location: "Paris, France",
    image: E2,
    description:
      "An evening of elegance and glamour featuring exclusive collections by luxury brands.",
  },
  {
    id: 3,
    title: "Streetwear Expo",
    date: "Oct 5, 2025",
    location: "New York, USA",
    image: E3,
    description:
      "Celebrating urban culture with streetwear designers, live music, and interactive workshops.",
  },
];

const FashionEventsPage = () => {
  return (
    <div className="bg-white text-neutral-900">
      {/* Fashion Events Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold tracking-wide">
            Upcoming Fashion Events
          </h2>
          <p className="text-lg text-neutral-600 mt-4">
            Experience the pinnacle of style and creativity.
          </p>
          <p className="mt-2 text-base text-neutral-700 max-w-2xl mx-auto">
            From haute couture showcases to vibrant streetwear expos, our curated list of events connects you with the cutting-edge of the fashion world. Mark your calendar and secure your spot to witness these unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-neutral-200"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900">
                  {event.title}
                </h3>
                <p className="text-base text-neutral-500 mt-2">
                  {event.date} • {event.location}
                </p>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  {event.description}
                </p>
                <button className="mt-6 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-4xl mx-auto">
          <p className="text-lg text-neutral-600">
            Want to stay ahead of the trends? <span className="text-neutral-900 font-semibold">Subscribe to our newsletter</span> for the latest updates and exclusive invitations to upcoming events.
          </p>
        </div>
      </section>

      ---

      {/* Gifting & Vouchers Section */}
      <section className="py-16 px-4 md:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wide mb-4">
            Gifting & Vouchers
          </h2>
          <p className="text-lg text-neutral-600">
            Give the gift of timeless style and exceptional taste.
          </p>
          <p className="mt-2 text-base text-neutral-700 max-w-2xl mx-auto">
            Our exclusive gift vouchers and curated collections offer a perfect way to celebrate any occasion. From digital convenience to a bespoke experience, find the ideal present that speaks volumes.
          </p>
        </div>

        {/* Gift Vouchers Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">
            Purchase a Gift Voucher
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Digital Gift Card */}
            <div className="bg-neutral-50 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-neutral-200">
              <img
                src={V1}
                alt="Digital Gift Card"
                className="w-full h-64 object-cover"
              />
              <div className="p-8 text-neutral-800">
                <h4 className="text-xl font-bold mb-2 text-neutral-900">Digital Gift Card</h4>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Instant delivery via email. Choose from various denominations and add a personal message. Perfect for last-minute surprises.
                </p>
                <button className="mt-6 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition duration-300 ease-in-out">
                  Purchase Now on Store
                </button>
              </div>
            </div>

            {/* Physical Gift Voucher */}
            <div className="bg-neutral-50 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out border border-neutral-200">
              <img
                src={V2}
                alt="Physical Gift Voucher"
                className="w-full h-64 object-cover"
              />
              <div className="p-8 text-neutral-800">
                <h4 className="text-xl font-bold mb-2 text-neutral-900">Physical Gift Voucher</h4>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  A beautifully crafted voucher delivered in a signature box. A tangible and elegant gift for a special someone.
                </p>
                <button className="mt-6 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition duration-300 ease-in-out">
                  Buy a Voucher from the store
                </button>
            </div>
          </div>
        </div>
        </div>

        {/* Personalized Gifting Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-neutral-900">
            Personalized Gifting Services
          </h3>
          <div className="bg-neutral-100 rounded-2xl overflow-hidden shadow-xl p-8 md:p-12 text-center">
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              For a truly unique gesture, explore our bespoke gifting services. Our advisors will assist you in selecting the perfect items and provide exclusive services like <span className="text-neutral-900 font-semibold">customized wrapping, personalized notes, and dedicated delivery</span>.
            </p>
{/*             <button className="mt-8 px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-700 transition duration-300 ease-in-out">
              Arrange a Consultation
            </button> */}
          </div>
        </div>
        
        {/* Closing Statement */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <p className="text-lg text-neutral-600">
            Celebrate life's moments with style and elegance. For any gifting inquiries, please feel free to <span className="text-neutral-900 font-semibold">contact our client services team.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FashionEventsPage;