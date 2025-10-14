import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VISIBLE_DESKTOP = 5;
const VISIBLE_TABLET = 4;
const VISIBLE_MOBILE = 2.5;

export default function InfiniteCarouselFiveVisible({ trips = [] }) {
  const navigate = useNavigate();
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);
  const [slideW, setSlideW] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Use provided trips or empty array
  const tripsData = Array.isArray(trips) && trips.length > 0 ? trips : [];
  console.log("Trips Data ->" , tripsData)

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

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (isMobile) return VISIBLE_MOBILE;
    if (isTablet) return VISIBLE_TABLET;
    return VISIBLE_DESKTOP;
  };

  // Create slides for infinite loop - FIXED
  const slides = useMemo(() => {
    if (!tripsData || tripsData.length === 0) return [];

    // For proper infinite loop, we need enough buffer
    const visibleSlides = getVisibleSlides();
    const bufferSize = Math.max(visibleSlides, tripsData.length);

    return [
      ...tripsData.slice(-bufferSize), // Start with end items
      ...tripsData, // Main items
      ...tripsData.slice(0, bufferSize), // End with start items
    ];
  }, [tripsData, isMobile, isTablet]);

  // Calculate width based on screen size
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return;
      const containerWidth = viewportRef.current.offsetWidth;

      const visibleSlides = getVisibleSlides();
      const gap = isMobile ? 12 : isTablet ? 14 : 16;

      const totalGaps = (visibleSlides - 1) * gap;
      const slideWidth = (containerWidth - totalGaps) / visibleSlides;
      setSlideW(slideWidth);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile, isTablet]);

  // Set initial index when slides change
  useEffect(() => {
    if (slides.length > 0) {
      const visibleSlides = getVisibleSlides();
      const bufferSize = Math.max(visibleSlides, tripsData.length);
      setIndex(bufferSize); // Start at the beginning of main items
    }
  }, [slides.length, tripsData.length, isMobile, isTablet]);

  // Reset position when reaching boundaries
  useEffect(() => {
    if (!anim && slides.length > 0 && tripsData.length > 0) {
      const id = requestAnimationFrame(() => {
        setAnim(true);
        setIsTransitioning(false);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [anim, slides.length, tripsData.length]);

  // Touch handlers for mobile and tablet drag
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || isTransitioning || slides.length === 0)
      return;

    const diff = touchStartX - touchEndX;
    const minSwipeDistance = 50;

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
    if (isTransitioning || slides.length === 0) return;
    setIsTransitioning(true);
    setAnim(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (isTransitioning || slides.length === 0) return;
    setIsTransitioning(true);
    setAnim(true);
    setIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    if (slides.length === 0 || tripsData.length === 0) {
      setIsTransitioning(false);
      return;
    }

    const visibleSlides = getVisibleSlides();
    const bufferSize = Math.max(visibleSlides, tripsData.length);
    const totalSlides = slides.length;

    // If we've gone past the end, reset to beginning
    if (index >= totalSlides - bufferSize) {
      setAnim(false);
      setIndex(bufferSize);
    }
    // If we've gone before the beginning, reset to end
    else if (index < bufferSize) {
      setAnim(false);
      setIndex(totalSlides - bufferSize - 1);
    } else {
      setIsTransitioning(false);
    }
  };

  const handleClick = (trip) => {
    try {
      console.log("Trip clicked:", trip);
      const id = trip?.details?._id || trip?._id;
      if (id) {
        console.log("Navigating to destination:", id);
        navigate(`/destination/${id}`);
      }
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  // Get gap size based on screen
  const getGapSize = () => {
    if (isMobile) return 12;
    if (isTablet) return 14;
    return 16;
  };

  // Debug logging
  useEffect(() => {
    console.log("Carousel Debug:", {
      tripsDataLength: tripsData.length,
      slidesLength: slides.length,
      currentIndex: index,
      isTransitioning,
      slideWidth: slideW,
    });
  }, [tripsData.length, slides.length, index, isTransitioning, slideW]);

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
        }

        .card-shadow-hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
            0 10px 25px rgba(230, 95, 37, 0.1);
          transform: translateY(-8px) scale(1.02);
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
      {!isMobile && tripsData.length > 1 && (
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
              key={`${trip.title || trip.name}-${idx}`}
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
                  transition-all duration-500 ease-out card-shadow
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
                  transition-all duration-300 ease-out
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
                  src={trip.image || trip.thumbnail}
                  alt={trip.title || trip.name}
                  className={`
                    absolute inset-0 h-full w-full object-cover
                    transition-all duration-700 ease-out
                    ${
                      hoveredIndex === idx
                        ? "scale-110 brightness-110"
                        : "scale-100"
                    }
                  `}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=No+Image";
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 gradient-overlay" />

                {/* Content */}
                <div
                  className={`relative flex h-full flex-col justify-end text-white z-10 ${
                    isMobile ? "p-4" : isTablet ? "p-5" : "p-7"
                  }`}
                >
                  {/* Destination Name */}
                  <h3
                    className={`
                      font-inter-bold transition-all duration-300 ease-out
                      ${
                        isMobile
                          ? "text-xl mb-1.5"
                          : isTablet
                          ? "text-2xl mb-2"
                          : "text-3xl mb-3"
                      }
                      ${
                        hoveredIndex === idx
                          ? "translate-y-0 opacity-100"
                          : "translate-y-1 opacity-95"
                      }
                    `}
                  >
                    {trip.title || trip.name}
                  </h3>

                  {/* Starting from text */}
                  <p
                    className={`
                      font-inter-medium transition-all duration-300 ease-out
                      ${
                        isMobile
                          ? "text-[11px] mb-1"
                          : isTablet
                          ? "text-xs mb-1.5"
                          : "text-sm mb-2"
                      }
                      ${hoveredIndex === idx ? "opacity-100" : "opacity-80"}
                    `}
                  >
                    Starting from
                  </p>

                  {/* Price */}
                  <p
                    className={`
                      font-inter-extrabold transition-all duration-300 ease-out
                      ${
                        isMobile
                          ? "text-lg mb-2"
                          : isTablet
                          ? "text-xl mb-3"
                          : "text-2xl mb-4"
                      }
                      ${hoveredIndex === idx ? "text-orange-300" : ""}
                    `}
                  >
                    {trip.price}
                  </p>

                  {/* Arrow Icon */}
                  <div
                    className={`
                      absolute rounded-full backdrop-blur-lg
                      border border-white/20 transition-all duration-300 ease-out
                      ${
                        isMobile
                          ? "bottom-4 right-4 p-2"
                          : isTablet
                          ? "bottom-5 right-5 p-2.5"
                          : "bottom-7 right-7 p-3.5"
                      }
                      ${
                        hoveredIndex === idx
                          ? "bg-orange-500/80 scale-110 shadow-xl border-orange-400/50"
                          : "bg-white/20 scale-100"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow - Hidden on mobile, visible on tablet and desktop */}
      {!isMobile && tripsData.length > 1 && (
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

      {/* Mobile Indicators */}
      {isMobile && tripsData.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {tripsData.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index % tripsData.length === dotIndex
                  ? "bg-[#E65F25] scale-125"
                  : "bg-gray-300"
              }`}
              onClick={() => {
                const visibleSlides = getVisibleSlides();
                const bufferSize = Math.max(visibleSlides, tripsData.length);
                setIndex(bufferSize + dotIndex);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
