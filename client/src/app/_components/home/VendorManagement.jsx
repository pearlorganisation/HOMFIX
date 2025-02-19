"use client";

import React from "react";

const VendorManagement = () => {
  return (
    <div className="relative">
      <div className="relative opacity-90 h-[600px] flex justify-center items-center w-full bg-cover">
        {/* Background Overlay */}
        <div className="absolute w-full h-full bg-[#E6E8EA] z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 ">
          <div className="max-w-screen-xl grid grid-cols-2 z-10">
            <div className="relative flex justify-center">
              {/* Video Element */}
              <video
                src="https://rdash.io/wp-content/uploads/2023/08/vm1.mp4"
                className="relative rounded-xl shadow-lg"
                width={600}
                height={550}
                alt="Vendor Description"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="space-y-5 w-[80%_auto]">
              <div className="mx-20">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/016/952/352/small/vendor-icon-design-free-vector.jpg"
                  className="w-12 h-12"
                />
              </div>
              <div className="mx-20 text-3xl font-bold mt-5 text-black">
                Vendor Management
              </div>
              <div className="mx-20 text-slate-700 text-lg font-medium">
                Manage all your suppliers – contractors, Production workshops
                and Material suppliers at one place. Establish digital rate
                contracts with them on standard items. Seamlessly give orders,
                track them and rate vendor performance.
              </div>

              <div className="mx-20 mt-32 ">
                <button className="px-4 py-3 flex items-center gap-2 rounded-md font-bold text-white border-2 border-transparent hover:border-slate-700 bg-[#007bff] hover:bg-transparent hover:text-[#007bff]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
