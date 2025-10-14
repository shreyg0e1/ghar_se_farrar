import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const PackageOptions = ({
  packages = [],
  selectedTour = null,
  onTourSelect = () => {},
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // Set initial selected package when component mounts or selectedTour changes
  useEffect(() => {
    if (selectedTour?.packageId) {
      setSelectedPackageId(selectedTour.packageId);
    } else if (packages.length > 0) {
      // Set first package as default
      setSelectedPackageId(packages[0]._id);
    }
  }, [selectedTour, packages]);

  // Set initial selected option when tour changes
  useEffect(() => {
    if (selectedTour?.packageOptions?.length > 0) {
      // Select the first option by default
      setSelectedOption(selectedTour.packageOptions[0]);
    } else {
      setSelectedOption(null);
    }
  }, [selectedTour]);

  // Transform API packages to the format needed for display
  const transformPackages = () => {
    if (!packages || packages.length === 0) return [];

    const transformedPackages = [];

    packages.forEach((pkg) => {
      if (pkg.tours && pkg.tours.length > 0) {
        pkg.tours.forEach((tour, index) => {
          transformedPackages.push({
            id: tour._id, // Use tour ID for selection
            packageId: pkg._id, // Keep package ID reference
            name: tour.title || pkg.name,
            type: pkg.name.toLowerCase().includes("group")
              ? "group"
              : pkg.name.toLowerCase().includes("family")
              ? "family"
              : pkg.name.toLowerCase().includes("romantic")
              ? "romantic"
              : "standard",
            available: true,
            featured: pkg.name.toLowerCase().includes("best"),
            duration: tour.duration,
            price: tour.price,
            tourData: tour, // Store full tour data
            hasPackageOptions:
              tour.packageOptions && tour.packageOptions.length > 0,
          });
        });
      }
    });

    return transformedPackages;
  };

  const displayPackages = transformPackages();

  const handlePackageClick = (pkg) => {
    setSelectedPackageId(pkg.packageId);
    // Pass both the tour data and package data to parent
    onTourSelect(pkg.tourData, {
      _id: pkg.packageId,
      name: pkg.name.split(" - ")[0] || pkg.name,
    });
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // Update the selected tour with the new price
    if (selectedTour) {
      const updatedTour = {
        ...selectedTour,
        price: option.price,
        selectedOption: option.option,
      };
      onTourSelect(updatedTour, {
        _id: selectedTour.packageId,
        name: selectedTour.packageName,
      });
    }
  };

  // Get current price (either from selected option or tour base price)
  const getCurrentPrice = () => {
    if (selectedOption) {
      return selectedOption.price;
    }
    return selectedTour?.price || "";
  };

  // If no packages available
  if (displayPackages.length === 0) {
    return (
      <div className="w-full px-4 py-6 md:px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins font-semibold text-gray-800 mb-4 md:mb-5 text-lg md:text-xl lg:text-2xl">
            Package Options
          </h2>
          <div className="text-center py-8 text-gray-500">
            No package options available
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-6 md:px-6 lg:px-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes checkmark {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-checkmark {
          animation: checkmark 0.4s ease-out forwards;
        }

        .package-button {
          position: relative;
          transition: all 0.3s ease-out;
          overflow: hidden;
        }

        .package-button:hover:not(.selected):not(:disabled) {
          transform: scale(1.02);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }

        .package-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .package-button.selected {
          box-shadow: 0 8px 20px rgba(230, 95, 37, 0.3);
          transform: scale(1.02);
        }

        .ripple {
          position: relative;
          overflow: hidden;
        }

        .ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .ripple:active::after {
          width: 300px;
          height: 300px;
        }

        /* Hover Shine Effect */
        .hover-shine::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 0.7s;
          pointer-events: none;
        }

        .package-button.selected .hover-shine::before {
          transform: translateX(100%) skewX(-12deg);
        }

        /* Active Glow */
        .package-button.selected::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: 0 0 20px rgba(230, 95, 37, 0.3);
          pointer-events: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="font-poppins font-semibold text-gray-800 mb-4 md:mb-5 text-lg md:text-xl lg:text-2xl">
          Package Options
        </h2>

        {/* Main Package Selection */}
        <div className="hidden lg:block">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {displayPackages.slice(0, 3).map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => handlePackageClick(pkg)}
                disabled={!pkg.available}
                className={`
                  package-button ripple hover-shine font-poppins text-left px-5 py-4 rounded-lg
                  cursor-pointer relative
                  ${selectedPackageId === pkg.packageId ? "selected" : ""}
                  ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
                `}
                style={{
                  backgroundColor:
                    selectedPackageId === pkg.packageId ? "#E65F25" : "white",
                  border:
                    selectedPackageId === pkg.packageId
                      ? "3px solid #E65F25"
                      : "2px solid #E5E5E5",
                  color:
                    selectedPackageId === pkg.packageId ? "white" : "#4A4A4A",
                }}
              >
                {/* Checkmark */}
                {selectedPackageId === pkg.packageId && (
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center animate-checkmark"
                    style={{ border: "2px solid #E65F25" }}
                  >
                    <Check
                      size={16}
                      style={{ color: "#E65F25" }}
                      strokeWidth={3}
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <span className="font-medium text-base block mb-1">
                    {pkg.name}
                  </span>
                  {pkg.duration && (
                    <span className="text-xs opacity-80">{pkg.duration}</span>
                  )}
                  <div className="text-xs font-semibold text-[#E65F25] mt-1">
                    {getCurrentPrice()}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Second Row - remaining items */}
          {displayPackages.length > 3 && (
            <div className="grid grid-cols-3 gap-4">
              {displayPackages.slice(3).map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => handlePackageClick(pkg)}
                  disabled={!pkg.available}
                  className={`
                    package-button ripple hover-shine font-poppins text-left px-5 py-4 rounded-lg
                    cursor-pointer relative
                    ${selectedPackageId === pkg.packageId ? "selected" : ""}
                    ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                  style={{
                    backgroundColor:
                      selectedPackageId === pkg.packageId ? "#E65F25" : "white",
                    border:
                      selectedPackageId === pkg.packageId
                        ? "3px solid #E65F25"
                        : "2px solid #E5E5E5",
                    color:
                      selectedPackageId === pkg.packageId ? "white" : "#4A4A4A",
                  }}
                >
                  {selectedPackageId === pkg.packageId && (
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center animate-checkmark"
                      style={{ border: "2px solid #E65F25" }}
                    >
                      <Check
                        size={16}
                        style={{ color: "#E65F25" }}
                        strokeWidth={3}
                      />
                    </div>
                  )}

                  <div className="relative z-10">
                    <span className="font-medium text-base block mb-1">
                      {pkg.name}
                    </span>
                    {pkg.duration && (
                      <span className="text-xs opacity-80">{pkg.duration}</span>
                    )}
                    <div className="text-xs font-semibold text-[#E65F25] mt-1">
                      {getCurrentPrice()}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tablet View - 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {displayPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePackageClick(pkg)}
              disabled={!pkg.available}
              className={`
                package-button ripple hover-shine font-poppins text-left px-4 py-3.5 rounded-lg
                cursor-pointer relative
                ${selectedPackageId === pkg.packageId ? "selected" : ""}
                ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
              `}
              style={{
                backgroundColor:
                  selectedPackageId === pkg.packageId ? "#E65F25" : "white",
                border:
                  selectedPackageId === pkg.packageId
                    ? "3px solid #E65F25"
                    : "2px solid #E5E5E5",
                color:
                  selectedPackageId === pkg.packageId ? "white" : "#4A4A4A",
              }}
            >
              {selectedPackageId === pkg.packageId && (
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center animate-checkmark"
                  style={{ border: "2px solid #E65F25" }}
                >
                  <Check
                    size={14}
                    style={{ color: "#E65F25" }}
                    strokeWidth={3}
                  />
                </div>
              )}

              <div className="relative z-10">
                <span className="font-medium text-sm block mb-1">
                  {pkg.name}
                </span>
                {pkg.duration && (
                  <span className="text-xs opacity-80">{pkg.duration}</span>
                )}
                <div className="text-xs font-semibold text-[#E65F25] mt-1">
                  {getCurrentPrice()}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile View - Single column */}
        <div className="md:hidden space-y-3">
          {displayPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePackageClick(pkg)}
              disabled={!pkg.available}
              className={`
                package-button ripple hover-shine font-poppins text-left w-full px-5 py-4 rounded-xl
                cursor-pointer relative
                ${selectedPackageId === pkg.packageId ? "selected" : ""}
                ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
              `}
              style={{
                backgroundColor:
                  selectedPackageId === pkg.packageId ? "#E65F25" : "white",
                border:
                  selectedPackageId === pkg.packageId
                    ? "3px solid #E65F25"
                    : "2px solid #E5E5E5",
                color:
                  selectedPackageId === pkg.packageId ? "white" : "#5A5A5A",
              }}
            >
              {selectedPackageId === pkg.packageId && (
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center animate-checkmark"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #E65F25",
                  }}
                >
                  <Check
                    size={16}
                    style={{ color: "#E65F25" }}
                    strokeWidth={3}
                  />
                </div>
              )}

              <div className="relative z-10">
                <span className="font-medium text-base block mb-1">
                  {pkg.name}
                </span>
                {pkg.duration && (
                  <span className="text-xs opacity-80">{pkg.duration}</span>
                )}
                <div className="text-xs font-semibold text-[#E65F25] mt-1">
                  {getCurrentPrice()}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Sub-options for selected tour */}
        {selectedTour?.packageOptions &&
          selectedTour.packageOptions.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-poppins font-semibold text-gray-800 mb-4 text-lg">
                Choose Your Experience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedTour.packageOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`
                    package-button ripple hover-shine font-poppins text-left px-4 py-3 rounded-lg
                    cursor-pointer relative
                    ${
                      selectedOption?.option === option.option ? "selected" : ""
                    }
                  `}
                    style={{
                      backgroundColor:
                        selectedOption?.option === option.option
                          ? "#E65F25"
                          : "white",
                      border:
                        selectedOption?.option === option.option
                          ? "3px solid #E65F25"
                          : "2px solid #E5E5E5",
                      color:
                        selectedOption?.option === option.option
                          ? "white"
                          : "#4A4A4A",
                    }}
                  >
                    {selectedOption?.option === option.option && (
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center animate-checkmark"
                        style={{ border: "2px solid #E65F25" }}
                      >
                        <Check
                          size={14}
                          style={{ color: "#E65F25" }}
                          strokeWidth={3}
                        />
                      </div>
                    )}

                    <div className="relative z-10">
                      <span className="font-medium text-sm block mb-1">
                        {option.option}
                      </span>
                      <div className="text-xs font-semibold opacity-80">
                        {option.price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default PackageOptions;
