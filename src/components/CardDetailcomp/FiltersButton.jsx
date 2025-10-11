// import React from 'react';
// import { Star, Users, Heart } from 'lucide-react';

// const FiltersButton = ({ activeFilter, setActiveFilter, onFilterClick }) => {
//   const filters = [
//     { id: 'bestSelling', label: 'Best Selling', icon: Star },
//     { id: 'groupTour', label: 'Group Tour', icon: Users },
//     { id: 'familyTours', label: 'Family Tours', icon: Heart },
//     { id: 'romanticTrips', label: 'Romantic Trips', icon: Heart }
//   ];

//   return (
//     <div className="py-12 bg-gradient-to-r from-gray-50 to-orange-50">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-wrap justify-center gap-4">
//           {filters.map((filter) => {
//             const Icon = filter.icon;
//             const isActive = activeFilter === filter.id;
            
//             return (
//               <button
//                 key={filter.id}
//                 onClick={() => onFilterClick(filter.id)}
//                 className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${
//                   isActive
//                     ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl shadow-orange-500/30'
//                     : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 shadow-lg hover:shadow-xl'
//                 }`}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl transition-opacity duration-300 ${
//                   isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-10'
//                 }`}></div>
                
//                 <span className="relative flex items-center">
//                   <Icon className={`w-5 h-5 mr-2 ${isActive ? 'text-white' : 'text-orange-500'}`} />
//                   {filter.label}
//                 </span>

//                 {/* Animated border */}
//                 <div className={`absolute inset-0 border-2 border-orange-500 rounded-2xl transition-all duration-300 ${
//                   isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-50'
//                 }`}></div>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FiltersButton;


























import React, { useState } from "react";
import { TrendingUp, Users, Home, Heart } from "lucide-react";

const FiltersButton = ({ onFilterChange, activeFilter = "bestSelling" }) => {
  const [selectedFilter, setSelectedFilter] = useState(activeFilter);

  const filters = [
    {
      id: "bestSelling",
      label: "Best Selling",
      icon: TrendingUp,
      description: "Most Popular",
    },
    {
      id: "groupTour",
      label: "Group Tour",
      icon: Users,
      description: "With Friends",
    },
    {
      id: "familyTours",
      label: "Family Tours",
      icon: Home,
      description: "For Families",
    },
    {
      id: "romanticTrips",
      label: "Romantic Trips",
      icon: Heart,
      description: "For Couples",
    },
  ];

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
    if (onFilterChange) onFilterChange(filterId);
  };

  return (
    <div className="py-14 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
            Choose Your Perfect Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Select from our curated travel experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.id;

            return (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                aria-pressed={isActive}
                className={`
                  relative group cursor-pointer overflow-hidden rounded-2xl px-6 py-5 text-center transition-all duration-400
                  ${
                    isActive
                      ? "bg-gradient-to-br from-[#E65F25] to-[#FF7A42] text-white shadow-md shadow-[#E65F25]/30 scale-105"
                      : "bg-white border border-gray-200 hover:border-[#E65F25]/40 hover:shadow-md hover:scale-[1.03]"
                  }
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E65F25]/30
                  min-w-[160px] max-w-[200px]
                `}
              >
                {/* Glow background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-[#E65F25]/10 to-[#FF7A42]/10 blur-xl`}
                />

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full transition-all duration-400
                    ${
                      isActive
                        ? "bg-white/20 backdrop-blur-md shadow-md"
                        : "bg-gradient-to-br from-[#E65F25]/10 to-[#FF7A42]/10 group-hover:from-[#E65F25]/20 group-hover:to-[#FF7A42]/20"
                    }
                  `}
                >
                  <Icon
                    className={`w-6 h-6 transition-transform duration-400 ${
                      isActive
                        ? "text-white scale-110"
                        : "text-[#E65F25] group-hover:scale-110"
                    }`}
                  />
                </div>

                {/* Label */}
                <h3
                  className={`relative font-semibold text-base mb-1 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-900 group-hover:text-[#E65F25]"
                  }`}
                >
                  {filter.label}
                </h3>

                {/* Description */}
                <p
                  className={`relative text-xs transition-colors duration-300 ${
                    isActive
                      ? "text-white/80"
                      : "text-gray-500 group-hover:text-gray-600"
                  }`}
                >
                  {filter.description}
                </p>

                {/* Active underline indicator */}
                {isActive && (
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-white/70" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FiltersButton;


