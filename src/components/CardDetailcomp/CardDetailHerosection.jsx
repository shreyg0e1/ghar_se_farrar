// import React from 'react';
// import { Phone, Send, Star, Calendar, Mountain, Camera, Plane } from 'lucide-react';

// const CardDetailHerosection = ({ destination = "Ladakh" }) => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl">
//             {/* Animated Badge */}
//             <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full mb-6 animate-pulse">
//               <Mountain className="w-4 h-4 text-orange-400 mr-2" />
//               <span className="text-orange-300 text-sm font-medium">Premium Adventure Experience</span>
//             </div>

//             {/* Main Title */}
//             <h1 className="text-6xl md:text-7xl font-black text-white mb-4 leading-tight">
//               <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
//                 {destination}
//               </span>
//               <br />
//               <span className="text-4xl md:text-5xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                 Tour Packages
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
//               Explore The Land Of High Passes - Book Now To Get Upto 50% Off
//             </p>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 mb-10">
//               <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
//                 <Star className="w-5 h-5 text-yellow-400 mr-2" />
//                 <span className="text-white font-semibold">Starting Price: Rs. 15,800/- Per Person</span>
//               </div>
//               <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
//                 <Calendar className="w-5 h-5 text-orange-400 mr-2" />
//                 <span className="text-white font-semibold">7-15 Days Duration</span>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 cursor-pointer">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                 <span className="relative flex items-center">
//                   <Phone className="w-5 h-5 mr-2" />
//                   Request a Callback
//                 </span>
//               </button>
              
//               <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer">
//                 <span className="flex items-center">
//                   <Send className="w-5 h-5 mr-2" />
//                   Chat With Us
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 right-10 animate-bounce">
//         <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
//           <Camera className="w-8 h-8 text-white" />
//         </div>
//       </div>

//       <div className="absolute bottom-20 right-20 animate-pulse">
//         <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
//           <Plane className="w-6 h-6 text-white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetailHerosection;





















































import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";

const CardDetailHeroSection = ({ destinationData = {} }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Default data for Ladakh
  const defaultData = {
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

  // Merge default data with passed props (for different destinations)
  const data = { ...defaultData, ...destinationData };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % data.videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prev) => (prev - 1 + data.videos.length) % data.videos.length
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {data.videos.map((video, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}

        {/* Gradient Overlay - Enhanced for mobile */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 
                       md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"
        ></div>
      </div>

      {/* Left Navigation Arrow - Mobile Optimized */}
      <button
        onClick={prevVideo}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-[#E65F25]/90 hover:bg-[#E65F25] rounded-full 
                   flex items-center justify-center transition-all duration-300 
                   hover:scale-110 active:scale-95 cursor-pointer 
                   shadow-lg backdrop-blur-sm"
        aria-label="Previous video"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
      </button>

      {/* Right Navigation Arrow - Mobile Optimized */}
      <button
        onClick={nextVideo}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-[#E65F25]/90 hover:bg-[#E65F25] rounded-full 
                   flex items-center justify-center transition-all duration-300 
                   hover:scale-110 active:scale-95 cursor-pointer 
                   shadow-lg backdrop-blur-sm"
        aria-label="Next video"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
      </button>

      {/* Video Indicators (Dots) - Mobile Optimized */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {data.videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentVideoIndex
                ? "h-1.5 sm:h-2 w-8 sm:w-12 bg-[#E65F25]"
                : "h-1.5 sm:h-2 w-4 sm:w-8 bg-white/50 hover:bg-white/70"
            } active:scale-95`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content - Mobile Optimized */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Title - Responsive Typography */}
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                      font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-2xl
                      text-center md:text-left"
        >
          {data.title}
        </h1>

        {/* Offer Text - Responsive */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 
                     mb-6 sm:mb-8 md:mb-12 font-light drop-shadow-lg 
                     max-w-full md:max-w-2xl text-center md:text-left
                     px-2 sm:px-0"
        >
          {data.offer}
        </p>

        {/* Starting Price - Mobile Optimized */}
        <div className="mb-6 sm:mb-8 text-center md:text-left">
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-medium">
            Starting Price:
          </p>
          <p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg
                       flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2"
          >
            Rs. {data.startingPrice}/-
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white/90">
              Per Person
            </span>
          </p>
        </div>

        {/* CTA Buttons - Mobile Optimized */}
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <button
            className="group bg-[#E65F25] hover:bg-[#d64f1a] text-white 
                           px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold 
                           text-sm sm:text-base md:text-lg transition-all duration-300 
                           hover:scale-105 hover:shadow-xl hover:shadow-[#E65F25]/50 
                           cursor-pointer flex items-center justify-center gap-2 sm:gap-3 
                           active:scale-95 w-full lg:w-[300px] xs:w-auto"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            Request a Callback
          </button>

          <button
            className="group bg-[#25D366] hover:bg-[#20ba5a] text-white 
             px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold 
             text-sm sm:text-base md:text-lg transition-all duration-300 
             hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/50 
             cursor-pointer flex items-center justify-center gap-2 sm:gap-3 
             active:scale-95 w-full xs:w-auto lg:w-[300px]"
            onClick={() => window.open(`https://wa.me/919773868499`, "_blank")}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            Chat With Us
          </button>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
          <div className="animate-bounce flex flex-col items-center text-white/80">
            <span className="text-xs mb-1">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing ChevronDown icon import
const ChevronDown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default CardDetailHeroSection;