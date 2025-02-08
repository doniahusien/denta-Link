import React, { useState } from 'react';

import { EyeOff } from 'lucide-react';
const Input = ({ type, placeholder, name, value, onChange, className = "", isPasswordField = false }) => {
  const [showText, setShowText] = useState(false);

  const toggleShowText = () => setShowText(!showText);

  return (
    <div className="relative">
      <input
        type={isPasswordField && !showText ? 'password' : `${type}`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded-lg p-2 placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 outline-none ${className}`}
      />
      {isPasswordField && (
        <button
          type="button"
          onClick={toggleShowText}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showText ? '🙈' :<EyeOff className="w-5"/>}
        </button>
      )}
    </div>
  );
};

export default Input;
