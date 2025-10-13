import React from "react";
import Header from "../components/Landingpagecomp/header";
import PlanByInterest from "../components/Landingpagecomp/byinterest";
import Footer from "../components/Landingpagecomp/footer";
import ContactUs from "../components/Landingpagecomp/contactus";
import InfiniteCarouselFiveVisible from "../components/Landingpagecomp/InfiniteCarouselFiveVisible";
import Customiseform from "../components/Landingpagecomp/customiseform";
import Faraarnama from "../components/Landingpagecomp/faraarnama";
import WhyGoFaraar from "../components/Landingpagecomp/whygofarar";
import FullScreenVideo from "../components/Landingpagecomp/fullScreenVideo";
import romantic from "../assets/romanticGateway.png";
import BuzzSection from "../components/Landingpagecomp/buzzneverLies";

function LandingPage({
  internationalTrips,
  indianTrips,
  romanticTrips,
  loading,
  error,
}) {
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white relative">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl text-gray-600">
              Loading amazing trips...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-white relative">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl text-red-600">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Header at the top */}
      <Header />

      {/* Full-screen video starts just below header */}
      <div className="relative w-full h-screen">
        <FullScreenVideo />
      </div>

      {/* Rest of the content */}
      <div className="relative z-10 bg-white">
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-7xl px-4 space-y-12">
            <PlanByInterest />

            {/* International Trips */}
            <InfiniteCarouselFiveVisible trips={internationalTrips} />

            <WhyGoFaraar />

            {/* Indian Trips */}
            <InfiniteCarouselFiveVisible trips={indianTrips} />

            <img src={romantic} alt="Romantic getaway" />

            {/* Romantic Trips */}
            <InfiniteCarouselFiveVisible trips={romanticTrips} />
          </div>
        </div>

        {/* Contact + Footer full width */}
        <div className="w-full">
          <Faraarnama />
          <Customiseform />
          <BuzzSection />
          <ContactUs />
         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
