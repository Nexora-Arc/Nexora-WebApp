import React from 'react';
import { Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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
            <Link to={founder.linkdin} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors">
              <Linkedin className="h-4 w-4 text-white" />
            </Link>
            <Link to={founder.xtwitter} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors">
              <FaXTwitter className="h-4 w-4 text-white" />
            </Link>
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