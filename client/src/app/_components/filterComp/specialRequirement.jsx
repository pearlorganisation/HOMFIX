"use client"
import React from "react";

const SpecialRequirementsFilter = ({ selectedSpecials, setSelectedSpecials }) => {
  const specialOptions = ["Courtyard", "Swimming Pool", "Gym", "Home Theatre", "Deck", "Lift", "Servant Room"];

  const handleCheckboxChange = (option) => {
    setSelectedSpecials((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="border-b pb-2 mb-4">
      <h4 className="text-sm font-semibold">Special Requirements</h4>
      <ul className="text-sm text-gray-700 space-y-1">
        {specialOptions.map((option) => (
          <li key={option}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedSpecials.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialRequirementsFilter;
