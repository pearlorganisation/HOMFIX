"use client"
import React from "react";

const PlotSizeFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (size) => {
    setFilters((prevFilters) =>
      prevFilters.includes(size) ? prevFilters.filter((f) => f !== size) : [...prevFilters, size]
    );
  };

  return (
    <div className="border-b pb-2 mb-4">
      <h4 className="text-sm font-semibold">Plot Dimensions (sq ft)</h4>
      <ul className="text-sm text-gray-700 space-y-1">
        {["20x30 sq.ft", "30x40 sq.ft", "30x50 sq.ft"].map((size) => (
          <li key={size}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.includes(size)}
                onChange={() => handleCheckboxChange(size)}
              />
              {size}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlotSizeFilter;
