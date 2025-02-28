"use client"
import React from "react";

const BedroomsFilter = ({ selectedBedrooms, setSelectedBedrooms }) => {
  const handleCheckboxChange = (bhk) => {
    setSelectedBedrooms((prev) =>
      prev.includes(bhk) ? prev.filter((b) => b !== bhk) : [...prev, bhk]
    );
  };

  return (
    <div className="border-b pb-2 mb-4">
      <h4 className="text-sm font-semibold">Number of Bedrooms</h4>
      <ul className="text-sm text-gray-700 space-y-1">
        {["1 BHK", "2 BHK", "3 BHK", "4+ BHK"].map((bhk) => (
          <li key={bhk}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedBedrooms.includes(bhk)}
                onChange={() => handleCheckboxChange(bhk)}
              />
              {bhk}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BedroomsFilter;
