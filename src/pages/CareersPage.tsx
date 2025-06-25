import React from 'react';
import { CAREERS_PAGE_POINTS } from '../constants';
import Button from '../components/common/Button';
import Card from '../components/common/Card'; // Optional: if we decide to use cards for sections
import ChatBot from '../components/ChatBot';
const CareersPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Join Our Team & <span className="text-blue-500">Shape the Future</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
          At SIDGS Digital Transformation Experts, we believe in fostering a dynamic and inclusive environment where talent thrives. Explore what makes us a great place to grow your career.
        </p>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {CAREERS_PAGE_POINTS.map((point) => (
          <section key={point.title} className="md:flex md:items-start md:space-x-8 p-6 sm:p-8 bg-slate-800 rounded-lg shadow-lg">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/6 flex justify-center md:justify-start items-center">
              {point.icon}
            </div>
            <div className="md:w-5/6 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{point.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {point.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button to="/careers/refer-a-friend" variant="primary" size="lg">
          Refer a Friend
        </Button>
      </div>

      {/* 👇 New Image Section at Bottom */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Life at SIDGS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          <img
            src="https://sidgs.com/wp-content/uploads/2023/01/MicrosoftTeams-image-61.jpg"
            alt="SIDGS Team 1"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
          <img
            src="https://sidgs.com/wp-content/uploads/2023/01/1200-x-675-LifeAtSIDGS-04.png"
            alt="Office culture"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
          <img
            src="https://sidgs.com/wp-content/uploads/2023/01/IMG_20230123_201340.jpg"
            alt="Collaboration"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      <ChatBot/>
    </div>
  );
};

export default CareersPage;
