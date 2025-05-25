import React, { useEffect, useRef } from 'react';
import { Code, Cpu, ChevronRight, CheckCircle } from 'lucide-react';
import WorkshopCard from './WorkshopCard';
import { Link } from 'react-router-dom';

const Workshops = () => {
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

  const cProgrammingWorkshops = [
    {
      id: 'c-beginner',
      title: 'ABC TO C: C Language Workshop',
      icon: <Code className="h-8 w-8 text-[#7E5BF6]" />,
      points: [
        'Introduction to C language syntax and structure',
        'Variables, data types, and operators',
        'Control structures (if/else, loops)',
        'Functions and arrays',
        'Basic problem-solving techniques'
      ],
      color: '#7E5BF6'
    },
    {
      id: 'c-advanced',
      title: 'C TO PRO: C Language Workshop',
      icon: <Code className="h-8 w-8 text-[#DF5BD3]" />,
      points: [
        'Pointers and memory management',
        'Structures, unions, and enumerations',
        'File I/O operations',
        'Advanced algorithms and data structures',
        'Project-based learning with practical applications'
      ],
      color: '#DF5BD3'
    }
  ];

  const iotWorkshops = [
    {
      id: 'iot-beginner',
      title: 'Connect Easy: IoT Technology Workshop',
      icon: <Cpu className="h-8 w-8 text-[#7E5BF6]" />,
      points: [
        'Introduction to IoT concepts and architecture',
        'Basics of sensors and actuators',
        'Setting up Arduino/Raspberry Pi environment',
        'Simple IoT project implementation',
        'Understanding connectivity protocols'
      ],
      color: '#7E5BF6'
    },
    {
      id: 'iot-intermediate',
      title: 'Connect Plus - IoT Technology Workshop',
      icon: <Cpu className="h-8 w-8 text-[#DF5BD3]" />,
      points: [
        'Advanced sensor integration',
        'Wireless communication protocols (WiFi, Bluetooth, MQTT)',
        'Data collection and processing techniques',
        'Building IoT dashboards',
        'Creating connected device ecosystems'
      ],
      color: '#DF5BD3'
    },
    {
      id: 'iot-advanced',
      title: 'Connect Apex - IoT Technology Workshop',
      icon: <Cpu className="h-8 w-8 text-white" />,
      points: [
        'Cloud integration for IoT applications',
        'Security and privacy in IoT systems',
        'Machine learning for IoT data analysis',
        'Industrial IoT applications and protocols',
        'Developing complete IoT solutions'
      ],
      color: 'white'
    }
  ];

  return (
    <section id="workshops" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Specialized Workshops</h2>
          <p className="text-gray-300">
            Comprehensive, hands-on training programs designed to equip you with the skills 
            needed to excel in today's tech landscape.
          </p>
        </div>

        <div className="mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-100">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Code className="mr-2 h-6 w-6 text-[#7E5BF6]" />
            C Programming Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cProgrammingWorkshops.map((workshop, index) => (
              <WorkshopCard 
                key={workshop.id}
                workshop={workshop}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Cpu className="mr-2 h-6 w-6 text-[#DF5BD3]" />
            IoT Technology Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {iotWorkshops.map((workshop, index) => (
              <WorkshopCard 
                key={workshop.id}
                workshop={workshop}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-300">
          <Link 
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Register for a Workshop
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Workshops;