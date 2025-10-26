

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // Components
// import Scroll from "./components/Scroll.jsx";
// import WhatApp from "./components/Whatapp.jsx";
// import Privacy from "./components/Privacypolicy.jsx";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Separate from "./components/Separte";
// import LookBookM from "./components/LookBookMen";
// import Galary from "./Pages/Galary";
// import HistoryBeyond from "./Pages/HistoryBeyond";
// import Product from "./components/Product";
// import FootWear from "./components/Footwear";
// import Clothing from "./components/Clothing";
// import Brands from "./components/Brands";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Suplimentory from "./Pages/Services/Suplimentory.jsx";
// import Personalization from "./Pages/Services/Personalization.jsx";
// import Sustainability from "./Pages/Services/Sustainbility.jsx";
// import ClothingF from "./Pages/Collections/ClothingF.jsx";
// import Testimonials from "./components/Testimonials.jsx";
// import NewCollection from "./components/NewClothing.jsx";
// import FootwareF from "./Pages/Collections/FootwareF.jsx";
// import Accessory from "./Pages/Collections/Assessories.jsx";
// import FootwareM from "./Pages/Collections/FootwareM.jsx";
// import Bags from "./Pages/Collections/Bags.jsx";
// import RightPanel from "./components/RightPannel.jsx";
// import Kids from "./Pages/Collections/Kids.jsx";
// import FashionEvent from "./Pages/Services/FashionEvent.jsx";

// // 🔥 Admin Pages
// import Login from "./Admin/Login.jsx";
// import SignUp from "./Admin/SignUp.jsx";
// import AdminPanel from "./Admin/AdminPanel.jsx";
// import LoolbookAdmin from "./Admin/LookbookAdmin.jsx";

// // ✅ Layout Component: hide Navbar/Footer on admin pages
// function Layout({ children }) {
//   const location = useLocation();
//   const hideLayout = ["/login", "/signup", "/admin", "/adminLookbook"].includes(location.pathname);

//   return (
//     <div className="bg-white text-black font-sans">
//       <Scroll />
//       {!hideLayout && <Navbar />}
//       {children}
//       {!hideLayout && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* ✅ Home */}
//           <Route path="/" element={
//             <>
//               <RightPanel />
//               <About />
//               <Separate />
//               <Testimonials />
//               <Brands />
//               <Contact />
//               <WhatApp />
//             </>
//           } />

//           {/* ✅ Collections */}
//           <Route path="/lookbook" element={<LookBookM />} />
//           <Route path="/Product" element={<Product />} />
//           <Route path="Collections/ClothingF" element={<ClothingF />} />
//           <Route path="Collections/FootwareF" element={<FootwareF />} />
//           <Route path="Collections/FootwareM" element={<FootwareM />} />
//           <Route path="Collections/Assessories" element={<Accessory />} />
//           <Route path="Collections/Bags" element={<Bags />} />
//           <Route path="Collections/Kids" element={<Kids />} />

//           {/* ✅ Services */}
//           <Route path="/Services/HistoryBeyond" element={<HistoryBeyond />} />
//           <Route path="/Services/Personalization" element={<Personalization />} />
//           <Route path="Services/Suplimentory" element={<Suplimentory />} />
//           <Route path="Services/Sustainbility" element={<Sustainability />} />
//           <Route path="Services/FashionEvent" element={<FashionEvent />} />

//           {/* ✅ Other Pages */}
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Galary" element={<Galary />} />
//           <Route path="/Privacypolicy" element={<Privacy />} />
//           <Route path="/Brands" element={<Brands />} />

//           {/* ✅ Admin Pages */}
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<AdminPanel />} />
//           <Route path="/adminLookbook" element={<LoolbookAdmin />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Scroll from "./components/Scroll.jsx";
import WhatApp from "./components/Whatapp.jsx";
import Privacy from "./components/Privacypolicy.jsx";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Separate from "./components/Separte";
import LookBookM from "./components/LookBookMen";
import Galary from "./Pages/Galary";
import HistoryBeyond from "./Pages/HistoryBeyond";
import Product from "./components/Product";
import FootWear from "./components/Footwear";
import Clothing from "./components/Clothing";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Suplimentory from "./Pages/Services/Suplimentory.jsx";
import Personalization from "./Pages/Services/Personalization.jsx";
import Sustainability from "./Pages/Services/Sustainbility.jsx";
import ClothingF from "./Pages/Collections/ClothingF.jsx";
import Testimonials from "./components/Testimonials.jsx";
import NewCollection from "./components/NewClothing.jsx";
import FootwareF from "./Pages/Collections/FootwareF.jsx";
import Accessory from "./Pages/Collections/Assessories.jsx";
import FootwareM from "./Pages/Collections/FootwareM.jsx";
import Bags from "./Pages/Collections/Bags.jsx";
import RightPanel from "./components/RightPannel.jsx";
import Kids from "./Pages/Collections/Kids.jsx";
import FashionEvent from "./Pages/Services/FashionEvent.jsx";

// 🔥 Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";
import LoolbookAdmin from "./Admin/LookbookAdmin.jsx";

// ✅ Layout for normal pages
function Layout({ children }) {
  return (
    <div className="bg-white text-black font-sans">
      <Scroll />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Admin & Auth pages WITHOUT Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/adminLookbook" element={<LoolbookAdmin />} />

        {/* ✅ All other pages WITH Navbar/Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <RightPanel />
              <About />
              <Separate />
              <Testimonials />
              <Brands />
              <Contact />
              <WhatApp />
            </Layout>
          }
        />

        {/* Collections */}
        <Route path="/lookbook" element={<Layout><LookBookM /></Layout>} />
        <Route path="/Product" element={<Layout><Product /></Layout>} />
        <Route path="Collections/ClothingF" element={<Layout><ClothingF /></Layout>} />
        <Route path="Collections/FootwareF" element={<Layout><FootwareF /></Layout>} />
        <Route path="Collections/FootwareM" element={<Layout><FootwareM /></Layout>} />
        <Route path="Collections/Assessories" element={<Layout><Accessory /></Layout>} />
        <Route path="Collections/Bags" element={<Layout><Bags /></Layout>} />
        <Route path="Collections/Kids" element={<Layout><Kids /></Layout>} />

        {/* Services */}
        <Route path="/Services/HistoryBeyond" element={<Layout><HistoryBeyond /></Layout>} />
        <Route path="/Services/Personalization" element={<Layout><Personalization /></Layout>} />
        <Route path="Services/Suplimentory" element={<Layout><Suplimentory /></Layout>} />
        <Route path="Services/Sustainbility" element={<Layout><Sustainability /></Layout>} />
        <Route path="Services/FashionEvent" element={<Layout><FashionEvent /></Layout>} />

        {/* Other Pages */}
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
        <Route path="/Galary" element={<Layout><Galary /></Layout>} />
        <Route path="/Privacypolicy" element={<Layout><Privacy /></Layout>} />
        <Route path="/Brands" element={<Layout><Brands /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

