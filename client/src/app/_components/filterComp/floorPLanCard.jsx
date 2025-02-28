import React from "react";

const FloorPlanCard = ({ plan }) => {
  if (!plan) return null; 
  console.log("dim",plan)

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-bold">{plan.name || "No Name"}</h3>
      <p className="text-sm">Price: ${plan.price ? plan.price.toLocaleString() : "N/A"}</p>
      <p className="text-sm">Bedrooms: {plan.bedrooms ?? "N/A"}</p>
      <p className="text-sm">BHK: {plan.BHK ?? "N/A"}</p>
      <p className="text-sm">Floors: {plan.Floors ?? "N/A"}</p>
      <p></p>
      <p className="text-sm">
        Special Features: {plan.specials?.length ? plan.specials.join(", ") : "None"}
      </p>
      <img src={plan.image || "/default-image.jpg"} alt={plan.name || "Floor Plan"} className="w-full h-auto" />
    </div>
  );
};

export default FloorPlanCard;
