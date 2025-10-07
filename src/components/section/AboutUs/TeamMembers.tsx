// src/components/TeamMembersForm.tsx
import React, { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string | null;
}

const TeamMembersForm: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || !bio || !preview) {
      alert("⚠️ Please fill all fields & upload an image!");
      return;
    }

    const newMember: TeamMember = {
      id: Date.now(),
      name,
      role,
      bio,
      image: preview,
    };

    setMembers([...members, newMember]);

    setName("");
    setRole("");
    setBio("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {/* Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-8">
        <h2 className="text-xl font-bold mb-3 text-center text-gray-800">
          Add Team Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          <div className="flex flex-col items-center">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-200 shadow-sm"
              />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400 text-xs">
                No Image
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block w-full text-xs text-gray-600
                         file:mr-3 file:py-1 file:px-2
                         file:rounded-full file:border-0
                         file:text-xs file:font-semibold
                         file:bg-gradient-to-r file:from-blue-500 file:to-indigo-600 
                         file:text-white hover:file:opacity-90 cursor-pointer"
            />
          </div>

          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500"
          />

          {/* Role */}
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            className="w-full p-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500"
          />

          {/* Bio */}
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Short bio..."
            rows={3}
            className="w-full p-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white font-medium text-sm shadow-sm hover:opacity-90 transition"
          >
            Add
          </button>
        </form>
      </div>

      {/* Team Members List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-sm p-3 text-center text-xs"
          >
            <img
              src={member.image || ""}
              alt={member.name}
              className="w-16 h-16 mx-auto rounded-full object-cover mb-2 border border-blue-200"
            />
            <h3 className="text-sm font-semibold text-gray-800">{member.name}</h3>
            <p className="text-xs text-blue-600 font-medium">{member.role}</p>
            <p className="text-gray-600 text-xs mt-1 line-clamp-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersForm;
