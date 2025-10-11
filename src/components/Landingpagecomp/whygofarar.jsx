// import React from "react";
// import { motion } from "framer-motion";

// const WhyGoFaraar = () => {
//   const cards = [
//     {
//       image: "/gallery/why3.png", // 🔥 replace with your file name
//       title: "Journeys With Soul",
//       description: "Trips crafted to connect you with your soul",
//     },
//     {
//       image: "/gallery/why4.png", // 🔥 replace with your file name
//       title: "Curated, Not Crowded",
//       description: "Handpicked stays, paths, and experiences",
//     },
//     {
//       image: "/gallery/why2.png", // 🔥 replace with your file name
//       title: "You Escape Maps, They Pin",
//       description: "Discover hidden gems and offbeat places",
//     },
//     {
//       image: "/gallery/why1.png", // 🔥 replace with your file name
//       title: "Stories, Not Selfies",
//       description: "Return with real stories and true memories",
//     },
//   ];

//   // Motion variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25 },
//     },
//   };

//   const cardMotion = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   return (
//     <div className="relative w-full py-20">
//       {/* 🔥 Parallax Background */}
//       <motion.div
//         className="absolute inset-0 bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')", // 🔥 Optional: Add your own background in public/gallery/bg.jpg
//         }}
//         initial={{ scale: 1.1 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       >
//         {/* dark overlay for contrast */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </motion.div>

//       {/* Content Layer */}
//       <div className="relative z-10">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
//         >
//           Why go Faraar?
//         </motion.h2>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={cardMotion}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               className="cursor-pointer text-center group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-4"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden rounded-xl">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
//                 />
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-xl"></div>
//               </div>

//               {/* Text */}
//               <motion.h3 className="text-lg font-bold text-[#0f172a] mt-4 mb-2 group-hover:text-[#1d4ed8] transition-colors duration-300">
//                 {card.title}
//               </motion.h3>
//               <motion.p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
//                 {card.description}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhyGoFaraar;





















// import React from "react";
// import { motion } from "framer-motion";

// const WhyGoFaraar = () => {
//   const cards = [
//     {
//       image: "/gallery/why3.png",
//       title: "Journeys With Soul",
//       description: "Trips crafted to connect you with your soul",
//     },
//     {
//       image: "/gallery/why4.png",
//       title: "Curated, Not Crowded",
//       description: "Handpicked stays, paths, and experiences",
//     },
//     {
//       image: "/gallery/why2.png",
//       title: "You Escape Maps, They Pin",
//       description: "Discover hidden gems and offbeat places",
//     },
//     {
//       image: "/gallery/why1.png",
//       title: "Stories, Not Selfies",
//       description: "Return with real stories and true memories",
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.3 }
//     }
//   };

//   const cardMotion = (i) => ({
//     hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 50 },
//     show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
//   });

//   return (
//     <div className="relative w-full py-24 overflow-hidden">
//       {/* Background */}
//       <motion.div
//         className="absolute inset-0 bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
//         }}
//         initial={{ scale: 1.15 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-extrabold text-center 
//           bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent mb-16"
//         >
//           Why go Faraar?
//         </motion.h2>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={cardMotion(index)}
//               whileHover={{ scale: 1.07, y: -8 }}
//               transition={{ type: "spring", stiffness: 220, damping: 18 }}
//               className="relative cursor-pointer group bg-white/80 backdrop-blur-lg 
//               rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(29,78,216,0.6)] 
//               p-4 overflow-hidden animate-[float_6s_ease-in-out_infinite]"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden rounded-xl">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-xl"></div>
//               </div>

//               {/* Text */}
//               <motion.h3 className="text-lg font-bold text-[#0f172a] mt-4 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
//                 {card.title}
//               </motion.h3>
//               <motion.p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
//                 {card.description}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhyGoFaraar;













import React from "react";
import { motion } from "framer-motion";

const WhyGoFaraar = () => {
  const cards = [
    {
      image: "/gallery/why3.png",
      title: "Journeys With Soul",
      description: "Trips crafted to connect you with your soul",
    },
    {
      image: "/gallery/why4.png",
      title: "Curated, Not Crowded",
      description: "Handpicked stays, paths, and experiences",
    },
    {
      image: "/gallery/why2.png",
      title: "You Escape Maps, They Pin",
      description: "Discover hidden gems and offbeat places",
    },
    {
      image: "/gallery/why1.png",
      title: "Stories, Not Selfies",
      description: "Return with real stories and true memories",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardMotion = (i) => ({
    hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 30 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <div className="relative w-full py-16 md:py-28 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Dark + Vibrant Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/30 via-pink-600/30 to-purple-700/30 mix-blend-overlay"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-16 
          text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] md:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]
          px-2"
        >
          Why Go Faraar?
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardMotion(index)}
              whileHover={{
                scale: window.innerWidth >= 768 ? 1.07 : 1,
                y: window.innerWidth >= 768 ? -8 : 0,
              }}
              whileTap={{ scale: 0.98 }} // Added tap feedback for mobile
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative cursor-pointer group bg-white/90 backdrop-blur-md md:bg-white/80 md:backdrop-blur-lg 
              rounded-xl md:rounded-2xl shadow-lg md:hover:shadow-[0_0_25px_rgba(29,78,216,0.6)] 
              p-3 md:p-4 overflow-hidden animate-[float_6s_ease-in-out_infinite]
              border border-white/20 active:bg-white/95" // Added active state for mobile
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg md:rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 xs:h-48 md:h-56 object-cover rounded-lg md:rounded-xl 
                           transition-transform duration-500 md:group-hover:scale-110 
                           md:group-hover:brightness-90"
                  loading="lazy" // Added lazy loading for mobile
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                              opacity-60 md:opacity-0 md:group-hover:opacity-100 
                              transition duration-500 rounded-lg md:rounded-xl"
                ></div>
              </div>

              {/* Text */}
              <motion.h3
                className="text-base xs:text-lg font-bold text-[#0f172a] mt-3 md:mt-4 mb-1 md:mb-2 
                                  md:group-hover:text-indigo-600 transition-colors duration-300
                                  text-center md:text-left"
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-xs xs:text-sm text-gray-700 md:group-hover:text-gray-900 
                                 transition-colors duration-300 text-center md:text-left
                                 leading-relaxed"
              >
                {card.description}
              </motion.p>

              {/* Mobile Touch Indicator */}
              <div
                className="md:hidden absolute inset-0 rounded-xl bg-transparent 
                            active:bg-black/5 transition-colors duration-150"
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <button
            className="md:hidden bg-[#E65F25] text-white px-8 py-3 rounded-xl 
                           font-semibold shadow-lg hover:opacity-90 cursor-pointer 
                           transition-all duration-300 active:scale-95
                           border-2 border-white/20"
          >
            Discover More
          </button>
        </motion.div>
      </div>

      {/* Custom animation for mobile */}
      <style jsx>{`
        @media (max-width: 767px) {
          .animate-\\[float_6s_ease-in-out_infinite\\] {
            animation: mobile-float 8s ease-in-out infinite;
          }

          @keyframes mobile-float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        }

        @media (min-width: 768px) {
          .animate-\\[float_6s_ease-in-out_infinite\\] {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default WhyGoFaraar;



































