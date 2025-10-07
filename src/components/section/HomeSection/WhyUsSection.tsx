import { Search, MapPin, Phone, Building } from "lucide-react";

function WhyUsSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose PropertyDealer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide exceptional service and expertise to make your property
            journey smooth and successful
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition duration-300">
                <Search className="w-7 h-7 text-blue-600 group-hover:scale-110 transform transition duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                Easy Search
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced filters to find exactly what you're looking for
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition duration-300">
                <MapPin className="w-7 h-7 text-green-600 group-hover:scale-110 transform transition duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition duration-300">
                Prime Locations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Properties in the best neighborhoods and areas
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition duration-300">
                <Phone className="w-7 h-7 text-purple-600 group-hover:scale-110 transform transition duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team is always ready to assist you
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition duration-300">
                <Building className="w-7 h-7 text-orange-600 group-hover:scale-110 transform transition duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition duration-300">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All properties are verified and authentic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
