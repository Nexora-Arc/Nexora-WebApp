// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Workshops from "./components/Workshops";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ParticlesBackground from "./components/ParticlesBackground";

// const App = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <BrowserRouter>
//       <div className="relative min-h-screen bg-black text-white overflow-hidden">
//         <ParticlesBackground />
//         <div className="font-sans overflow-x-hidden">
//           <Navbar scrolled={scrolled} />
//           <main>
//             <Routes>
//               <Route path="/" element={<Hero />} />
//               <Route path="/workshops" element={<Workshops />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Workshops from "./components/Workshops";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ParticlesBackground from "./components/ParticlesBackground";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);

//   return null;
// };

// const MainPage = () => (
//   <>
//     <Hero />
//     <Workshops />
//     <About />
//     <Contact />
//   </>
// );

// const App = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <BrowserRouter>
//       <div className="relative min-h-screen bg-black text-white overflow-hidden">
//         <ParticlesBackground />
//         <div className="font-sans overflow-x-hidden">
//           <Navbar scrolled={scrolled} />
//           <main>
//             <ScrollToTop />
//             <Routes>
//               <Route path="/" element={<MainPage />} />
//               <Route path="/workshops" element={<Workshops />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const MainPage = () => (
  <>
    <Hero />
    <Workshops />
    <About />
    <Contact />
  </>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Prevent copy-related actions
    const preventCopy = (e) => {
      e.preventDefault();
      return false;
    };

    // Prevent context menu (right-click)
    const preventContextMenu = (e) => {
      e.preventDefault();
    };

    // Prevent keyboard shortcuts for copying
    const preventKeyboardCopy = (e) => {
      if ((e.ctrlKey && (e.key === 'c' || e.key === 'C')) || 
          (e.metaKey && (e.key === 'c' || e.key === 'C'))) {
        e.preventDefault();
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("copy", preventCopy);
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("keydown", preventKeyboardCopy);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventKeyboardCopy);
    };
  }, [scrolled]);

  return (
    <BrowserRouter>
      <div 
        className="relative min-h-screen bg-black text-white overflow-hidden select-none"
        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
      >
        <ParticlesBackground />
        <div className="font-sans overflow-x-hidden">
          <Navbar scrolled={scrolled} />
          <main>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;