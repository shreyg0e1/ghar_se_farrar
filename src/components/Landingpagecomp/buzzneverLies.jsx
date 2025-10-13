//========================================================
// Before RESPONSIVE:- Before using
//========================================================

// import React, { useEffect, useRef, useState } from "react";
// import { Volume2, VolumeX } from "lucide-react";

// const BuzzTestimonials = () => {
//   const testimonials = [
//     { id: 1, name: "Simran Kaur", initial: "S", color: "bg-pink-500", comment: "The experience with Ghar Se Faraar was pure magic ♡..." },
//     { id: 2, name: "Rohan", initial: "R", color: "bg-pink-500", comment: "Thank you everyone for an amazinggg time!..." },
//     { id: 3, name: "Rahul Malhotra", initial: "R", color: "bg-purple-500", comment: "Thanks to Ghar Se Faraar wasn't just a trip..." },
//     { id: 4, name: "Ananya Gupta", initial: "A", color: "bg-pink-400", comment: "Thanks to Ghar Se Faraar my dream of travelling..." },
//     { id: 5, name: "Mehul Sharma", initial: "M", color: "bg-blue-500", comment: "Loved every single moment of the trip. Highly recommend!" },
//     { id: 6, name: "Priya Nair", initial: "P", color: "bg-green-500", comment: "A once in a lifetime experience, perfectly planned journey." },
//   ];

//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   const videoRefs = [useRef(null), useRef(null), useRef(null)];
//   const players = useRef([]);
//   const [mutedStates, setMutedStates] = useState([true, true, true]);

//   const videoIds = ["JPsRuFRL0P0", "Y3qlgDS_h3E", "FvCAHSgRXKw"];

//   useEffect(() => {
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     document.body.appendChild(tag);

//     window.onYouTubeIframeAPIReady = () => {
//       videoRefs.forEach((ref, index) => {
//         if (ref.current) {
//           players.current[index] = new window.YT.Player(ref.current, {
//             videoId: videoIds[index],
//             playerVars: {
//               autoplay: 1,
//               mute: 1,
//               controls: 0,
//               modestbranding: 1,
//               rel: 0,
//               showinfo: 0,
//               playsinline: 1,
//               loop: 1,
//               playlist: videoIds[index],
//             },
//             events: {
//               onReady: (event) => {
//                 event.target.mute();
//                 event.target.playVideo();
//               },
//             },
//           });
//         }
//       });
//     };
//   }, []);

//   const toggleMute = (index, e) => {
//     e.stopPropagation();

//     if (players.current[index]) {
//       const newMutedStates = [...mutedStates];

//       if (mutedStates[index]) {
//         players.current[index].unMute();
//         newMutedStates[index] = false;

//         players.current.forEach((player, i) => {
//           if (i !== index && player) {
//             player.mute();
//             newMutedStates[i] = true;
//           }
//         });
//       } else {
//         players.current[index].mute();
//         newMutedStates[index] = true;
//       }

//       setMutedStates(newMutedStates);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1
//             className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4 tracking-tight leading-none"
//             style={{ fontFamily: "Inter" }}
//           >
//             The buzz never lies
//           </h1>
//           <p
//             className="text-lg sm:text-xl text-gray-600 font-medium"
//             style={{ fontFamily: "Inter" }}
//           >
//             Straight from the ones who made it epic.
//           </p>
//         </div>

//         {/* Video Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
//           {videoRefs.map((ref, idx) => (
//             <div key={idx} className="relative flex justify-center group">
//               <div
//                 className={`h-[400px] sm:h-[500px] lg:h-[600px] ${
//                   idx === 1 ? "aspect-[16/9]" : "aspect-[9/16]"
//                 } rounded-2xl overflow-hidden shadow-2xl relative`}
//               >
//                 <div ref={ref} id={`player${idx}`} className="w-full h-full"></div>

//                 {/* Mute/Unmute Overlay */}
//                 <div className="absolute inset-0 flex items-end justify-end p-4 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button
//                     onClick={(e) => toggleMute(idx, e)}
//                     className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
//                   >
//                     {mutedStates[idx] ? (
//                       <VolumeX className="w-5 h-5" />
//                     ) : (
//                       <Volume2 className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonials Slider - Row 1 */}
//         <div className="relative overflow-hidden mb-8">
//           {/* Left Gradient */}
//           <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
//           {/* Right Gradient */}
//           <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

//           <div className="flex animate-scroll-right space-x-6">
//             {duplicatedTestimonials.map((testimonial, index) => (
//               <div
//                 key={`row1-${testimonial.id}-${index}`}
//                 className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
//               >
//                 <div className="flex items-center mb-4">
//                   <div
//                     className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-3`}
//                     style={{ fontFamily: "Inter" }}
//                   >
//                     {testimonial.initial}
//                   </div>
//                   <h3
//                     className="font-semibold text-gray-900 text-lg"
//                     style={{ fontFamily: "Inter" }}
//                   >
//                     {testimonial.name}
//                   </h3>
//                 </div>
//                 <p
//                   className="text-gray-700 leading-relaxed text-sm"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   {testimonial.comment}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Testimonials Slider - Row 2 */}
//         <div className="relative overflow-hidden">
//           {/* Left Gradient */}
//           <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
//           {/* Right Gradient */}
//           <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

//           <div className="flex animate-scroll-left space-x-6">
//             {duplicatedTestimonials.map((testimonial, index) => (
//               <div
//                 key={`row2-${testimonial.id}-${index}`}
//                 className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
//               >
//                 <div className="flex items-center mb-4">
//                   <div
//                     className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-3`}
//                     style={{ fontFamily: "Inter" }}
//                   >
//                     {testimonial.initial}
//                   </div>
//                   <h3
//                     className="font-semibold text-gray-900 text-lg"
//                     style={{ fontFamily: "Inter" }}
//                   >
//                     {testimonial.name}
//                   </h3>
//                 </div>
//                 <p
//                   className="text-gray-700 leading-relaxed text-sm"
//                   style={{ fontFamily: "Inter" }}
//                 >
//                   {testimonial.comment}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-right {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }
//         .animate-scroll-right {
//           animation: scroll-right 30s linear infinite;
//         }
//         .animate-scroll-left {
//           animation: scroll-left 30s linear infinite;
//         }
//         .animate-scroll-right:hover,
//         .animate-scroll-left:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BuzzTestimonials;

