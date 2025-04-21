"use client";
import React, { useState } from "react";
import FilterSidebar from "../Sidebar/sidebar";
import FloorPlanCard from "../filterComp/floorPLanCard";
import Hersosection from "../filterComp/Hersosection";

// Mock Data
const floorPlans = [
  {
    id: 1,
    name: "Luxury Villa",
    price: 2000000,
    bedrooms: 3,
    specials: ["Pool", "Garden"],
    image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/PRASAD-1660978198328.png",
    BHK:4,
    dimensions: "50x40 sq ft.",
    area: "4000 sqft",
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
    area: "1200 sqft",
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
    area: "400 sqft",
    Floors: 5 
  },
  {
    id: 4,
    name: "Family House",
    price: 40000000,
    bedrooms: 3,
    specials: ["Garage"],
    image: "https://design-platform-bucket.s3.ap-south-1.amazonaws.com/snapshots/CRN3340-1659770918769.png",
    BHK: 1,
    dimensions: "60x80 sq ft.",
    area: "4000 sqft",
    Floors: 5 

  }

];


const FloorPlansPage = () => {
  const [filters, setFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([1000000, 5000000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedSpecials, setSelectedSpecials] = useState([]);
  const [selectedBhk, setSelectedBhk] = useState([]);
const[selectDimension,setSelectedDimension]=useState([])
const[selectedArea,setSelectedArea]=useState([])
const[selectedFloors,setSelectedFloors]=useState(null)
console.log(selectedArea,"seletedarea")
  // Filtering Logic
  const filteredFloorPlans = floorPlans.filter(plan => {
    const withinPrice = plan.price >= priceRange[0] && plan.price <= priceRange[1];
    const matchesBedrooms = selectedBedrooms.length === 0 || selectedBedrooms.includes(plan.bedrooms);
    const matchesSpecials = selectedSpecials.length === 0 || selectedSpecials.every(s => plan.specials.includes(s));
    const matchBhk = selectedBhk.length === 0 || selectedBhk.map(Number).includes(plan.BHK);
    const matchDimensions = selectDimension.length === 0 || selectDimension.includes(plan.dimensions);
    const matchArea = selectedArea.length === 0 || selectedArea.includes(plan.area);
    const matchFloors = selectedFloors === null || plan.Floors === selectedFloors;
  
    const matchPlot = (selectDimension.includes(plan.dimensions) && selectedArea.includes(plan.area));
  
    return withinPrice && matchesBedrooms && matchesSpecials && matchBhk && matchDimensions && matchArea && matchFloors && matchPlot;
  });
  
  console.log(selectDimension, filteredFloorPlans);


  return (
    <>
      <div className="flex flex-col">
        <Hersosection />

        <div className="flex bg-gray-50 p-6">
          {/* Sidebar */}
          <FilterSidebar
     
     
          />

          {/* Main Content */}
          <main className="w-3/4 p-4">
            <h2 className="text-xl font-bold mb-4">Filtered Results</h2>
            {filteredFloorPlans.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredFloorPlans.map(plan => (
                  <FloorPlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            ) : (
              <p>No floor plans match your criteria.</p>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default FloorPlansPage;
