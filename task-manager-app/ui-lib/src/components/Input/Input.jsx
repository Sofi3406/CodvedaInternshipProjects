import React from 'react';
import { clsx } from 'clsx';

const Input = React.forwardRef(({ 
  label, 
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
        {...props}
      />
      {error && (
        <p id="error-message" className="text-sm text-red-600 mt-1">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
