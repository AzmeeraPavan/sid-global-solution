
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  IconLeft,
  IconRight,
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-200 ease-in-out';
  
  let sizeStyle = '';
  switch (size) {
    case 'sm': sizeStyle = 'px-3 py-1.5 text-xs sm:text-sm'; break;
    case 'md': sizeStyle = 'px-4 py-2 text-sm sm:text-base'; break;
    case 'lg': sizeStyle = 'px-6 py-3 text-base sm:text-lg'; break;
  }

  let variantStyle = '';
  switch (variant) {
    case 'primary': variantStyle = 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'; break;
    case 'secondary': variantStyle = 'bg-slate-700 hover:bg-slate-600 text-slate-100 focus:ring-slate-500'; break;
    case 'outline': variantStyle = 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-400'; break;
    case 'ghost': variantStyle = 'bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-400'; break;
  }

  if (disabled) {
    variantStyle = 'bg-slate-500 text-slate-300 cursor-not-allowed';
  }

  const combinedClassName = `${baseStyle} ${sizeStyle} ${variantStyle} ${className}`;

  const content = (
    <>
      {IconLeft && <span className="mr-2">{IconLeft}</span>}
      {children}
      {IconRight && <span className="ml-2">{IconRight}</span>}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
