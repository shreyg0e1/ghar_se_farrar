// import React from "react";

// const interests = [
//   {
//     title: "Xmas New Year",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     title: "Night Life",
//     image:
//       "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     title: "Snorkeling",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     title: "Sightseeing",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     title: "Beach",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     title: "Shopping",
//     image:
//       "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     title: "Swimming",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
// ];

// export default function PlanByInterest() {
//   return (
//     <div className="text-center py-10">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold">Plan by Interest</h1>
//       <p className="text-lg mt-2">Straight from the ones who made it epic.</p>

//       {/* Circles */}
//       <div className="flex flex-wrap justify-center gap-12 mt-10">
//         {interests.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-32 h-32 object-cover rounded-full shadow"
//             />
//             <p className="mt-3 text-gray-700 font-medium">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
















// import React from "react";
// import { motion } from "framer-motion";

// const interests = [
//   { title: "Xmas New Year", image: "/gallery/xamsnewywer.jpeg" },
//   { title: "Night Life", image: "/gallery/nightlife.jpeg" },
//   { title: "Snorkeling", image: "/gallery/snorkeling.jpeg" },
//   { title: "Sightseeing", image: "/gallery/sightseeing.jpeg" },
//   { title: "Beach", image: "/gallery/beach.jpeg" },
//   { title: "Shopping", image: "/gallery/shopping.jpeg" },
//   { title: "Swimming", image: "/gallery/swimming.jpeg" },
//   { title: "Adventure", image: "/gallery/adventure.jpeg" },
//   { title: "Wildlife", image: "/gallery/wildlife.jpeg" },
//   { title: "Festivals", image: "/gallery/festivals.jpeg" },
// ];

// export default function PlanByInterest() {
//   return (
//     <div className="text-center py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-extrabold text-gray-900"
//       >
//         Plan by Interest
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         viewport={{ once: true }}
//         className="text-lg text-gray-600 mt-3"
//       >
//         Straight from the ones who made it epic.
//       </motion.p>

//       {/* Circles */}
//       <div className="flex flex-wrap justify-center gap-12 mt-14">
//         {interests.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.1 }}
//             className="flex flex-col items-center group cursor-pointer"
//           >
//             {/* Vibrant border ring */}
//             <div className="p-[3px] rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-400">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-32 h-32 object-cover rounded-full shadow-lg 
//                 group-hover:brightness-110 transition duration-500"
//               />
//             </div>
//             <p className="mt-3 text-gray-800 font-semibold text-lg group-hover:text-indigo-600 transition-colors">
//               {item.title}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

// make it integratable with backend data
const interests = [
  { title: "Xmas New Year", image: "/gallery/xamsnewywer.jpeg" },
  { title: "Night Life", image: "/gallery/nightlife.jpeg" },
  { title: "Snorkeling", image: "/gallery/snorkeling.jpeg" },
  { title: "Sightseeing", image: "/gallery/sightseeing.jpeg" },
  { title: "Beach", image: "/gallery/beach.jpeg" },
  { title: "Shopping", image: "/gallery/shopping.jpeg" },
  { title: "Swimming", image: "/gallery/swimming.jpeg" },
  { title: "Adventure", image: "/gallery/adventure.jpeg" },
  { title: "Wildlife", image: "/gallery/wildlife.jpeg" },
  { title: "Festivals", image: "/gallery/festivals.jpeg" },
];

const loopedInterests = [...interests, ...interests];

export default function PlanByInterest() {
  return (
    <div className="text-center py-8 md:py-16 bg-white relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl xs:text-3xl md:text-5xl font-extrabold px-4"
      >
        Plan by{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Interest
        </span>
      </motion.h1>

      <p className="text-sm xs:text-base md:text-lg text-gray-600 mt-2 md:mt-3 px-4">
        Straight from the ones who made it epic.
      </p>

      {/* Smooth Auto Sliding Row - Fixed Container */}
      <div className="mt-8 md:mt-14 relative">
        {/* Mask for horizontal overflow only */}
        <div className="overflow-hidden mask-gradient">
          <div className="py-4 md:py-8 px-2 md:px-4">
            {" "}
            {/* Reduced padding for mobile */}
            <motion.div
              className="flex gap-6 xs:gap-8 md:gap-14 items-center" // Reduced gaps for mobile
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40, // Slightly faster for mobile
              }}
            >
              {loopedInterests.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  whileTap={{ scale: 1.05 }} // Added tap feedback for mobile
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center group cursor-pointer flex-shrink-0 relative"
                  style={{ minWidth: "120px" }} // Reduced min-width for mobile
                >
                  {/* Circle with Image - Smaller on mobile */}
                  <div
                    className="w-20 h-20 xs:w-24 xs:h-24 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden 
                                  transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-300/70
                                  relative z-10 border-2 border-white shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110"
                      loading="lazy" // Added lazy loading for mobile
                    />
                  </div>

                  {/* Title (always visible) - Smaller text for mobile */}
                  <p
                    className="mt-2 md:mt-4 text-gray-800 font-semibold text-xs xs:text-sm md:text-base lg:text-lg 
                                transition-all duration-500 group-hover:text-indigo-600 group-hover:scale-110
                                whitespace-nowrap relative z-10 px-1"
                  >
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Gradient Overlays for better UX */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-20"></div>

      <style jsx>{`
        .mask-gradient {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        /* Enhanced mobile mask */
        @media (max-width: 768px) {
          .mask-gradient {
            mask: linear-gradient(
              90deg,
              transparent 0%,
              black 15%,
              black 85%,
              transparent 100%
            );
            -webkit-mask: linear-gradient(
              90deg,
              transparent 0%,
              black 15%,
              black 85%,
              transparent 100%
            );
          }
        }
      `}</style>
    </div>
  );
}
