import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  color: string;
  message: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Riya Sharma",
      role: "Homebuyer",
      initials: "RS",
      color: "bg-blue-600",
      message:
        "PropertyDealer made buying our first home completely stress-free. The team guided us at every step and found us the perfect apartment within our budget.",
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      initials: "AP",
      color: "bg-green-600",
      message:
        "Excellent service! They helped me find the ideal commercial property for my startup. The whole process was transparent and quick. Highly recommended!",
    },
    {
      name: "Priya Nair",
      role: "Property Seller",
      initials: "PN",
      color: "bg-purple-600",
      message:
        "I recently sold my flat through PropertyDealer and got a great deal in just two weeks. The professionalism and attention to detail were impressive.",
    },
    {
      name: "Rahul Verma",
      role: "Investor",
      initials: "RV",
      color: "bg-red-600",
      message:
        "I’ve worked with PropertyDealer on multiple projects and they always deliver the best options. A trustworthy partner for any kind of property investment.",
    },
    {
      name: "Sneha Iyer",
      role: "IT Professional",
      initials: "SI",
      color: "bg-orange-600",
      message:
        "The PropertyDealer team understood my exact requirements and helped me find a great rental apartment near my workplace. Super friendly and efficient service!",
    },
    {
      name: "Karan Mehta",
      role: "Real Estate Developer",
      initials: "KM",
      color: "bg-teal-600",
      message:
        "PropertyDealer has been my go-to partner for sourcing premium plots and builder floors. Their market knowledge is unmatched.",
    },
    {
      name: "Neha Gupta",
      role: "Architect",
      initials: "NG",
      color: "bg-pink-600",
      message:
        "As an architect, I’ve collaborated with PropertyDealer for multiple clients. Their professionalism and commitment make every project smoother and more enjoyable.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Don&apos;t just take our word for it — hear from our satisfied clients
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition h-full flex flex-col justify-between">
                <p className="text-gray-600 mb-6 italic">
                  &quot;{t.message}&quot;
                </p>
                <div className="flex items-center justify-center mt-auto">
                  <div
                    className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {t.initials}
                  </div>
                  <div className="ml-3 text-left">
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
