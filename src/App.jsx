import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import LandingPage from "./pages/LandingPage";
import DestinationDetailPage from "./pages/DestinationDetail";
import Header from "./components/Landingpagecomp/header";
import PricelessFooter from "./components/Landingpagecomp/footer";
import CardDetailHerosection from "./components/CardDetailcomp/CardDetailHerosection";
import FiltersButton from "./components/CardDetailcomp/FiltersButton";
import EnquiryForm from "./components/CardDetailcomp/EnquiryForm";
import DestinationPage from "./pages/DestinationPage";
import BlogHeroSection from "./components/HeaderNavigation/BlogComp/BlogHeroSection";
import FiltersButtonBlog from "./components/HeaderNavigation/BlogComp/FiltersButtonBlog";
import BlogCards from "./components/HeaderNavigation/BlogComp/BlogCards";
import GalleryMasonryGrid from "./components/HeaderNavigation/BlogComp/GalleryMasonryGrid";
import AboutUs from "./components/HeaderNavigation/AboutUs";
import PaymentPage from "./components/HeaderNavigation/PaymentPage";

function App() {
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all trips data from API
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://crm-ghar-se-frar.onrender.com/escape/all"
        );

        // Map the API response to match the expected format
        const formattedTrips = response.data.map((trip) => ({
          title: trip.name,
          image: trip.image,
          price: `₹${trip.price}`,
          type: trip.type,
          details:trip?.details
        }));

        setAllTrips(formattedTrips);
        setError(null);
      } catch (err) {
        setError("Failed to fetch trips");
        console.error("Error fetching trips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // Filter trips by type
  const internationalTrips = allTrips.filter(
    (trip) => trip.type == "International"
  );
  const indianTrips = allTrips.filter((trip) => trip.type == "Indian");

  // For romantic trips, you might need to adjust this filter based on your API data
  // If romantic trips have a specific type, use that, otherwise use a different logic
  const romanticTrips = allTrips.filter((trip) => trip.type == "Romantic"); // Adjust this as needed

  return (
    <BrowserRouter>
      {/* <BlogHeroSection/>
      <FiltersButtonBlog/>
      <BlogCards/>
      <GalleryMasonryGrid/>
      <AboutUs/>
      <PaymentPage/> */}
      {/* <CardDetailHerosection/>   */}
      {/* <FiltersButton/>  */}
      {/* <EnquiryForm/> */}

      <Header />
      <Routes>
        {/* Default route → Landing Page */}
        <Route
          path="/"
          element={
            <LandingPage
              internationalTrips={internationalTrips}
              indianTrips={indianTrips}
              romanticTrips={romanticTrips}
              loading={loading}
              error={error}
            />
          }
        />

        {/* Destination page route */}
        <Route path="/destination/:id" element={<DestinationPage />} />

        {/* Destination detail route */}
        <Route
          path="/destination-detail/:id"
          element={<DestinationDetailPage />}
        />
      </Routes>
      <PricelessFooter />
    </BrowserRouter>
  );
}

export default App;
