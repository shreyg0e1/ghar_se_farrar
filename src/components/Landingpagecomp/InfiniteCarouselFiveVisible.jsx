// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const VISIBLE = 5;

// export default function InfiniteCarouselFiveVisible({ trips = [] }) {
//   const viewportRef = useRef(null);
//   const [index, setIndex] = useState(VISIBLE);
//   const [anim, setAnim] = useState(true);
//   const [slideW, setSlideW] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const navigate = useNavigate();

//   // Triple clone for ultra-smooth infinite loop
//   const slides = useMemo(() => {
//     if (!trips || trips.length === 0) return [];
//     // Create more buffer slides for seamless experience
//     const head = [...trips, ...trips]; // Double clone at start
//     const tail = [...trips, ...trips]; // Double clone at end
//     return [...head, ...trips, ...tail];
//   }, [trips]);

//   // Calculate width so exactly 5 slides fit with proper spacing
//   useEffect(() => {
//     const update = () => {
//       if (!viewportRef.current) return;
//       const containerWidth = viewportRef.current.offsetWidth;
//       const gap = 16;
//       const totalGaps = (VISIBLE - 1) * gap;
//       const slideWidth = (containerWidth - totalGaps) / VISIBLE;
//       setSlideW(slideWidth);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   // Reset position when reaching boundaries (seamlessly)
//   useEffect(() => {
//     if (!anim && trips && trips.length > 0) {
//       const id = requestAnimationFrame(() => {
//         setAnim(true);
//         setIsTransitioning(false);
//       });
//       return () => cancelAnimationFrame(id);
//     }
//   }, [anim, trips]);

//   const next = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setAnim(true);
//     setIndex((i) => i + 1);
//   };

//   const prev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setAnim(true);
//     setIndex((i) => i - 1);
//   };

//   const handleTransitionEnd = () => {
//     if (!trips || trips.length === 0) return;

//     const totalSlides = slides.length;
//     const realStart = trips.length * 2; // Start of real content
//     const realEnd = realStart + trips.length - 1; // End of real content

//     // If we've gone past the end, reset to beginning seamlessly
//     if (index > realEnd) {
//       setAnim(false);
//       setIndex(realStart);
//     }
//     // If we've gone before the beginning, reset to end seamlessly
//     else if (index < realStart) {
//       setAnim(false);
//       setIndex(realEnd);
//     } else {
//       setIsTransitioning(false);
//     }
//   };

//   const handleClick = async(trip)=>{
//     try {
//       console.log(trip)

//       const id = trip?.details?._id
//         console.log(id);
//       navigate( `/destination/${id}`);
//     } catch (error) {

//     }
//   }

//   if (!trips || trips.length === 0) {
//     return (
//       <div className="relative w-full px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
//         <div className="text-center p-8 text-gray-600">No trips available</div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

//         .font-inter {
//           font-family: "Inter", sans-serif;
//         }
//         .font-inter-medium {
//           font-family: "Inter", sans-serif;
//           font-weight: 500;
//         }
//         .font-inter-bold {
//           font-family: "Inter", sans-serif;
//           font-weight: 700;
//         }
//         .font-inter-extrabold {
//           font-family: "Inter", sans-serif;
//           font-weight: 800;
//         }

//         .card-shadow {
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08),
//             0 4px 10px rgba(0, 0, 0, 0.03);
//           transform: perspective(1200px) translateZ(0);
//         }

//         .card-shadow-hover {
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
//             0 10px 25px rgba(230, 95, 37, 0.1);
//           transform: perspective(1200px) rotateY(3deg) translateY(-12px)
//             scale(1.04);
//         }

//         .gradient-overlay {
//           background: linear-gradient(
//             180deg,
//             rgba(0, 0, 0, 0) 0%,
//             rgba(0, 0, 0, 0.2) 40%,
//             rgba(0, 0, 0, 0.6) 80%,
//             rgba(0, 0, 0, 0.8) 100%
//           );
//         }

//         .arrow-button {
//           backdrop-filter: blur(15px);
//           background: linear-gradient(135deg, #e65f25 0%, #d14e1a 100%);
//           border: 2px solid rgba(255, 255, 255, 0.15);
//           cursor: pointer;
//           box-shadow: 0 8px 25px rgba(230, 95, 37, 0.25);
//         }

//         .arrow-button:hover {
//           background: linear-gradient(135deg, #ff6f35 0%, #e65f25 100%);
//           transform: scale(1.15) translateY(-3px);
//           box-shadow: 0 15px 35px rgba(230, 95, 37, 0.4);
//         }

//         .arrow-button:active {
//           transform: scale(1.05) translateY(-1px);
//         }

//         .premium-shine {
//           background: linear-gradient(
//             45deg,
//             transparent 30%,
//             rgba(255, 255, 255, 0.3) 50%,
//             transparent 70%
//           );
//         }
//       `}</style>

//       {/* Left Arrow */}
//       <button
//         onClick={prev}
//         disabled={isTransitioning}
//         className="absolute left-3 top-1/2 -translate-y-1/2 z-30 arrow-button rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-400 ease-out disabled:opacity-50"
//       >
//         <ChevronLeft className="w-7 h-7 text-white" />
//       </button>

//       {/* Viewport */}
//       <div ref={viewportRef} className="overflow-hidden w-full rounded-3xl">
//         <div
//           className="flex select-none gap-4"
//           onTransitionEnd={handleTransitionEnd}
//           style={{
//             transform: `translateX(${-index * (slideW + 16)}px)`,
//             transition: anim
//               ? "transform 750ms cubic-bezier(0.23, 1, 0.32, 1)"
//               : "none",
//           }}
//         >
//           {slides.map((trip, idx) => (
//             <div
//               key={`${trip.title}-${idx}`}
//               style={{ flex: `0 0 ${slideW}px`, width: `${slideW}px` }}
//               className="relative group cursor-pointer"
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onClick={() => handleClick(trip)}
//             >
//               <div
//                 className={`
//                   relative h-[340px] w-full overflow-hidden rounded-3xl
//                   transition-all duration-700 ease-out card-shadow
//                   ${hoveredIndex === idx ? "card-shadow-hover" : ""}
//                 `}
//               >
//                 {/* Premium Badge */}
//                 <div
//                   className={`
//                   absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-inter-bold
//                   bg-gradient-to-r from-orange-500 to-red-500 text-white
//                   transition-all duration-500 ease-out
//                   ${hoveredIndex === idx ? "scale-110 shadow-lg" : "scale-100"}
//                 `}
//                 >
//                   FEATURED
//                 </div>

//                 {/* Image */}
//                 <img
//                   src={trip.image}
//                   alt={trip.title}
//                   className={`
//                     absolute inset-0 h-full w-full object-cover
//                     transition-all duration-1000 ease-out
//                     ${
//                       hoveredIndex === idx
//                         ? "scale-115 brightness-110"
//                         : "scale-100"
//                     }
//                   `}
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 gradient-overlay" />

//                 {/* Premium Shine Effect */}
//                 <div
//                   className={`
//                     absolute inset-0 premium-shine transform -skew-x-12
//                     transition-transform duration-1200 ease-out
//                     ${
//                       hoveredIndex === idx
//                         ? "translate-x-full opacity-100"
//                         : "-translate-x-full opacity-0"
//                     }
//                   `}
//                 />

//                 {/* Content */}
//                 <div className="relative flex h-full flex-col justify-end p-7 text-white z-10">
//                   {/* Destination Name */}
//                   <h3
//                     className={`
//                       text-3xl font-inter-bold mb-3 transition-all duration-500 ease-out
//                       ${
//                         hoveredIndex === idx
//                           ? "translate-y-0 opacity-100 scale-105 text-shadow-lg"
//                           : "translate-y-1 opacity-95"
//                       }
//                     `}
//                   >
//                     {trip.title}
//                   </h3>

//                   {/* Starting from text */}
//                   <p
//                     className={`
//                       text-sm font-inter-medium mb-2 transition-all duration-400 ease-out
//                       ${
//                         hoveredIndex === idx
//                           ? "opacity-100 scale-105"
//                           : "opacity-80"
//                       }
//                     `}
//                   >
//                     Starting from
//                   </p>

//                   {/* Price */}
//                   <p
//                     className={`
//                       text-2xl font-inter-extrabold mb-4 transition-all duration-400 ease-out
//                       ${
//                         hoveredIndex === idx
//                           ? "text-2xl scale-105 text-orange-300 drop-shadow-lg"
//                           : ""
//                       }
//                     `}
//                   >
//                     {trip.price}
//                   </p>

//                   {/* Arrow Icon */}
//                   <div
//                     className={`
//                       absolute bottom-7 right-7 rounded-full backdrop-blur-lg p-3.5
//                       border border-white/20 transition-all duration-600 ease-out
//                       ${
//                         hoveredIndex === idx
//                           ? "bg-orange-500/80 transform rotate-45 scale-125 shadow-xl border-orange-400/50"
//                           : "bg-white/20 transform rotate-0 scale-100"
//                       }
//                     `}
//                   >
//                     <ArrowUpRight className="h-6 w-6 text-white" />
//                   </div>
//                 </div>

//                 {/* Hover Glow Border */}
//                 <div
//                   className={`
//                   absolute inset-0 rounded-3xl border-2 transition-all duration-500
//                   ${
//                     hoveredIndex === idx
//                       ? "border-orange-400/60 shadow-[0_0_25px_rgba(230,95,37,0.3)]"
//                       : "border-transparent"
//                   }
//                 `}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={next}
//         disabled={isTransitioning}
//         className="absolute right-3 top-1/2 -translate-y-1/2 z-30 arrow-button rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-400 ease-out disabled:opacity-50"
//       >
//         <ChevronRight className="w-7 h-7 text-white" />
//       </button>
//     </div>
//   );
// }

//========================================================
//// AFTER RESPONSIVE:- Currently Using
//========================================================

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VISIBLE_DESKTOP = 5;
const VISIBLE_TABLET = 4;
const VISIBLE_MOBILE = 2.5;

export default function InfiniteCarouselFiveVisible({ trips = [] }) {
  const navigate = useNavigate()
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(VISIBLE_DESKTOP);
  const [anim, setAnim] = useState(true);
  const [slideW, setSlideW] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Sample trips data for demo
  const defaultTrips = [
    {
      title: "Manali",
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop",
      details: { _id: "1" },
    },
    {
      title: "Goa",
      price: "₹9,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop",
      details: { _id: "2" },
    },
    {
      title: "Ladakh",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      details: { _id: "3" },
    },
    {
      title: "Kerala",
      price: "₹15,999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop",
      details: { _id: "4" },
    },
    {
      title: "Shimla",
      price: "₹11,999",
      image:
        "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800&auto=format&fit=crop",
      details: { _id: "5" },
    },
  ];

  const tripsData = trips.length > 0 ? trips : [];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Triple clone for ultra-smooth infinite loop
  const slides = useMemo(() => {
    if (!tripsData || tripsData.length === 0) return [];
    const head = [...tripsData, ...tripsData];
    const tail = [...tripsData, ...tripsData];
    return [...head, ...tripsData, ...tail];
  }, [tripsData]);

  // Calculate width based on screen size
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return;
      const containerWidth = viewportRef.current.offsetWidth;

      let visibleSlides;
      let gap;

      if (isMobile) {
        visibleSlides = VISIBLE_MOBILE;
        gap = 12; // Smaller gap for mobile
      } else if (isTablet) {
        visibleSlides = VISIBLE_TABLET;
        gap = 14; // Medium gap for tablet
      } else {
        visibleSlides = VISIBLE_DESKTOP;
        gap = 16; // Desktop gap
      }

      const totalGaps = (visibleSlides - 1) * gap;
      const slideWidth = (containerWidth - totalGaps) / visibleSlides;
      setSlideW(slideWidth);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile, isTablet]);

  // Reset position when reaching boundaries (seamlessly)
  useEffect(() => {
    if (!anim && tripsData && tripsData.length > 0) {
      const id = requestAnimationFrame(() => {
        setAnim(true);
        setIsTransitioning(false);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [anim, tripsData]);

  // Touch handlers for mobile and tablet drag
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || isTransitioning) return;

    const diff = touchStartX - touchEndX;
    const minSwipeDistance = 30;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnim(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnim(true);
    setIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    if (!tripsData || tripsData.length === 0) return;

    const realStart = tripsData.length * 2;
    const realEnd = realStart + tripsData.length - 1;

    if (index > realEnd) {
      setAnim(false);
      setIndex(realStart);
    } else if (index < realStart) {
      setAnim(false);
      setIndex(realEnd);
    } else {
      setIsTransitioning(false);
    }
  };

  const handleClick = async (trip) => {
    try {
      console.log(trip);
      const id = trip?.details?._id;
      console.log(id);
      navigate(`/destination/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!tripsData || tripsData.length === 0) {
    return (
      <div
        className={`relative w-full bg-gradient-to-b from-gray-50 to-white ${
          isMobile ? "px-4 py-8" : isTablet ? "px-5 py-10" : "px-6 py-12"
        }`}
      >
        <div
          className={`text-center text-gray-600 ${
            isMobile ? "p-6 text-sm" : isTablet ? "p-7 text-base" : "p-8"
          }`}
        >
          No trips available
        </div>
      </div>
    );
  }

  const getGapSize = () => {
    if (isMobile) return 12;
    if (isTablet) return 14;
    return 16;
  };

  return (
    <div
      className={`relative w-full bg-gradient-to-b from-gray-50 to-white ${
        isMobile ? "px-4 py-8" : isTablet ? "px-5 py-10" : "px-6 py-12"
      }`}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

        .font-inter {
          font-family: "Inter", sans-serif;
        }
        .font-inter-medium {
          font-family: "Inter", sans-serif;
          font-weight: 500;
        }
        .font-inter-bold {
          font-family: "Inter", sans-serif;
          font-weight: 700;
        }
        .font-inter-extrabold {
          font-family: "Inter", sans-serif;
          font-weight: 800;
        }

        .card-shadow {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08),
            0 4px 10px rgba(0, 0, 0, 0.03);
          transform: perspective(1200px) translateZ(0);
        }

        .card-shadow-hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
            0 10px 25px rgba(230, 95, 37, 0.1);
          transform: perspective(1200px) rotateY(3deg) translateY(-12px)
            scale(1.04);
        }

        .gradient-overlay {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        .arrow-button {
          backdrop-filter: blur(15px);
          background: linear-gradient(135deg, #e65f25 0%, #d14e1a 100%);
          border: 2px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(230, 95, 37, 0.25);
        }

        .arrow-button:hover {
          background: linear-gradient(135deg, #ff6f35 0%, #e65f25 100%);
          transform: scale(1.15) translateY(-3px);
          box-shadow: 0 15px 35px rgba(230, 95, 37, 0.4);
        }

        .arrow-button:active {
          transform: scale(1.05) translateY(-1px);
        }

        .premium-shine {
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%
          );
        }

        /* Touch-friendly carousel */
        .touch-carousel {
          touch-action: pan-y pinch-zoom;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* Left Arrow - Hidden on mobile, visible on tablet and desktop */}
      {!isMobile && (
        <button
          onClick={prev}
          disabled={isTransitioning}
          className={`absolute top-1/2 -translate-y-1/2 z-30 arrow-button rounded-full shadow-lg hover:shadow-2xl transition-all duration-400 ease-out disabled:opacity-50 ${
            isTablet ? "left-2 p-3" : "left-3 p-4"
          }`}
        >
          <ChevronLeft
            className={`text-white ${isTablet ? "w-5 h-5" : "w-7 h-7"}`}
          />
        </button>
      )}

      {/* Viewport */}
      <div
        ref={viewportRef}
        className={`overflow-hidden w-full touch-carousel ${
          isMobile ? "rounded-2xl" : "rounded-3xl"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex select-none"
          onTransitionEnd={handleTransitionEnd}
          style={{
            gap: `${getGapSize()}px`,
            transform: `translateX(${-index * (slideW + getGapSize())}px)`,
            transition: anim
              ? `transform ${
                  isMobile ? "500ms" : isTablet ? "600ms" : "750ms"
                } cubic-bezier(0.23, 1, 0.32, 1)`
              : "none",
          }}
        >
          {slides.map((trip, idx) => (
            <div
              key={`${trip.title}-${idx}`}
              style={{
                flex: `0 0 ${slideW}px`,
                width: `${slideW}px`,
              }}
              className="relative group cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onClick={() => handleClick(trip)}
            >
              <div
                className={`
                  relative w-full overflow-hidden rounded-3xl
                  transition-all duration-700 ease-out card-shadow
                  ${
                    isMobile
                      ? "h-[280px]"
                      : isTablet
                      ? "h-[300px]"
                      : "h-[340px]"
                  }
                  ${hoveredIndex === idx ? "card-shadow-hover" : ""}
                `}
              >
                {/* Premium Badge */}
                <div
                  className={`
                  absolute z-10 rounded-full font-inter-bold
                  bg-gradient-to-r from-orange-500 to-red-500 text-white
                  transition-all duration-500 ease-out
                  ${
                    isMobile
                      ? "top-3 left-3 px-2.5 py-1 text-[10px]"
                      : isTablet
                      ? "top-3.5 left-3.5 px-2.5 py-1 text-[11px]"
                      : "top-4 left-4 px-3 py-1.5 text-xs"
                  }
                  ${hoveredIndex === idx ? "scale-110 shadow-lg" : "scale-100"}
                `}
                >
                  FEATURED
                </div>

                {/* Image */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className={`
                    absolute inset-0 h-full w-full object-cover
                    transition-all duration-1000 ease-out
                    ${
                      hoveredIndex === idx
                        ? "scale-115 brightness-110"
                        : "scale-100"
                    }
                  `}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 gradient-overlay" />

                {/* Premium Shine Effect */}
                <div
                  className={`
                    absolute inset-0 premium-shine transform -skew-x-12 
                    transition-transform duration-1200 ease-out
                    ${
                      hoveredIndex === idx
                        ? "translate-x-full opacity-100"
                        : "-translate-x-full opacity-0"
                    }
                  `}
                />

                {/* Content */}
                <div
                  className={`relative flex h-full flex-col justify-end text-white z-10 ${
                    isMobile ? "p-4" : isTablet ? "p-5" : "p-7"
                  }`}
                >
                  {/* Destination Name */}
                  <h3
                    className={`
                      font-inter-bold transition-all duration-500 ease-out
                      ${
                        isMobile
                          ? "text-xl mb-1.5"
                          : isTablet
                          ? "text-2xl mb-2"
                          : "text-3xl mb-3"
                      }
                      ${
                        hoveredIndex === idx
                          ? "translate-y-0 opacity-100 scale-105 text-shadow-lg"
                          : "translate-y-1 opacity-95"
                      }
                    `}
                  >
                    {trip.title}
                  </h3>

                  {/* Starting from text */}
                  <p
                    className={`
                      font-inter-medium transition-all duration-400 ease-out
                      ${
                        isMobile
                          ? "text-[11px] mb-1"
                          : isTablet
                          ? "text-xs mb-1.5"
                          : "text-sm mb-2"
                      }
                      ${
                        hoveredIndex === idx
                          ? "opacity-100 scale-105"
                          : "opacity-80"
                      }
                    `}
                  >
                    Starting from
                  </p>

                  {/* Price */}
                  <p
                    className={`
                      font-inter-extrabold transition-all duration-400 ease-out
                      ${
                        isMobile
                          ? "text-lg mb-2"
                          : isTablet
                          ? "text-xl mb-3"
                          : "text-2xl mb-4"
                      }
                      ${
                        hoveredIndex === idx
                          ? "scale-105 text-orange-300 drop-shadow-lg"
                          : ""
                      }
                    `}
                  >
                    {trip.price}
                  </p>

                  {/* Arrow Icon */}
                  <div
                    className={`
                      absolute rounded-full backdrop-blur-lg
                      border border-white/20 transition-all duration-600 ease-out
                      ${
                        isMobile
                          ? "bottom-4 right-4 p-2"
                          : isTablet
                          ? "bottom-5 right-5 p-2.5"
                          : "bottom-7 right-7 p-3.5"
                      }
                      ${
                        hoveredIndex === idx
                          ? "bg-orange-500/80 transform rotate-45 scale-125 shadow-xl border-orange-400/50"
                          : "bg-white/20 transform rotate-0 scale-100"
                      }
                    `}
                  >
                    <ArrowUpRight
                      className={`text-white ${
                        isMobile ? "h-4 w-4" : isTablet ? "h-5 w-5" : "h-6 w-6"
                      }`}
                    />
                  </div>
                </div>

                {/* Hover Glow Border */}
                <div
                  className={`
                  absolute inset-0 rounded-3xl border-2 transition-all duration-500
                  ${
                    hoveredIndex === idx
                      ? "border-orange-400/60 shadow-[0_0_25px_rgba(230,95,37,0.3)]"
                      : "border-transparent"
                  }
                `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow - Hidden on mobile, visible on tablet and desktop */}
      {!isMobile && (
        <button
          onClick={next}
          disabled={isTransitioning}
          className={`absolute top-1/2 -translate-y-1/2 z-30 arrow-button rounded-full shadow-lg hover:shadow-2xl transition-all duration-400 ease-out disabled:opacity-50 ${
            isTablet ? "right-2 p-3" : "right-3 p-4"
          }`}
        >
          <ChevronRight
            className={`text-white ${isTablet ? "w-5 h-5" : "w-7 h-7"}`}
          />
        </button>
      )}
    </div>
  );
}
