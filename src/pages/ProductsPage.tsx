import React from 'react';
import { PRODUCTS_DATA } from '../constants';
import Card from '../components/common/Card';
import ChatBot from '../components/ChatBot';

const ProductsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Our Innovative <span className="text-purple-500">Products</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
          Discover our suite of cutting-edge products designed to accelerate your digital transformation and drive business success.
        </p>
      </div>
      <div className="space-y-12 sm:space-y-16">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id} className="p-6 sm:p-8 md:flex md:items-start md:space-x-8" hoverEffect>
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/5 flex justify-center md:justify-start">
              {product.icon}
            </div>
            <div className="md:w-4/5 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">{product.name}</h2>
              {product.tagline && (
                <p className="text-purple-400 italic text-md sm:text-lg mb-3">{product.tagline}</p>
              )}
              {product.subheading && (
                <p className="text-slate-200 font-semibold text-md sm:text-lg mt-3 mb-2">{product.subheading}</p>
              )}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <ChatBot/>
    </div>
  );
};

export default ProductsPage;