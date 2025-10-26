
// import React, { useState, useReducer } from 'react';
// import Flower from "../assets/Background/Flower.jpeg";

// const TestimonialSection = ({ testimonials }) => {
//   const getInitials = (name) => {
//     const parts = name.split(' ');
//     if (parts.length === 2) {
//       return `${parts[0][0]}${parts[1][0]}`;
//     }
//     return parts[0][0];
//   };

//   return (
//     <div className="px-4 sm:px-8 lg:px-12">
//       <div className="max-w-7xl mx-auto text-center pt-10 md:pt-20">
//         <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide font-semibold">Testimonial</p>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10 md:mb-14">
//           Transformative Client Experiences
//         </h2>
        
//       </div>

//       <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12 md:pb-20">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03]"
//           >
//             <div className="flex flex-col h-full">
//               <svg className="w-10 h-10 text-gray-400 mb-4 sm:mb-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                 <path d="M4.5 2C3.12 2 2 3.12 2 4.5S3.12 7 4.5 7h.5c.83 0 1.5-.67 1.5-1.5S5.83 4 5 4H4.5C3.95 4 3.5 3.55 3.5 3S3.95 2 4.5 2H5.5C6.88 2 8 3.12 8 4.5S6.88 7 5.5 7H5c-.83 0-1.5.67-1.5 1.5S4.17 10 5 10H6c1.38 0 2.5-1.12 2.5-2.5S7.38 5 6 5H4.5zM15.5 2C14.12 2 13 3.12 13 4.5S14.12 7 15.5 7h.5c.83 0 1.5-.67 1.5-1.5S16.83 4 16 4h-.5c-.55 0-1.0.45-1.0 1.0S15.45 6 16 6h.5c1.38 0 2.5-1.12 2.5-2.5S17.88 3 16.5 3H15.5z" />
//               </svg>
//               <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{testimonial.quote}</p>
//             </div>

//             <div className="flex items-center mt-auto">
//               <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
//                 <span className="text-gray-800 font-bold">{getInitials(testimonial.name)}</span>
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
//                 <p className="text-xs sm:text-sm text-gray-600">{testimonial.handle}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const generatorReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_INPUT':
//       return { ...state, input: action.payload };
//     case 'SET_TONE':
//       return { ...state, tone: action.payload };
//     case 'SET_GENERATED_QUOTE':
//       return { ...state, generatedQuote: action.payload };
//     case 'SET_LOADING':
//       return { ...state, isLoading: action.payload };
//     case 'SET_ERROR':
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };

// const TestimonialGenerator = ({ addTestimonial, onClose }) => {
//   const [state, dispatch] = useReducer(generatorReducer, {
//     input: '',
//     tone: 'professional',
//     generatedQuote: '',
//     isLoading: false,
//     error: null,
//   });

//   const { input, tone, generatedQuote, isLoading, error } = state;

//   const handleGenerateTestimonial = async () => {
//     if (!input) return;

//     dispatch({ type: 'SET_LOADING', payload: true });
//     dispatch({ type: 'SET_ERROR', payload: null });
//     dispatch({ type: 'SET_GENERATED_QUOTE', payload: '' });

//     // Simulate API call
//     setTimeout(() => {
//       // Fake generated testimonial for demo
//       const generated = `I loved the service! Here's my testimonial with a ${tone} tone.`;
//       dispatch({ type: 'SET_GENERATED_QUOTE', payload: generated });
//       dispatch({ type: 'SET_LOADING', payload: false });
//     }, 1500);
//   };

//   const handleAddGeneratedTestimonial = () => {
//     if (generatedQuote) {
//       addTestimonial({
//         quote: generatedQuote,
//         name: "New Client", // Placeholder name
//         handle: "@newclient",
//       });
//       onClose();
//     }
//   };

//   return (
//     <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md sm:max-w-lg mx-auto my-12">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg sm:text-xl font-bold text-gray-900">Generate a Testimonial</h3>
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Close generator">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
//             Describe your experience:
//           </label>
//           <textarea
//             id="experience"
//             rows="3"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50 resize-none p-2"
//             value={input}
//             onChange={(e) => dispatch({ type: 'SET_INPUT', payload: e.target.value })}
//             placeholder="e.g., 'I loved the fast service and friendly staff.'"
//           />
//         </div>

