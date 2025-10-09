import React from "react";

interface ViewMoreModalProps {
  property: any;
  onClose: () => void;
}

const ViewMoreModal: React.FC<ViewMoreModalProps> = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mx-4 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700">
            {property.title}
          </h2>
          <p className="text-gray-600 mt-1">{property.location}</p>
          <p className="text-green-700 font-bold text-lg mt-2">
            {property.price}
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed">
            {property.description}
          </p>

          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMoreModal;