//========================================================
//// AFTER RESPONSIVE:- Currently Using
//========================================================
import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BuzzTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Simran Kaur",
      initial: "S",
      color: "bg-pink-500",
      comment: "The experience with Ghar Se Faraar was pure magic ♡...",
    },
    {
      id: 2,
      name: "Rohan",
      initial: "R",
      color: "bg-pink-500",
      comment: "Thank you everyone for an amazinggg time!...",
    },
    {
      id: 3,
      name: "Rahul Malhotra",
      initial: "R",
      color: "bg-purple-500",
      comment: "Thanks to Ghar Se Faraar wasn't just a trip...",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      initial: "A",
      color: "bg-pink-400",
      comment: "Thanks to Ghar Se Faraar my dream of travelling...",
    },
    {
      id: 5,
      name: "Mehul Sharma",
      initial: "M",
      color: "bg-blue-500",
      comment: "Loved every single moment of the trip. Highly recommend!",
    },
    {
      id: 6,
      name: "Priya Nair",
      initial: "P",
      color: "bg-green-500",
      comment: "A once in a lifetime experience, perfectly planned journey.",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const players = useRef([]);
  const [mutedStates, setMutedStates] = useState([true, true, true]);

  const videoIds = ["JPsRuFRL0P0", "Y3qlgDS_h3E", "FvCAHSgRXKw"];

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      videoRefs.forEach((ref, index) => {
        if (ref.current) {
          players.current[index] = new window.YT.Player(ref.current, {
            videoId: videoIds[index],
            playerVars: {
              autoplay: 1,
              mute: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              playsinline: 1,
              loop: 1,
              playlist: videoIds[index],
            },
            events: {
              onReady: (event) => {
                event.target.mute();
                event.target.playVideo();
              },
            },
          });
        }
      });
    };
  }, []);

  const toggleMute = (index, e) => {
    e.stopPropagation();

    if (players.current[index]) {
      const newMutedStates = [...mutedStates];

      if (mutedStates[index]) {
        players.current[index].unMute();
        newMutedStates[index] = false;

        players.current.forEach((player, i) => {
          if (i !== index && player) {
            player.mute();
            newMutedStates[i] = true;
          }
        });
      } else {
        players.current[index].mute();
        newMutedStates[index] = true;
      }

      setMutedStates(newMutedStates);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-2 md:mb-3 lg:mb-4 tracking-tight leading-none"
            style={{ fontFamily: "Inter" }}
          >
            The buzz never lies
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium"
            style={{ fontFamily: "Inter" }}
          >
            Straight from the ones who made it epic.
          </p>
        </div>

        {/* Video Grid - Desktop Only (≥1024px) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-16">
          {videoRefs.map((ref, idx) => (
            <div key={idx} className="relative flex justify-center group">
              <div
                className={`h-[600px] ${
                  idx === 1 ? "aspect-[16/9]" : "aspect-[9/16]"
                } rounded-2xl overflow-hidden shadow-2xl relative`}
              >
                <div
                  ref={ref}
                  id={`player${idx}`}
                  className="w-full h-full"
                ></div>

                {/* Mute/Unmute Overlay */}
                <div className="absolute inset-0 flex items-end justify-end p-4 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => toggleMute(idx, e)}
                    className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
                  >
                    {mutedStates[idx] ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Grid - Tablet (768px - 1023px) - All 3 in One Row */}
        <div className="hidden md:block lg:hidden mb-12">
          <div className="flex justify-center items-center gap-4">
            {videoRefs.map((ref, idx) => (
              <div key={idx} className="relative group">
                <div
                  className={`${
                    idx === 1 ? "w-[240px] h-[135px]" : "w-[135px] h-[240px]"
                  } rounded-xl overflow-hidden shadow-2xl relative`}
                >
                  <div
                    ref={ref}
                    id={`player${idx}-tablet`}
                    className="w-full h-full"
                  ></div>

                  {/* Mute/Unmute Overlay */}
                  <div className="absolute inset-0 flex items-end justify-end p-3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => toggleMute(idx, e)}
                      className="bg-black/70 hover:bg-black/90 text-white p-2.5 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
                    >
                      {mutedStates[idx] ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Grid - Mobile (<768px) - All 3 Videos in Single Row */}
        <div className="md:hidden mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {videoRefs.map((ref, idx) => (
              <div key={idx} className="relative flex-shrink-0 group">
                <div
                  className={`${
                    idx === 1 ? "w-[180px] h-[100px]" : "w-[100px] h-[180px]"
                  } rounded-xl overflow-hidden shadow-xl relative`}
                >
                  <div
                    ref={ref}
                    id={`player${idx}-mobile`}
                    className="w-full h-full"
                  ></div>

                  {/* Mute/Unmute Button - Always visible on mobile */}
                  <div className="absolute inset-0 flex items-end justify-end p-2 bg-gradient-to-t from-black/20 via-transparent to-transparent">
                    <button
                      onClick={(e) => toggleMute(idx, e)}
                      className="bg-black/70 active:bg-black/90 text-white p-2 rounded-full transition-all duration-200 active:scale-95 backdrop-blur-sm cursor-pointer"
                    >
                      {mutedStates[idx] ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Slider - Row 1 */}
        <div className="relative overflow-hidden mb-6 md:mb-8">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-8 md:w-16 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-8 md:w-16 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-right space-x-4 md:space-x-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`row1-${testimonial.id}-${index}`}
                className="flex-shrink-0 w-64 md:w-80 bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-2.5 md:mr-3`}
                    style={{ fontFamily: "Inter" }}
                  >
                    {testimonial.initial}
                  </div>
                  <h3
                    className="font-semibold text-gray-900 text-base md:text-lg"
                    style={{ fontFamily: "Inter" }}
                  >
                    {testimonial.name}
                  </h3>
                </div>
                <p
                  className="text-gray-700 leading-relaxed text-xs md:text-sm"
                  style={{ fontFamily: "Inter" }}
                >
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Slider - Row 2 */}
        <div className="relative overflow-hidden">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-8 md:w-16 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-8 md:w-16 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-left space-x-4 md:space-x-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`row2-${testimonial.id}-${index}`}
                className="flex-shrink-0 w-64 md:w-80 bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-2.5 md:mr-3`}
                    style={{ fontFamily: "Inter" }}
                  >
                    {testimonial.initial}
                  </div>
                  <h3
                    className="font-semibold text-gray-900 text-base md:text-lg"
                    style={{ fontFamily: "Inter" }}
                  >
                    {testimonial.name}
                  </h3>
                </div>
                <p
                  className="text-gray-700 leading-relaxed text-xs md:text-sm"
                  style={{ fontFamily: "Inter" }}
                >
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        /* Hide scrollbar for mobile video scroll */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BuzzTestimonials;
