//// before responsive
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
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const cardMotion = (i) => ({
//     hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 50 },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 0.9, ease: "easeOut" },
//     },
//   });

//   return (
//     <div className="relative w-full py-28 overflow-hidden">
//       {/* Background */}
//       <motion.div
//         className="absolute inset-0 bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
//         }}
//         initial={{ scale: 1.1 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       >
//         {/* Dark + Vibrant Gradient Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/30 via-pink-600/30 to-purple-700/30 mix-blend-overlay"></div>
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-extrabold text-center mb-16
//           text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
//         >
//           Why Go Faraar?
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

//======================================================================
// // after responsive:- (slideing 4)
//======================================================================

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const WhyGoFaraar = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardMotion = (i) => ({
    hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 50 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  });

  // Touch/Drag handlers for mobile
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 768) return; // Only for mobile
    setIsDragging(true);
    setStartX(e.pageX || e.touches?.[0]?.pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth >= 768) return;
    e.preventDefault();
    const x = e.pageX || e.touches?.[0]?.pageX;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full py-16 md:py-20 lg:py-28 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .scroll-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .scroll-snap-container {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .scroll-snap-child {
          scroll-snap-align: start;
        }

        @media (max-width: 767px) {
          .card-mobile {
            min-width: 160px;
            max-width: 160px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .card-tablet {
            min-width: 170px;
            max-width: 170px;
          }
        }
      `}</style>

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Dark + Vibrant Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/30 via-pink-600/30 to-purple-700/30 mix-blend-overlay"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 lg:mb-16 
          text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        >
          Why Go Faraar?
        </motion.h2>

        {/* Desktop View - Grid (≥1024px) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:grid grid-cols-4 gap-10"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardMotion(index)}
              whileHover={{ scale: 1.07, y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative cursor-pointer group bg-white/80 backdrop-blur-lg 
              rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(29,78,216,0.6)] 
              p-4 overflow-hidden animate-float"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-xl"></div>
              </div>

              {/* Text */}
              <motion.h3 className="text-lg font-bold text-[#0f172a] mt-4 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {card.title}
              </motion.h3>
              <motion.p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tablet View - Horizontal Scroll (768px - 1023px) */}
        <div className="hidden md:block lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-container scroll-snap-container pb-4"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="card-tablet flex-shrink-0 scroll-snap-child relative cursor-pointer group bg-white/80 backdrop-blur-lg 
                rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(29,78,216,0.5)] 
                p-3 overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-lg"></div>
                </div>

                {/* Text */}
                <h3 className="text-sm font-bold text-[#0f172a] mt-2.5 mb-1.5 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-snug">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Horizontal Scroll (<768px) */}
        <div className="block md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scroll-container scroll-snap-container pb-4"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-mobile flex-shrink-0 scroll-snap-child relative cursor-pointer bg-white/85 backdrop-blur-lg 
                rounded-xl shadow-md active:shadow-xl active:scale-95
                p-2.5 overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                </div>

                {/* Text */}
                <h3 className="text-xs font-bold text-[#0f172a] mt-2 mb-1 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[10px] text-gray-700 leading-snug">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGoFaraar;

//======================================================================
// // ek or responive:- 2x2 grid(not using currently)
//======================================================================

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// const WhyGoFaraar = () => {
//   const scrollContainerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

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
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const cardMotion = (i) => ({
//     hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 50 },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 0.9, ease: "easeOut" },
//     },
//   });

//   // Touch/Drag handlers for tablet
//   const handleMouseDown = (e) => {
//     if (window.innerWidth < 768 || window.innerWidth >= 1024) return; // Only for tablet
//     setIsDragging(true);
//     setStartX(e.pageX || e.touches?.[0]?.pageX);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX || e.touches?.[0]?.pageX;
//     const walk = (x - startX) * 2;
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div className="relative w-full py-16 md:py-20 lg:py-28 overflow-hidden">
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .scroll-container {
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }

//         .scroll-container::-webkit-scrollbar {
//           display: none;
//         }

//         .scroll-snap-container {
//           scroll-snap-type: x mandatory;
//           -webkit-overflow-scrolling: touch;
//         }

//         .scroll-snap-child {
//           scroll-snap-align: start;
//         }

//         @media (min-width: 768px) and (max-width: 1023px) {
//           .card-tablet {
//             min-width: 170px;
//             max-width: 170px;
//           }
//         }
//       `}</style>

//       {/* Background */}
//       <motion.div
//         className="absolute inset-0 bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
//         }}
//         initial={{ scale: 1.1 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         {/* Dark + Vibrant Gradient Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/30 via-pink-600/30 to-purple-700/30 mix-blend-overlay"></div>
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 lg:mb-16
//           text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
//         >
//           Why Go Faraar?
//         </motion.h2>

//         {/* Desktop View - Grid (≥1024px) */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="hidden lg:grid grid-cols-4 gap-10"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={cardMotion(index)}
//               whileHover={{ scale: 1.07, y: -8 }}
//               transition={{ type: "spring", stiffness: 220, damping: 18 }}
//               className="relative cursor-pointer group bg-white/80 backdrop-blur-lg
//               rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(29,78,216,0.6)]
//               p-4 overflow-hidden animate-float"
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

//         {/* Tablet View - Horizontal Scroll (768px - 1023px) */}
//         <div className="hidden md:block lg:hidden">
//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 overflow-x-auto scroll-container scroll-snap-container pb-4"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleMouseDown}
//             onTouchMove={handleMouseMove}
//             onTouchEnd={handleMouseUp}
//           >
//             {cards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05, y: -6 }}
//                 className="card-tablet flex-shrink-0 scroll-snap-child relative cursor-pointer group bg-white/80 backdrop-blur-lg
//                 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]
//                 p-3 overflow-hidden"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden rounded-lg">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-32 object-cover rounded-lg transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-lg"></div>
//                 </div>

//                 {/* Text */}
//                 <h3 className="text-sm font-bold text-[#0f172a] mt-2.5 mb-1.5 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
//                   {card.title}
//                 </h3>
//                 <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-snug">
//                   {card.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile View - 2x2 Grid (<768px) */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="block md:hidden grid grid-cols-2 gap-4"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={cardMotion(index)}
//               whileTap={{ scale: 0.95 }}
//               className="relative cursor-pointer bg-white/85 backdrop-blur-lg
//               rounded-xl shadow-md active:shadow-xl
//               p-3 overflow-hidden transition-all duration-300"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden rounded-lg mb-2.5">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-36 object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
//               </div>

//               {/* Text */}
//               <h3 className="text-sm font-bold text-[#0f172a] mb-1.5 leading-tight">
//                 {card.title}
//               </h3>
//               <p className="text-xs text-gray-700 leading-snug">
//                 {card.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhyGoFaraar;
