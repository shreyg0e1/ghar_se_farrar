import React, { useState } from "react";
import {
  Star,
  Download,
  Share2,
  Image,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function DestinationHeroSection({
  title,
  duration,
  itinerary,
  price,
  oldPrice,
  rating,
  reviews,
  images,
  video,
  categories,
}) {
  const [hoveredDayIndex, setHoveredDayIndex] = useState(null);
  const [showMobileItinerary, setShowMobileItinerary] = useState(false);

  // Use props directly without static fallbacks
  const tripData = {
    title: title,
    videoUrl: video,
    rating: parseFloat(rating),
    reviews: parseInt(reviews),
    currentPrice: parseInt(price?.toString().replace(/[^0-9]/g, "") || "0"),
    originalPrice: parseInt(oldPrice?.toString().replace(/[^0-9]/g, "") || "0"),
    duration: duration,
    itinerary: itinerary,
    categories: categories || [
      // Use only the images from props
      {
        title: "Destinations",
        image: images[0],
      },
      {
        title: "Stays",
        image: images[1],
      },
      {
        title: "Activity & Sightseeing",
        image: images[2],
      },
      {
        title: "View All Images",
        image: images[3],
        isViewAll: true,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 bg-white font-inter">
      {/* Main Layout - Stack on mobile, grid on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-6">
        {/* Main Hero Video - Full width on mobile, 8 cols on desktop */}
        <div className="lg:col-span-8 order-1">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden group">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={tripData.videoUrl} type="video/mp4" />
              {/* Fallback to first image if video doesn't load */}
              <img
                src={images[0]}
                alt={tripData.title}
                className="w-full h-full object-cover"
              />
            </video>

            {/* Download Itinerary & Share Button - positioned at bottom center of video */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 z-10">
              {/* Download Itinerary Button */}
              <button className="group/download bg-[#E65F25] hover:bg-[#FF6F35] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg flex items-center space-x-1 sm:space-x-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 cursor-pointer active:scale-95">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover/download:animate-bounce group-hover/download:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>Download Itinerary</span>
              </button>

              {/* Share Button */}
              <button className="group/share bg-[#E65F25] hover:bg-[#FF6F35] text-white p-2 sm:p-3 rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 cursor-pointer active:scale-95">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover/share:animate-pulse group-hover/share:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Images Grid - Full width on mobile, 4 cols on desktop */}
        <div className="lg:col-span-4 order-2 lg:order-2">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 h-[200px] sm:h-[300px] md:h-[500px]">
            {tripData.categories.map((category, index) => (
              <div
                key={index}
                className={`relative rounded-xl md:rounded-2xl overflow-hidden ${
                  category.isViewAll ? "cursor-pointer" : ""
                } transition-transform duration-300 hover:scale-[1.02] active:scale-95`}
              >
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Image className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0  bg-opacity-30 hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                  {category.isViewAll ? (
                    <div className="flex items-center space-x-1 sm:space-x-2 bg-white bg-opacity-90 px-2 py-1 sm:px-3 sm:py-2 rounded-lg hover:bg-opacity-100 transition-all duration-300">
                      <Image className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800">
                        {category.title}
                      </span>
                    </div>
                  ) : (
                    <h3 className="text-white text-sm sm:text-lg font-semibold drop-shadow-lg">
                      {category.title}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 md:mt-8 flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8">
        {/* Left Content - Full width on mobile, 8 cols on desktop */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {tripData.title}
          </h1>

          {/* Duration Tags */}
          <div className="mb-6 md:mb-8">
            {/* Duration Badge */}
            <div className="bg-[#E65F25] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md inline-block mb-4">
              {tripData.duration}
            </div>

            {/* Mobile Itinerary Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowMobileItinerary(!showMobileItinerary)}
                className="flex items-center space-x-2 text-[#E65F25] font-semibold text-sm mb-3"
              >
                <span>Itinerary Details</span>
                {showMobileItinerary ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Itinerary - Collapsible on mobile */}
            <div
              className={`${showMobileItinerary ? "block" : "hidden"} lg:block`}
            >
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {tripData.itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600 transition-all duration-300 ease-out"
                    onMouseEnter={() => setHoveredDayIndex(index)}
                    onMouseLeave={() => setHoveredDayIndex(null)}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 ${
                        hoveredDayIndex === index
                          ? "bg-[#E65F25] shadow-lg shadow-[#E65F25]/30"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold transition-colors duration-300 ${
                          hoveredDayIndex === index
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {item.days}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <div
                        className={`font-semibold transition-colors duration-300 whitespace-nowrap ${
                          hoveredDayIndex === index
                            ? "text-[#E65F25]"
                            : "text-gray-800"
                        }`}
                      >
                        {item.place}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Pricing Section - Full width on mobile, 4 cols on desktop */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          {/* Mobile Sticky Pricing Card */}
          <div className="lg:sticky lg:top-24 bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-sm transition-all duration-500 ease-out hover:shadow-xl lg:hover:shadow-2xl lg:hover:border-[#E65F25]/20 lg:hover:transform lg:hover:scale-[1.02] lg:hover:-translate-y-2 lg:hover:rotate-1 group/card">
            {/* Rating */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 fill-current group-hover/card:animate-pulse" />
                <span className="text-base sm:text-lg font-semibold text-gray-900">
                  {tripData.rating}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  ({tripData.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline space-x-2 mb-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  ₹{tripData.currentPrice.toLocaleString()}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  Per Adult
                </span>
              </div>
              {tripData.originalPrice > 0 && (
                <div className="text-xs sm:text-sm text-gray-400 line-through">
                  ₹{tripData.originalPrice.toLocaleString()}
                </div>
              )}
            </div>

            {/* Send Enquiry Button */}
            <button className="w-full bg-[#E65F25] hover:bg-[#FF6F35] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#E65F25]/30 cursor-pointer group-hover/card:animate-pulse active:scale-95">
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
