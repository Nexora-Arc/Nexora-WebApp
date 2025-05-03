import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkshopCard = ({ workshop, index }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 transition-all hover:shadow-xl hover:shadow-purple-900/10 hover:scale-[1.02] group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20 bg-[${workshop.color}] filter blur-xl group-hover:opacity-40 transition-opacity`}></div>
      
      <div className="mb-4 flex items-center">
        <div className="p-2 bg-white/10 rounded-lg mr-3">
          {workshop.icon}
        </div>
        <h4 className="text-xl font-semibold text-white">{workshop.title}</h4>
      </div>
      
      {/* <ul className="space-y-3 mt-6">
        {workshop.points.map((point, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className={`h-5 w-5 text-[${workshop.color}] mr-2 shrink-0 mt-0.5`} />
            <span className="text-gray-300 text-sm">{point}</span>
          </li>
        ))}
      </ul> */}
      
      <div className="mt-8">
        <Link 
          to="/contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className={`inline-flex items-center text-sm font-medium text-[${workshop.color}] hover:underline`}
        >
          Register for this workshop
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCard;