import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function DestinationRoutes({ tourData }) {
  // Get routes from API data
  const getRouteData = () => {
    // If no tourData or no destinationRoutes, return null
    if (!tourData || !tourData.destinationRoutes) {
      return null;
    }

    return {
      title: "Destination Routes",
      routes: tourData.destinationRoutes,
    };
  };

  const routeData = getRouteData();

  // If no data available
  if (!routeData) {
    return (
      <div className="w-full font-inter mt-8 sm:mt-12 px-3 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Destination Routes
        </h2>
        <div className="flex items-center justify-center h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-gray-100 border-2 border-gray-200 p-4">
          <p className="text-gray-500 text-base sm:text-lg text-center">
            No route details available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter mt-8 sm:mt-12 px-3 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        {routeData.title}
      </h2>

      {/* Routes Container */}
      <div className="border-2 border-[#E65F25] rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-r from-[#E65F25]/5 to-transparent hover:from-[#E65F25]/10 transition-all duration-300">
        {/* Mobile Vertical Layout */}
        <div className="block sm:hidden">
          <div className="space-y-3">
            {routeData.routes.map((route, index) => (
              <div key={index} className="flex items-center space-x-3">
                {/* Route Number */}
                <div className="flex-shrink-0 w-6 h-6 bg-[#E65F25] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>

                {/* Route Name */}
                <span className="text-[#E65F25] font-semibold text-base flex-1">
                  {route}
                </span>

                {/* Map Pin Icon for last destination */}
                {index === routeData.routes.length - 1 && (
                  <MapPin className="w-4 h-4 text-[#E65F25] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Layout */}
        <div className="hidden sm:flex flex-wrap items-center gap-3">
          {routeData.routes.map((route, index) => (
            <React.Fragment key={index}>
              {/* Route Name */}
              <div className="flex items-center">
                <span className="text-[#E65F25] font-semibold text-lg hover:text-[#FF6F35] transition-colors duration-200 cursor-default">
                  {route}
                </span>
              </div>

              {/* Arrow (don't show after last item) */}
              {index < routeData.routes.length - 1 && (
                <ArrowRight className="w-5 h-5 text-[#E65F25] flex-shrink-0 animate-pulse" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Route Progress Bar */}
        <div className="block sm:hidden mt-4">
          <div className="flex items-center justify-between px-2">
            {routeData.routes.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-3 h-3 rounded-full ${
                    index === 0 ? "bg-[#E65F25]" : "bg-[#E65F25]/30"
                  }`}
                />
                {index < routeData.routes.length - 1 && (
                  <div
                    className={`flex-1 h-1 ${
                      index === 0 ? "bg-[#E65F25]" : "bg-[#E65F25]/30"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-[#E65F25] via-[#E65F25]/50 to-transparent rounded-full"></div>

        {/* Mobile Summary */}
        <div className="block sm:hidden mt-3 text-center">
          <p className="text-xs text-gray-600">
            {routeData.routes.length} destinations • Start to finish
          </p>
        </div>
      </div>

      {/* Alternative Mobile View for Very Long Routes */}
      {routeData.routes.length > 4 && (
        <div className="block sm:hidden mt-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Quick Overview
            </h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p>
                Starting:{" "}
                <span className="font-medium text-[#E65F25]">
                  {routeData.routes[0]}
                </span>
              </p>
              <p>
                Ending:{" "}
                <span className="font-medium text-[#E65F25]">
                  {routeData.routes[routeData.routes.length - 1]}
                </span>
              </p>
              <p>
                Total stops:{" "}
                <span className="font-medium text-[#E65F25]">
                  {routeData.routes.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
