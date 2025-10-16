import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VISIBLE_DESKTOP = 5;
const VISIBLE_TABLET = 3.5;
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

  // New states for pointer drag and velocity
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragCurrentX, setDragCurrentX] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const dragThreshold = useRef(0);
  const velocityThreshold = useRef(0.3); // Minimum velocity for swipe
  const maxSwipeDistance = useRef(0);

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

  const tripsData = trips.length > 0 ? trips : defaultTrips;

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

  // Calculate width based on screen size and set thresholds
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return;
      const containerWidth = viewportRef.current.offsetWidth;

      let visibleSlides;
      let gap;

      if (isMobile) {
        visibleSlides = VISIBLE_MOBILE;
        gap = 10; // Even smaller gap for mobile
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

      // Set dynamic thresholds based on slide width
      dragThreshold.current = slideWidth * 0.15; // 15% of slide width
      maxSwipeDistance.current = slideWidth * 0.8; // Max 80% of slide width for smooth response
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

  // Pointer drag handlers for desktop
  const handlePointerDown = (e) => {
    if (isMobile || isTransitioning) return;

    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
    setLastDragTime(Date.now());
    setDragVelocity(0);

    // Prevent text selection during drag
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    if (!isDragging || isTransitioning) return;

    const currentTime = Date.now();
    const timeDelta = currentTime - lastDragTime;
    const currentX = e.clientX;
    const moveDelta = dragCurrentX - currentX;

    // Calculate velocity (pixels per millisecond)
    if (timeDelta > 0) {
      const newVelocity = moveDelta / timeDelta;
      setDragVelocity(newVelocity);
    }

    setDragCurrentX(currentX);
    setLastDragTime(currentTime);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const dragDistance = dragStartX - dragCurrentX;
    const absDistance = Math.abs(dragDistance);
    const absVelocity = Math.abs(dragVelocity);

    // Enhanced swipe detection with velocity consideration
    const effectiveThreshold = Math.max(
      dragThreshold.current,
      dragThreshold.current * (1 - Math.min(absVelocity, 2)) // Lower threshold for faster swipes
    );

    if (
      absDistance > effectiveThreshold ||
      absVelocity > velocityThreshold.current
    ) {
      if (dragDistance > 0) {
        next();
      } else {
        prev();
      }
    }

    // Reset drag state
    setDragStartX(0);
    setDragCurrentX(0);
    setDragVelocity(0);
  };

  // Touch handlers for mobile and tablet with velocity support
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
    setLastDragTime(Date.now());
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastDragTime;
    const moveDelta = touchEndX - currentX;

    // Calculate velocity for touch
    if (timeDelta > 0) {
      const velocity = moveDelta / timeDelta;
      setDragVelocity(velocity);
    }

    setTouchEndX(currentX);
    setLastDragTime(currentTime);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || isTransitioning) return;

    const diff = touchStartX - touchEndX;
    const absDiff = Math.abs(diff);
    const absVelocity = Math.abs(dragVelocity);

    // Enhanced touch detection with velocity scaling
    const minSwipeDistance = Math.max(
      15, // Reduced minimum absolute distance for mobile
      dragThreshold.current * (1 - Math.min(absVelocity, 1.5)) // Dynamic threshold based on velocity
    );

    if (absDiff > minSwipeDistance || absVelocity > velocityThreshold.current) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }

    setTouchStartX(0);
    setTouchEndX(0);
    setDragVelocity(0);
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnim(true);

    // Calculate swipe distance based on velocity for faster response
    const velocityMultiplier = Math.min(Math.abs(dragVelocity) * 2, 3); // Max 3 slides at once
    const swipeDistance = Math.floor(1 + velocityMultiplier);

    setIndex((i) => i + swipeDistance);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnim(true);

    // Calculate swipe distance based on velocity for faster response
    const velocityMultiplier = Math.min(Math.abs(dragVelocity) * 2, 3); // Max 3 slides at once
    const swipeDistance = Math.floor(1 + velocityMultiplier);

    setIndex((i) => i - swipeDistance);
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
          isMobile ? "px-3 py-6" : isTablet ? "px-5 py-10" : "px-6 py-12"
        }`}
      >
        <div
          className={`text-center text-gray-600 ${
            isMobile ? "p-4 text-xs" : isTablet ? "p-7 text-base" : "p-8"
          }`}
        >
          No trips available
        </div>
      </div>
    );
  }

  const getGapSize = () => {
    if (isMobile) return 10; // Reduced gap for mobile
    if (isTablet) return 14;
    return 16;
  };

  // Calculate transform for drag effect
  const getTransform = () => {
    const baseTransform = -index * (slideW + getGapSize());

    if (isDragging) {
      const dragOffset = dragStartX - dragCurrentX;
      // Limit drag offset to prevent excessive movement
      const limitedOffset = Math.max(
        -maxSwipeDistance.current,
        Math.min(maxSwipeDistance.current, dragOffset)
      );
      return baseTransform + limitedOffset;
    }

    return baseTransform;
  };

  return (
    <div
      className={`relative w-full bg-gradient-to-b from-gray-50 to-white ${
        isMobile ? "px-3 py-6" : isTablet ? "px-5 py-10" : "px-6 py-12"
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
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08),
            0 3px 8px rgba(0, 0, 0, 0.03);
          transform: perspective(1000px) translateZ(0);
        }

        .card-shadow-hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
            0 8px 20px rgba(230, 95, 37, 0.1);
          transform: perspective(1000px) rotateY(2deg) translateY(-8px)
            scale(1.03);
        }

        .card-shadow-hover-mobile {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15),
            0 6px 15px rgba(230, 95, 37, 0.1);
          transform: perspective(1000px) rotateY(1.5deg) translateY(-6px)
            scale(1.02);
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

        /* Drag cursor for desktop */
        .drag-cursor {
          cursor: grab;
        }

        .drag-cursor:active {
          cursor: grabbing;
        }

        /* Smooth drag transition */
        .smooth-drag {
          transition: transform 0.1s ease-out;
        }
      `}</style>

      {/* Left Arrow - Hidden on mobile, visible on tablet and desktop */}
      {!isMobile && (
        <button
          onClick={prev}
          disabled={isTransitioning || isDragging}
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
          !isMobile ? "drag-cursor" : ""
        } ${isMobile ? "rounded-xl" : "rounded-3xl"}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
      >
        <div
          className="flex select-none"
          onTransitionEnd={handleTransitionEnd}
          style={{
            gap: `${getGapSize()}px`,
            transform: `translateX(${getTransform()}px)`,
            transition: anim
              ? `transform ${
                  isMobile ? "400ms" : isTablet ? "600ms" : "750ms"
                } cubic-bezier(0.23, 1, 0.32, 1)`
              : isDragging
              ? "transform 0.1s ease-out"
              : "none",
            cursor: isDragging ? "grabbing" : "grab",
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
              onMouseEnter={() =>
                !isMobile && !isDragging && setHoveredIndex(idx)
              }
              onMouseLeave={() =>
                !isMobile && !isDragging && setHoveredIndex(null)
              }
              onClick={(e) => {
                // Prevent click during drag
                if (!isDragging && Math.abs(dragStartX - dragCurrentX) < 5) {
                  handleClick(trip);
                }
              }}
            >
              <div
                className={`
                  relative w-full overflow-hidden 
                  transition-all duration-500 ease-out card-shadow
                  ${
                    isMobile
                      ? "h-[200px] rounded-2xl"
                      : isTablet
                      ? "h-[300px] rounded-3xl"
                      : "h-[340px] rounded-3xl"
                  }
                  ${
                    hoveredIndex === idx && !isDragging
                      ? isMobile
                        ? "card-shadow-hover-mobile"
                        : "card-shadow-hover"
                      : ""
                  }
                `}
              >
                {/* Premium Badge */}
                <div
                  className={`
                  absolute z-10 rounded-full font-inter-bold
                  bg-gradient-to-r from-orange-500 to-red-500 text-white
                  transition-all duration-400 ease-out
                  ${
                    isMobile
                      ? "top-2 left-2 px-2 py-0.5 text-[9px]"
                      : isTablet
                      ? "top-3.5 left-3.5 px-2.5 py-1 text-[11px]"
                      : "top-4 left-4 px-3 py-1.5 text-xs"
                  }
                  ${
                    hoveredIndex === idx && !isDragging
                      ? isMobile
                        ? "scale-105 shadow-md"
                        : "scale-110 shadow-lg"
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
                    transition-all duration-800 ease-out
                    ${
                      hoveredIndex === idx && !isDragging
                        ? isMobile
                          ? "scale-108 brightness-105"
                          : "scale-115 brightness-110"
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
                    transition-transform duration-1000 ease-out
                    ${
                      hoveredIndex === idx && !isDragging
                        ? "translate-x-full opacity-100"
                        : "-translate-x-full opacity-0"
                    }
                  `}
                />

                {/* Content */}
                <div
                  className={`relative flex h-full flex-col justify-end text-white z-10 ${
                    isMobile ? "p-3" : isTablet ? "p-5" : "p-7"
                  }`}
                >
                  {/* Destination Name */}
                  <h3
                    className={`
                      font-inter-bold transition-all duration-400 ease-out
                      ${
                        isMobile
                          ? "text-base mb-1"
                          : isTablet
                          ? "text-2xl mb-2"
                          : "text-3xl mb-3"
                      }
                      ${
                        hoveredIndex === idx && !isDragging
                          ? isMobile
                            ? "translate-y-0 opacity-100 scale-102"
                            : "translate-y-0 opacity-100 scale-105 text-shadow-lg"
                          : "translate-y-0.5 opacity-95"
                      }
                    `}
                  >
                    {trip.title}
                  </h3>

                  {/* Starting from text */}
                  <p
                    className={`
                      font-inter-medium transition-all duration-300 ease-out
                      ${
                        isMobile
                          ? "text-[10px] mb-0.5"
                          : isTablet
                          ? "text-xs mb-1.5"
                          : "text-sm mb-2"
                      }
                      ${
                        hoveredIndex === idx && !isDragging
                          ? isMobile
                            ? "opacity-100 scale-102"
                            : "opacity-100 scale-105"
                          : "opacity-80"
                      }
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
                          ? "text-sm mb-1.5"
                          : isTablet
                          ? "text-xl mb-3"
                          : "text-2xl mb-4"
                      }
                      ${
                        hoveredIndex === idx && !isDragging
                          ? isMobile
                            ? "scale-102"
                            : "scale-105 text-orange-300 drop-shadow-lg"
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
                      border border-white/20 transition-all duration-500 ease-out
                      ${
                        isMobile
                          ? "bottom-3 right-3 p-1.5"
                          : isTablet
                          ? "bottom-5 right-5 p-2.5"
                          : "bottom-7 right-7 p-3.5"
                      }
                      ${
                        hoveredIndex === idx && !isDragging
                          ? isMobile
                            ? "bg-orange-500/80 transform rotate-45 scale-110 shadow-lg border-orange-400/50"
                            : "bg-orange-500/80 transform rotate-45 scale-125 shadow-xl border-orange-400/50"
                          : "bg-white/20 transform rotate-0 scale-100"
                      }
                    `}
                  >
                    <ArrowUpRight
                      className={`text-white ${
                        isMobile ? "h-3 w-3" : isTablet ? "h-5 w-5" : "h-6 w-6"
                      }`}
                    />
                  </div>
                </div>

                {/* Hover Glow Border */}
                <div
                  className={`
                  absolute inset-0 border-2 transition-all duration-400
                  ${isMobile ? "rounded-2xl" : "rounded-3xl"}
                  ${
                    hoveredIndex === idx && !isDragging
                      ? isMobile
                        ? "border-orange-400/50 shadow-[0_0_15px_rgba(230,95,37,0.2)]"
                        : "border-orange-400/60 shadow-[0_0_25px_rgba(230,95,37,0.3)]"
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
          disabled={isTransitioning || isDragging}
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
