import React from "react";
import { Linkedin, ChevronUp } from "lucide-react";
import Logo from "./Logo";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {/* Abstract tech pattern */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="absolute bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3]"
              style={{
                height: "1px",
                width: `${Math.random() * 30 + 20}%`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 70}%`,
                opacity: 0.6,
                transform: `rotate(${Math.random() * 180}deg)`,
              }}
            ></div>
          ))}

          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={`dot-${index}`}
              className="absolute rounded-full bg-[#7E5BF6]"
              style={{
                width: `${Math.random() * 5 + 1}px`,
                height: `${Math.random() * 5 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-white font-bold text-xl">
                Nexora Arc
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Bridging the gap between theory and practice in tech education
              through immersive workshops.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/profile.php?id=61575692531140"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaFacebookF className="h-4 w-4 text-white" />
              </Link>
              <Link
                to="https://x.com/NexoraArc"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaXTwitter className="h-4 w-4 text-white" />
              </Link>
              <Link
                to="https://www.instagram.com/nexora_arc/"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="h-4 w-4 text-white" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/nexora-arc-official/"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("#home");
                  }}
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("#workshops");
                  }}
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("#about");
                  }}
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("#contact");
                  }}
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Workshops</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                  onClick={(e)=>{
                    e.preventDefault();
                    handleScrollToSection("#workshops");
                  }}
                >
                  ABC TO C: C Language Workshop
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                  onClick={(e)=>{
                    e.preventDefault();
                    handleScrollToSection("#workshops");
                  }}
                >
                  C Programming - Advanced
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                  onClick={(e)=>{
                    e.preventDefault();
                    handleScrollToSection("#workshops");
                  }}
                >
                  IoT Technology - Beginner
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                  onClick={(e)=>{
                    e.preventDefault();
                    handleScrollToSection("#workshops");
                  }}
                >
                  IoT Technology - Intermediate
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-400 hover:text-[#DF5BD3] transition-colors"
                  onClick={(e)=>{
                    e.preventDefault();
                    handleScrollToSection("#workshops");
                  }}
                >
                  IoT Technology - Advanced
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400">
              {/* <p>Nexora Arc Training Center</p>
              <p>Tech Park, Innovation Street</p>
              <p>Bangalore, Karnataka 560001</p> */}
              <p>info.nexoraarc@gmail.com</p>
              <p>+91 83202 80120</p>
              <p>@nexora_arc</p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nexora Arc. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronUp className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
