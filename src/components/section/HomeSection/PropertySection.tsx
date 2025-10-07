import Residential from "../../../assets/HomeImages/residential.avif";
import Commercial from "../../../assets/HomeImages/commercial.avif";
import Plots from "../../../assets/HomeImages/plots.avif";

function PropertySection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Property Types
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of properties to find the perfect match for your needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Residential */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer border-t-4 border-transparent hover:border-blue-500 group">
            <div className="flex items-center p-5 space-x-5">
              <div className="relative flex-1 w-full h-28 rounded-lg overflow-hidden">
                <img
                  src={Residential}
                  alt="Residential"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition">
                  Residential
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Houses, apartments, and condos for your dream home
                </p>
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer border-t-4 border-transparent hover:border-emerald-500 group">
            <div className="flex items-center p-5 space-x-5">
              <div className="relative flex-1 w-full h-28 rounded-lg overflow-hidden">
                <img
                  src={Commercial}
                  alt="Commercial"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition">
                  Commercial
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Office spaces and business properties
                </p>
              </div>
            </div>
          </div>

          {/* Land & Plots */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer border-t-4 border-transparent hover:border-amber-500 group">
            <div className="flex items-center p-5 space-x-5">
              <div className="relative flex-1 w-full h-28 rounded-lg overflow-hidden">
                <img
                  src={Plots}
                  alt="Land & Plots"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-amber-600 transition">
                  Land & Plots
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Prime land for development and investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySection;
