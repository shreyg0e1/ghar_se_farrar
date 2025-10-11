import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VISIBLE_DESKTOP = 5;
const VISIBLE_MOBILE = 1.5; // Shows partial next card for better UX

export default function InfiniteCarouselFiveVisible({ trips = [] }) {
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(VISIBLE_DESKTOP);
  const [anim, setAnim] = useState(true);
  const [slideW, setSlideW] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);
  const navigate = useNavigate();

  // Detect mobile and adjust visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      const isMobile = window.innerWidth < 768;
      setVisibleCount(isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Triple clone for ultra-smooth infinite loop
  const slides = useMemo(() => {
    if (!trips || trips.length === 0) return [];
    const head = [...trips, ...trips];
    const tail = [...trips, ...trips];
    return [...head, ...trips, ...tail];
  }, [trips]);

  // Calculate width based on visible count
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return;
      const containerWidth = viewportRef.current.offsetWidth;
      const gap = 16;
      const totalGaps = (visibleCount - 1) * gap;
      const slideWidth = (containerWidth - totalGaps) / visibleCount;
      setSlideW(slideWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [visibleCount]);

  // Reset position when reaching boundaries
  useEffect(() => {
    if (!anim && trips && trips.length > 0) {
      const id = requestAnimationFrame(() => {
        setAnim(true);
        setIsTransitioning(false);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [anim, trips]);

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
    if (!trips || trips.length === 0) return;

    const totalSlides = slides.length;
    const realStart = trips.length * 2;
    const realEnd = realStart + trips.length - 1;

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
      console.error("Navigation error:", error);
    }
  };

  if (!trips || trips.length === 0) {
    return (
      <div className="relative w-full px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center p-6 sm:p-8 text-gray-600 text-sm sm:text-base">
          No trips available
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
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
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08),
            0 2px 6px rgba(0, 0, 0, 0.03);
          transform: perspective(1200px) translateZ(0);
        }

        .card-shadow-hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15),
            0 8px 20px rgba(230, 95, 37, 0.1);
          transform: perspective(1200px) rotateY(2deg) translateY(-8px)
            scale(1.03);
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
          box-shadow: 0 4px 15px rgba(230, 95, 37, 0.25);
        }

        .arrow-button:hover {
          background: linear-gradient(135deg, #ff6f35 0%, #e65f25 100%);
          transform: scale(1.15) translateY(-3px);
          box-shadow: 0 8px 25px rgba(230, 95, 37, 0.4);
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

        /* Mobile-specific styles */
        @media (max-width: 767px) {
          .card-shadow-hover {
            transform: perspective(1200px) translateY(-5px) scale(1.02);
          }

          .arrow-button {
            transform: scale(0.9);
          }

          .arrow-button:active {
            transform: scale(0.85);
          }
        }
      `}</style>

      {/* Left Arrow - Mobile Optimized */}
      <button
        onClick={prev}
        disabled={isTransitioning}
        className="absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 z-30 
                   arrow-button rounded-full p-2 sm:p-3 md:p-4 
                   shadow-lg hover:shadow-2xl transition-all duration-400 ease-out 
                   disabled:opacity-50 active:scale-95"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
      </button>

      {/* Viewport */}
      <div
        ref={viewportRef}
        className="overflow-hidden w-full rounded-2xl md:rounded-3xl"
      >
        <div
          className="flex select-none gap-3 sm:gap-4"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${
              -index * (slideW + (window.innerWidth < 768 ? 12 : 16))
            }px)`,
            transition: anim
              ? `transform ${
                  window.innerWidth < 768 ? 500 : 750
                }ms cubic-bezier(0.23, 1, 0.32, 1)`
              : "none",
          }}
        >
          {slides.map((trip, idx) => (
            <div
              key={`${trip.title}-${idx}`}
              style={{ flex: `0 0 ${slideW}px`, width: `${slideW}px` }}
              className="relative group cursor-pointer"
              onMouseEnter={() =>
                window.innerWidth >= 768 && setHoveredIndex(idx)
              }
              onMouseLeave={() =>
                window.innerWidth >= 768 && setHoveredIndex(null)
              }
              onTouchStart={() =>
                window.innerWidth < 768 && setHoveredIndex(idx)
              }
              onTouchEnd={() =>
                window.innerWidth < 768 && setHoveredIndex(null)
              }
              onClick={() => handleClick(trip)}
            >
              <div
                className={`
                  relative h-[280px] sm:h-[320px] md:h-[340px] w-full overflow-hidden 
                  rounded-2xl md:rounded-3xl transition-all duration-500 ease-out card-shadow
                  ${hoveredIndex === idx ? "card-shadow-hover" : ""}
                  active:scale-95 md:active:scale-100
                `}
              >
                {/* Premium Badge */}
                <div
                  className={`
                  absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2 py-1 sm:px-3 sm:py-1.5 
                  rounded-full text-xs font-inter-bold
                  bg-gradient-to-r from-orange-500 to-red-500 text-white
                  transition-all duration-300 ease-out
                  ${
                    hoveredIndex === idx
                      ? "scale-105 sm:scale-110 shadow-lg"
                      : "scale-100"
                  }
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
                    transition-all duration-700 ease-out
                    ${
                      hoveredIndex === idx
                        ? "scale-110 sm:scale-115 brightness-110"
                        : "scale-100"
                    }
                  `}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 gradient-overlay" />

                {/* Premium Shine Effect - Desktop only */}
                <div
                  className={`
                    absolute inset-0 premium-shine transform -skew-x-12 
                    transition-transform duration-1200 ease-out
                    ${
                      hoveredIndex === idx && window.innerWidth >= 768
                        ? "translate-x-full opacity-100"
                        : "-translate-x-full opacity-0"
                    }
                  `}
                />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-4 sm:p-5 md:p-7 text-white z-10">
                  {/* Destination Name */}
                  <h3
                    className={`
                      text-xl sm:text-2xl md:text-3xl font-inter-bold mb-2 sm:mb-3 
                      transition-all duration-300 ease-out
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
                      text-xs sm:text-sm font-inter-medium mb-1 sm:mb-2 
                      transition-all duration-300 ease-out
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
                      text-lg sm:text-xl md:text-2xl font-inter-extrabold mb-3 sm:mb-4 
                      transition-all duration-300 ease-out
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
                      absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-7 md:right-7 
                      rounded-full backdrop-blur-lg p-2 sm:p-2.5 md:p-3.5
                      border border-white/20 transition-all duration-400 ease-out
                      ${
                        hoveredIndex === idx && window.innerWidth >= 768
                          ? "bg-orange-500/80 transform rotate-45 scale-110 sm:scale-125 shadow-xl border-orange-400/50"
                          : "bg-white/20 transform rotate-0 scale-100"
                      }
                      active:scale-95 md:active:scale-100
                    `}
                  >
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>

                {/* Hover Glow Border - Desktop only */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl md:rounded-3xl border-2 transition-all duration-300
                  ${
                    hoveredIndex === idx && window.innerWidth >= 768
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

      {/* Right Arrow - Mobile Optimized */}
      <button
        onClick={next}
        disabled={isTransitioning}
        className="absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 z-30 
                   arrow-button rounded-full p-2 sm:p-3 md:p-4 
                   shadow-lg hover:shadow-2xl transition-all duration-400 ease-out 
                   disabled:opacity-50 active:scale-95"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
      </button>

      {/* Mobile Indicators */}
      {window.innerWidth < 768 && trips.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {trips.slice(0, Math.min(5, trips.length)).map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index % trips.length === dotIndex
                  ? "bg-[#E65F25] scale-125"
                  : "bg-gray-300"
              }`}
              onClick={() => {
                const realStart = trips.length * 2;
                setIndex(realStart + dotIndex);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
