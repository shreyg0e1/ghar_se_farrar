import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  CreditCard,
  Clock,
  AlertCircle,
} from "lucide-react";

const RefundPolicy = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4); // Show fewer items initially on mobile

  const refundPolicyData = [
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Cancellation Timeline",
      text: "Full refund available if cancelled 30+ days before departure. 50% refund for cancellations 15-29 days prior to travel.",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Processing Time",
      text: "Refunds are processed within 7-10 business days after cancellation approval. Bank transfer may take additional 3-5 working days.",
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Non-Refundable Components",
      text: "Flight bookings, special permits, and advance hotel bookings are non-refundable as per airline and hotel policies.",
    },
    {
      icon: <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Medical Emergency",
      text: "100% refund available for medical emergencies with valid medical certificate from registered practitioner.",
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Weather Conditions",
      text: "In case of trip cancellation due to severe weather conditions, full credit note will be issued valid for 12 months.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Payment Gateway Charges",
      text: "Payment gateway charges (2-3%) are non-refundable and will be deducted from the refund amount.",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "No Show Policy",
      text: "No refund will be provided for no-show or if traveler fails to join the trip without prior intimation.",
    },
    {
      icon: <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Force Majeure",
      text: "For cancellations due to natural disasters, political unrest, or government restrictions, credit voucher will be provided.",
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Group Bookings",
      text: "Different refund terms apply for group bookings (8+ members). Please contact our support team for detailed policy.",
    },
    {
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Partial Refunds",
      text: "Partial refunds for unused services during the trip are not applicable unless specifically mentioned in the package.",
    },
  ];

  const showMoreItems = () => {
    setVisibleItems(refundPolicyData.length);
  };

  const showLessItems = () => {
    setVisibleItems(4);
  };

  const displayedItems = refundPolicyData.slice(0, visibleItems);
  const hasMoreItems = visibleItems < refundPolicyData.length;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 font-inter">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl active:scale-95 sm:active:scale-100">
        <div
          className="flex items-center justify-between p-4 sm:p-6 cursor-pointer bg-gradient-to-r from-red-50 to-white hover:from-red-100 hover:to-red-50 transition-all duration-300 active:bg-red-100"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E65F25] to-[#d14d1a] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 truncate">
                Refund Policy
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm truncate">
                Terms and conditions for cancellations
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
            {/* Mobile Quick Summary */}
            <div className="sm:hidden mb-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 border border-red-100">
              <div className="flex items-center justify-between text-xs">
                <div className="text-center">
                  <div className="font-semibold text-red-600">30+ Days</div>
                  <div className="text-gray-500">Full Refund</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-orange-600">
                    15-29 Days
                  </div>
                  <div className="text-gray-500">50% Refund</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-600">Medical</div>
                  <div className="text-gray-500">100% Refund</div>
                </div>
              </div>
            </div>

            <div className="h-[50vh] sm:h-[500px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
              <div className="space-y-3 sm:space-y-4">
                {displayedItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-100 hover:border-[#E65F25]/20 hover:shadow-md transition-all duration-300 group active:scale-95 sm:active:scale-100"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#E65F25] to-[#d14d1a] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300 flex-shrink-0">
                        <span className="text-white">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm font-medium">
                          {item.text}
                        </p>
                      </div>
                    </div>
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
                    Show All {refundPolicyData.length} Policies
                  </button>
                </div>
              )}

              {visibleItems > 4 && (
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

            {/* Important Notice */}
            <div className="mt-4 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-xl">
              <div className="flex items-start gap-2 sm:gap-3">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-yellow-800 mb-1">
                    Important Notice
                  </h4>
                  <p className="text-yellow-700 text-xs sm:text-sm leading-relaxed">
                    All refund requests must be submitted in writing via email.
                    Refund amounts are calculated based on the total package
                    cost excluding non-refundable components.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex gap-2">
                <button className="flex-1 bg-white text-[#E65F25] border border-[#E65F25] py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#E65F25] hover:text-white active:scale-95">
                  Download PDF
                </button>
                <button className="flex-1 bg-[#E65F25] text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-200 hover:bg-[#FF6F35] active:scale-95">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Collapsed Preview */}
        {!isExpanded && (
          <div className="sm:hidden p-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{refundPolicyData.length} policy points</span>
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

export default RefundPolicy;
