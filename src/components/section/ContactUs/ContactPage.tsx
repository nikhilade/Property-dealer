import React, { useState } from "react";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [property, setProperty] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [message, setMessage] = useState("");

  // Example property list (can be dynamic)
  const propertyList = [
    "Project A",
    "Project B",
    "Project C",
    "Project D"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation example
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    // Submit logic here
    alert("Message submitted successfully!");
  };

  return (
    <section className="bg-gray-100">
      {/* Banner Heading */}
      {/* <div className="w-full h-48 sm:h-64 md:h-96 relative bg-gray-800 flex items-center justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-bold text-center px-2">
          Contact <span className="text-[#ff6B00]">Us</span>
        </h1>
      </div> */}

      {/* Contact Details and Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Details */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 00.95 1.3h11.7a1 1 0 00.95-1.3L17 13M7 13V6h10v7"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base">+91 7448223355</p>
              <p className="text-sm sm:text-base">+91 9975620750</p>
              <p className="text-sm sm:text-base">+91 7219020750</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m0 0l4 4m0-4l-4-4m12 4a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Mail Us</h3>
              <p className="text-sm sm:text-base">Propertydealer@gmail.com</p>
              <p className="text-sm sm:text-base">info@Propertydealer.in</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a7 7 0 00-14 0v2h5m-5-6V9a7 7 0 0114 0v5m-7 6v-6"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Visit Our Office</h3>
              <p className="text-sm sm:text-base">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
              SEND YOUR <span className="text-[#ff6B00]">MESSAGE</span>
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <select
                className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                required
              >
                <option value="">Property Interested In</option>
                {propertyList.map((p, idx) => (
                  <option key={idx} value={p}>{p}</option>
                ))}
              </select>
              <select
                className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                value={contactTime}
                onChange={(e) => setContactTime(e.target.value)}
                required
              >
                <option value="">Preferred Contact Time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
              <textarea
                placeholder="Message"
                className="border border-gray-300 p-3 rounded w-full h-24 sm:h-32 text-sm sm:text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#ff6B00] text-white w-full sm:w-auto px-6 py-3 rounded font-semibold hover:bg-orange-600 transition text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
