import React from 'react';
import { SERVICES_DATA } from '../constants';
import Card from '../components/common/Card';
import IndustriesServedSection from '../components/sections/IndustriesServedSection'; // Import the new section
import ChatBot from '../components/ChatBot';


const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Our Comprehensive <span className="text-blue-500">Tech Solutions</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
          We offer a wide array of services designed to empower your business, enhance efficiency, and drive innovation. Explore how our expertise can help you achieve your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {SERVICES_DATA.map((service) => (
          <Card key={service.title} className="flex flex-col p-6 sm:p-8" hoverEffect>
            <div className="flex justify-center sm:justify-start mb-4">{service.icon}</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 text-center sm:text-left">{service.title}</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 text-center sm:text-left flex-grow">
              {service.description}
            </p>
            {service.details && (
                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    {service.details}
                 </p>
            )}
          </Card>
        ))}
      </div>
      
      {/* Add the Industries Served Section below the services grid */}
      <IndustriesServedSection />
    </div>
  );
};

export default ServicesPage;