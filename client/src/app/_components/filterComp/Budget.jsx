"use client"
import React from "react";

const BudgetFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div className="border-b pb-2 mb-4">
      <h4 className="text-sm font-semibold">House Budget (₹)</h4>
      <p className="text-sm text-gray-600">
        ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
      </p>

      <input
        type="range"
        min="1000000"
        max="10000000"
        step="500000"
        value={priceRange[1]}
        className="w-full cursor-pointer accent-blue-500"
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
      />
    </div>
  );
};

export default BudgetFilter;
