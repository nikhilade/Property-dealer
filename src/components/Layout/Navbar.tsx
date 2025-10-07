import { useState } from "react";
import { Building } from "lucide-react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage?: string;
}

interface MenuItem {
  name: string;
  id: string;
}

function Navbar({ onNavigate, activePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { name: "Home", id: "home" },
    { name: "Upcoming", id: "upcoming" },
    { name: "Property Listings", id: "properties" },
    { name: "Contact Us", id: "contact" },
    { name: "About Us", id: "about" },
  ];

  return (
    <nav className="bg-slate-900 shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <Building className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">PropertyDealer</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  activePage === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full left-0 top-16 px-2 pt-2 pb-3 space-y-1 bg-slate-900 z-40">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activePage === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
