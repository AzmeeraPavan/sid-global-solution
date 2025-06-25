
import React from 'react';
import { TESTIMONIALS_DATA } from '../../constants';
import Card from '../common/Card';
import { UserCircleIcon } from '../../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Hear from businesses who have transformed with our solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <Card key={index} className="flex flex-col p-6 sm:p-8">
              <div className="flex-grow mb-4">
                <svg className="w-10 h-10 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 8A5.333 5.333 0 004 13.333V20a2.667 2.667 0 002.667 2.667h5.333v-8H6.667v-1.333A2.667 2.667 0 019.333 10.667V8zm13.334 0A5.333 5.333 0 0017.333 13.333V20a2.667 2.667 0 002.667 2.667h5.333v-8h-5.333v-1.333a2.667 2.667 0 012.666-2.667V8z"></path>
                </svg>
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-auto flex items-center">
                {testimonial.imageUrl ? (
                  <img src={testimonial.imageUrl} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                ) : (
                  <UserCircleIcon className="w-12 h-12 text-slate-500 mr-4" />
                )}
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
