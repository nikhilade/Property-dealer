import { MapPin, Home, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Layout/Banner";
import bannerImage from "../assets/HomeImages/banner-img.avif";

const properties = [
  {
    id: 2,
    title: "Modern Villa",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    area: "3500 sq. ft",
    price: "₹1,50,00,000",
    description:
      "A luxurious modern villa with private pool, 4 bedrooms, modular kitchen, and premium amenities located in the heart of Mumbai.",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    amenities: ["Private Pool", "Garden", "Garage", "Smart Home Features"],
  },
  {
    id: 3,
    title: "Cozy Studio",
    location: "Nagpur, Maharashtra",
    city: "Nagpur",
    area: "800 sq. ft",
    price: "₹45,00,000",
    description:
      "Compact and comfortable studio apartment ideal for bachelors or small families. Close to shopping and transport.",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    amenities: ["Lift", "24x7 Water", "Power Backup"],
  },
  {
    id: 4,
    title: "Family House",
    location: "Delhi, NCR",
    city: "Delhi",
    area: "2200 sq. ft",
    price: "₹95,00,000",
    description:
      "Spacious family home with 3 bedrooms, 2 balconies, and lush surroundings. Perfect for a growing family.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    amenities: ["Parking", "Balcony", "Security", "Play Area"],
  },
  {
    id: 5,
    title: "Beachside Villa",
    location: "Goa",
    city: "Goa",
    area: "4000 sq. ft",
    price: "₹2,10,00,000",
    description:
      "Beautiful beach-facing villa with ocean views, private lawn, and open terrace. Ideal for vacation homes.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    amenities: ["Sea View", "Private Garden", "Terrace"],
  },
  {
    id: 6,
    title: "Mountain Retreat",
    location: "Manali, Himachal Pradesh",
    city: "Manali",
    area: "2700 sq. ft",
    price: "₹1,20,00,000",
    description:
      "Peaceful retreat located amidst mountains, offering scenic views and premium interiors.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    amenities: ["Fireplace", "Wooden Interior", "Mountain View"],
  },
  {
    id: 7,
    title: "Penthouse Suite",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    area: "3200 sq. ft",
    price: "₹3,50,00,000",
    description:
      "Exclusive penthouse suite with rooftop terrace, panoramic city views, and luxurious design.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    amenities: ["Rooftop Lounge", "Gym", "Private Elevator"],
  },
];

function PropertyPage() {
  const navigate = useNavigate();

  const handleBook = (id: number) => {
    navigate(`/book-property/${id}`);
  };

  const handleViewMore = (property: any) => {
    navigate(`/property/${property.id}`, { state: property });
  };

  return (
    <>
      <Banner
        title="Explore Our Premium Properties"
        subtitle="Discover handpicked properties across India — each offering modern
            design, comfort, and luxury living experiences."
        backgroundImage={bannerImage}
      />
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen mt-14 py-16 px-6">
        {/* --- PAGE HEADER --- */}

        {/* <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-8 h-8 text-blue-700" />
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Explore Our Premium Properties
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover handpicked properties across India — each offering modern
            design, comfort, and luxury living experiences.
          </p>
        </div> */}

        {/* --- PROPERTY GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {property.city}
                </span>

                {/* Overlay Buttons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => handleViewMore(property)}
                    className="bg-white text-blue-700 font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-50 transition"
                  >
                    View More
                  </button>
                  <button
                    onClick={() => handleBook(property.id)}
                    className="bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {property.title}
                </h2>
                <p className="text-gray-500 flex items-center gap-1 text-sm mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  {property.location}
                </p>
                <p className="text-blue-700 font-bold text-lg mb-3">
                  {property.price}
                </p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {property.description}
                </p>

                {/* Amenities Section */}
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-gray-100 text-gray-700 font-medium px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SUBFOOTER --- */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          <Building2 className="inline-block w-5 h-5 mr-2 text-blue-600" />
          <span>
            Find your dream home with{" "}
            <span className="font-semibold text-blue-700">
              PROPERTY DEALER
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default PropertyPage;
