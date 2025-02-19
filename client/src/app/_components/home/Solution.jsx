// "use client";

// import React from "react";
// import { FaPlay } from "react-icons/fa6";

// const Solutions = () => {
//   return (
//     <div className="">
//       <div className=" relative  opacity-90  h-[600px] flex justify-center items-center w-full bg-cover ">
//         <div className="absolute w-full h-full bg-[#E6E8EA]"></div>

//         <div className="">
//           <h1 className="z-30"> Shubham </h1>
//           <div className="z-30  max-w-screen-xl grid grid-cols-2">
//             <div className="space-y-5 w-[80%_auto]">
//               <div className="mx-20  text-5xl  font-bold  mt-5">
//                 Project Management
//               </div>
//               <div className="mx-20 text-slate-700 text-lg  font-medium ">
//                 Homfix is a new-age construction management platform for
//                 developers, contractors, and design studios.
//               </div>

//               <div className="flex gap-5 justify-center">
//                 <button class="px-4 py-3  flex items-center gap-2 rounded-md font-bold text-white border-2 border-transparent hover:border-slate-700 bg-[#007bff]   hover:bg-transparent hover:text-[#007bff]">
//                   Let's Talk
//                 </button>
//                 <button class="px-4 py-3 flex items-center gap-2 rounded-md font-bold  border-2 border-slate-700  transition-all ease-in-out duration-300 hover:bg-transparent text-[#007bff]">
//                   <FaPlay /> Watch Demo
//                 </button>
//               </div>
//             </div>
//             <div className="relative flex justify-center">
//               {/* Shadow Layer */}
//               {/* <div className="absolute w-[500px] h-[335px] bg-gray-900 opacity-20 rounded-xl translate-x-3 translate-y-3"></div> */}

//               {/* Video Element */}
//               <video
//                 src="https://rdash.io/wp-content/uploads/2024/03/mp-1.mp4"
//                 className="relative rounded-xl shadow-lg"
//                 width={600}
//                 height={550}
//                 alt="Phoenix Tower Description"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Solutions;

"use client";

import React from "react";
import { FaPlay } from "react-icons/fa6";

const Solutions = () => {
  return (
    <div className="relative">
      <div className="relative opacity-90 h-[600px] flex justify-center items-center w-full bg-cover">
        {/* Background Overlay */}
        <div className="absolute w-full h-full bg-[#E6E8EA] z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 ">
          <h1 className="text-3xl font-bold text-black mb-12 mx-20">
            Solutions
          </h1>

          <div className="mx-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/563/563541.png"
              className="w-12 h-12"
            />
          </div>
          <div className="max-w-screen-xl grid grid-cols-2 z-10">
            <div className="space-y-5 w-[80%_auto]">
              <div className="mx-20 text-5xl font-bold mt-5 text-black">
                Project Management
              </div>
              <div className="mx-20 text-slate-700 text-lg font-medium">
                From Survey to Designs, BOQs to Vendor allocation,
                office-to-site and planning to handover – all teams can now
                collaborate on a single platform & deliver projects faster,
                under budget, everytime!
              </div>

              <div className="mx-20 mt-32 ">
                <button className="px-4 py-3 flex items-center gap-2 rounded-md font-bold text-white border-2 border-transparent hover:border-slate-700 bg-[#007bff] hover:bg-transparent hover:text-[#007bff]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              {/* Video Element */}
              <video
                src="https://rdash.io/wp-content/uploads/2024/03/mp-1.mp4"
                className="relative rounded-xl shadow-lg"
                width={600}
                height={550}
                alt="Phoenix Tower Description"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
