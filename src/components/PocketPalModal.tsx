import React from 'react';
import { X } from 'lucide-react';

interface PocketPalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PocketPalModal: React.FC<PocketPalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 scale-95 hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-transform duration-300"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Pocket Pal</h2>
          <p className="text-gray-600 mb-6">
            You're one step away from starting important conversations at home. Every purchase helps us distribute free copies to those in need.
          </p>
          <div className="my-6">
            <style>{`.pp-64CNPCXG8EEZW{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
            <form action="https://www.paypal.com/ncp/payment/64CNPCXG8EEZW" method="post" target="_blank" style={{display:'inline-grid',justifyItems:'center',alignContent:'start',gap:'0.5rem'}}>
              <input className="pp-64CNPCXG8EEZW" type="submit" value="Buy Now" />
              <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
              <section style={{fontSize: '0.75rem'}}> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{height:'0.875rem',verticalAlign:'middle'}}/></section>
            </form>
          </div>
          <p className="text-xs text-gray-500">
            You will be redirected to PayPal to complete your purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PocketPalModal;
