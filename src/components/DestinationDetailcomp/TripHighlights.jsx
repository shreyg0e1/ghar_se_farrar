import React from "react";
import { MapPin, Star, Camera, Mountain, Compass, Heart } from "lucide-react";

export default function TripHighlights({ tourData }) {
  // Get highlights from API data
  const getHighlightsData = () => {
    console.log(tourData);
    // If no tourData or no tripHighlights, return null
    if (!tourData || !tourData.tripHighlights) {
      return null;
    }

    return {
      title: "Trip Highlights",
      highlights: tourData.tripHighlights,
      showIcons: true,
      backgroundColor: "bg-white",
      textColor: "text-gray-700",
      titleColor: "text-gray-900",
      bulletColor: "text-[#E65F25]",
    };
  };

  const highlightsData = getHighlightsData();

  // If no data available
  if (!highlightsData) {
    return (
      <div className="w-full font-inter p-4 sm:p-6 bg-white rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Trip Highlights
        </h2>
        <div className="flex items-center justify-center h-24 sm:h-32 rounded-lg bg-gray-100">
          <p className="text-gray-500 text-base sm:text-lg text-center px-4">
            No highlights available
          </p>
        </div>
      </div>
    );
  }

  // Icon mapping for variety - expanded for more visual appeal
  const getIcon = (index) => {
    const icons = [MapPin, Star, Camera, Mountain, Compass, Heart];
    return icons[index % icons.length];
  };

  // For mobile, we'll use a grid layout for better space utilization
  const isLongList = highlightsData.highlights.length > 6;

  return (
    <div
      className={`w-full font-inter p-4 sm:p-6 ${highlightsData.backgroundColor} rounded-lg`}
    >
      {/* Title */}
      <h2
        className={`text-xl sm:text-2xl font-bold ${highlightsData.titleColor} mb-4 sm:mb-6`}
      >
        {highlightsData.title}
      </h2>

      {/* Mobile Grid Layout for longer lists */}
      {isLongList && (
        <div className="block sm:hidden">
          <div className="grid grid-cols-1 gap-3">
            {highlightsData.highlights.map((highlight, index) => {
              const IconComponent = highlightsData.showIcons
                ? getIcon(index)
                : null;

              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 active:scale-95 group"
                >
                  {/* Icon with background */}
                  {highlightsData.showIcons && IconComponent && (
                    <div className="flex-shrink-0 w-8 h-8 bg-[#E65F25] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Highlight Text */}
                  <p
                    className={`${highlightsData.textColor} text-sm leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-200`}
                  >
                    {highlight}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Standard List Layout for shorter lists and desktop */}
      {!isLongList && (
        <div className="space-y-3 sm:space-y-4">
          {highlightsData.highlights.map((highlight, index) => {
            const IconComponent = highlightsData.showIcons
              ? getIcon(index)
              : null;

            return (
              <div
                key={index}
                className="flex items-start gap-3 group active:scale-95 sm:active:scale-100 transition-all duration-200"
              >
                {/* Bullet Point or Icon */}
                <div className="flex-shrink-0 mt-1 sm:mt-2">
                  {highlightsData.showIcons && IconComponent ? (
                    <div className="relative">
                      <IconComponent
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${highlightsData.bulletColor} group-hover:scale-110 transition-transform duration-200`}
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-2 h-2 rounded-full bg-[#E65F25] mt-2 group-hover:scale-125 transition-transform duration-200`}
                    ></div>
                  )}
                </div>

                {/* Highlight Text */}
                <p
                  className={`${highlightsData.textColor} text-sm sm:text-base leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-200`}
                >
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Alternative Mobile Card Layout for medium lists */}
      {!isLongList && highlightsData.highlights.length > 3 && (
        <div className="block sm:hidden mt-4">
          <div className="grid grid-cols-2 gap-3">
            {highlightsData.highlights.map((highlight, index) => {
              const IconComponent = highlightsData.showIcons
                ? getIcon(index)
                : null;

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-3 rounded-lg border border-orange-100 hover:border-[#E65F25]/30 transition-all duration-200 active:scale-95 group"
                >
                  {highlightsData.showIcons && IconComponent && (
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="w-3 h-3 text-[#E65F25] group-hover:scale-110 transition-transform duration-200" />
                    
                    </div>
                  )}
                  <p className="text-xs text-gray-700 leading-tight group-hover:text-gray-900">
                    {highlight}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Summary for very long lists */}
      {isLongList && (
        <div className="mt-4 p-3 bg-gradient-to-r from-[#E65F25]/5 to-transparent rounded-lg border border-[#E65F25]/20">
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            <span className="font-semibold text-[#E65F25]">
              {highlightsData.highlights.length} amazing highlights
            </span>{" "}
            to make your trip unforgettable
          </p>
        </div>
      )}

      {/* Visual Separator */}
      <div className="mt-4 sm:mt-6 h-px bg-gradient-to-r from-transparent via-[#E65F25]/20 to-transparent"></div>
    </div>
  );
}
