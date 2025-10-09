import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookingForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectName: id || "",
    unitNumber: "",
    paymentPlan: "",
    amountPaid: "",
    paymentMode: "",
    receipt: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Submitted:", formData);
    alert("Booking submitted successfully!");
  };

  const handleBack = () => {
  navigate("/property"); // 👈 or "/properties" — use the exact one in your Routes
};

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-30 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-6xl p-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Property Booking Form
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Customer Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Project Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Project / Property ID
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Unit Number */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Unit Number
            </label>
            <input
              type="text"
              name="unitNumber"
              value={formData.unitNumber}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Payment Plan */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Payment Plan
            </label>
            <select
              name="paymentPlan"
              value={formData.paymentPlan}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Plan</option>
              <option value="Down Payment">Down Payment</option>
              <option value="Installment Plan">Installment Plan</option>
              <option value="Full Payment">Full Payment</option>
            </select>
          </div>

          {/* Amount Paid */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Amount Paid
            </label>
            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Mode of Payment
            </label>
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Mode</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Cheque">Cheque</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Upload Receipt */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Upload Receipt
            </label>
            <input
              type="file"
              name="receipt"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Back & Submit Buttons */}
          <div className="col-span-2 flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={handleBack}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition"
            >
              ← Back
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-10 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
