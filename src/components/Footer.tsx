
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string, path: string, label: string }> = ({ href, path, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label={label}>
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">SID<span className="text-blue-500">GS</span> <span className="text-sm font-light text-slate-300 align-middle">Digital Transformation Experts</span></h3>
            <p className="mt-2 text-slate-400 text-sm">
              Innovating technology solutions for a brighter future. Inspired by industry leaders.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <SocialIcon href="#" label="Facebook" path="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.98h2.79l-.45 2.9h-2.34v7c4.78-.75 8.44-4.9 8.44-9.9C22 6.53 17.5 2.04 12 2.04z" />
              <SocialIcon href="#" label="Twitter" path="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07A4.47 4.47 0 0015.65 4c-2.65 0-4.66 2.33-4.66 5.17 0 .38.04.75.12 1.11C7.87 10.06 4.96 8.58 3.03 6.25c-.4.67-.6 1.44-.6 2.25 0 1.8.92 3.37 2.3 4.3-.79-.03-1.53-.24-2.17-.6v.05c0 2.5 1.78 4.6 4.14 5.06-.44.12-.9.18-1.37.18-.33 0-.66-.03-1-.1 0 .67 1.7 2.34 3.96 2.34-1.78 1.4-4.04 2.23-6.5 2.23-.42 0-.84-.03-1.25-.08C2.98 19.89 5.25 20.5 7.7 20.5c7.34 0 11.76-6.07 11.76-11.76l-.01-.53c.78-.57 1.45-1.28 1.99-2.09z" />
              <SocialIcon href="#" label="LinkedIn" path="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8 15v-7H8v7h3zm-1.5-8.25A1.75 1.75 0 108 8a1.75 1.75 0 001.5 1.75zm5.5 8.25V13c0-1.66-.03-3.8-2.32-3.8C10.43 9.2 10.1 10.99 10.1 13v5h3z" />
            </div>
             <p className="mt-4 text-slate-400 text-sm whitespace-pre-line">
Fortune 9 Buildings, 6th Floor,
Somajiguda, Hyderabad
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} SIDGS Digital Transformation Experts. All rights reserved. Inspired by SIDGS.com.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;