import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  let alertClass = '';

  switch (type) {
    case 'success':
      alertClass = 'bg-dark-blue  font-montserrat text-white';
      break;
    case 'error':
      alertClass = 'bg-[#FF6B6B]  font-montserrat text-white';
      break;
  }

  return (
    <div className={`p-4 rounded ${alertClass}`}>
      {message}
    </div>
  );
};

export default Alert;
