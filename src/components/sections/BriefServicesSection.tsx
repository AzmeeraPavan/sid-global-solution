
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../constants';
import Card from '../common/Card';
import Button from '../common/Button';

const BriefServicesSection: React.FC = () => {
  const featuredServices = SERVICES_DATA.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Core <span className="text-blue-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Driving innovation and efficiency with cutting-edge technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featuredServices.map((service) => (
            <Card key={service.title} className="flex flex-col" hoverEffect>
              <div className="p-6 sm:p-8 flex-grow">
                <div className="flex justify-center sm:justify-start mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 text-center sm:text-left">{service.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-center sm:text-left">{service.description}</p>
              </div>
              <div className="p-6 pt-0 mt-auto text-center sm:text-left">
                 <Link to="/services" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Learn More &rarr;
                 </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button to="/services" variant="primary" size="lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BriefServicesSection;
