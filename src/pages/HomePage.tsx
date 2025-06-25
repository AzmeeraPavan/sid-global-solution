
import React from 'react';
import HeroSection from '../components/HeroSection';
import BriefServicesSection from '../components/sections/BriefServicesSection';
import BriefAboutSection from '../components/sections/BriefAboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ClientLogosSection from '../components/sections/ClientLogosSection';
import ChatBot from '../components/ChatBot';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection 
        title="Innovate. Transform. Succeed."
        subtitle="Empowering businesses with cutting-edge technology solutions and strategic insights to navigate the complexities of the digital landscape."
        ctaText="Discover Our Solutions"
        ctaLink="/services"
        imageUrl="https://i0.wp.com/sidgs.com/wp-content/uploads/2025/01/Blog-Post-Picture.jpg?fit=1379%2C788&ssl"
      />
      <BriefServicesSection />
      <BriefAboutSection />
      <TestimonialsSection />
      <ClientLogosSection />
      <ChatBot/>
    </>
  );
};

export default HomePage;