import React, { useState } from "react";
import { ChevronDown, ChevronRight, MapPin, Clock, Car } from "lucide-react";

export default function TripItinerary({ tourData }) {
  const [expandedDays, setExpandedDays] = useState({});
  const [allExpanded, setAllExpanded] = useState(false);

  // Get itinerary data from API - FIXED VERSION
  const getItineraryData = () => {
    // If no tourData, return null
    if (!tourData) {
      return null;
    }

    // Check if we have proper itinerary data from API
    if (
      tourData.itineary &&
      Array.isArray(tourData.itineary) &&
      tourData.itineary.length > 0
    ) {
      // Transform API data to match component structure
      const transformedDays = tourData.itineary.map((item, index) => ({
        day: index + 1,
        title: item.day || `Day ${index + 1}`,
        details: item.details
          ? [item.details]
          : ["No details available for this day"],
        // You can add images if available in your API
        image: item.image || null,
      }));

      return {
        days: transformedDays,
      };
    }

    // Fallback: Create itinerary from destination routes if available
    if (
      tourData.destinationRoutes &&
      Array.isArray(tourData.destinationRoutes) &&
      tourData.destinationRoutes.length > 0
    ) {
      const transformedDays = tourData.destinationRoutes.map(
        (route, index) => ({
          day: index + 1,
          title: route,
          details: [`Exploring ${route} and surrounding areas`],
          image: null,
        })
      );

      return {
        days: transformedDays,
      };
    }

    // Final fallback: Use trip highlights
    if (
      tourData.tripHighlights &&
      Array.isArray(tourData.tripHighlights) &&
      tourData.tripHighlights.length > 0
    ) {
      const transformedDays = tourData.tripHighlights.map(
        (highlight, index) => ({
          day: index + 1,
          title: `Day ${index + 1}: ${highlight}`,
          details: [`Experience ${highlight} and enjoy the scenic beauty`],
          image: null,
        })
      );

      return {
        days: transformedDays,
      };
    }

    return null;
  };

  const itineraryData = getItineraryData();

  const toggleDay = (dayNumber) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNumber]: !prev[dayNumber],
    }));
  };

  const toggleAllDays = () => {
    if (!itineraryData) return;

    if (allExpanded) {
      setExpandedDays({});
    } else {
      const allDaysExpanded = {};
      itineraryData.days.forEach((day) => {
        allDaysExpanded[day.day] = true;
      });
      setExpandedDays(allDaysExpanded);
    }
    setAllExpanded(!allExpanded);
  };

  // If no data available
  if (!itineraryData) {
    return (
      <div className="w-full font-inter p-4 sm:p-6 text-center">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="text-gray-700 font-semibold text-lg mb-2">
            Itinerary Details
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mb-4">
            Detailed day-by-day itinerary coming soon
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left max-w-md mx-auto">
            <h4 className="font-semibold text-gray-700 mb-2">
              What to Expect:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Multiple destination experiences</li>
              <li>• Guided tours and activities</li>
              <li>• Comfortable accommodations</li>
              <li>• Local cuisine experiences</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter">
      {/* Mobile Header with Expand All */}
      <div className="sm:hidden flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#E65F25]" />
          <span className="text-sm font-semibold text-gray-700">
            {itineraryData.days.length} Days
          </span>
        </div>
        <button
          onClick={toggleAllDays}
          className="text-xs text-[#E65F25] font-semibold bg-white px-3 py-1.5 rounded-full border border-[#E65F25]/30 hover:bg-[#E65F25]/5 transition-colors duration-200 active:scale-95"
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* Itinerary Content */}
      <div className="space-y-3 sm:space-y-6">
        {itineraryData.days.map((dayData, index) => (
          <div
            key={dayData.day}
            className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden active:scale-95 sm:active:scale-100 transition-transform duration-200"
          >
            {/* Image for every day if available */}
            {dayData.image && (
              <div className="w-full h-40 sm:h-64 overflow-hidden">
                <img
                  src={dayData.image}
                  alt={`Day ${dayData.day}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Day Header */}
            <div
              className="p-3 sm:p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 active:bg-gray-100"
              onClick={() => toggleDay(dayData.day)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="bg-[#E65F25] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex-shrink-0">
                    DAY {dayData.day}
                  </div>
                  <h3 className="text-gray-800 font-semibold text-sm sm:text-lg truncate flex-1">
                    {dayData.title}
                  </h3>
                </div>
                <div className="text-[#E65F25] flex-shrink-0 ml-2">
                  {expandedDays[dayData.day] ? (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200" />
                  )}
                </div>
              </div>

              {/* Mobile Quick Info */}
              <div className="sm:hidden flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>Full Day</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Car className="w-3 h-3" />
                  <span>Multiple Stops</span>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            {expandedDays[dayData.day] && (
              <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-gray-100 bg-gray-50">
                <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                  {dayData.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-0"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E65F25] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-1">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="sm:hidden flex gap-2 mt-3 pt-3 border-t border-gray-200">
                  <button className="flex-1 bg-white text-[#E65F25] border border-[#E65F25] py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#E65F25] hover:text-white active:scale-95">
                    Save Day
                  </button>
                  <button className="flex-1 bg-[#E65F25] text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#FF6F35] active:scale-95">
                    Add to Calendar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Itinerary Summary - Mobile */}
      <div className="sm:hidden mt-6 bg-gradient-to-r from-[#E65F25]/5 to-orange-50 rounded-xl p-4 border border-[#E65F25]/20">
        <h4 className="font-semibold text-gray-800 text-sm mb-2">
          Trip Summary
        </h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E65F25] rounded-full"></div>
            <span className="text-gray-600">
              {itineraryData.days.length} Days
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Expert Guided</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">All Meals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">Accommodation</span>
          </div>
        </div>
      </div>

      {/* Desktop Expand All Button */}
      <div className="hidden sm:flex justify-center mt-6">
        <button
          onClick={toggleAllDays}
          className="bg-[#E65F25] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#FF6F35] hover:scale-105 hover:shadow-lg active:scale-95"
        >
          {allExpanded ? "Collapse All Days" : "Expand All Days"}
        </button>
      </div>
    </div>
  );
}
