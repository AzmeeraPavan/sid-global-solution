import React from 'react';
import Button from '../common/Button';

const BriefAboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i0.wp.com/sidgs.com/wp-content/uploads/2025/04/Fleet-Optimization-Predictive-Maintenance.png?fit=750%2C750&ssl=1" 
              alt="Fleet Optimization and Predictive Maintenance" 
              className="rounded-lg shadow-xl" 
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              About <span className="text-blue-500">SIDGS Digital Transformation Experts</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              We are a passionate team of technologists, strategists, and innovators dedicated to helping businesses thrive in the digital age. Our mission is to deliver transformative solutions that drive growth, efficiency, and competitive advantage.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              With a focus on cutting-edge technologies and client-centric approaches, we partner with you to turn ambitious goals into reality.
            </p>
            <Button to="/about" variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefAboutSection;
