import React, { useState } from "react";
import { Shirt, Heart, Pill, Plus } from "lucide-react";

export default function TripEssentials({ tourData }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Get essentials data from API
  const getEssentialsData = () => {
    // If no tourData or no packagingList, return null
    if (!tourData || !tourData.packagingList) {
      return null;
    }

    // Transform API data to match component structure
    const categories = [
      {
        id: "clothing",
        title: "CLOTHING",
        icon: Shirt,
        iconBg: "bg-blue-500",
        cardBg: "from-blue-50 to-indigo-100",
      },
      {
        id: "toiletries",
        title: "TOILETRIES",
        icon: Heart,
        iconBg: "bg-pink-500",
        cardBg: "from-pink-50 to-rose-100",
      },
      {
        id: "medicines",
        title: "MEDICINES",
        icon: Pill,
        iconBg: "bg-green-500",
        cardBg: "from-green-50 to-emerald-100",
      },
      {
        id: "extras",
        title: "EXTRAS",
        icon: Plus,
        iconBg: "bg-[#E65F25]",
        cardBg: "from-orange-50 to-amber-100",
      },
    ];

    // Map API packagingList to categories
    const transformedCategories = categories.map((category, index) => {
      const apiCategory = tourData.packagingList[index];
      return {
        ...category,
        items:
          apiCategory && apiCategory.pack && apiCategory.pack.details
            ? apiCategory.pack.details
            : [],
      };
    });

    return {
      title: "Essential Packing List",
      subtitle: "Everything you need for a perfect trip",
      categories: transformedCategories,
      packingTips: tourData.packingTips
        ? tourData.packingTips
        : [
            "Pack Light: Choose multipurpose items when possible",
            "Weather Ready: Ladakh weather can be unpredictable",
            "Health First: Altitude medicines are mandatory",
          ],
    };
  };

  const data = getEssentialsData();

  // If no data available
  if (!data) {
    return (
      <div className="w-full font-inter">
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            No essentials details available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.subtitle}</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {data.categories.map((category) => {
          const IconComponent = category.icon;

          return (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.cardBg} rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-white/20`}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 ${
                    category.iconBg
                  } rounded-lg flex items-center justify-center shadow-md ${
                    hoveredCard === category.id ? "scale-110" : ""
                  } transition-transform duration-300`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-1.5">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-1.5 rounded-lg bg-white/60 hover:bg-white/80 transition-all duration-200 ${
                      hoveredCard === category.id ? "translate-x-1" : ""
                    }`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#E65F25] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-xs font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-3 pt-3 border-t border-white/30">
                <div className="flex justify-between items-center text-xs text-gray-600">
                  <span>{category.items.length} items</span>
                  <span
                    className={`px-2 py-0.5 ${category.iconBg} text-white rounded-full text-xs`}
                  >
                    Essential
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Tips Section */}
      <div className="mt-6 bg-gradient-to-r from-[#E65F25]/10 to-orange-50 rounded-xl p-4 border border-[#E65F25]/20">
        <div className="text-center">
          <h4 className="font-bold text-gray-900 mb-2">💡 Packing Tips</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700">
            {data.packingTips.map((tip, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-2">
                {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// // Ye jo hai essential ye bada vala hai toda:- end

//// ye jo hai essential ye chota vala hai:- start
// import React, { useState } from 'react';
// import { Shirt, Heart, Pill, Plus } from 'lucide-react';

// export default function TripEssentials({ essentialsData }) {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Default data structure (can be replaced with props)
//   const defaultEssentialsData = {
//     title: "Essential Packing List",
//     subtitle: "Everything you need for a perfect trip",

//     categories: [
//       {
//         id: "clothing",
//         title: "CLOTHING",
//         icon: Shirt,
//         iconBg: "bg-blue-500",
//         cardBg: "from-blue-50 to-indigo-100",
//         items: [
//           "Warm jackets",
//           "Thermals",
//           "Gloves",
//           "Woolen socks",
//           "Cap",
//           "Sunglasses",
//           "Trekking shoes"
//         ]
//       },
//       {
//         id: "toiletries",
//         title: "TOILETRIES",
//         icon: Heart,
//         iconBg: "bg-pink-500",
//         cardBg: "from-pink-50 to-rose-100",
//         items: [
//           "Sunscreen",
//           "Lipbalm",
//           "Moisturiser",
//           "Toothbrush",
//           "Toothpaste",
//           "Shampoo",
//           "Body wash"
//         ]
//       },
//       {
//         id: "medicines",
//         title: "MEDICINES",
//         icon: Pill,
//         iconBg: "bg-green-500",
//         cardBg: "from-green-50 to-emerald-100",
//         items: [
//           "Diamox",
//           "Fever medicines",
//           "Cold medicines",
//           "Digestion medicines",
//           "Personal medicines",
//           "First aid kit",
//           "Bandages"
//         ]
//       },
//       {
//         id: "extras",
//         title: "EXTRAS",
//         icon: Plus,
//         iconBg: "bg-[#E65F25]",
//         cardBg: "from-orange-50 to-amber-100",
//         items: [
//           "Power bank",
//           "Thermal water bottle",
//           "Torch",
//           "Phone charger",
//           "Camera",
//           "Extra batteries",
//           "Cash"
//         ]
//       }
//     ]
//   };

//   const data = essentialsData || defaultEssentialsData;

//   return (
//     <div className="w-full font-inter max-h-[130vh] overflow-y-auto">
//       {/* Compact Header Section */}
//       <div className="text-center mb-4">
//         <h2 className="text-xl font-bold text-gray-900 mb-1">{data.title}</h2>
//         <p className="text-gray-600 text-sm">{data.subtitle}</p>
//       </div>

//       {/* Ultra Compact Cards Grid */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
//         {data.categories.map((category) => {
//           const IconComponent = category.icon;

//           return (
//             <div
//               key={category.id}
//               className={`bg-gradient-to-br ${category.cardBg} rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-white/20`}
//               onMouseEnter={() => setHoveredCard(category.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Card Header - Compact */}
//               <div className="flex items-center gap-2 mb-2">
//                 <div className={`w-8 h-8 ${category.iconBg} rounded-lg flex items-center justify-center shadow-md ${
//                   hoveredCard === category.id ? 'scale-110' : ''
//                 } transition-transform duration-300`}>
//                   <IconComponent className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs font-bold text-gray-800">{category.title}</h3>
//                 </div>
//               </div>

//               {/* Items List - Ultra Compact */}
//               <div className="space-y-1 max-h-32 overflow-y-auto">
//                 {category.items.slice(0, 5).map((item, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-center gap-1.5 p-1 rounded-md bg-white/60 hover:bg-white/80 transition-all duration-200 ${
//                       hoveredCard === category.id ? 'translate-x-0.5' : ''
//                     }`}
//                     style={{ transitionDelay: `${index * 20}ms` }}
//                   >
//                     <div className="w-1 h-1 bg-[#E65F25] rounded-full flex-shrink-0"></div>
//                     <span className="text-gray-700 text-xs font-medium leading-tight">{item}</span>
//                   </div>
//                 ))}
//                 {category.items.length > 5 && (
//                   <div className="text-center">
//                     <span className="text-xs text-gray-500">+{category.items.length - 5} more</span>
//                   </div>
//                 )}
//               </div>

//               {/* Card Footer - Compact */}
//               <div className="mt-2 pt-2 border-t border-white/30">
//                 <div className="flex justify-between items-center text-xs text-gray-600">
//                   <span className="text-xs">{category.items.length} items</span>
//                   <span className={`px-1.5 py-0.5 ${category.iconBg} text-white rounded-full text-xs`}>
//                     Essential
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom Tips Section - Compact */}
//       <div className="mt-4 bg-gradient-to-r from-[#E65F25]/10 to-orange-50 rounded-lg p-3 border border-[#E65F25]/20">
//         <div className="text-center">
//           <h4 className="font-bold text-gray-900 mb-2 text-sm">💡 Packing Tips</h4>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-700">
//             <div className="bg-white/80 rounded-md p-2">
//               <span className="font-medium">Pack Light:</span> Choose multipurpose items
//             </div>
//             <div className="bg-white/80 rounded-md p-2">
//               <span className="font-medium">Weather Ready:</span> Ladakh weather is unpredictable
//             </div>
//             <div className="bg-white/80 rounded-md p-2">
//               <span className="font-medium">Health First:</span> Altitude medicines mandatory
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//// ye jo hai essential ye chota vala hai:- end
