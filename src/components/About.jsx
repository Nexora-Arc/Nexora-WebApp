import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';
import FounderCard from './FounderCard';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const founders = [
    {
      id: 1,
      name: 'Yash Savaliya',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: '10+ years experience in software development and computer science education.'
    },
    {
      id: 2,
      name: 'Kahani Surani',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Ph.D in Embedded Systems with extensive industry experience in IoT innovations.'
    },
    {
      id: 3,
      name: 'Ritu Sidapara',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Former senior engineer with expertise in systems architecture and IoT deployment.'
    },
    {
      id: 4,
      name: 'Urvish Gohel',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Specialized in creating engaging technical curriculum and workshop management.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Nexora Arc</h2>
          <p className="text-gray-300">
            Dedicated to bridging the gap between theoretical knowledge and practical implementation 
            in the world of programming and IoT technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-100">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              At Nexora Arc, we're on a mission to empower the next generation of tech innovators through 
              immersive, hands-on learning experiences that transform theoretical knowledge into practical expertise.
            </p>
            <p className="text-gray-300 mb-6">
              Our workshops are meticulously designed to bridge the gap between academic learning and industry 
              requirements, enabling students and professionals to build relevant skills for today's 
              technology-driven world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex-1">
                <h4 className="text-[#7E5BF6] font-semibold mb-2">300+</h4>
                <p className="text-gray-300 text-sm">Workshops Conducted</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex-1">
                <h4 className="text-[#DF5BD3] font-semibold mb-2">5000+</h4>
                <p className="text-gray-300 text-sm">Students Trained</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex-1">
                <h4 className="text-white font-semibold mb-2">50+</h4>
                <p className="text-gray-300 text-sm">Institutional Partners</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7E5BF6] to-[#DF5BD3] opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Workshop session" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#7E5BF6] rounded-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#DF5BD3] rounded-xl -z-10"></div>
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-300">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Users className="mr-2 h-6 w-6 text-[#7E5BF6]" />
            Our Founders
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {founders.map((founder, index) => (
              <FounderCard 
                key={founder.id}
                founder={founder}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;