import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const FounderCard = ({ founder, index }) => {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-purple-900/10 hover:translate-y-[-5px] group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={founder.image} 
          alt={founder.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors">
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors">
              <Twitter className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold">{founder.name}</h4>
        <p className="text-[#DF5BD3] text-sm mb-2">{founder.role}</p>
        <p className="text-gray-400 text-sm">{founder.bio}</p>
      </div>
    </div>
  );
};

export default FounderCard;