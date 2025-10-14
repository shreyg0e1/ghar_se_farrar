import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
} from "lucide-react";

const InfiniteCarouselFourVisible = ({ tours = [], title, id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Memoize the tours to prevent unnecessary re-renders
  const memoizedTours = useMemo(() => {
    console.log("Tours received:", tours);
    return Array.isArray(tours) ? tours : [];
  }, [tours]);

  // Debug: Log when component renders
  useEffect(() => {
    console.log("Component rendered with tours:", memoizedTours.length);
  }, [memoizedTours.length]);

  // Update visible cards and mobile detection based on screen size
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) {
        setVisibleCards(1.2);
      } else if (width < 768) {
        setVisibleCards(2);
      } else if (width < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Create infinite loop by duplicating tours only if we have tours
  const extendedTours = useMemo(() => {
    if (memoizedTours.length === 0) return [];
    return [...memoizedTours, ...memoizedTours, ...memoizedTours];
  }, [memoizedTours]);

  // Initialize current index when tours change
  useEffect(() => {
    if (memoizedTours.length > 0) {
      setCurrentIndex(memoizedTours.length);
    }
  }, [memoizedTours.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle infinite loop
  useEffect(() => {
    if (memoizedTours.length === 0) return;

    const totalTours = memoizedTours.length;

    if (currentIndex >= totalTours * 2) {
      const timer = setTimeout(() => {
        setCurrentIndex(totalTours);
      }, 50);
      return () => clearTimeout(timer);
    } else if (currentIndex < totalTours) {
      const timer = setTimeout(() => {
        setCurrentIndex(totalTours * 2 - 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, memoizedTours.length]);

  // Handle card click
  const handleCardClick = useCallback(
    (tour) => {
      console.log("Card clicked:", tour?.pkgId);

      if (tour?.pkgId) {
        localStorage.setItem("id", tour.pkgId);
        navigate(`/destination-detail/${id}`, {
          state: { tourData: tour },
        });
      }
    },
    [id, navigate]
  );

  // Handle button click
  const handleBookNowClick = useCallback((e, tour) => {
    e.stopPropagation();
    console.log("Book Now clicked for tour:", tour.title);
    // Add your booking logic here
  }, []);

  // Memoized TourCard component to prevent unnecessary re-renders
  const TourCard = useCallback(
    ({ tour }) => (
      <div
        onClick={() => handleCardClick(tour)}
        className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 cursor-pointer h-full flex flex-col active:scale-95 sm:active:scale-100"
      >
        {/* Premium Featured Badge */}
        {tour.featured && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-bold tracking-widest shadow-2xl border border-[#E65F25]/30 bg-gradient-to-r from-[#E65F25] via-[#FF6B35] to-[#E65F25] text-white backdrop-blur-sm animate-gradient bg-[length:200%_100%]">
            <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              FEATURED
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-lg blur-sm"></div>
          </div>
        )}

        {/* Image Container */}
        <div className="relative overflow-hidden h-28 sm:h-36">
          <img
            src={tour.image || "/default-tour-image.jpg"}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "/default-tour-image.jpg";
            }}
          />

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current" />
            <span className="text-xs font-semibold text-gray-700">
              {tour.rating || 4.8}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Premium Glass Shine Effect on Hover - Desktop only */}
        <div className="absolute inset-0 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 sm:group-hover:left-full transition-all duration-1000"></div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col relative">
          <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2 group-hover:text-[#E65F25] transition-colors duration-300 leading-tight min-h-[2.5rem] line-clamp-2">
            {tour.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-600 mb-2">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E65F25] flex-shrink-0" />
            <span className="text-xs truncate">{tour.location}</span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E65F25] flex-shrink-0" />
              <span className="text-xs text-gray-600 truncate">
                {tour.duration}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E65F25] flex-shrink-0" />
              <span className="text-xs text-gray-600 truncate">
                {tour.groupSize || "2-15 People"}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E65F25] flex-shrink-0" />
              <span className="text-xs text-gray-600 truncate">
                {tour.season || "May-Sep"}
              </span>
            </div>
            <div className="text-xs text-gray-600 font-medium truncate">
              {tour.tourType}
            </div>
          </div>

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <div className="flex flex-wrap gap-1">
                {tour.highlights.slice(0, 2).map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#E65F25]/10 text-[#E65F25] px-2 py-0.5 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3 border-t border-gray-100">
            <div>
              <span className="text-base sm:text-lg font-bold text-[#E65F25]">
                ₹{tour.price?.toLocaleString() || "0"}
              </span>
              <span className="text-xs text-gray-500 block">per person</span>
            </div>

            <button
              onClick={(e) => handleBookNowClick(e, tour)}
              className="bg-gradient-to-r from-[#E65F25] to-[#FF7A42] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-semibold hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#E65F25]/40 transform hover:scale-105 transition-all duration-300 cursor-pointer text-xs active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    ),
    [handleCardClick, handleBookNowClick]
  );

  // Calculate card width based on visible cards
  const cardWidth = 100 / visibleCards;

  if (memoizedTours.length === 0) {
    return (
      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E65F25] to-[#FF7A42] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              No tours available at the moment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E65F25] to-[#FF7A42] bg-clip-text text-transparent px-2">
            {title}
            <span className="text-sm text-gray-500 block mt-2">
              ({memoizedTours.length} tours available)
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#E65F25] to-[#FF7A42] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative px-10 sm:px-12 md:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 
                       bg-gradient-to-r from-[#E65F25] to-[#FF7A42] text-white 
                       p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl 
                       hover:shadow-[#E65F25]/30 transform hover:scale-110 
                       transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 
                       bg-gradient-to-r from-[#E65F25] to-[#FF7A42] text-white 
                       p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl 
                       hover:shadow-[#E65F25]/30 transform hover:scale-110 
                       transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div ref={containerRef} className="overflow-hidden select-none">
            <div
              className="flex gap-3 sm:gap-4 md:gap-5 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * cardWidth}%))`,
              }}
            >
              {extendedTours.map((tour, index) => (
                <div
                  key={`${tour.id || tour._id}-${index}`}
                  className="flex-none"
                  style={{ width: `calc(${cardWidth}% - 12px)` }}
                >
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Indicators */}
        {isMobile && memoizedTours.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {memoizedTours
              .slice(0, Math.min(5, memoizedTours.length))
              .map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex % memoizedTours.length === dotIndex
                      ? "bg-[#E65F25] scale-125"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    const realStart = memoizedTours.length;
                    setCurrentIndex(realStart + dotIndex);
                  }}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(InfiniteCarouselFourVisible);
