import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import CardDetailHeroSection from "../components/CardDetailcomp/CardDetailHerosection.jsx";
import FiltersButton from "../components/CardDetailcomp/FiltersButton";
import InfiniteCarouselFourVisible from "../components/CardDetailcomp/InfiniteCarouselFourVisible";
import EnquiryForm from "../components/CardDetailcomp/EnquiryForm";
import { Sparkles, ArrowDown } from "lucide-react";
import axios from "axios";

const DestinationPage = () => {
  const details = useParams();
  const detailsId = details?.id;
  console.log(detailsId);
  const URL = "https://crm-ghar-se-frar.onrender.com";
  const [activeFilter, setActiveFilter] = useState("bestSelling");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const activeComponentRef = useRef(null);
  const { destinationId } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Transform API package data to match InfiniteCarouselFourVisible format
  const transformTourToCard = (tour, pkg) => {
    if (!tour) return null;

    return {
      title: tour.title,
      image: tour.thumbnail,
      price: parseInt(tour.price?.replace(/[₹,]/g, "") || 0),
      rating: 4.8,
      location: tour.location,
      duration: tour.duration,
      groupSize: "2-15 People",
      season: "May-Sep",
      tourType: pkg.name,
      pkgId: pkg?._id,
      highlights: tour.tripHighlights || [],
      featured: true,
      id: tour?._id,
      description: tour.overview?.[0]?.description || "",
      itinerary: tour.itineary || [],
    };
  };

  // Get details from API
  const getDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${URL}/detail/${detailsId}`);
      console.log("API Response:", data?.detail);
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
    if (detailsId) {
      getDetails();
    }
  }, [detailsId]);

  // Smart categorization of tours based on content analysis
  const prepareTourData = () => {
    const tourData = {
      bestSelling: [],
      groupTour: [],
      familyTours: [],
      romanticTrips: [],
    };

    if (!apiData?.packages) return tourData;

    // Extract all tours from all packages
    const allTours = [];
    apiData.packages.forEach((pkg) => {
      pkg.tours.forEach((tour) => {
        const transformedTour = transformTourToCard(tour, pkg);
        if (transformedTour) {
          allTours.push(transformedTour);
        }
      });
    });

    console.log("All tours available:", allTours.length);

    // Smart categorization logic
    allTours.forEach((tour, index) => {
      const title = tour.title.toLowerCase();
      const description = tour.description.toLowerCase();
      const highlights = tour.highlights.join(" ").toLowerCase();
      const duration = parseInt(tour.duration) || 0;

      // Analyze content to determine category
      if (title.includes("essence") || index === 0) {
        // First tour or "Essence" - typically best selling
        tourData.bestSelling.push(tour);
      } else if (
        title.includes("explorer") ||
        title.includes("circuit") ||
        duration >= 7
      ) {
        // Longer tours or explorer circuits - good for groups
        tourData.groupTour.push(tour);
      } else if (
        title.includes("expedition") ||
        highlights.includes("observatory") ||
        highlights.includes("village")
      ) {
        // Educational/Adventure tours - good for families
        tourData.familyTours.push(tour);
      } else if (
        title.includes("grand") ||
        highlights.includes("sunset") ||
        highlights.includes("bonfire")
      ) {
        // Luxury/Scenic tours - good for romantic trips
        tourData.romanticTrips.push(tour);
      } else {
        // Default fallback - distribute evenly
        const categories = Object.keys(tourData);
        const category = categories[index % categories.length];
        tourData[category].push(tour);
      }
    });

    // If any category is empty, redistribute tours
    const emptyCategories = Object.keys(tourData).filter(
      (key) => tourData[key].length === 0
    );
    if (emptyCategories.length > 0 && allTours.length > 0) {
      emptyCategories.forEach((category) => {
        // Find a tour that could fit this category
        const suitableTour = allTours.find((tour) => {
          if (
            category === "romanticTrips" &&
            tour.highlights.some(
              (h) =>
                h.toLowerCase().includes("lake") ||
                h.toLowerCase().includes("sunset")
            )
          ) {
            return true;
          }
          if (
            category === "familyTours" &&
            tour.duration &&
            parseInt(tour.duration) <= 7
          ) {
            return true;
          }
          if (
            category === "groupTour" &&
            tour.duration &&
            parseInt(tour.duration) >= 6
          ) {
            return true;
          }
          return false;
        });

        if (
          suitableTour &&
          !Object.values(tourData).flat().includes(suitableTour)
        ) {
          tourData[category].push(suitableTour);
        }
      });
    }

    // Final fallback - ensure at least one tour in each category if we have enough tours
    if (allTours.length >= Object.keys(tourData).length) {
      Object.keys(tourData).forEach((category, index) => {
        if (tourData[category].length === 0 && allTours[index]) {
          tourData[category].push(allTours[index]);
        }
      });
    }

    console.log("Categorized tour data:", tourData);
    return tourData;
  };

  const tourData = prepareTourData();

  // Prepare destination data for hero section
  const destinationData = apiData
    ? {
        title: apiData.packageName,
        offer: `Book Now To Get Upto ${apiData.discount}% Off`,
        videos: apiData.video
          ? [apiData.video]
          : [
              "/gallery/DestinationPageImg/Ladakh/Vid1.mp4",
              "/gallery/DestinationPageImg/Ladakh/Vid2.mp4",
              "/gallery/DestinationPageImg/Ladakh/Vid3.mp4",
              "/gallery/DestinationPageImg/Ladakh/Vid4.mp4",
            ],
        startingPrice: apiData.price,
      }
    : {
        title: "Leh Ladakh Tour Packages",
        offer: "Book Now To Get Upto 30% Off",
        videos: [
          "/gallery/DestinationPageImg/Ladakh/Vid1.mp4",
          "/gallery/DestinationPageImg/Ladakh/Vid2.mp4",
          "/gallery/DestinationPageImg/Ladakh/Vid3.mp4",
          "/gallery/DestinationPageImg/Ladakh/Vid4.mp4",
        ],
        startingPrice: "15,800",
      };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setTimeout(() => {
      if (activeComponentRef.current) {
        activeComponentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const getActiveComponent = () => {
    const tours = tourData[activeFilter] || [];
    const titles = {
      bestSelling: "Best Selling Ladakh Tours",
      groupTour: "Ladakh Group Trips - GSF Exclusive",
      familyTours: "Top Family Trips to Ladakh",
      romanticTrips: "Romantic Ladakh Tours for Couples",
    };

    return (
      <div ref={activeComponentRef} className="px-3 sm:px-4">
        <InfiniteCarouselFourVisible
          tours={tours}
          title={titles[activeFilter]}
          id={detailsId}
        />
      </div>
    );
  };

  const getOtherComponents = () => {
    const otherFilters = Object.keys(tourData).filter(
      (key) => key !== activeFilter && tourData[key].length > 0
    );
    const titles = {
      bestSelling: "Best Selling Ladakh Tours",
      groupTour: "Ladakh Group Trips - GSF Exclusive",
      familyTours: "Top Family Trips to Ladakh",
      romanticTrips: "Romantic Ladakh Tours for Couples",
    };

    return otherFilters.map((filterKey) => (
      <div key={filterKey} className="px-3 sm:px-4">
        <InfiniteCarouselFourVisible
          tours={tourData[filterKey]}
          title={titles[filterKey]}
          id={detailsId}
        />
      </div>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 sm:h-32 sm:w-32 border-b-2 border-[#E65F25] mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Loading destination data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
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

  if (!apiData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            No destination data found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <CardDetailHeroSection destinationData={destinationData} />

      {/* Filter Buttons */}
      <div className="px-3 sm:px-4">
        <FiltersButton
          onFilterChange={handleFilterChange}
          activeFilter={activeFilter}
        />
      </div>

      {/* Active Filter Component */}
      {getActiveComponent()}

      {/* Explore Other Packages Section */}
      <div className="py-6 sm:py-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap justify-center">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#E65F25] animate-pulse" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#E65F25] to-[#FF7A42] bg-clip-text text-transparent px-2">
                Explore Other Packages
              </h2>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF7A42] animate-pulse" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
              Discover more amazing travel experiences crafted just for you
            </p>

            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#E65F25] mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <div className="space-y-0">{getOtherComponents()}</div>

      {/* Enquiry Form */}
      <EnquiryForm />
    </div>
  );
};

export default DestinationPage;
