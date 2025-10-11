import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  AlertTriangle,
  Phone,
  CreditCard,
  Thermometer,
} from "lucide-react";

const KnowBeforeYouGo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(5); // Show fewer items initially on mobile

  const knowBeforeData = [
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Mobile Network: Only Postpaid network (JIO, Airtel, BSNL) is active in the region.",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Breakfast availability in hotel on first and last day totally depends on your arrival and departure timings.",
    },
    {
      icon: <Thermometer className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Climatic conditions in the high altitudes vary from the plains; it is advisable that you take adequate time to get acclimatized to high altitudes.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Gharsefaraar reserves the right to rearrange the itinerary due to any kind of disturbance that occurred (i.e weather condition, political condition or any others) without changing the total number of days and without compromising any service.",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "The easiest way to travel to Ladakh is by air. The nearest airport is Kushok Bakula Rimpochee Airport (IXL) located in Leh.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Consult a physician before undertaking the tour. Carry basic medications and a first-aid kit during the tour.",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "It is recommended to carry enough warm clothes and the right kind of shoes for the tour. The advisable baggage weight is 60 liters as you might have to carry the luggage to the backup vehicle, the accommodation, etc.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Rates may fluctuate with any change in services/hotels. The difference in the cost shall be borne by the client in case of any amendment in the package due to an increase in the number of guests, hotel change, etc., before the beginning of the trip.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "The hotels are subject to their availability. In case they are not available, the travelers will be accommodated in a property of similar standard.",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Because of any reason natural or personal, if the tour or a particular activity is not completed, no refund will be processed.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "All entry tickets for stupas, monasteries, sightseeing, state and entry fees, monument entrances, camera charges, permits, etc. are not a part of the package.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "GST is applicable to the package cost.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Any personal expenses or items of personal nature will not be included in the package. Any meals or transfers not mentioned in the itinerary are to be considered an exclusion in the deal.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Avoid using plastic bags and maintain the ecological balance of the destinations. Travelers littering may be fined.",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Carry dry snacks/food, granola bars, etc. from home. Carry a regular and another insulated water bottle with you, so that you can refill.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Any breakage or damage of any items in the resort will be charged at actuals.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "All international and domestic airfare, visa fees, airport tax, or any kind of insurance cover is not a part of the package.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "Carry enough cash as the number of ATMs in high-altitude regions is comparatively less and there are long queues at times.",
    },
    {
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "If in case any traveler wants to or decides to leave the trip in the middle, all the expenses from that point onwards will be borne by the traveler.",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      text: "ID proof is mandatory for each individual guest at the time of booking, and also upon arrival. PAN card will not be considered as a valid address proof.",
    },
  ];

  const showMoreItems = () => {
    setVisibleItems(knowBeforeData.length);
  };

  const showLessItems = () => {
    setVisibleItems(5);
  };

  const displayedItems = knowBeforeData.slice(0, visibleItems);
  const hasMoreItems = visibleItems < knowBeforeData.length;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 font-inter">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl active:scale-95 sm:active:scale-100">
        <div
          className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 hover:to-orange-50 transition-all duration-300 active:bg-orange-100"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E65F25] to-[#d14d1a] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 truncate">
                Know Before You Go
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm truncate">
                Essential information for your journey
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
            <span className="text-xs sm:text-sm text-gray-500 hidden xs:block">
              {isExpanded ? "Hide" : "View"}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#E65F25] transform transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#E65F25] transform transition-transform duration-300" />
            )}
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="p-4 sm:p-6 pt-0">
            {/* Mobile Quick Stats */}
            <div className="sm:hidden mb-4 bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs">
                <div className="text-center">
                  <div className="font-semibold text-gray-800">
                    {knowBeforeData.length}
                  </div>
                  <div className="text-gray-500">Points</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">5 min</div>
                  <div className="text-gray-500">Read Time</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">Essential</div>
                  <div className="text-gray-500">Info</div>
                </div>
              </div>
            </div>

            <div className="h-[50vh] sm:h-[500px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
              <div className="space-y-3 sm:space-y-4">
                {displayedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-100 hover:border-[#E65F25]/20 hover:shadow-md transition-all duration-300 group active:scale-95 sm:active:scale-100"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#E65F25] to-[#d14d1a] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300 flex-shrink-0 mt-0.5">
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm font-medium flex-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Show More/Less Buttons */}
              {hasMoreItems && (
                <div className="mt-4 text-center">
                  <button
                    onClick={showMoreItems}
                    className="bg-[#E65F25] text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#FF6F35] hover:scale-105 active:scale-95"
                  >
                    Show All {knowBeforeData.length} Points
                  </button>
                </div>
              )}

              {visibleItems > 5 && (
                <div className="mt-4 text-center">
                  <button
                    onClick={showLessItems}
                    className="text-[#E65F25] bg-orange-50 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-orange-100 active:scale-95 border border-[#E65F25]/30"
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex gap-2">
                <button className="flex-1 bg-white text-[#E65F25] border border-[#E65F25] py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#E65F25] hover:text-white active:scale-95">
                  Save Info
                </button>
                <button className="flex-1 bg-[#E65F25] text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#FF6F35] active:scale-95">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Collapsed Preview */}
        {!isExpanded && (
          <div className="sm:hidden p-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{knowBeforeData.length} important points</span>
              <span>Tap to expand</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #e65f25 #f1f5f9;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #e65f25, #d14d1a);
          border-radius: 8px;
          border: 1px solid #f1f5f9;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #d14d1a, #b8431a);
        }

        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default KnowBeforeYouGo;
