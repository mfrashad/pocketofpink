import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V9a5 5 0 0 0 5-5" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get involved or bring our workshops to your community? 
            We'd love to hear from you!
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            {/* Email Section */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                <Mail className="w-5 h-5 text-pink-600" />
                <a 
                  href="mailto:kaveesha@pocketofpink.com" 
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  kaveesha@pocketofpink.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/pocketofpink/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pocket-of-pink-pop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://x.com/mypocketofpink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </a>
                <a
                  href="https://www.tiktok.com/@pocketofpink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <TiktokIcon className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Quick Info</h4>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-semibold text-gray-800">Organization:</span>
                <span className="text-gray-600 ml-2">Non-profit, Youth-led</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-semibold text-gray-800">Founded:</span>
                <span className="text-gray-600 ml-2">2024</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-semibold text-gray-800">Focus:</span>
                <span className="text-gray-600 ml-2">Gender justice, empowerment & education</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-semibold text-gray-800">Workshop Price:</span>
                <span className="text-gray-600 ml-2">Contact for pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                Is the module suitable for all children?
              </h4>
              <p className="text-gray-600">
                Yes, it is designed for primary school-aged children, with plans for expansion to other age groups.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                Is POP affiliated with any political or religious group?
              </h4>
              <p className="text-gray-600">
                No, POP is an independent, youth-led non-profit organization.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                How can I bring POP to my school?
              </h4>
              <p className="text-gray-600">
                Contact us via email or social media to arrange workshops or order modules for your institution.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                What languages is the module available in?
              </h4>
              <p className="text-gray-600">
                Currently available in English, with Bahasa Malaysia version in development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;