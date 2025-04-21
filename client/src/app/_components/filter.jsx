"use client"

import { useState } from "react"
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaRuler,
  FaSquare,
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa"

const PropertiesPage = () => {
  const [service, setService] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [bedrooms, setBedrooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [selectedDimensions, setSelectedDimensions] = useState([])
  const [selectedAreas, setSelectedAreas] = useState([])
  const [floors, setFloors] = useState(1)
  const [selectedSpecials, setSelectedSpecials] = useState([]) // Fix here for selected specials
  const [Bhk, setBhk] = useState(1)
  const [isDimensionOpen, setIsDimensionOpen] = useState(false)
  const [isAreaOpen, setIsAreaOpen] = useState(false)
  const [isSpecialOpen, setIsSpecialOpen] = useState(false)

  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      price: 2000000,
      bedrooms: 3,
      specials: ["Pool", "Garden"],
      image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/PRASAD-1660978198328.png",
      BHK: 4,
      dimensions: "50x40 sq ft.",
      area: "4000 sq ft",
      Floors: 2
    },
    {
      id: 2,
      name: "Modern Apartment",
      price: 1500000,
      bedrooms: 2,
      specials: ["Balcony"],
      image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/CRN2975-1658560309307.png",
      BHK: 12,
      dimensions: "30x40 sq ft.",
      area: "1200 sq ft",
      Floors: 4
    },
    {
      id: 3,
      name: "Penthouse",
      price: 3500000,
      bedrooms: 4,
      specials: ["Rooftop", "Pool"],
      image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/Mr-1670939799587.png",
      BHK: 2,
      dimensions: "40x60 sq ft.",
      area: "400 sq ft",
      Floors: 5
    },
    {
      id: 4,
      name: "Family House",
      price: 400000,
      bedrooms: 3,
      specials: ["Garage"],
      image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/CRN3340-1659770918769.png",
      BHK: 1,
      dimensions: "60x40 sq ft.",
      area: "4000 sq ft",
      Floors: 5
    },
    {
        id: 5,
        name: "Family House",
        price: 330000,
        bedrooms: 3,
        specials: ["Garage"],
        image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/CRN3340-1659770918769.png",
        BHK: 1,
        dimensions: "60x40 sq ft.",
        area: "4000 sq ft",
        Floors: 5
      }
  ];

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

  const areas = ["4000 sq ft", "1200 sq ft", "400 sq ft"];
  const specials = ["Garage", "Balcony", "Rooftop", "Pool"];

  const handleDimensionChange = (dimension) => {
    setSelectedDimensions((prev) =>
      prev.includes(dimension) ? prev.filter((d) => d !== dimension) : [...prev, dimension],
    );
  };

  const handleAreaChange = (area) => {
    setSelectedAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]));
  };

  const handleSpecial = (special) => {
    setSelectedSpecials((prev) =>
      prev.includes(special) ? prev.filter((s) => s !== special) : [...prev, special]
    );
  };

  const filteredProperties = properties.filter((property) => {
    const matchesService = service ? property.service === service : true;
    const matchesType = propertyType ? property.type === propertyType : true;
    const matchesSearch =
      searchQuery
        ? property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesBedrooms = property.bedrooms >= bedrooms;

    const matchesDimension = selectedDimensions.length === 0 || selectedDimensions.includes(property.dimensions);
    const matchesArea = selectedAreas.length === 0 || selectedAreas.includes(property.area);
    const matchFloors = property.Floors >= floors;
    const matchSpecials = selectedSpecials.length === 0 || selectedSpecials.some((special) => property.specials.includes(special));
    const matchesBhk = property.BHK >= Bhk;
  
    return (
      matchesService &&
      matchesType &&
      matchesSearch &&
      matchesPrice &&
      matchesBedrooms &&

      matchesDimension &&
      matchesArea &&
      matchFloors &&
      matchSpecials &&
      matchesBhk
    );
  });
  

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">Find Your Dream Property</h1>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 mb-8 items-center">
        <select
          className="border p-3 rounded-lg w-full md:w-1/4 bg-gray-50 shadow-sm focus:ring focus:ring-blue-300"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">All Services</option>
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
          <option value="RENT">RENT</option>
        </select>

        <select
          className="border p-3 rounded-lg w-full md:w-1/4 bg-gray-50 shadow-sm focus:ring focus:ring-blue-300"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">All Property Types</option>
          <option value="COMMERCIAL">COMMERCIAL</option>
          <option value="RESIDENTIAL">RESIDENTIAL</option>
        </select>

        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by title or location"
            className="border p-3 rounded-lg w-full pl-12 shadow-sm focus:ring focus:ring-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-[20%_auto] gap-6">
        <aside className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-5 text-gray-800">Filters</h2>

          {/* Price Range */}
          <label className="block text-sm font-medium text-gray-600 mb-2">Price Range</label>
          <div className="relative mb-4">
            <input
              type="range"
              min="0"
              max="2000000"
              step="50000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full accent-blue-500"
            />
            <input
              type="range"
              min="0"
              max="2000000"
              step="50000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-blue-500 mt-2"
            />
            <p className="text-gray-700 text-sm font-medium mt-2">
              Rs. {priceRange[0].toLocaleString()} - Rs.
              {priceRange[1].toLocaleString()}
            </p>
          </div>

          {/* Bedrooms */}
          <label className="block text-sm font-medium text-gray-600 mb-2">Bedrooms</label>
          <div className="flex items-center gap-3 mb-4">
            <button
              className="p-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition"
              onClick={() => setBedrooms((prev) => Math.max(1, prev - 1))}
            >
              –
            </button>
            <span className="text-lg font-semibold text-gray-800">{bedrooms}</span>
            <button
              className="p-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition"
              onClick={() => setBedrooms((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* Dimensions Dropdown */}
          <div className="mb-4 border rounded-lg overflow-hidden">
            <button
              className="w-full p-3 bg-gray-50 flex justify-between items-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsDimensionOpen(!isDimensionOpen)}
            >
              <div className="flex items-center">
                <FaRuler className="mr-2" />
                Dimensions
              </div>
              {isDimensionOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isDimensionOpen && (
              <div className="max-h-40 overflow-y-auto p-3 bg-white border-t">
                {dimensions.map((dimension, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`dimension-${index}`}
                      checked={selectedDimensions.includes(dimension)}
                      onChange={() => handleDimensionChange(dimension)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor={`dimension-${index}`} className="ml-2 text-sm text-gray-700">
                      {dimension}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Area Dropdown */}
          <div className="mb-4 border rounded-lg overflow-hidden">
            <button
              className="w-full p-3 bg-gray-50 flex justify-between items-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsAreaOpen(!isAreaOpen)}
            >
              <div className="flex items-center">
                <FaRuler className="mr-2" />
                Area
              </div>
              {isAreaOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isAreaOpen && (
              <div className="max-h-40 overflow-y-auto p-3 bg-white border-t">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`area-${index}`}
                      checked={selectedAreas.includes(area)}
                      onChange={() => handleAreaChange(area)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor={`area-${index}`} className="ml-2 text-sm text-gray-700">
                      {area}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Specials */}
          <div className="mb-4 border rounded-lg overflow-hidden">
            <button
              className="w-full p-3 bg-gray-50 flex justify-between items-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsSpecialOpen(!isSpecialOpen)}
            >
              <div className="flex items-center">
                <FaSquare className="mr-2" />
                Specials
              </div>
              {isSpecialOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isSpecialOpen && (
              <div className="max-h-40 overflow-y-auto p-3 bg-white border-t">
                {specials.map((special, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`special-${index}`}
                      checked={selectedSpecials.includes(special)}
                      onChange={() => handleSpecial(special)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor={`special-${index}`} className="ml-2 text-sm text-gray-700">
                      {special}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Properties List */}
        <div className="space-y-2 flex flex-row gap-4">
          {
            filteredProperties.map((property) => (
              <div key={property.id} className="bg-white  h-[450px] rounded-lg shadow-lg overflow-hidden ">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{property.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">{property.dimensions}</p>
                  <p className="text-gray-500 text-sm">{property.area}</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">
                    Rs. {property.price.toLocaleString()}
                  </p>
                  <div className="mt-3 flex gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaBed />
                      {property.bedrooms} Beds
                    </span>
             
                    <span className="flex items-center gap-1">
                      <FaMoneyBillWave />
                      {property.specials.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default PropertiesPage
