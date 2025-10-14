import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const PackageOptions = ({ selectedTour = null, onTourSelect = () => {} }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Set initial selected option when tour changes
  useEffect(() => {
    if (selectedTour?.packageOptions?.length > 0) {
      // Select the first option by default
      console.log("Package Options ->", selectedTour?.packageOptions);
      setSelectedOption(selectedTour.packageOptions[0]);

      // Update the parent with the first option as default
      const updatedTour = {
        ...selectedTour,
        price: selectedTour.packageOptions[0].price,
        selectedOption: selectedTour.packageOptions[0].option,
      };
      onTourSelect(updatedTour, {
        _id: selectedTour.packageId,
        name: selectedTour.packageName,
      });
    } else {
      setSelectedOption(null);
    }
  }, []);

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

  // If no package options available
  if (
    !selectedTour?.packageOptions ||
    selectedTour.packageOptions.length === 0
  ) {
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

        {/* Package Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedTour.packageOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`
                package-button ripple hover-shine font-poppins text-left px-5 py-4 rounded-lg
                cursor-pointer relative
                ${selectedOption?.option === option.option ? "selected" : ""}
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
              {/* Checkmark */}
              {selectedOption?.option === option.option && (
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
                <span
                  className={`font-medium text-base block mb-2 ${
                    selectedOption?.option === option.option
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {option.option}
                </span>
                <div
                  className={`text-lg font-bold ${
                    selectedOption?.option === option.option
                      ? "text-white"
                      : "text-[#E65F25]"
                  }`}
                >
                  {option.price}
                </div>
                {selectedTour.duration && (
                  <div
                    className={`text-xs mt-1 ${
                      selectedOption?.option === option.option
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {selectedTour.duration}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Current Selection Info */}
        {selectedOption && (
          <div className="mt-6 p-4 bg-gradient-to-r from-[#E65F25]/5 to-orange-50 rounded-lg border border-[#E65F25]/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Selected Option
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedOption.option} - {selectedOption.price}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Total Price</p>
                <p className="text-lg font-bold text-[#E65F25]">
                  {selectedOption.price}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageOptions;
