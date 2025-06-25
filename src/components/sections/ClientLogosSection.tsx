import React from 'react';
import { CLIENTS_DATA } from '../../constants';

const ClientLogosSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trusted by World's <span className="text-blue-500">Best Brands</span>
          </h2>
        </div>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
        >
          {CLIENTS_DATA.map((client) => (
            <div
              key={client.name}
              className="p-6 bg-slate-700 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-slate-600 hover:shadow-lg flex flex-col text-center sm:text-left"
              role="listitem"
              aria-labelledby={`client-name-${client.name.replace(/\s+/g, '-')}`}
            >
              <h3 
                id={`client-name-${client.name.replace(/\s+/g, '-')}`}
                className="text-lg sm:text-xl font-semibold text-blue-400 mb-2"
              >
                {client.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;