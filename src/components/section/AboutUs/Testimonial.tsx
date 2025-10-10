import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Home Buyer",
    message:
      "Finding my dream home seemed impossible until I met this team. They understood my needs perfectly and guided me through every step. Highly professional and honest — truly the best property dealers in town!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Real Estate Investor",
    message:
      "The PropertyDealer team helped me identify excellent investment opportunities. Their market knowledge and transparency gave me full confidence. I’ve already recommended them to my friends!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Apartment Owner",
    message:
      "I was looking to sell my flat quickly and at a fair price. They handled everything seamlessly — from listing to closing the deal. The process was stress-free and efficient!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 4,
    name: "Neha & Arjun Patel",
    role: "First-time Buyers",
    message:
      "As first-time buyers, we had so many questions, but the team was patient and informative throughout. We’re now living in our beautiful new apartment — all thanks to them!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Rajesh Gupta",
    role: "Commercial Property Owner",
    message:
      "Excellent service and deep market knowledge! They leased my shop space within a week. Highly recommended for all real estate solutions.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 6,
    name: "Simran Kaur",
    role: "Land Buyer",
    message:
      "Very cooperative and transparent team. They helped me find the perfect plot for my new home. Truly trustworthy property experts!",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 sm:px-10 lg:px-16 relative">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear from our happy clients who found their dream properties with us.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-gray-100 h-full flex flex-col items-center text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full mb-4 object-cover ring-4 ring-orange-100"
              />
              <p className="text-gray-600 italic mb-5 line-clamp-6">
                “{t.message}”
              </p>
              <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
              <p className="text-sm text-orange-600 font-medium">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrow button styling fix */}
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #ff6b00;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #ff6b00;
          color: white;
        }
        .swiper-pagination-bullet {
          background: #ff6b00;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
