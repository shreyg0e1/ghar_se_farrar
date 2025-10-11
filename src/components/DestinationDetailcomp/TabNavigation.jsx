import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TabNavigation({
  activeTab,
  onTabChange,
  tabs,
  customStyles,
}) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabsContainerRef = useRef(null);

  // Get tabs data with validation
  const getTabsData = () => {
    console.log("Tabs->", tabs);
    console.log("activeTab->", activeTab);
    console.log("onTabChange->", onTabChange);

    // If tabs is provided and is an array, use it
    if (tabs && Array.isArray(tabs)) {
      return tabs;
    }

    // Default tabs
    return ["Itinerary", "Overview", "Offering", "Essentials"];
  };

  const tabsData = getTabsData();

  // Check scroll position for arrows
  const checkScrollPosition = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll handlers
  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, [tabsData]);

  // For mobile, we'll use horizontal scroll for many tabs
  const isManyTabs = tabsData.length > 3;

  return (
    <div className="w-full font-inter mb-4 sm:mb-6">
      {/* Desktop Layout - Centered Tabs */}
      <div className="hidden sm:flex gap-1 bg-gray-100 p-1 rounded-lg shadow-sm">
        {tabsData.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              flex-1 px-4 py-3 rounded-md font-medium text-sm lg:text-base
              transition-all duration-300 cursor-pointer transform
              hover:scale-105 active:scale-95
              ${
                activeTab === tab
                  ? "bg-[#E65F25] text-white shadow-lg shadow-[#E65F25]/25 font-bold"
                  : "text-gray-600 hover:text-[#E65F25] hover:bg-white hover:shadow-sm"
              }
            `}
            style={customStyles ? customStyles.button : {}}
          >
            <span className="block transition-transform duration-200">
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Layout - Scrollable Tabs */}
      <div className="sm:hidden relative">
        {/* Scroll Arrows for Mobile */}
        {isManyTabs && showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-r-lg p-2 shadow-lg hover:bg-white transition-colors duration-200 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
        )}

        {isManyTabs && showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-l-lg p-2 shadow-lg hover:bg-white transition-colors duration-200 active:scale-95"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        )}

        {/* Scrollable Tabs Container */}
        <div
          ref={tabsContainerRef}
          onScroll={checkScrollPosition}
          className={`
            flex gap-1 bg-gray-100 p-1 rounded-lg shadow-sm overflow-x-auto scrollbar-hide
            ${isManyTabs ? "px-8" : ""}
          `}
        >
          {tabsData.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
                flex-shrink-0 px-3 sm:px-4 py-2 sm:py-3 rounded-md font-medium text-xs sm:text-sm
                transition-all duration-300 cursor-pointer transform
                hover:scale-105 active:scale-95 whitespace-nowrap
                ${
                  activeTab === tab
                    ? "bg-[#E65F25] text-white shadow-md shadow-[#E65F25]/25 font-bold"
                    : "text-gray-600 hover:text-[#E65F25] hover:bg-white hover:shadow-sm"
                }
              `}
              style={customStyles ? customStyles.button : {}}
            >
              <span className="block transition-transform duration-200">
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Indicator - Mobile Enhanced */}
      <div className="mt-2 sm:mt-3">
        <div className="flex items-center justify-between">
          {/* Dots Indicator */}
          <div className="flex gap-1 flex-1 justify-center">
            {tabsData.map((tab) => (
              <div
                key={tab}
                className={`
                  w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-[#E65F25] w-4 sm:w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }
                `}
                onClick={() => onTabChange(tab)}
              />
            ))}
          </div>

          {/* Mobile Tab Counter */}
          <div className="sm:hidden text-xs text-gray-500 font-medium px-2">
            {tabsData.findIndex((tab) => tab === activeTab) + 1}/
            {tabsData.length}
          </div>
        </div>
      </div>

      {/* Active Tab Label for Mobile */}
      <div className="sm:hidden mt-2 text-center">
        <span className="text-sm font-semibold text-[#E65F25] bg-[#E65F25]/10 px-3 py-1 rounded-full">
          {activeTab}
        </span>
      </div>
    </div>
  );
}
