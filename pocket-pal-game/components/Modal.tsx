
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md text-center transform transition-all scale-100 animate-in fade-in-0 zoom-in-95">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#F7A6C7' }}>{title}</h2>
        <div className="text-gray-600 mb-6">
          {children}
        </div>
        <button
          onClick={onClose}
          className="bg-[#A7E3D8] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Modal;