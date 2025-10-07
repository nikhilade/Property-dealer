import { ArrowRight } from "lucide-react";

interface HomeBannerProps{
  onNavigate:(page: string) => void;
}

function HomeBanner({onNavigate}:HomeBannerProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Dream Property Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover exceptional residential and commercial properties with expert guidance every step of the way
            </p>
            <button
              onClick={() => onNavigate("properties")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center space-x-2"
            >
              <span>Browse Properties</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
  )
}

export default HomeBanner