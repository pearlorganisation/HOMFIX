import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const FilterSidebar = ({
  priceRange,
  setPriceRange,
  selectedBedrooms,
  setSelectedBedrooms,
  selectedSpecials,
  setSelectedSpecials,
  selectedBhk,
  setSelectedBhk,
  selectDimension,
  setSelectedDimension,
  selectedArea,
  setSelectedArea,
}) => {
  const [isOpen, setIsOpen] = useState({
    bedrooms: false,
    bhk: false,
    specials: false,
    dimensions: false,
    area: false,
  });

  const toggleDropdown = (filter) => {
    setIsOpen((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handleBedroomChange = (bedroom) => {
    setSelectedBedrooms((prev) =>
      prev.includes(bedroom)
        ? prev.filter((b) => b !== bedroom)
        : [...prev, bedroom]
    );
  };

  const handleSpecialsChange = (special) => {
    setSelectedSpecials((prev) =>
      prev.includes(special)
        ? prev.filter((s) => s !== special)
        : [...prev, special]
    );
  };

  const handleBhkChange = (bhk) => {
    setSelectedBhk((prev) =>
      prev.includes(Number(bhk))
        ? prev.filter((b) => b !== Number(bhk))
        : [...prev, Number(bhk)]
    );
  };

  // const handleDimensionChange = (dimension) => {
  //   setSelectedDimension(dimension); // Allow only one selection at a time
  // };

  // const handleAreaSelection = (area) => {
  //   setSelectedArea(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]);
  // };

  // const [isOpen, setIsOpen] = useState(false);

  const dimensions = [
    "20x20 sq ft.",
    "20x30 sq ft.",
    "20x40 sq ft.",
    "20x50 sq ft.",
    "20x60 sq ft.",
    "30x20 sq ft.",
    "30x30 sq ft.",
    "30x40 sq ft.",
    "30x50 sq ft.",
    "30x60 sq ft.",
    "30x80 sq ft.",
    "40x20 sq ft.",
    "40x30 sq ft.",
    "40x40 sq ft.",
    "40x60 sq ft.",
    "50x20 sq ft.",
    "50x30 sq ft.",
    "50x40 sq ft.",
    "50x50 sq ft.",
    "50x80 sq ft.",
    "60x20 sq ft.",
    "60x30 sq ft.",
    "60x40 sq ft.",
    "80x30 sq ft.",
    "80x50 sq ft.",
  ];
  const areas = ["4000 sqft", "1200 sqft", "400 sqft"];

  const handleDimensionChange = (value) => {
    setSelectedDimension((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleAreaChange = (value) => {
    setSelectedArea((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  return (
    <aside className="w-1/4 p-4 bg-white shadow-lg rounded-md">
      <h3 className="text-lg font-bold mb-2">Filters</h3>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Price Range: ${priceRange[0].toLocaleString()}
        </label>
        <input
          type="range"
          min="1000000"
          max="50000000"
          step="50000"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          className="w-full"
        />
      </div>

      {/* Bedrooms Filter - Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => toggleDropdown("bedrooms")}
          className="w-full bg-gray-200 p-2 rounded-md"
        >
          Bedrooms {isOpen.bedrooms ? "▲" : "▼"}
        </button>
        {isOpen.bedrooms && (
          <div className="border p-2 mt-1 rounded-md">
            {[1, 2, 3, 4].map((bed) => (
              <label key={bed} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBedrooms.includes(bed)}
                  onChange={() => handleBedroomChange(bed)}
                  className="mr-2"
                />
                {bed} Bedrooms
              </label>
            ))}
          </div>
        )}
      </div>

      {/* BHK Filter - Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => toggleDropdown("bhk")}
          className="w-full bg-gray-200 p-2 rounded-md flex  flex-row justify-between"
        >
          BHK {isOpen.bhk ?    <RiArrowDropUpLine size={28} /> :     <RiArrowDropDownLine size={28} />}
        </button>
        {isOpen.bhk && (
          <div className="border p-2 mt-1 rounded-md">
            {[1, 2, 3, 4].map((bhk) => (
              <label key={bhk} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBhk.includes(bhk)}
                  onChange={() => handleBhkChange(bhk)}
                  className="mr-2"
                />
                {bhk} BHK
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Special Features Filter - Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => toggleDropdown("specials")}
          className="w-full bg-gray-200 p-2 rounded-md flex-row flex  justify-between" 
        >
          Special Features {isOpen.specials ?     <RiArrowDropUpLine size={28} />:    <RiArrowDropDownLine size={28} />}
        </button>
        {isOpen.specials && (
          <div className="border p-2 mt-1 rounded-md">
            {["Pool", "Garden", "Balcony", "Rooftop", "Garage"].map(
              (special) => (
                <label key={special} className="flex items-center ">
                  <input
                    type="checkbox"
                    checked={selectedSpecials.includes(special)}
                    onChange={() => handleSpecialsChange(special)}
                    className="mr-2"
                  />
                  {special}
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Dimensions Filter - Dropdown */}
      <div>
        {/* Dimensions Filter - Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => toggleDropdown("dimensions")}
            className="w-full bg-gray-200 hover:bg-gray-300 p-2 rounded-md flex justify-between"
          >
            Dimensions <span>{isOpen.dimensions ? "▲" : "▼"}</span>
          </button>
          {isOpen.dimensions && (
            <select
              value={selectDimension}
              onChange={(e) => handleDimensionChange(e.target.value)}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option value="">Select Dimension</option>
              {[
                "20x20 sq ft.",
                "20x30 sq ft.",
                "20x40 sq ft.",
                "20x50 sq ft.",
                "20x60 sq ft.",
                "30x20 sq ft.",
                "30x30 sq ft.",
                "30x40 sq ft.",
                "30x50 sq ft.",
                "30x60 sq ft.",
                "30x80 sq ft.",
                "40x20 sq ft.",
                "40x30 sq ft.",
                "40x40 sq ft.",
                "40x60 sq ft.",
                "50x20 sq ft.",
                "50x30 sq ft.",
                "50x40 sq ft.",
                "50x50 sq ft.",
                "50x80 sq ft.",
                "60x20 sq ft.",
                "60x30 sq ft.",
                "60x40 sq ft.",
                "80x30 sq ft.",
                "80x50 sq ft.",
              ].map((dim) => (
                <option key={dim} value={dim}>
                  {dim}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Area Filter - Dropdown */}
        <div className="mb-4">
          {/* <button
            onClick={() => toggleDropdown("area")}
            className="w-full bg-gray-200 hover:bg-gray-300 p-2 rounded-md flex justify-between"
          > */}
          {/* Area <span>{isOpen.area ? "▲" : "▼"}</span> */}
          {/* area */}
          {/* </button> */}
          {/* {isOpen.area && (
            <select
              value={selectedArea}
              onChange={(e) => handleAreaSelection(e.target.value)}
              className=" border  mt-1 w-full bg-gray-200 hover:bg-gray-300 p-2 rounded-md "
            >
              <option value=""> Area</option>
              {["400 sqft", "600 sqft", "800 sqft"].map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          )} */}
        </div>


 
        <div className="mt-4">
          {/* <h3 className="font-semibold mb-2">Select Plot</h3> */}
          <div className="relative">
            <button
              className="border  w-full text-left bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <div className="flex flex-row justify-between bg-gray-200 hover:bg-gray-300 p-2 rounded-md">
                  <div className="">Plot Dimensions (sq ft)</div>
                  <RiArrowDropUpLine size={28} />
                </div>
              ) : (
                <div className="flex flex-row justify-between bg-gray-200 hover:bg-gray-300 p-2 rounded-md">
                  <div>Plot Dimensions (sq ft)</div>
                  <RiArrowDropDownLine size={28} />
                </div>
              )}
            </button>

            {isOpen && (
              <div className="absolute left-0 w-full bg-white border p-3 mt-1 shadow-lg">
                {/* Dimensions */}
                <div className="mb-3">
                  <h4 className="font-semibold mb-1">Dimensions</h4>
                  {dimensions.map((dim) => (
                    <label key={dim} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={dim}
                        checked={selectDimension.includes(dim)}
                        onChange={() => handleDimensionChange(dim)}
                      />
                      <span>{dim}</span>
                    </label>
                  ))}
                </div>

                {/* Areas */}
                <div>
                  <h4 className="font-semibold mb-1">Area</h4>
                  {areas.map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={area}
                        checked={selectedArea.includes(area)}
                        onChange={() => handleAreaChange(area)}
                      />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
