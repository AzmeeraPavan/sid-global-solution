import React from 'react';
import Button from './common/Button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink, imageUrl }) => {
  const bgStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};

  return (
    <div
      className={`relative bg-slate-900 text-white py-20 sm:py-32 md:py-40 ${imageUrl ? 'bg-cover bg-center' : ''}`}
      style={bgStyle}
    >
      {!imageUrl && <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-70"></div>}
      {imageUrl && <div className="absolute inset-0 bg-black opacity-50"></div>}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {title.split(' ').slice(0, 1).join(' ')}
          </span>{' '}
          <span className="block xl:inline text-slate-100">
            {title.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-xl md:max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button to={ctaLink} variant="primary" size="lg">
            {ctaText}
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>

        {/* ✅ See Our Services Link (now rendered correctly) */}
        <div className="mt-6">
          <Link to="/services" className="text-blue-400 hover:underline text-lg">
            See our services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
