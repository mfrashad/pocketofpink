import React, { useState } from 'react';
import { X, Heart, CreditCard, Users, BookOpen, Shield } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const impactExamples = [
    { amount: 25, impact: "Provides one Express to Empower activity book to a child" },
    { amount: 100, impact: "Sponsors educational materials for a small workshop" },
    { amount: 250, impact: "Supports a comprehensive school workshop for 50+ students" },
    { amount: 500, impact: "Helps develop new educational content and resources" }
  ];

  if (!isOpen) return null;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || (customAmount ? parseInt(customAmount) : 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission here
    alert('Thank you for your donation! This would redirect to a payment processor in a real implementation.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
            Help us create safer, more empowering spaces for children and youth across Malaysia.
          </p>
        </div>

        <div className="p-8">
          {/* Donation Amounts */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Donation Amount</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                    selectedAmount === amount
                      ? 'border-pink-500 bg-pink-50 text-pink-600'
                      : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                  }`}
                >
                  RM{amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="Custom amount (RM)"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Impact Examples */}
          {getCurrentAmount() > 0 && (
            <div className="mb-8 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 text-pink-600 mr-2" />
                Your Impact
              </h4>
              {impactExamples
                .filter(example => getCurrentAmount() >= example.amount)
                .slice(-1)
                .map((example, index) => (
                  <p key={index} className="text-gray-700">
                    <strong>RM{getCurrentAmount()}</strong> {example.impact}
                  </p>
                ))}
            </div>
          )}

          {/* Donor Information Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Donor Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <textarea
                placeholder="Optional message or dedication"
                value={donorInfo.message}
                onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all mt-4"
                rows={3}
              />
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <CreditCard className="w-5 h-5 text-pink-600 mr-2" />
                Payment Method
              </h4>
              <div className="bg-gray-50 rounded-xl p-4 text-center text-gray-600">
                <p className="mb-2">Secure payment processing</p>
                <p className="text-sm">Credit Card • Online Banking • Digital Wallets</p>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Tax Receipt:</strong> As a registered non-profit organization, 
                your donation may be tax-deductible. You will receive a receipt for your records.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={getCurrentAmount() === 0 || !donorInfo.name || !donorInfo.email}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              <span>Donate RM{getCurrentAmount()} Now</span>
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>🔒 Your payment information is secure and encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;