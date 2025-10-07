import { Building, MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">PropertyDealer</span>
            </div>
            <p className="text-sm">
              Your trusted partner in finding the perfect property.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@propertydealer.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Real Estate Ave, City</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 PropertyDealer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
