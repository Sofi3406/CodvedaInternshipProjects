import React from 'react';
import { clsx } from 'clsx';

const Card = ({ children, className = '', title, ...props }) => {
  return (
    <div 
      className={clsx(
        'bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 overflow-hidden',
        className
      )}
      role="group"
      aria-labelledby={title ? "card-title" : undefined}
      {...props}
    >
      {title && (
        <div className="p-6 border-b border-gray-100">
          <h3 id="card-title" className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
