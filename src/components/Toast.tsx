import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  variant: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, variant, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const variantStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    <div
      className={`fixed z-50 bottom-5 right-5 px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 ${variantStyles[variant]}`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Toast;
