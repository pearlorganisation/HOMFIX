"use client";

import React from "react";

const cards = [
  {
    id: 1,
    icon: "https://banner2.cleanpng.com/20180503/caw/kisspng-computer-icons-symbol-company-certification-5aeb3cb8c2f511.8639005415253659447986.jpg",
    title: "100% Visibility",
    description:
      "Everything around your projects, drawings, progress and timelines and manpower is available in realtime, at one place, whenever.",
  },
  {
    id: 2,
    icon: "https://banner2.cleanpng.com/20180503/caw/kisspng-computer-icons-symbol-company-certification-5aeb3cb8c2f511.8639005415253659447986.jpg",
    title: "Avoid Delays",
    description:
      "Squeeze & crash your project timeline by shunting delays due to miscommunication, confusion, pending approvals and rework.",
  },
  {
    id: 3,
    icon: "https://banner2.cleanpng.com/20180503/caw/kisspng-computer-icons-symbol-company-certification-5aeb3cb8c2f511.8639005415253659447986.jpg",
    title: "Reduce Cost",
    description:
      "Control your project budgets through rate contracts, approvals, change orders and avoiding rework.",
  },
  {
    id: 4,
    icon: "https://banner2.cleanpng.com/20180503/caw/kisspng-computer-icons-symbol-company-certification-5aeb3cb8c2f511.8639005415253659447986.jpg",
    title: "Quality Control",
    description:
      "Detail site recce, Standard Specs guidelines, Audit & snaglist management enables you to control quality of materials and services at every step.",
  },
];

const EmployingOptions = () => {
  return (
    <div className="bg-blue-700 text-white px-20">
      <h1 className="pt-12 text-4xl font-semibold">
        Employing Homfix results in
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-16 pb-16">
        {cards.map((card) => (
          <div className="" key={card.id}>
            <img src={card.icon} className="w-12 h-12" />
            <h1 className="mt-12 text-3xl font-semibold">{card.title}</h1>
            <p className="mt-8 text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployingOptions;