//         <div>
//           <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
//             Select Tone:
//           </label>
//           <select
//             id="tone"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50 p-2"
//             value={tone}
//             onChange={(e) => dispatch({ type: 'SET_TONE', payload: e.target.value })}
//           >
//             <option value="professional">Professional</option>
//             <option value="friendly">Friendly</option>
//             <option value="excited">Excited</option>
//             <option value="sincere">Sincere</option>
//           </select>
//         </div>

//         <button
//           onClick={handleGenerateTestimonial}
//           disabled={isLoading || !input}
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 transition-colors duration-200"
//         >
//           {isLoading ? 'Generating...' : 'Generate Testimonial'}
//         </button>

//         {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

//         {generatedQuote && (
//           <div className="mt-6">
//             <h4 className="text-lg font-bold text-gray-900 mb-2">Generated Testimonial:</h4>
//             <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
//               <p className="text-gray-800 italic">{generatedQuote}</p>
//             </div>
//             <button
//               onClick={handleAddGeneratedTestimonial}
//               className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
//             >
//               Add Testimonial
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [testimonials, setTestimonials] = useState([
//     {
//       quote: "Impressed by the professionalism and attention to detail. This service is a game-changer for me and my team.",
//       name: "Guy Hawkins",
//       handle: "@guyhawkins",
//     },
//     {
//       quote: "A seamless experience from start to finish. The team was incredibly supportive and the results exceeded my expectations. Highly recommend!",
//       name: "Karla Lynn",
//       handle: "@karlaynn98",
//     },
//     {
//       quote: "Reliable and trustworthy. Made my life so much easier and I couldn't be happier with the outcome!",
//       name: "Jane Cooper",
//       handle: "@janecooper",
//     },
//   ]);

//   const [showGenerator, setShowGenerator] = useState(false);
//   const backgroundImageSrc = Flower;

//   const addTestimonial = (newTestimonial) => {
//     setTestimonials(prev => [...prev, newTestimonial]);
//   };

//   return (
//     <div
//       className="relative w-full font-['Inter'] min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${backgroundImageSrc})` }}
//     >
//       <div className="relative z-10 bg-white w-[Full] max-w-[1700px] mx-auto shadow-2xl py-6 sm:py-8 md:py-12 overflow-hidden">
//         <TestimonialSection testimonials={testimonials} />
//         <div className="flex justify-center px-6 pb-8 md:pb-12 bg-white">
//           <button
//             onClick={() => setShowGenerator(!showGenerator)}
//             className="flex items-center px-6 py-3 border border-transparent text-base sm:text-lg font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
//             aria-expanded={showGenerator}
//           >
//             {showGenerator ? 'Hide Generator' : 'Add New Testimonial'}
//           </button>
//         </div>

//         {showGenerator && (
//           <TestimonialGenerator addTestimonial={addTestimonial} onClose={() => setShowGenerator(false)} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useReducer } from "react";
// import Flower from "../assets/Background/Flower.jpeg";

// const TestimonialSection = ({ testimonials }) => {
//   const getInitials = (name) => {
//     const parts = name.split(" ");
//     if (parts.length === 2) {
//       return `${parts[0][0]}${parts[1][0]}`;
//     }
//     return parts[0][0];
//   };

//   return (
//     <div className="px-4 sm:px-8 lg:px-12">
//       <div className="max-w-7xl mx-auto text-center pt-10 md:pt-20">
//         <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide font-semibold">
//           — Testimonial
//         </p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-10 md:mb-14">
//           Transformative Client Experiences
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12 md:pb-20">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//           >
//             <div className="flex flex-col h-full">
//               <svg
//                 className="w-12 h-12 text-gray-500 mb-6 opacity-80"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M7.17 6A5.001 5.001 0 0 1 12 2a5.001 5.001 0 0 1 4.83 4H18a6 6 0 1 0-12 0h1.17ZM6 8a6 6 0 0 0 12 0h-1.17A5.001 5.001 0 0 1 12 13a5.001 5.001 0 0 1-4.83-5H6Z" />
//               </svg>
//               <p className="text-gray-800 text-lg leading-relaxed mb-6 italic">
//                 “{testimonial.quote}”
//               </p>
//             </div>

//             <div className="flex items-center mt-auto">
//               <div className="w-14 h-14 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center font-bold text-lg shadow-md mr-4">
//                 {getInitials(testimonial.name)}
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900 text-base">
//                   {testimonial.name}
//                 </p>
//                 <p className="text-sm text-gray-500">{testimonial.handle}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const generatorReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_INPUT":
//       return { ...state, input: action.payload };
//     case "SET_TONE":
//       return { ...state, tone: action.payload };
//     case "SET_GENERATED_QUOTE":
//       return { ...state, generatedQuote: action.payload };
//     case "SET_LOADING":
//       return { ...state, isLoading: action.payload };
//     case "SET_ERROR":
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };

// const TestimonialGenerator = ({ addTestimonial, onClose }) => {
//   const [state, dispatch] = useReducer(generatorReducer, {
//     input: "",
//     tone: "professional",
//     generatedQuote: "",
//     isLoading: false,
//     error: null,
//   });

//   const { input, tone, generatedQuote, isLoading, error } = state;

//   const handleGenerateTestimonial = async () => {
//     if (!input) return;

//     dispatch({ type: "SET_LOADING", payload: true });
//     dispatch({ type: "SET_ERROR", payload: null });
//     dispatch({ type: "SET_GENERATED_QUOTE", payload: "" });

//     // Simulate API call
//     setTimeout(() => {
//       const generated = `I loved the service! Here's my testimonial with a ${tone} tone.`;
//       dispatch({ type: "SET_GENERATED_QUOTE", payload: generated });
//       dispatch({ type: "SET_LOADING", payload: false });
//     }, 1500);
//   };

//   const handleAddGeneratedTestimonial = () => {
//     if (generatedQuote) {
//       addTestimonial({
//         quote: generatedQuote,
//         name: "New Client",
//         handle: "@newclient",
//       });
//       onClose();
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md sm:max-w-lg mx-auto my-12">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-xl font-bold text-gray-900">
//           ✨ Generate a Testimonial
//         </h3>
//         <button
//           onClick={onClose}
//           className="text-gray-400 hover:text-gray-700 transition"
//           aria-label="Close generator"
//         >
//           ✖
//         </button>
//       </div>

//       <div className="space-y-5">
//         <div>
//           <label
//             htmlFor="experience"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Describe your experience:
//           </label>
//           <textarea
//             id="experience"
//             rows="3"
//             className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 resize-none p-3"
//             value={input}
//             onChange={(e) =>
//               dispatch({ type: "SET_INPUT", payload: e.target.value })
//             }
//             placeholder="e.g., 'I loved the fast service and friendly staff.'"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="tone"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Select Tone:
//           </label>
//           <select
//             id="tone"
//             className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 p-3"
//             value={tone}
//             onChange={(e) =>
//               dispatch({ type: "SET_TONE", payload: e.target.value })
//             }
//           >
//             <option value="professional">Professional</option>
//             <option value="friendly">Friendly</option>
//             <option value="excited">Excited</option>
//             <option value="sincere">Sincere</option>
//           </select>
//         </div>

//         <button
//           onClick={handleGenerateTestimonial}
//           disabled={isLoading || !input}
//           className="w-full py-3 rounded-lg text-white font-semibold shadow-md bg-gray-800 hover:bg-gray-700 transition disabled:opacity-50"
//         >
//           {isLoading ? "Generating..." : "Generate Testimonial"}
//         </button>

//         {error && <div className="text-gray-800 text-sm mt-2">{error}</div>}

//         {generatedQuote && (
//           <div className="mt-6">
//             <h4 className="text-lg font-bold text-gray-900 mb-2">
//               Generated Testimonial:
//             </h4>
//             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
//               <p className="text-gray-800 italic">{generatedQuote}</p>
//             </div>
//             <button
//               onClick={handleAddGeneratedTestimonial}
//               className="mt-4 w-full py-3 rounded-lg text-white font-semibold shadow-md bg-gray-800 hover:bg-gray-700 transition"
//             >
//               Add Testimonial
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [testimonials, setTestimonials] = useState([
//     {
//       quote:
//         "Impressed by the professionalism and attention to detail. This service is a game-changer for me and my team.",
//       name: "Guy Hawkins",
//       handle: "@guyhawkins",
//     },
//     {
//       quote:
//         "A seamless experience from start to finish. The team was incredibly supportive and the results exceeded my expectations. Highly recommend!",
//       name: "Karla Lynn",
//       handle: "@karlaynn98",
//     },
//     {
//       quote:
//         "Reliable and trustworthy. Made my life so much easier and I couldn't be happier with the outcome!",
//       name: "Jane Cooper",
//       handle: "@janecooper",
//     },
//   ]);

//   const [showGenerator, setShowGenerator] = useState(false);
//   const backgroundImageSrc = Flower;

//   const addTestimonial = (newTestimonial) => {
//     setTestimonials((prev) => [...prev, newTestimonial]);
//   };

//   return (
//     <div
//       className="relative w-full font-['Inter'] min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${backgroundImageSrc})` }}
//     >
//       <div className="relative z-10 bg-white/90 backdrop-blur-xl w-full max-w-[1700px] mx-auto shadow-2xl py-6 sm:py-8 md:py-12 rounded-3xl overflow-hidden">
//         <TestimonialSection testimonials={testimonials} />
//         <div className="flex justify-center px-6 pb-8 md:pb-12">
//           <button
//             onClick={() => setShowGenerator(!showGenerator)}
//             className="px-8 py-3 rounded-full text-white font-semibold shadow-lg bg-gray-800 hover:bg-gray-700 transition"
//             aria-expanded={showGenerator}
//           >
//             {showGenerator ? "Hide Generator" : "➕ Add New Testimonial"}
//           </button>
//         </div>

//         {showGenerator && (
//           <TestimonialGenerator
//             addTestimonial={addTestimonial}
//             onClose={() => setShowGenerator(false)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;









import React, { useState, useReducer } from "react";
import Flower from "../assets/Background/Flower.jpeg";

const TestimonialSection = ({ testimonials }) => {
  const getInitials = (name) => {
    const parts = name.split(" ");
    if (parts.length === 2) {
      return `${parts[0][0]}${parts[1][0]}`;
    }
    return parts[0][0];
  };

  return (
    <div className="px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center pt-10 md:pt-20">
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide font-semibold">
          — Testimonial
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-10 md:mb-14">
          Transformative Client Experiences
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12 md:pb-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <svg
                className="w-12 h-12 text-gray-500 mb-6 opacity-80"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.001 5.001 0 0 1 12 2a5.001 5.001 0 0 1 4.83 4H18a6 6 0 1 0-12 0h1.17ZM6 8a6 6 0 0 0 12 0h-1.17A5.001 5.001 0 0 1 12 13a5.001 5.001 0 0 1-4.83-5H6Z" />
              </svg>
              <p className="text-gray-800 text-lg leading-relaxed mb-6 italic">
                “{testimonial.quote}”
              </p>
            </div>

            <div className="flex items-center mt-auto">
              <div className="w-14 h-14 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center font-bold text-lg shadow-md mr-4">
                {getInitials(testimonial.name)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const generatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_TONE":
      return { ...state, tone: action.payload };
    case "SET_GENERATED_QUOTE":
      return { ...state, generatedQuote: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const TestimonialGenerator = ({ addTestimonial, onClose }) => {
  const [state, dispatch] = useReducer(generatorReducer, {
    input: "",
    tone: "professional",
    generatedQuote: "",
    isLoading: false,
    error: null,
  });

  const { input, tone, generatedQuote, isLoading, error } = state;

  const handleGenerateTestimonial = async () => {
    if (!input) return;

    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "SET_GENERATED_QUOTE", payload: "" });

    // Simulate API call
    setTimeout(() => {
      const generated = `I loved the service! Here's my testimonial with a ${tone} tone.`;
      dispatch({ type: "SET_GENERATED_QUOTE", payload: generated });
      dispatch({ type: "SET_LOADING", payload: false });
    }, 1500);
  };

  const handleAddGeneratedTestimonial = () => {
    if (generatedQuote) {
      addTestimonial({
        quote: generatedQuote,
        name: "New Client",
        handle: "@newclient",
      });
      onClose();
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md sm:max-w-lg mx-auto my-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">
          🌟 Generate a Testimonial
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-700 transition"
          aria-label="Close generator"
        >
          ✖
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Describe your experience:
          </label>
          <textarea
            id="experience"
            rows="3"
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 resize-none p-3"
            value={input}
            onChange={(e) =>
              dispatch({ type: "SET_INPUT", payload: e.target.value })
            }
            placeholder="e.g., 'I loved the fast service and friendly staff.'"
          />
        </div>

        <div>
          <label
            htmlFor="tone"
            className="block text-sm font-medium text-gray-700"
          >
            Select Tone:
          </label>
          <select
            id="tone"
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 p-3"
            value={tone}
            onChange={(e) =>
              dispatch({ type: "SET_TONE", payload: e.target.value })
            }
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="excited">Excited</option>
            <option value="sincere">Sincere</option>
          </select>
        </div>

        <button
          onClick={handleGenerateTestimonial}
          disabled={isLoading || !input}
          className="w-full py-3 rounded-lg text-white font-semibold shadow-md bg-gray-800 hover:bg-gray-700 transition disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Testimonial"}
        </button>

        {error && <div className="text-gray-800 text-sm mt-2">{error}</div>}

        {generatedQuote && (
          <div className="mt-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Generated Testimonial:
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-gray-800 italic">{generatedQuote}</p>
            </div>
            <button
              onClick={handleAddGeneratedTestimonial}
              className="mt-4 w-full py-3 rounded-lg text-white font-semibold shadow-md bg-gray-800 hover:bg-gray-700 transition"
            >
              Add Testimonial
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [testimonials, setTestimonials] = useState([
    {
      quote:
        "Impressed by the professionalism and attention to detail. This service is a game-changer for me and my team.",
      name: "Guy Hawkins",
      handle: "@guyhawkins",
    },
    {
      quote:
        "A seamless experience from start to finish. The team was incredibly supportive and the results exceeded my expectations. Highly recommend!",
      name: "Karla Lynn",
      handle: "@karlaynn98",
    },
    {
      quote:
        "Reliable and trustworthy. Made my life so much easier and I couldn't be happier with the outcome!",
      name: "Jane Cooper",
      handle: "@janecooper",
    },
  ]);

  const [showGenerator, setShowGenerator] = useState(false);
  const backgroundImageSrc = Flower;

  const addTestimonial = (newTestimonial) => {
    setTestimonials((prev) => [...prev, newTestimonial]);
  };

  return (
    // The main container now has a solid white background and no rounded corners.
    // The background image and related styles have been removed.
    <div className="bg-white min-h-screen">
      <div className="relative z-10 w-full max-w-[1700px] mx-auto shadow-2xl py-6 sm:py-8 md:py-12 overflow-hidden">
        <TestimonialSection testimonials={testimonials} />
        <div className="flex justify-center px-6 pb-8 md:pb-12">
          <button
            onClick={() => setShowGenerator(!showGenerator)}
            className="px-8 py-3 rounded-full text-white font-semibold shadow-lg bg-gray-800 hover:bg-gray-700 transition"
            aria-expanded={showGenerator}
          >
            {showGenerator ? "Hide Generator" : "➕ Add New Testimonial"}
          </button>
        </div>

        {showGenerator && (
          <TestimonialGenerator
            addTestimonial={addTestimonial}
            onClose={() => setShowGenerator(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;