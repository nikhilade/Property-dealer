import React from "react";
import Banner from "../components/Layout/Banner";
import bannerImage from "../assets/HomeImages/banner-img.avif";

const Upcoming: React.FC = () => {
  const properties = [
    { id: 1, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", title: "Luxury Villa", price: "₹1.2 Cr" },
    { id: 2, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", title: "Modern Apartment", price: "₹85 Lakh" },
    { id: 3, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Cozy Bungalow", price: "₹1 Cr" },
    { id: 4, image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", title: "Farmhouse Retreat", price: "₹2.5 Cr" },
    { id: 5, image:  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Skyline Penthouse", price: "₹3.2 Cr" },
    { id: 10, image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80", title: "Modern House", price: "₹1.4 Cr" },
    { id: 11, image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80", title: "Beach House", price: "₹2 Cr" },
    { id: 12, image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Lakeside Cottage", price: "₹1.8 Cr" },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cozy Mountain Cottage",
      price: "₹1.9 Cr",
      location: "Lonavala, Maharashtra",
    },

    {
      id: 6,
      image:
        "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Classic Heritage Home",
      price: "₹1.7 Cr",
      location: "Jaipur, Rajasthan",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lakeside Mansion",
      price: "₹3.2 Cr",
      location: "Udaipur, Rajasthan",
    },
     {
      id: 8,
      image:
        "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "City View Apartment",
      price: "₹95 Lakh",
      location: "Hyderabad, Telangana",
    },
  ];

  return (
    <>
      <Banner
        title="Upcoming Properties"
        subtitle="Explore our exclusive upcoming residential projects across India."
        backgroundImage={bannerImage}
      />
    <div className="p-8 mt-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-600">
                {property.title}
              </h3>
              <p className="text-green-600 font-bold mt-1 text-base">
                {property.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Upcoming;
