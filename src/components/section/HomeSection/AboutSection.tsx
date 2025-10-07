interface AboutProps{
    onNavigate:(page: string) => void;
}

function AboutSection({onNavigate}:AboutProps) {
  return (
    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About PropertyDealer
              </h2>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the real estate industry, PropertyDealer has helped thousands of clients find their perfect home or investment property.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in residential and commercial properties, offering personalized service and expert market knowledge to ensure you make the best decision.
              </p>
              <button
                onClick={() => onNavigate("about")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Learn More About Us
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-slate-800 rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">2000+</div>
                  <div className="text-gray-200">Properties Sold</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1500+</div>
                  <div className="text-gray-200">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-gray-200">Active Listings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutSection