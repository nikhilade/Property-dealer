import { MapPin, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 2,
    title: "Modern Villa",
    location: "Mumbai, Maharashtra",
    price: "₹1,50,00,000",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cozy Studio",
    location: "Nagpur, Maharashtra",
    price: "₹45,00,000",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Family House",
    location: "Delhi, NCR",
    price: "₹95,00,000",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Beachside Villa",
    location: "Goa",
    price: "₹2,10,00,000",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Mountain Retreat",
    location: "Manali, Himachal Pradesh",
    price: "₹1,20,00,000",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Penthouse Suite",
    location: "Bangalore, Karnataka",
    price: "₹3,50,00,000",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
];

function PropertyPage() {
  const navigate = useNavigate();

  const handleBook = (id: number) => {
    navigate(`/book-property/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-14">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Home className="text-slate-900" /> Available Properties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-slate-900">
                {property.title}
              </h2>
              <p className="text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-600" />
                {property.location}
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                {property.price}
              </p>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-slate-900 transition"
                onClick={() => handleBook(property.id)}
              >
                Book Property
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyPage;
