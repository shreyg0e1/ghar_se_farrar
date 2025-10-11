import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

// Import all your components
import DestinationHeroSection from "../components/DestinationDetailcomp/destinationherosection";
import TripDurationCards from "../components/DestinationDetailcomp/TripDurationCards";
import DestinationRoutes from "../components/DestinationDetailcomp/DestinationRoutes";
import TripHighlights from "../components/DestinationDetailcomp/TripHighlights";
import TabNavigation from "../components/DestinationDetailcomp/TabNavigation";
import TripItinerary from "../components/DestinationDetailcomp/TripItinerary";
import TripOverview from "../components/DestinationDetailcomp/TripOverview";
import TripOfferings from "../components/DestinationDetailcomp/TripOfferings";
import TripEssentials from "../components/DestinationDetailcomp/TripEssentials";
import StickyEnquiryForm from "../components/DestinationDetailcomp/StickyEnquiryForm";
import EndOfTrip from "../components/DestinationDetailcomp/EndOfTrip";
import KnowBeforeYouGo from "../components/DestinationDetailcomp/KnowBeforeYouGo";
import CallBack from "../components/DestinationDetailcomp/CallBack";
import RefundPolicy from "../components/DestinationDetailcomp/RefundPolicy";
import CancellationPolicy from "../components/DestinationDetailcomp/CancellationPolicy";

const DestinationDetailPage = () => {
  const { id } = useParams();
  console.log("Destination Details->", id);
  const URL = "http://localhost:8000";
  const [activeTab, setActiveTab] = useState("Itinerary");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMobileForm, setShowMobileForm] = useState(false);
  const location = useLocation();
  const packageId = localStorage.getItem("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get details from API
  const getDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${URL}/detail/${id}`);
      setApiData(data?.detail);
      setError(null);
    } catch (error) {
      console.error("Error fetching details:", error);
      setError("Failed to load destination data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  // Get the first tour from the first package for hero section
  const getTourData = () => {
    if (!apiData?.packages?.[0]?.tours?.[0]) return null;
    return apiData.packages[0].tours[0];
  };

  const tourData = getTourData();

  const renderTabContent = () => {
    switch (activeTab) {
      case "Itinerary":
        return <TripItinerary tourData={tourData} />;
      case "Overview":
        return <TripOverview tourData={tourData} />;
      case "Offering":
        return <TripOfferings tourData={tourData} />;
      case "Essentials":
        return <TripEssentials tourData={tourData} />;
      default:
        return <TripItinerary tourData={tourData} />;
    }
  };

  // Prepare itinerary data from API tour data
  const prepareItinerary = () => {
    if (tourData?.itineary && tourData.itineary.length > 0) {
      return tourData.itineary.map((item, index) => ({
        days: index + 1,
        place: item.day || `Day ${index + 1}`,
      }));
    }

    // Default itinerary based on duration
    const durationMatch = tourData?.duration?.match(/(\d+)/);
    const days = durationMatch ? parseInt(durationMatch[0]) : 7;

    return [
      { days: Math.floor(days / 2), place: tourData?.location || "Leh" },
      { days: Math.ceil(days / 2), place: "Nubra Valley & Pangong" },
    ];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 sm:h-32 sm:w-32 border-b-2 border-[#E65F25] mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Loading destination details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-2xl sm:text-3xl mb-4">⚠️</div>
          <p className="text-gray-600 text-sm sm:text-base mb-4">{error}</p>
          <button
            onClick={getDetails}
            className="bg-[#E65F25] text-white px-6 py-3 rounded-full hover:bg-[#d64f1a] transition-colors text-sm sm:text-base active:scale-95"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!apiData || !tourData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            No destination data found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section with API data */}
      <div className="pt-16">
        <DestinationHeroSection
          title={tourData.title}
          duration={tourData.time}
          itinerary={prepareItinerary()}
          price={tourData.price}
          oldPrice={
            (
              parseInt(tourData.price?.replace(/,/g, "")) * 1.2
            ).toLocaleString() || "28,799"
          }
          rating="4.8"
          reviews="150"
          images={tourData.images}
        />
      </div>

      {/* Mobile Floating CTA Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowMobileForm(true)}
          className="bg-[#E65F25] text-white px-6 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 active:scale-95 flex items-center gap-2"
        >
          <span>Book Now</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Form Overlay */}
      {showMobileForm && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center rounded-t-3xl">
              <h3 className="text-lg font-semibold text-gray-800">
                Book This Trip
              </h3>
              <button
                onClick={() => setShowMobileForm(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <StickyEnquiryForm tourData={tourData} isMobile={true} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-0 pb-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-6 lg:space-y-8">
            <div>
              <TripDurationCards tourData={tourData} />
            </div>

            <div>
              <DestinationRoutes tourData={tourData} />
            </div>

            <div>
              <TripHighlights tourData={tourData} />
            </div>

            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabs={["Itinerary", "Overview", "Offering", "Essentials"]}
            />

            <div className="mt-4 lg:mt-6">{renderTabContent()}</div>
          </div>

          {/* Right Column - Sticky Form (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <StickyEnquiryForm tourData={tourData} />
          </div>
        </div>
      </div>

      {/* Bottom Sections - Full Width */}
      <div className="w-full space-y-0">
        <EndOfTrip />
        <KnowBeforeYouGo knowBeforeYouGo={tourData.knowBeforeYouGo} />
        <CallBack />
        <RefundPolicy />
        <CancellationPolicy />
      </div>
    </div>
  );
};

export default DestinationDetailPage;
