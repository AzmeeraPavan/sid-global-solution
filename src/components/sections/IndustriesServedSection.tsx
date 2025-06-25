import React from 'react';
import { INDUSTRIES_DATA } from '../../constants';
import Card from '../common/Card';

const IndustriesServedSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 mt-12 sm:mt-16 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Industries <span className="text-blue-500">We Serve</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Applying our deep expertise across a diverse range of sectors to deliver impactful results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {INDUSTRIES_DATA.map((industry) => (
            <Card key={industry.id} className="flex flex-col overflow-hidden" hoverEffect>
              <img 
                src={industry.imageUrl} 
                alt={industry.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed flex-grow">
                  {industry.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServedSection;