// "use client";

// import { motion } from "framer-motion";

// const partners = [
//   {
//     name: "Facebook",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
//   },
//   {
//     name: "Citibank",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Citi_logo_March_2023.svg/640px-Citi_logo_March_2023.svg.png",
//   },
//   {
//     name: "IBM",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/640px-IBM_logo.svg.png",
//   },
//   {
//     name: "Make My Trip",
//     logo: "https://promos.makemytrip.com/Growth/Images/3x/mmt_dt_header_icon_3x.png",
//   },
//   {
//     name: "NASA",
//     logo: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t240x240.jpg",
//   },
//   { name: "Partner 4", logo: "" },
//   { name: "Partner 5", logo: "" },
// ];

// const Partners = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Our Business Partners
//         </h2>
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {partners.map((partner, index) => (
//             <motion.div
//               key={index}
//               className=" rounded-2xl flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 className="h-16 object-contain"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const partners = [
  {
    name: "Facebook",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
  {
    name: "Citibank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Citi_logo_March_2023.svg/640px-Citi_logo_March_2023.svg.png",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/640px-IBM_logo.svg.png",
  },
  {
    name: "Make My Trip",
    logo: "https://promos.makemytrip.com/Growth/Images/3x/mmt_dt_header_icon_3x.png",
  },
  {
    name: "NASA",
    logo: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t240x240.jpg",
  },
  {
    name: "HCL",
    logo: "https://static.brandfinance.com/wp-content/uploads/2016/01/HCL-Logo.png",
  },
  {
    name: "DELL",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYLn7SfrkpimBb0NjgvFl_iO9R2SnZE1h5w&s",
  },
];

const Partners = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Our Business Partners
        </h2>
        <Marquee speed={50} pauseOnHover gradient={false}>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="mx-6 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
