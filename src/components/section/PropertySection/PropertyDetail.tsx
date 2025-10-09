import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Home } from "lucide-react";

export default function PropertyDetails() {
  const { state } = useLocation() as { state: any };
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Property details not found.</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const property = state;

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <Home /> {property.title}
          </h1>

          <p className="text-gray-600 flex items-center gap-2 text-lg mb-3">
            <MapPin className="text-blue-600" />
            {property.location}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <p>
              <span className="font-semibold">City:</span> {property.city}
            </p>
            <p>
              <span className="font-semibold">Area:</span> {property.area}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-blue-600 font-bold">{property.price}</span>
            </p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {property.description}
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Amenities:
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            {property.amenities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="flex justify-between">
            <button
              onClick={() => navigate(-1)}
               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Back
            </button>

            <button
              onClick={() => navigate(`/book-property/${property.id}`)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
