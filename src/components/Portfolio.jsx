import React from 'react';
import { ports } from '../data/ports'; // Update the path based on where you store your ports file

const Portfolio = () => {
  return (
    <div className="bg-[#0a1828] text-white p-8 pt-20"> {/* Changed text color to white */}
      <h1 className="text-4xl mb-8 text-center">Our Services</h1> {/* Centered the heading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ports.map((service, index) => (
          <div key={index} className="bg-[#162536] p-4 rounded-lg shadow-lg hover:bg-[#2b394f] transition duration-300 ease-in-out">
            <img src={service.image} alt={service.text} className="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer" /> {/* Increased image height */}
            <h2 className="text-xl mb-2">{service.text}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
