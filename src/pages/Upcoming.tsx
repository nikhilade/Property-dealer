import React, { useState } from "react";
import ViewMore from "../components/section/PropertySection/viewMore";
import BookPropertyModal from "../components/section/PropertySection/BookPropertyModal";
import Banner from "../components/Layout/Banner";
import bannerImage from "../assets/HomeImages/banner-img.avif";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  description: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Pune, Maharashtra",
    price: "₹85,00,000",
    area: "1200 sq.ft",
    description:
      "A modern 2BHK apartment with stunning city views, spacious living room, and world-class amenities including gym, garden, and clubhouse.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Mumbai, Maharashtra",
    price: "₹1,50,00,000",
    area: "3500 sq.ft",
    description:
      "A luxurious villa with private garden, pool, modular kitchen, and home automation system. Perfect for premium lifestyle seekers.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cozy Bungalow",
    location: "Nagpur, Maharashtra",
    price: "₹95,00,000",
    area: "2500 sq.ft",
    description:
      "An elegant bungalow in a quiet neighborhood near schools and hospitals. Ideal for families looking for peace and comfort.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Farmhouse Retreat",
    location: "Lonavala, Maharashtra",
    price: "₹2,50,00,000",
    area: "4000 sq.ft",
    description:
      "Luxury farmhouse surrounded by lush greenery and scenic beauty. Includes outdoor patio, garden, and organic farm area.",
    image:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Classic Heritage Home",
    location: "Jaipur, Rajasthan",
    price: "₹1,70,00,000",
    area: "3100 sq.ft",
    description:
      "A charming Rajasthani-style heritage home featuring traditional architecture and modern interiors for a royal living experience.",
    image:
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Lakeside Mansion",
    location: "Udaipur, Rajasthan",
    price: "₹3,20,00,000",
    area: "4200 sq.ft",
    description:
      "An exclusive mansion with panoramic lake views, premium furnishings, and private access to lakeside garden.",
    image:
      "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    title: "City View Apartment",
    location: "Hyderabad, Telangana",
    price: "₹95,00,000",
    area: "1500 sq.ft",
    description:
      "Stylish 3BHK apartment located in the heart of the city with a breathtaking skyline view and 24/7 security.",
    image:
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    title: "Skyline Penthouse",
    location: "Bangalore, Karnataka",
    price: "₹3,20,00,000",
    area: "2800 sq.ft",
    description:
      "Premium penthouse featuring rooftop access, private lift, modern interiors, and a 360° cityscape view.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    title: "Beach House",
    location: "Goa",
    price: "₹2,00,00,000",
    area: "3300 sq.ft",
    description:
      "Relaxing beach house with oceanfront views, open terrace, and private beach access. Ideal for weekend getaways.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Lakeside Cottage",
    location: "Mahabaleshwar, Maharashtra",
    price: "₹1,80,00,000",
    area: "2400 sq.ft",
    description:
      "Peaceful lakeside cottage with wooden interiors, deck area, and a natural view. Perfect for nature lovers.",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 11,
    title: "Modern House",
    location: "Nashik, Maharashtra",
    price: "₹1,40,00,000",
    area: "2700 sq.ft",
    description:
      "A stunning contemporary house with smart home technology, spacious rooms, and landscaped garden.",
    image:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Green Valley Villa",
    location: "Panchgani, Maharashtra",
    price: "₹1,90,00,000",
    area: "3000 sq.ft",
    description:
      "A premium villa nestled amidst hills with eco-friendly design, solar panels, and a private infinity pool.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
];

const Upcoming: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [bookProperty, setBookProperty] = useState<Property | null>(null);

  return (
    <>
      <Banner
        title="Upcoming Properties"
        subtitle="Explore our exclusive upcoming residential projects across India."
        backgroundImage={bannerImage}
      />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      {/* Header Section */}
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Upcoming Properties
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our exclusive upcoming residential projects across India.
        </p>
      </div> */}

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {property.location}
              </span>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {property.title}
              </h3>
              <p className="text-gray-500 text-sm">{property.area}</p>
              <p className="text-blue-700 font-bold text-lg">{property.price}</p>

              <div className="flex justify-between mt-5">
                <button
                  onClick={() => setSelectedProperty(property)}
                 className="w-[48%] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                  
                >
                  View More
                </button>
                <button
                  onClick={() => setBookProperty(property)}
                  className="w-[48%] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Book Property
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {selectedProperty && (
        <ViewMore
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
      {bookProperty && (
        <BookPropertyModal
          property={bookProperty}
          onClose={() => setBookProperty(null)}
        />
      )}
    </div>
    </>
  );
};

export default Upcoming;



