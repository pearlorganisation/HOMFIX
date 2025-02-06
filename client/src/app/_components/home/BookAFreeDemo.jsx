"use client"
import React from "react";

const BookAFreeDemo = () => {
  const data = [
    {
      img: "https://rdash.io/wp-content/uploads/elementor/thumbs/professional-architect@2x-qbxbdrvi41zh49dj924l8lsk4kijstdmnasgavhrr8.webp",
      title: "Developers",
      description: "Residential, Commercial, Retail & other Space developers can track & control their projects & Budget.",
    },
    {
      img: "https://rdash.io/wp-content/uploads/elementor/thumbs/Design-Studio-qbxbdrvi41zh49dj924l8lsk4kijstdmnasgavhrr8.webp",
      title: "Design & Build Firms",
      description: "Design-build firms and Architect Studios can manage their leads, client proposals, Design delivery workflows and project tracking.",
    },
    {
      img: "https://rdash.io/wp-content/uploads/elementor/thumbs/Contractor-qbxbd84w4j8gcg67gblfa8rvnh7ub679kl3982b1dw.webp",
      title: "Contractors",
      description: "General contractors in civil, interiors and specialty contractor of trades can manage their client projects and track progress from field.",
    },
  ];

  return (
    <>
      <div className="bg-[#F7F8FA]  py-24 space-y-10 border-2">
        <h1 className="text-4xl  font-[650] text-center ">
        Homfix is an Operating System built for
        </h1>

        <div className="grid max-w-screen-xl md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mx-auto  gap-10 ">
          {data.map((el, i) => {
            return (
              <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white ">
                <img class="w-full" src={el.img} alt="Roles" />
                <div class="p-4">
                  <h2 class="font-bold text-xl mb-2">{el.title}</h2>
                  <p class="text-gray-600">{el.description}</p>       
                 
                </div>
              </div>
            );
          })}
        </div>

        <button
            class='px-4 py-3 flex mx-auto items-center gap-2 rounded-md font-bold bg-[#0E2337] text-white  transition-all ease-in-out duration-300   hover:bg-[#007bff]'>
   Book A Free Demo</button>

      </div>
    </>
  );
};

export default BookAFreeDemo;
