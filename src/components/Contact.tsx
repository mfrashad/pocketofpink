import React from 'react';
import { Mail, Instagram, Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <a href="mailto:kaveesha@pocketofpink.com" className="text-pink-600 hover:text-pink-700 transition-colors">
                    kaveesha@pocketofpink.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Location</div>
                  <div className="text-gray-600">—</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/pocketofpink/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/pocket-of-pink-pop"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://x.com/mypocketofpink"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                X
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-12 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-6">
               <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Info</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Organization Type:</strong> Non-profit, Youth-led</p>
                <p><strong>Founded:</strong> 2024</p>
                 <p><strong>Focus:</strong> Gender justice, empowerment & education</p>
                 <p><strong>Workshop Price:</strong> Contact for pricing</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your school or organization"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                >
                  <option>Workshop Inquiry</option>
                  <option>Volunteer Opportunity</option>
                  <option>Partnership</option>
                  <option>Media Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                Is the module suitable for all children?
              </h4>
              <p className="text-gray-600">
                Yes, it is designed for primary school-aged children, with plans for expansion to other age groups.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                Is POP affiliated with any political or religious group?
              </h4>
              <p className="text-gray-600">
                No, POP is an independent, youth-led non-profit organization.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                How can I bring POP to my school?
              </h4>
              <p className="text-gray-600">
                Contact us via email or social media to arrange workshops or order modules for your institution.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
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