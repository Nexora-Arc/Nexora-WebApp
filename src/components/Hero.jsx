import React, { useEffect } from 'react';
import { ArrowRight, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    const animateHero = () => {
      const elements = document.querySelectorAll('.animate-hero');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
        }, 200 * index);
      });
    };
    
    animateHero();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <div 
              key={index}
              className="absolute rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3]"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 10 + 20}s infinite ease-in-out`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-hero opacity-0 translate-y-4 transition-all duration-700 ease-out">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              <span className="block">Future-Ready Tech</span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3]">
                  Workshops & Training
                </span>
              </span>
            </h1>
          </div>

          <div className="animate-hero opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300 max-w-2xl">
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Master C Programming and IoT Technology with hands-on workshops 
              designed for students and professionals. From beginner to advanced levels.
            </p>
          </div>

          <div className="animate-hero opacity-0 translate-y-4 transition-all duration-700 ease-out delay-500 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/workshops" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#workshops').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center"
            >
              Explore Workshops
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-3 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 animate-hero opacity-0 translate-y-4 transition-all duration-700 ease-out delay-700">
            <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-medium">C Programming</h3>
                <p className="text-gray-400 text-sm">Beginner to Advanced Levels</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-medium">IoT Technology</h3>
                <p className="text-gray-400 text-sm">Beginner, Intermediate & Advanced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;