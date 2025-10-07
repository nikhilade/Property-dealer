import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookingForm: React.FC = () => {
  const { id } = useParams();
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
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0] || null;
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

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Booking Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Project / Property ID
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Unit Number
            </label>
            <input
              type="text"
              name="unitNumber"
              value={formData.unitNumber}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Payment Plan
            </label>
            <select
              name="paymentPlan"
              value={formData.paymentPlan}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Plan</option>
              <option value="Down Payment">Down Payment</option>
              <option value="Installment Plan">Installment Plan</option>
              <option value="Full Payment">Full Payment</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Amount Paid
            </label>
            <input
              type="number"
              name="amountPaid"
              value={formData.amountPaid}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Mode of Payment
            </label>
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Mode</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Cheque">Cheque</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Upload Receipt
            </label>
            <input
              type="file"
              name="receipt"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
