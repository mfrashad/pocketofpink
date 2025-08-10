import React from 'react';
import { Heart, Mail, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">Pocket of Pink</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A youth-led, intersectional feminist non-profit organization empowering children 
              and youth through creative education, advocacy, and art.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-pink-400 transition-colors">About Us</a>
              <a href="#mission" className="block text-gray-300 hover:text-pink-400 transition-colors">Our Mission</a>
              <a href="#team" className="block text-gray-300 hover:text-pink-400 transition-colors">Team</a>
              <a href="#projects" className="block text-gray-300 hover:text-pink-400 transition-colors">Projects</a>
              <a href="#get-involved" className="block text-gray-300 hover:text-pink-400 transition-colors">Get Involved</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:pocketofpink@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>pocketofpink@gmail.com</span>
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/pocketofpink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/pocket-of-pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Pocket of Pink (POP). Non-profit Organization | Kuala Lumpur, Malaysia
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-300 text-sm">
            <p className="mb-2">
              <strong>Media Recognition:</strong> Featured in major Malaysian media outlets
            </p>
            <p>
              <strong>Awards:</strong> KLSCAH Civil Society Award • WikiImpact 100 Changemakers • 
              UNICEF Recognition • Comic Relief US • Children's Rights Innovation Fund
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;