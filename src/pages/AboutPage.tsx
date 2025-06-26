
import React from 'react';
import { TEAM_MEMBERS_DATA, LOCATIONS_DATA, MapPinIcon, LOCATION_ICON_CLASS } from '../constants';
import Card from '../components/common/Card';
import ChatBot from '../components/ChatBot';
const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          About <span className="text-blue-500">SIDGS Digital Transformation Experts</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
          We are a forward-thinking technology partner committed to delivering innovative solutions and exceptional value to our clients worldwide.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Our <span className="text-blue-500">Mission</span></h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            To empower businesses with transformative technology solutions, fostering innovation, efficiency, and sustainable growth. We strive to be a trusted partner, guiding our clients through the complexities of the digital landscape.
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-8 mb-6">Our <span className="text-blue-500">Vision</span></h2>
          <p className="text-slate-300 leading-relaxed">
            To be a global leader in technology services, recognized for our expertise, commitment to quality, and ability to drive positive change through innovation. We envision a future where technology seamlessly integrates with business to create limitless possibilities.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://sidgs.com/wp-content/uploads/2023/02/about_v31.jpg"
            alt="Innovative workspace" 
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Our <span className="text-blue-500">Core Values</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Innovation', 'Integrity', 'Client Focus', 'Collaboration', 'Excellence'].map(value => (
            <Card key={value} className="p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{value}</h3>
              <p className="text-slate-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Meet Our <span className="text-blue-500">Leadership</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS_DATA.map((member) => (
            <Card key={member.name} className="text-center p-6" hoverEffect>
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-blue-400 mb-2">{member.role}</p>
              {member.bio && <p className="text-sm text-slate-400">{member.bio}</p>}
            </Card>
          ))}
        </div>
      </section>

      {/* History Section - Placeholder */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our <span className="text-blue-500">Journey</span></h2>
        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Founded with a vision to revolutionize the tech landscape, SIDGS Digital Transformation Experts has steadily grown, driven by a passion for innovation and a commitment to our clients. From humble beginnings, we've expanded our expertise and reach, consistently delivering impactful solutions. Our journey is one of continuous learning, adaptation, and unwavering dedication to excellence. (Further details about history would go here).
        </p>
      </section>

      {/* Global Locations Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-blue-500">Global Locations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS_DATA.map((location) => (
            <Card key={location.name} className="p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <MapPinIcon className={LOCATION_ICON_CLASS} aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">{location.name}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line flex-grow">
                {location.address}
              </p>
            </Card>
          ))}
        </div>
      </section>
      <ChatBot/>
    </div>
  );
};

export default AboutPage;