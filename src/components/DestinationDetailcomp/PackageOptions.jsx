//======================================================
//AFTER RESPONSIVE:- Currently Using Code
//=======================================================
import React, { useState } from "react";
import { Check } from "lucide-react";

const PackageOptions = ({
  packages = [
    {
      id: 1,
      name: "Dual Rider KTM 390 Adventure",
      type: "dual",
      available: true,
    },
    {
      id: 2,
      name: "Dual Rider Royal Enfield Himalayan",
      type: "dual",
      available: true,
    },
    {
      id: 3,
      name: "Seat in Car",
      type: "car",
      available: true,
      featured: true,
    },
    {
      id: 4,
      name: "Solo Rider KTM 390 Adventure",
      type: "solo",
      available: true,
    },
    {
      id: 5,
      name: "Solo Rider Royal Enfield Himalayan",
      type: "solo",
      available: true,
    },
  ],
  onPackageSelect = (pkg) => {
    console.log("Selected package:", pkg);
  },
}) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg.id);
    onPackageSelect(pkg);
  };

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

        {/* Desktop View - Grid Layout (3 columns in row 1, 2 columns in row 2) */}
        <div className="hidden lg:block">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {packages.slice(0, 3).map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => handlePackageClick(pkg)}
                disabled={!pkg.available}
                className={`
                  package-button ripple hover-shine font-poppins text-left px-5 py-4 rounded-lg
                  cursor-pointer relative
                  ${selectedPackage === pkg.id ? "selected" : ""}
                  ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
                `}
                style={{
                  backgroundColor:
                    selectedPackage === pkg.id ? "#E65F25" : "white",
                  border:
                    selectedPackage === pkg.id
                      ? "3px solid #E65F25"
                      : "2px solid #E5E5E5",
                  color: selectedPackage === pkg.id ? "white" : "#4A4A4A",
                }}
              >
                {/* Checkmark */}
                {selectedPackage === pkg.id && (
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

                <span className="font-medium text-base relative z-10">
                  {pkg.name}
                </span>
              </button>
            ))}
          </div>

          {/* Second Row - 2 items */}
          <div className="grid grid-cols-3 gap-4">
            {packages.slice(3, 5).map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => handlePackageClick(pkg)}
                disabled={!pkg.available}
                className={`
                  package-button ripple hover-shine font-poppins text-left px-5 py-4 rounded-lg
                  cursor-pointer relative
                  ${selectedPackage === pkg.id ? "selected" : ""}
                  ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
                `}
                style={{
                  backgroundColor:
                    selectedPackage === pkg.id ? "#E65F25" : "white",
                  border:
                    selectedPackage === pkg.id
                      ? "3px solid #E65F25"
                      : "2px solid #E5E5E5",
                  color: selectedPackage === pkg.id ? "white" : "#4A4A4A",
                }}
              >
                {selectedPackage === pkg.id && (
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

                <span className="font-medium text-base relative z-10">
                  {pkg.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tablet View - 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePackageClick(pkg)}
              disabled={!pkg.available}
              className={`
                package-button ripple hover-shine font-poppins text-left px-4 py-3.5 rounded-lg
                cursor-pointer relative
                ${selectedPackage === pkg.id ? "selected" : ""}
                ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
              `}
              style={{
                backgroundColor:
                  selectedPackage === pkg.id ? "#E65F25" : "white",
                border:
                  selectedPackage === pkg.id
                    ? "3px solid #E65F25"
                    : "2px solid #E5E5E5",
                color: selectedPackage === pkg.id ? "white" : "#4A4A4A",
              }}
            >
              {selectedPackage === pkg.id && (
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

              <span className="font-medium text-sm relative z-10">
                {pkg.name}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile View - Single column */}
        <div className="md:hidden space-y-3">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePackageClick(pkg)}
              disabled={!pkg.available}
              className={`
                package-button ripple hover-shine font-poppins text-left w-full px-5 py-4 rounded-xl
                cursor-pointer relative
                ${selectedPackage === pkg.id ? "selected" : ""}
                ${!pkg.available ? "opacity-50 cursor-not-allowed" : ""}
              `}
              style={{
                backgroundColor:
                  selectedPackage === pkg.id ? "#E65F25" : "white",
                border:
                  selectedPackage === pkg.id
                    ? "3px solid #E65F25"
                    : "2px solid #E5E5E5",
                color: selectedPackage === pkg.id ? "white" : "#5A5A5A",
              }}
            >
              {selectedPackage === pkg.id && (
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

              <span className="font-medium text-base relative z-10">
                {pkg.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageOptions;
