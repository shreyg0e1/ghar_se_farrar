import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TripDurationCards({ tourData }) {
  const [selectedTrip, setSelectedTrip] = useState(0);
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch package data from API
  const fetchPackageData = async () => {
    try {
      setLoading(true);
      const packageId = localStorage.getItem("id");
      if (packageId) {
        const response = await axios.get(
          `https://crm-ghar-se-frar.onrender.com/package/${packageId}`
        );
        setPackageData(response.data.packageData);
      }
    } catch (error) {
      console.error("Error fetching package data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackageData();
  }, []);

  // Create package options from API data
  const createPackageOptions = () => {
    if (!packageData?.tours || packageData.tours.length === 0) {
      return null;
    }

    return packageData.tours.map((tour, index) => ({
      id: tour._id,
      title: tour.title,
      duration: tour.time,
      price: `₹${tour.price}`,
      location: tour.location,
      image: tour.thumbnail,
      isSelected: index === 0,
    }));
  };

  const packageOptions = createPackageOptions();

  // Handle package selection
  const handlePackageSelect = (index) => {
    setSelectedTrip(index);
    console.log("Selected package:", packageOptions[index]);
  };

  // If loading
  if (loading) {
    return (
      <div className="w-full font-inter px-3 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Available Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200 animate-pulse h-40 sm:h-48"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // If no packages available
  if (!packageOptions) {
    return (
      <div className="w-full font-inter px-3 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Available Packages
        </h2>
        <div className="flex flex-col items-center justify-center h-40 sm:h-48 rounded-xl sm:rounded-2xl bg-gray-50 border-2 border-dashed border-gray-300 p-4 text-center">
          <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📦</div>
          <p className="text-gray-500 text-base sm:text-lg mb-1 sm:mb-2">
            We're adding more exciting packages soon!
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Check back later for new adventures
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter px-3 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        Available Packages
      </h2>

      {/* Mobile Horizontal Scroll Container */}
      <div className="block sm:hidden">
        <div className="flex space-x-3 pb-4 overflow-x-auto scrollbar-hide -mx-3 px-3">
          {packageOptions.map((pkg, index) => (
            <div
              key={pkg.id}
              onClick={() => handlePackageSelect(index)}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform active:scale-95 min-w-[280px] flex-shrink-0 group ${
                selectedTrip === index
                  ? "ring-2 ring-[#E65F25] shadow-md"
                  : "hover:ring-1 hover:ring-[#E65F25]/50"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute top-3 left-3">
                  <div
                    className={`px-2 py-1.5 rounded-full text-white font-bold text-xs transition-all duration-300 ${
                      selectedTrip === index
                        ? "bg-[#E65F25] shadow-md"
                        : "bg-black/50 group-hover:bg-[#E65F25]/90"
                    }`}
                  >
                    {pkg.duration}
                  </div>
                </div>

                {/* Package Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-medium opacity-90 mb-1 line-clamp-1">
                    {pkg.location}
                  </p>
                  <h3 className="text-sm font-bold mb-1 line-clamp-2 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-base font-bold text-[#E65F25]">
                    {pkg.price}
                  </p>
                </div>

                {/* Selection Indicator */}
                {selectedTrip === index && (
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 bg-[#E65F25] rounded-full flex items-center justify-center shadow-md">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {packageOptions.map((pkg, index) => (
          <div
            key={pkg.id}
            onClick={() => handlePackageSelect(index)}
            className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 group active:scale-95 sm:active:scale-100 ${
              selectedTrip === index
                ? "ring-2 sm:ring-3 ring-[#E65F25] shadow-lg shadow-[#E65F25]/20"
                : "hover:ring-2 hover:ring-[#E65F25]/50"
            }`}
          >
            {/* Image Container */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Duration Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <div
                  className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-white font-bold text-xs sm:text-sm transition-all duration-300 ${
                    selectedTrip === index
                      ? "bg-[#E65F25] shadow-lg"
                      : "bg-black/50 group-hover:bg-[#E65F25]/90"
                  }`}
                >
                  {pkg.duration}
                </div>
              </div>

              {/* Package Info */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <p className="text-xs sm:text-sm font-medium opacity-90 mb-1 line-clamp-1">
                  {pkg.location}
                </p>
                <h3 className="text-sm sm:text-lg font-bold mb-1 line-clamp-2 leading-tight sm:leading-normal">
                  {pkg.title}
                </h3>
                <p className="text-base sm:text-xl font-bold text-[#E65F25]">
                  {pkg.price}
                </p>
              </div>

              {/* Selection Indicator */}
              {selectedTrip === index && (
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#E65F25] rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scroll Indicator */}
      {packageOptions.length > 1 && (
        <div className="sm:hidden flex justify-center mt-4 space-x-1">
          {packageOptions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedTrip === index
                  ? "bg-[#E65F25] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
