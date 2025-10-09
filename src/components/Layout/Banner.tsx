import { ArrowRight } from "lucide-react";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  backgroundImage: string;
  onButtonClick?: () => void;
}

function Banner({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  onButtonClick,
}: BannerProps) {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center space-x-2 mx-auto"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
}

export default Banner;
