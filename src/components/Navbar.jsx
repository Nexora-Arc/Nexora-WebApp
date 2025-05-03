import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 200); // Increased delay for DOM rendering
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.slice(1) || "home");
      return;
    }

    const sections = ["home", "workshops", "about", "contact"];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-100px 0px -50% 0px", threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [location.pathname]);

  const handleNavClick = (path, sectionId) => {
    setIsOpen(false);
    if (location.pathname === "/" && sectionId) {
      scrollToSection(sectionId);
    } else {
      navigate(path);
    }
  };

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {isHome ? (
                <button
                  onClick={() => handleNavClick("/", "home")}
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "home" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                >
                  Home
                </button>
              ) : (
                <Link
                  to="/"
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "home" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                  onClick={() => handleNavClick("/", "home")}
                >
                  Home
                </Link>
              )}
              {isHome ? (
                <button
                  onClick={() => handleNavClick("/workshops", "workshops")}
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "workshops" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                >
                  Workshops
                </button>
              ) : (
                <Link
                  to="/workshops"
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "workshops" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                  onClick={() => handleNavClick("/workshops", "workshops")}
                >
                  Workshops
                </Link>
              )}
              {isHome ? (
                <button
                  onClick={() => handleNavClick("/about", "about")}
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "about" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                >
                  About
                </button>
              ) : (
                <Link
                  to="/about"
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "about" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                  onClick={() => handleNavClick("/about", "about")}
                >
                  About
                </Link>
              )}
              {isHome ? (
                <button
                  onClick={() => handleNavClick("/contact", "contact")}
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "contact" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                >
                  Contact
                </button>
              ) : (
                <Link
                  to="/contact"
                  className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-[#DF5BD3] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
                    activeSection === "contact" ? "text-[#DF5BD3] after:w-full" : "hover:text-[#DF5BD3]"
                  }`}
                  onClick={() => handleNavClick("/contact", "contact")}
                >
                  Contact
                </Link>
              )}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
                onClick={() => handleNavClick("/contact", "contact")}
              >
                Book Workshop
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#DF5BD3] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
          {isHome ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/", "home");
              }}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "home" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
            >
              Home
            </button>
          ) : (
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "home" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/", "home");
              }}
            >
              Home
            </Link>
          )}
          {isHome ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/workshops", "workshops");
              }}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "workshops" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
            >
              Workshops
            </button>
          ) : (
            <Link
              to="/workshops"
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "workshops" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/workshops", "workshops");
              }}
            >
              Workshops
            </Link>
          )}
          {isHome ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/about", "about");
              }}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "about" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
            >
              About
            </button>
          ) : (
            <Link
              to="/about"
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "about" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/about", "about");
              }}
            >
              About
            </Link>
          )}
          {isHome ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/contact", "contact");
              }}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "contact" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
            >
              Contact
            </button>
          ) : (
            <Link
              to="/contact"
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === "contact" ? "text-[#DF5BD3]" : "text-white hover:text-[#DF5BD3]"
              }`}
              onClick={() => {
                setIsOpen(false);
                handleNavClick("/contact", "contact");
              }}
            >
              Contact
            </Link>
          )}
          <Link
            to="/contact"
            className="block w-full text-left px-3 py-2 bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] text-white rounded-md"
            onClick={() => {
              setIsOpen(false);
              handleNavClick("/contact", "contact");
            }}
          >
            Book Workshop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;