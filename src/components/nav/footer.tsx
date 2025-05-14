import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dc2f02] to-orange-500">
              Namevise
            </h3>
            <p className="text-gray-300">
              Building the future with innovative solutions that matter.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-700 hover:bg-amber-500 transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-400 transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-700 hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#dc2f02]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Privacy policy", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#dc2f02] transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#dc2f02]">Categories</h4>
            <ul className="space-y-2">
              {["Gold", "Platinum", "Premium"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#dc2f02] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#dc2f02]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#dc2f02] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business Ave, Suite 456, San Francisco, CA
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#dc2f02] mr-3" />
                <a
                  href="mailto:contact@namevise.com"
                  className="text-gray-300 hover:text-[#dc2f02] transition-colors"
                >
                  contact@nameise.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#dc2f02] mr-3" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-[#dc2f02] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-xl p-6 mb-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#dc2f02] rounded-full opacity-10"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-400 rounded-full opacity-10"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dc2f02]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-amber-500/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
            © {new Date().getFullYear()} Namevise. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-[#dc2f02] transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Floating CTA (optional) */}
      <div className="fixed bottom-6 right-6">
        <button className="p-4 bg-amber-500 text-white rounded-full shadow-xl hover:bg-amber-600 transition-all hover:scale-110 animate-bounce">
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
