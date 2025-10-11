import React from "react";
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Car,
  Utensils,
  Home,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function TripOverview({ tourData }) {
  // Get overview data from API
  const getOverviewData = () => {
    // If no tourData or no overview, return null
    if (!tourData || !tourData.overview) {
      return null;
    }

    console.log(tourData.overview);
    // Use API overview data
    const apiOverview = tourData.overview[0];

    return {
      title: tourData.title || "Ladakh Adventure",
      subtitle: "7 Days of Mountains, Monasteries & Magic",
      duration: tourData.duration || "7D/6N",
      price: `₹${tourData.price}` || "₹23,999",
      originalPrice: "₹22,499",
      rating: "4.87/357",

      // Journey Info from API
      journey: {
        pickup: apiOverview.pickup || "Delhi Airport/Railway Station",
        drop: apiOverview.drop || "Delhi Airport/Railway Station",
      },

      // Trip Highlights from API
      highlights: tourData.tripHighlights || [
        "Leh, Nubra, Pangong, Turtuk",
        "Camping, Monastery visits, River Rafting",
        "Adventure lovers, Photographers, Friends, Couples",
      ],

      // Map locations from API destinationRoutes
      mapLocations: tourData.destinationRoutes
        ? tourData.destinationRoutes.map((location, index) => ({
            name: location,
            type:
              index === 0
                ? "start"
                : index === tourData.destinationRoutes.length - 1
                ? "end"
                : "destination",
          }))
        : [
            { name: "Leh", type: "start" },
            { name: "Nubra Valley", type: "destination" },
            { name: "Pangong Lake", type: "destination" },
            { name: "Turtuk Village", type: "destination" },
            { name: "Turtuk", type: "end" },
          ],

      // Itinerary Snapshot from API itineary
      itinerarySnapshot: tourData.itineary
        ? tourData.itineary.slice(0, 6).map((item, index) => ({
            day: index + 1,
            title: item.day,
          }))
        : [
            { day: 1, title: "Arrival at Leh" },
            { day: 2, title: "Acclimatization + Local Sightseeing" },
            { day: 3, title: "Drive to Nubra Valley" },
            { day: 4, title: "Turtuk Village" },
            { day: 5, title: "Pangong Lake" },
            { day: 6, title: "Leh Market & Monastery" },
          ],

      // What's Included from API
      included: apiOverview.included
        ? [
            { icon: Home, text: "Stay", detail: "Hotels/Camps" },
            { icon: Utensils, text: "Meals", detail: "Breakfast + Dinner" },
            { icon: Car, text: "Transport", detail: "SUV/Tempo Traveler" },
            { icon: Users, text: "Guide", detail: "Experienced Guide" },
          ]
        : [
            { icon: Home, text: "Stay", detail: "Hotels/Camps" },
            { icon: Utensils, text: "Meals", detail: "Breakfast + Dinner" },
            { icon: Car, text: "Transport", detail: "SUV/Tempo Traveler" },
            { icon: Users, text: "Guide", detail: "Experienced Guide" },
          ],

      // Trip Essentials from API
      essentials: apiOverview.essentials
        ? apiOverview.essentials.map((essential) => ({
            icon: "🧥",
            text: essential,
          }))
        : [
            { icon: "🧥", text: "Warm jackets" },
            { icon: "🕶️", text: "Sunglasses" },
            { icon: "🔋", text: "Power bank" },
            { icon: "🆔", text: "ID Proof" },
            { icon: "💊", text: "Medicines" },
            { icon: "📄", text: "Permits" },
          ],
    };
  };

  const data = getOverviewData();

  // If no data available
  if (!data) {
    return (
      <div className="w-full font-inter bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl">
        <div className="text-center py-6 sm:py-8">
          <div className="text-4xl mb-4">📋</div>
          <p className="text-gray-500 text-base sm:text-lg">
            No overview details available
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Check back later for trip information
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl">
      {/* Header Section - Stack on mobile */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        {/* Left - Trip Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Icon */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E65F25] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                {data.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 line-clamp-2">
                {data.subtitle}
              </p>

              {/* Mobile Compact Info */}
              <div className="sm:hidden space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="bg-[#E65F25]/10 px-3 py-1.5 rounded-full">
                    <span className="text-[#E65F25] font-bold text-sm">
                      {data.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-[#E65F25]">
                      {data.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {data.originalPrice}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-gray-700 font-medium text-sm">
                    {data.rating}
                  </span>
                </div>
              </div>

              {/* Desktop Info */}
              <div className="hidden sm:flex items-center gap-4 lg:gap-6 flex-wrap">
                <div className="bg-[#E65F25]/10 px-4 py-2 rounded-full">
                  <span className="text-[#E65F25] font-bold text-lg">
                    {data.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl lg:text-2xl font-bold text-[#E65F25]">
                    {data.price}
                  </span>
                  <span className="text-base lg:text-lg text-gray-400 line-through">
                    {data.originalPrice}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700 font-medium">
                    {data.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Info */}
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border-l-4 border-[#E65F25] mb-4 sm:mb-6">
            <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
              <Car className="w-4 h-4 sm:w-5 sm:h-5 text-[#E65F25]" />
              Journey Route
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-xs sm:text-sm text-gray-500">Pickup</p>
                <p className="font-medium text-gray-800 text-xs sm:text-sm line-clamp-1">
                  {data.journey.pickup}
                </p>
              </div>
              <div className="flex-1 mx-2 sm:mx-4">
                <div className="h-0.5 bg-gradient-to-r from-[#E65F25] to-orange-300"></div>
              </div>
              <div className="text-center flex-1">
                <p className="text-xs sm:text-sm text-gray-500">Drop</p>
                <p className="font-medium text-gray-800 text-xs sm:text-sm line-clamp-1">
                  {data.journey.drop}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Map Visualization */}
        <div className="lg:w-96">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 h-full">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-center text-sm sm:text-base">
              Route Map
            </h3>
            <div className="relative">
              <div className="space-y-2 sm:space-y-3">
                {data.mapLocations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0 ${
                        location.type === "start"
                          ? "bg-green-500"
                          : location.type === "end"
                          ? "bg-red-500"
                          : "bg-[#E65F25]"
                      } shadow-md`}
                    ></div>
                    <span className="text-gray-700 font-medium text-xs sm:text-sm flex-1 truncate">
                      {location.name}
                    </span>
                    {index < data.mapLocations.length - 1 && (
                      <div className="absolute left-1.5 sm:left-2 mt-4 sm:mt-6 w-0.5 h-3 sm:h-4 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Map CTA */}
            <div className="sm:hidden mt-4">
              <button className="w-full bg-white text-[#E65F25] border border-[#E65F25] py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#E65F25] hover:text-white active:scale-95 flex items-center justify-center gap-1">
                View Full Route Map
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid - Stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Trip Highlights */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 active:scale-95 sm:active:scale-100">
          <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#E65F25]" />
            Trip Highlights
          </h3>
          <div className="space-y-2 sm:space-y-3">
            {data.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 group"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#E65F25] mt-0.5 sm:mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-1">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary Snapshot */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 active:scale-95 sm:active:scale-100">
          <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#E65F25]" />
            Itinerary Snapshot
          </h3>
          <div className="space-y-1 sm:space-y-2">
            {data.itinerarySnapshot.map((day, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#E65F25] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                  {day.day}
                </div>
                <span className="text-gray-700 text-xs sm:text-sm flex-1 truncate">
                  {day.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 active:scale-95 sm:active:scale-100">
          <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#E65F25]" />
            What's Included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {data.included.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-[#E65F25]/10 transition-colors active:bg-[#E65F25]/20"
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#E65F25] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 text-xs sm:text-sm truncate">
                      {item.text}
                    </p>
                    <p className="text-gray-600 text-xs truncate">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trip Essentials */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 active:scale-95 sm:active:scale-100">
          <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
            Trip Essentials
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {data.essentials.map((essential, index) => (
              <div
                key={index}
                className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-[#E65F25]/10 transition-colors group active:bg-[#E65F25]/20"
              >
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  {essential.icon}
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm leading-tight line-clamp-2">
                  {essential.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Summary Footer */}
      <div className="sm:hidden mt-6 bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Total Duration</p>
            <p className="font-semibold text-gray-800">{data.duration}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Rating</p>
            <p className="font-semibold text-gray-800 flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              {data.rating.split("/")[0]}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Price</p>
            <p className="font-semibold text-[#E65F25]">{data.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
