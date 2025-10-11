import React from "react";
import { Check, X } from "lucide-react";

export default function TripOfferings({ tourData }) {
  // Get offerings data from API
  const getOfferingsData = () => {
    // If no tourData or no offering, return null
    if (!tourData || !tourData.offering) {
      return null;
    }

    // Use API offering data
    const apiOffering = tourData.offering[0];

    return {
      title: "What's inside the package?",

      inclusions: apiOffering.include
        ? apiOffering.include
        : [
            
          ],

      exclusions: apiOffering.exclude
        ? apiOffering.exclude
        : [
            
          ],
    };
  };

  const data = getOfferingsData();

  // If no data available
  if (!data) {
    return (
      <div className="w-full font-inter">
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            No offerings details available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
        <div className="w-24 h-1 bg-[#E65F25] mx-auto rounded-full"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inclusions Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Inclusions</h3>
          </div>

          <div className="space-y-3">
            {data.inclusions.map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white/70 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                  {inclusion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions Section */}
        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-md">
              <X className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Exclusions</h3>
          </div>

          <div className="space-y-3">
            {data.exclusions.map((exclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white/70 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                  {exclusion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="mt-8 bg-gradient-to-r from-[#E65F25]/10 to-orange-50 rounded-2xl p-6 border-l-4 border-[#E65F25]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#E65F25] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
            <span className="text-white font-bold text-lg">!</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Important Note</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Please review the inclusions and exclusions carefully before
              booking. For any specific requirements or clarifications, feel
              free to contact our travel experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
//// ye vala offerings  bada hai scroll krna pdega:-end

//// ye vala offerings 1 viewport me aajaiga saaar:-start

// import React from 'react';
// import { Check, X } from 'lucide-react';

// export default function TripOfferings({ offeringsData }) {

//   // Default data structure (can be replaced with props)
//   const defaultOfferingsData = {
//     title: "What's inside the package?",

//     inclusions: [
//       "3 nights stay in Leh with breakfast and lunch or dinner",
//       "2 nights stay in Nubra Valley with breakfast and lunch or dinner",
//       "1 night stay in Pangong Tso with breakfast and lunch or dinner",
//       "Sham Valley Sightseeing Tour on a Private basis",
//       "Leh To Nubra Valley Car Drive on a Private basis",
//       "Excursion To Turtuk Village on a Private basis",
//       "Visit to Pangong Lake on a Private basis",
//       "Travel from Pangong Lake to Leh on a Private basis",
//       "Leh Sightseeing Tour on a Private basis",
//       "Transfer from Kushok Bakula Rimpochee Airport to Deluxe Hotel",
//       "Transfer from Deluxe Hotel to Kushok Bakula Rimpochee Airport",
//       "Daily Breakfast",
//       "Dinner",
//       "Permits"
//     ],

//     exclusions: [
//       "Expenses of a personal nature.",
//       "Meals not mentioned in the itinerary or inclusions",
//       "Lunch",
//       "Domestic flight tickets",
//       "Travel Insurance"
//     ]
//   };

//   const data = offeringsData || defaultOfferingsData;

//   return (
//     <div className="w-full font-inter max-h-[130vh] overflow-y-auto">
//       {/* Compact Header */}
//       <div className="mb-4 text-center">
//         <h2 className="text-xl font-bold text-gray-900 mb-1">{data.title}</h2>
//         <div className="w-16 h-1 bg-[#E65F25] mx-auto rounded-full"></div>
//       </div>

//       {/* Main Content Grid - Compact */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

//         {/* Inclusions Section - Compact */}
//         <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
//           <div className="flex items-center gap-2 mb-3">
//             <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
//               <Check className="w-5 h-5 text-white" />
//             </div>
//             <h3 className="text-lg font-bold text-gray-900">Inclusions</h3>
//           </div>

//           <div className="space-y-1.5 max-h-80 overflow-y-auto">
//             {data.inclusions.map((inclusion, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-2 p-2 bg-white/70 rounded-md hover:bg-white transition-all duration-200"
//               >
//                 <div className="flex-shrink-0 mt-0.5">
//                   <Check className="w-3 h-3 text-green-500" />
//                 </div>
//                 <p className="text-gray-700 text-xs leading-relaxed">
//                   {inclusion}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Exclusions Section - Compact */}
//         <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4 border border-red-100">
//           <div className="flex items-center gap-2 mb-3">
//             <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md">
//               <X className="w-5 h-5 text-white" />
//             </div>
//             <h3 className="text-lg font-bold text-gray-900">Exclusions</h3>
//           </div>

//           <div className="space-y-1.5">
//             {data.exclusions.map((exclusion, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-2 p-2 bg-white/70 rounded-md hover:bg-white transition-all duration-200"
//               >
//                 <div className="flex-shrink-0 mt-0.5">
//                   <X className="w-3 h-3 text-red-500" />
//                 </div>
//                 <p className="text-gray-700 text-xs leading-relaxed">
//                   {exclusion}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Info Card - Compact */}
//       <div className="mt-4 bg-gradient-to-r from-[#E65F25]/10 to-orange-50 rounded-lg p-3 border-l-4 border-[#E65F25]">
//         <div className="flex items-start gap-3">
//           <div className="w-8 h-8 bg-[#E65F25] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
//             <span className="text-white font-bold text-sm">!</span>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900 mb-1 text-sm">Important Note</h4>
//             <p className="text-gray-700 text-xs leading-relaxed">
//               Please review the inclusions and exclusions carefully before booking.
//               For any specific requirements or clarifications, feel free to contact our travel experts.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//// ye vala offerings 1 viewport me aajaiga saaar:-end
