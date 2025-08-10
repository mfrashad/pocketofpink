import React from 'react';
import { X, Heart, Shield } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDonateClick = () => {
    const paypalURL = "https://www.paypal.com/ncp/payment/3YA8C2UK7Y52A";
    window.open(paypalURL, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-8 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7" fill="currentColor" />
            </div>
            <h2 className="text-3xl font-bold">Support Our Mission</h2>
          </div>
          <p className="text-lg opacity-90">
            Your contribution helps us create safer, more empowering spaces for children and youth across Malaysia.
          </p>
        </div>

        <div className="p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Donate Securely with PayPal</h3>
          <p className="text-gray-600 mb-6">
            Click the button below to proceed to the PayPal website, where you can choose your donation amount.
          </p>
          
          <button
            onClick={handleDonateClick}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" alt="PayPal" className="w-6 h-6"/>
            <span>Donate with PayPal</span>
          </button>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center">
              <Shield className="w-4 h-4 mr-1.5" /> Your payment information is secure and encrypted.
            </p>
          </div>
          
          <div className="mt-4 bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              <strong>Tax Receipt:</strong> As a registered non-profit organization, 
              your donation may be tax-deductible. You will receive a receipt from PayPal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;