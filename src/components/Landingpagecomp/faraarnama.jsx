// import React, { useState, useEffect } from 'react';
// import { Play, Pause, Volume2, VolumeX, Heart, Share2, Bookmark, Zap } from 'lucide-react';

// const FaraarNamaGallery = ({ galleryImages, reelVideos, youtubeVideos }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [mutedVideos, setMutedVideos] = useState({});
//   const [liked, setLiked] = useState({});
  
//   // Default content paths - Correct paths for public folder
//   const defaultImages = [
//     '/gallery/galleryimg1.jpeg',
//     '/gallery/galleryimg2.jpeg', 
//     '/gallery/galleryimg3.jpeg',
//     '/gallery/galleryimg4.jpeg',
//     '/gallery/galleryimg5.jpeg',
//     '/gallery/galleryimg6.jpeg',
//     '/gallery/galleryimg7.jpeg',
//     '/gallery/galleryimg8.jpeg',
//     '/gallery/galleryimg9.jpeg',
//     '/gallery/galleryimg10.png',
//     '/gallery/galleryimg11.jpg',
//     '/gallery/galleryimg12.jpg',
//     '/gallery/galleryimg13.png',
//     '/gallery/galleryimg14.jpeg',
//     '/gallery/galleryimg15.jpeg',
//     '/gallery/galleryimg16.jpeg' 
//   ];

//   // Sample video URLs - Correct paths for public folder
//   const defaultReelVideos = [
//     '/gallery/waterfall1.mp4',
//     '/gallery/darjeeling.mp4',
//     '/gallery/meghalayareel.mp4',
//     '/gallery/wildlifereel.mp4'
//   ];

//   const defaultYouTubeVideo = '/gallery/holiyt.mp4';

//   const images = galleryImages || defaultImages;
//   const reels = reelVideos || defaultReelVideos;
//   const youtubeVid = youtubeVideos || defaultYouTubeVideo;

//   const toggleMute = (videoId) => {
//     setMutedVideos(prev => ({
//       ...prev,
//       [videoId]: !prev[videoId]
//     }));
//   };

//   const toggleLike = (index) => {
//     setLiked(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const MediaCard = ({ children, index, className = "", isVideo = false, isReel = false }) => (
//     <div 
//       className={`group relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-700 hover:scale-[1.06] md:hover:scale-[1.08] hover:rotate-1 hover:shadow-2xl hover:shadow-black/30 hover:z-10 ${className} ${
//         hoveredIndex === index ? 'ring-2 md:ring-4 ring-white/50 ring-offset-1 md:ring-offset-2 ring-offset-transparent' : ''
//       }`}
//       style={{
//         transform: hoveredIndex === index 
//           ? `scale(${window.innerWidth < 768 ? '1.04' : '1.08'}) rotate(${Math.random() > 0.5 ? '1deg' : '-1deg'})` 
//           : 'scale(1) rotate(0deg)',
//         boxShadow: hoveredIndex === index 
//           ? '0 25px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
//           : '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
//       }}
//       onMouseEnter={() => setHoveredIndex(index)}
//       onMouseLeave={() => setHoveredIndex(null)}
//     >
//       {children}
      
//       {/* Premium gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       {/* Interactive buttons overlay */}
//       <div className="absolute top-2 md:top-4 right-2 md:right-4 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//         {isVideo && (
//           <button
//             onClick={() => toggleMute(index)}
//             className="p-1.5 md:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-black/90 transition-all duration-200 hover:scale-110"
//           >
//             {mutedVideos[index] ? <VolumeX size={14} className="md:w-4 md:h-4" /> : <Volume2 size={14} className="md:w-4 md:h-4" />}
//           </button>
//         )}
//         <button
//           onClick={() => toggleLike(index)}
//           className="p-1.5 md:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-red-500 transition-all duration-200 hover:scale-110"
//         >
//           <Heart size={14} className="md:w-4 md:h-4" fill={liked[index] ? 'currentColor' : 'none'} />
//         </button>
//         <button className="p-1.5 md:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-blue-500 transition-all duration-200 hover:scale-110">
//           <Share2 size={14} className="md:w-4 md:h-4" />
//         </button>
//       </div>

//       {/* Reel-specific UI elements */}
//       {isReel && (
//         <>
//           <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
//             <div className="flex items-center justify-between text-white">
//               <div className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
//                 <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
//                 Reel
//               </div>
//               <div className="flex gap-1">
//                 <Bookmark size={16} className="md:w-5 md:h-5 hover:scale-110 transition-transform cursor-pointer" />
//               </div>
//             </div>
//           </div>
//           {/* Reel progress bar */}
//           <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-80">
//             <div className="h-full bg-white/30 animate-pulse"></div>
//           </div>
//         </>
//       )}
//     </div>
//   );

//   const AutoPlayVideo = ({ src, className, videoId, isReel = false }) => (
//     <video
//       autoPlay
//       loop
//       muted={mutedVideos[videoId] !== false}
//       playsInline
//       className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
//         isReel ? 'object-cover' : 'object-cover'
//       } ${className}`}
//       style={{
//         aspectRatio: isReel ? '9/16' : 'auto'
//       }}
//       onLoadedData={(e) => {
//         e.target.play().catch(() => {});
//       }}
//     >
//       <source src={src} type="video/mp4" />
//     </video>
//   );

//   return (
//     <div className="min-h-[170vh] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-3 md:p-6 lg:p-8 overflow-hidden">
//       <div className="max-w-[1600px] mx-auto">
        
//         {/* Clean Header - No Animation */}
//         <div className="text-center mb-6 md:mb-8 lg:mb-10">
//           <div className="inline-block">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 bg-clip-text mb-3 md:mb-4">
//               FaraarNama
//             </h1>
//             <div className="w-full h-0.5 md:h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mb-3 md:mb-4"></div>
//             <p className="text-base md:text-lg lg:text-xl text-slate-600 font-light tracking-wide opacity-90">
//               They escaped, they lived, they shared ✨
//             </p>
//           </div>
//         </div>

//         {/* Enhanced Premium Gallery Grid - Adjusted for wider reels */}
//         <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-3 lg:gap-4 h-[120vh] md:h-[130vh] lg:h-[140vh]">
          
//           {/* Main Tall Reel - KEEPING EXACTLY AS YOU LOVED IT (BigBuckBunny.mp4) */}
//           <MediaCard index={0} className="col-span-1 row-span-8 md:row-span-10 lg:row-span-12" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[0]} videoId={0} isReel={true} />
//           </MediaCard>

//           {/* Featured Center Image - Main attraction */}
//           <MediaCard index={1} className="col-span-3 md:col-span-4 lg:col-span-5 row-span-4 md:row-span-5 lg:row-span-6">
//             <img src={images[4]} alt="Main featured adventure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">Featured Adventure</h3>
//               <p className="text-xs md:text-sm opacity-90">The journey begins here</p>
//             </div>
//           </MediaCard>

//           {/* New Image Section */}
//           <MediaCard index={2} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3 md:row-span-4 lg:row-span-5">
//             <img src={images[6]} alt="Sunset moments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 text-white">
//               <div className="bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm px-2 py-0.5 md:py-1 rounded-full text-xs font-medium">
//                 🌅
//               </div>
//             </div>
//           </MediaCard>

//           {/* Reel Frame 2 - DOUBLED WIDTH */}
//           <MediaCard index={3} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-5 md:row-span-6 lg:row-span-7" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[1]} videoId={3} isReel={true} />
//           </MediaCard>

//           {/* Travel Inspiration Section */}
//           <MediaCard index={4} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3 md:row-span-4">
//             <img src={images[5]} alt="Travel inspiration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="text-center text-white">
//                 <div className="bg-white/20 backdrop-blur-md px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-sm">
//                   📍 Wanderlust
//                 </div>
//               </div>
//             </div>
//           </MediaCard>

//           {/* Additional Image */}
//           <MediaCard index={5} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3">
//             <img src={images[12]} alt="Beach vibes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* Additional Image */}
//           <MediaCard index={6} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3">
//             <img src={images[15]} alt="Beach vibes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* YouTube Video Section */}
//           <MediaCard index={7} className="col-span-3 md:col-span-4 lg:col-span-4 row-span-3 md:row-span-4" isVideo={true}>
//             <AutoPlayVideo src={youtubeVid} videoId={6} />
//             <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="bg-red-600/90 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 text-white">
//                 <Play size={12} className="md:w-4 md:h-4" fill="white" />
//                 Vlog
//               </div>
//             </div>
//           </MediaCard>

//           {/* Reel Frame 3 - DOUBLED WIDTH */}
//           <MediaCard index={8} className="col-span-2 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-5" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[2]} videoId={7} isReel={true} />
//           </MediaCard>

//           {/* Additional Images filling spaces */}
//           <MediaCard index={9} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3">
//             <img src={images[9]} alt="Adventure moments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={10} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2">
//             <img src={images[11]} alt="Forest bridge adventure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="bg-green-600/80 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium">
//                 🌲 Wild
//               </div>
//             </div>
//           </MediaCard>

//           {/* Reel Frame 4 - DOUBLED WIDTH */}
//           <MediaCard index={11} className="col-span-2 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-5" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[3]} videoId={10} isReel={true} />
//           </MediaCard>

//           <MediaCard index={12} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
//             <img src={images[13]} alt="Mountain peak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={13} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2">
//             <img src={images[14]} alt="Ocean sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={14} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
//             <img src={images[7]} alt="Group memories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={15} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2">
//             <img src={images[10]} alt="Historic places" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//         </div>

//         {/* Creative Floating CTA Button with Inter font and custom color */}
//         <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 opacity-90 hover:opacity-100 transition-all duration-300">
//           <button 
//             className="group relative overflow-hidden px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 transform cursor-pointer"
//             style={{ 
//               backgroundColor: '#E65F25',
//               fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
//             }}
//           >
//             <div className="relative flex items-center gap-2 text-white font-medium text-sm md:text-base">
//               <Zap size={16} className="md:w-5 md:h-5 animate-pulse" />
//               <span className="whitespace-nowrap">Escape Now</span>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FaraarNamaGallery;
























//======================================================
//BEFORE RESPONSIVE:- BEFORE Using Code
//=======================================================
// import React, { useState, useEffect } from 'react';
// import { Play, Pause, Volume2, VolumeX, Heart, Share2, Bookmark, Zap } from 'lucide-react';

// const FaraarNamaGallery = ({ galleryImages, reelVideos, youtubeVideos }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [mutedVideos, setMutedVideos] = useState({});
//   const [liked, setLiked] = useState({});
  
//   // Default content paths - Correct paths for public folder
//   const defaultImages = [
//     '/gallery/galleryimg1.jpeg',
//     '/gallery/galleryimg2.jpeg', 
//     '/gallery/galleryimg3.jpeg',
//     '/gallery/galleryimg4.jpeg',
//     '/gallery/galleryimg5.jpeg',
//     '/gallery/galleryimg6.jpeg',
//     '/gallery/galleryimg7.jpeg',
//     '/gallery/galleryimg8.jpeg',
//     '/gallery/galleryimg9.jpeg',
//     '/gallery/galleryimg10.png',
//     '/gallery/galleryimg11.jpg',
//     '/gallery/galleryimg12.jpg',
//     '/gallery/galleryimg13.png',
//     '/gallery/galleryimg14.jpeg',
//     '/gallery/galleryimg15.jpeg',
//     '/gallery/galleryimg16.jpeg' 
//   ];

//   // Sample video URLs - Correct paths for public folder
//   const defaultReelVideos = [
//     '/gallery/waterfall1.mp4',
//     '/gallery/darjeeling.mp4',
//     '/gallery/meghalayareel.mp4',
//     '/gallery/wildlifereel.mp4'
//   ];

//   const defaultYouTubeVideo = '/gallery/holiyt.mp4';

//   const images = galleryImages || defaultImages;
//   const reels = reelVideos || defaultReelVideos;
//   const youtubeVid = youtubeVideos || defaultYouTubeVideo;

//   const toggleMute = (videoId) => {
//     setMutedVideos(prev => ({
//       ...prev,
//       [videoId]: !prev[videoId]
//     }));
//   };

//   const toggleLike = (index) => {
//     setLiked(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const MediaCard = ({ children, index, className = "", isVideo = false, isReel = false }) => (
//     <div 
//       className={`group relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-700 hover:scale-[1.06] md:hover:scale-[1.08] hover:rotate-1 hover:shadow-2xl hover:shadow-black/30 ${className} ${
//         hoveredIndex === index ? 'ring-2 md:ring-4 ring-white/50 ring-offset-1 md:ring-offset-2 ring-offset-transparent z-20' : ''
//       } ${
//         hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 blur-[1px]' : 'opacity-100 blur-0'
//       }`}
//       style={{
//         transform: hoveredIndex === index 
//           ? `scale(${window.innerWidth < 768 ? '1.04' : '1.08'}) rotate(${Math.random() > 0.5 ? '1deg' : '-1deg'})` 
//           : 'scale(1) rotate(0deg)',
//         boxShadow: hoveredIndex === index 
//           ? '0 25px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
//           : '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
//         zIndex: hoveredIndex === index ? 20 : hoveredIndex !== null && hoveredIndex !== index ? 5 : 10,
//       }}
//       onMouseEnter={() => setHoveredIndex(index)}
//       onMouseLeave={() => setHoveredIndex(null)}
//     >
//       {children}
      
//       {/* Premium gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       {/* Interactive buttons overlay */}
//       <div className="absolute top-2 md:top-4 right-2 md:right-4 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//         {isVideo && (
//           <button
//             onClick={() => toggleMute(index === 0 ? 0 : index === 3 ? 3 : index === 7 ? 7 : index === 8 ? 8 : index === 11 ? 11 : index)}
//             className="p-1.5 md:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-black/90 transition-all duration-200 hover:scale-110"
//           >
//             {mutedVideos[index === 0 ? 0 : index === 3 ? 3 : index === 7 ? 7 : index === 8 ? 8 : index === 11 ? 11 : index] ? <VolumeX size={14} className="md:w-4 md:h-4" /> : <Volume2 size={14} className="md:w-4 md:h-4" />}
//           </button>
//         )}
//         <button
//           onClick={() => toggleLike(index)}
//           className="p-1.5 md:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-red-500 transition-all duration-200 hover:scale-110"
//         >
//           <Heart size={14} className="md:w-4 md:h-4" fill={liked[index] ? 'currentColor' : 'none'} />
//         </button>
//         <button className="p-1.5 md:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-blue-500 transition-all duration-200 hover:scale-110">
//           <Share2 size={14} className="md:w-4 md:h-4" />
//         </button>
//       </div>

//       {/* Reel-specific UI elements */}
//       {isReel && (
//         <>
//           <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
//             <div className="flex items-center justify-between text-white">
//               <div className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
//                 <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
//                 Reel
//               </div>
//               <div className="flex gap-1">
//                 <Bookmark size={16} className="md:w-5 md:h-5 hover:scale-110 transition-transform cursor-pointer" />
//               </div>
//             </div>
//           </div>
//           {/* Reel progress bar */}
//           <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-80">
//             <div className="h-full bg-white/30 animate-pulse"></div>
//           </div>
//         </>
//       )}
//     </div>
//   );

//   const AutoPlayVideo = ({ src, className, videoId, isReel = false }) => (
//     <video
//       autoPlay
//       loop
//       muted={mutedVideos[videoId] !== false}
//       playsInline
//       className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
//         isReel ? 'object-cover' : 'object-cover'
//       } ${className}`}
//       style={{
//         aspectRatio: isReel ? '9/16' : 'auto'
//       }}
//       onLoadedData={(e) => {
//         e.target.play().catch(() => {});
//       }}
//     >
//       <source src={src} type="video/mp4" />
//     </video>
//   );

//   return (
//     <div className="min-h-[170vh] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-3 md:p-6 lg:p-8 overflow-hidden">
//       <div className="max-w-[1600px] mx-auto">
        
//         {/* Clean Header - No Animation */}
//         <div className="text-center mb-6 md:mb-8 lg:mb-10">
//           <div className="inline-block">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 bg-clip-text mb-3 md:mb-4">
//               FaraarNama
//             </h1>
//             <div className="w-full h-0.5 md:h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mb-3 md:mb-4"></div>
//             <p className="text-base md:text-lg lg:text-xl text-slate-600 font-light tracking-wide opacity-90">
//               They escaped, they lived, they shared ✨
//             </p>
//           </div>
//         </div>

//         {/* Enhanced Premium Gallery Grid - Adjusted for wider reels */}
//         <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-3 lg:gap-4 h-[120vh] md:h-[130vh] lg:h-[140vh]">
          
//           {/* Main Tall Reel - KEEPING EXACTLY AS YOU LOVED IT (BigBuckBunny.mp4) */}
//           <MediaCard index={0} className="col-span-1 row-span-8 md:row-span-10 lg:row-span-12" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[0]} videoId={0} isReel={true} />
//           </MediaCard>

//           {/* Featured Center Image - Main attraction */}
//           <MediaCard index={1} className="col-span-3 md:col-span-4 lg:col-span-5 row-span-4 md:row-span-5 lg:row-span-6">
//             <img src={images[4]} alt="Main featured adventure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">Featured Adventure</h3>
//               <p className="text-xs md:text-sm opacity-90">The journey begins here</p>
//             </div>
//           </MediaCard>

//           {/* New Image Section */}
//           <MediaCard index={2} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3 md:row-span-4 lg:row-span-5">
//             <img src={images[6]} alt="Sunset moments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 text-white">
//               <div className="bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm px-2 py-0.5 md:py-1 rounded-full text-xs font-medium">
//                 🌅
//               </div>
//             </div>
//           </MediaCard>

//           {/* Reel Frame 2 - DOUBLED WIDTH */}
//           <MediaCard index={3} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-5 md:row-span-6 lg:row-span-7" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[1]} videoId={3} isReel={true} />
//           </MediaCard>

//           {/* Travel Inspiration Section */}
//           <MediaCard index={4} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3 md:row-span-4">
//             <img src={images[5]} alt="Travel inspiration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="text-center text-white">
//                 <div className="bg-white/20 backdrop-blur-md px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-sm">
//                   📍 Wanderlust
//                 </div>
//               </div>
//             </div>
//           </MediaCard>

//           {/* Additional Image */}
//           <MediaCard index={5} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3">
//             <img src={images[12]} alt="Beach vibes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* New Gap Filler Image 1 */}
//           <MediaCard index={16} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2">
//             <img src={images[1]} alt="Hidden gems" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* Additional Image */}
//           <MediaCard index={6} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3">
//             <img src={images[15]} alt="Beach vibes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* New Gap Filler Image 2 */}
//           <MediaCard index={17} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2">
//             <img src={images[2]} alt="City lights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* YouTube Video Section */}
//           <MediaCard index={7} className="col-span-3 md:col-span-4 lg:col-span-4 row-span-3 md:row-span-4" isVideo={true}>
//             <AutoPlayVideo src={youtubeVid} videoId={6} />
//             <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="bg-red-600/90 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 text-white">
//                 <Play size={12} className="md:w-4 md:h-4" fill="white" />
//                 Vlog
//               </div>
//             </div>
//           </MediaCard>

//           {/* Reel Frame 3 - DOUBLED WIDTH */}
//           <MediaCard index={8} className="col-span-2 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-5" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[2]} videoId={7} isReel={true} />
//           </MediaCard>

//           {/* New Gap Filler Image 3 */}
//           <MediaCard index={18} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2">
//             <img src={images[3]} alt="Adventure time" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* Additional Images filling spaces */}
//           <MediaCard index={9} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3">
//             <img src={images[9]} alt="Adventure moments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* New Gap Filler Image 4 */}
//           <MediaCard index={19} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1">
//             <img src={images[8]} alt="Nature's beauty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={10} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2">
//             <img src={images[11]} alt="Forest bridge adventure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="bg-green-600/80 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium">
//                 🌲 Wild
//               </div>
//             </div>
//           </MediaCard>

//           {/* Reel Frame 4 - DOUBLED WIDTH */}
//           <MediaCard index={11} className="col-span-2 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-5" isVideo={true} isReel={true}>
//             <AutoPlayVideo src={reels[3]} videoId={11} isReel={true} />
//           </MediaCard>

//           {/* Image below waterfall1.mp4 (Main Tall Reel) */}
//           <MediaCard index={23} className="col-span-1 row-span-2 md:row-span-3">
//             <img src={images[3]} alt="Waterfall magic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//             <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <div className="bg-cyan-600/80 backdrop-blur-sm px-2 py-0.5 md:py-1 rounded-full text-xs font-medium">
//                 💧 Falls
//               </div>
//             </div>
//           </MediaCard>

//           {/* New Gap Filler Image 5 */}
//           <MediaCard index={20} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1">
//             <img src={images[0]} alt="Epic journey" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={12} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
//             <img src={images[13]} alt="Mountain peak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           {/* New Gap Filler Image 6 */}
//           <MediaCard index={21} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1">
//             <img src={images[1]} alt="Travel memories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={13} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2">
//             <img src={images[14]} alt="Ocean sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={14} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
//             <img src={images[7]} alt="Group memories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//           <MediaCard index={15} className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2">
//             <img src={images[10]} alt="Historic places" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//           </MediaCard>

//         </div>

//         {/* Creative Floating CTA Button with Inter font and custom color */}
//         <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 opacity-90 hover:opacity-100 transition-all duration-300">
//           <button 
//             className="group relative overflow-hidden px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 transform cursor-pointer"
//             style={{ 
//               backgroundColor: '#E65F25',
//               fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
//             }}
//           >
//             <div className="relative flex items-center gap-2 text-white font-medium text-sm md:text-base">
//               <Zap size={16} className="md:w-5 md:h-5 animate-pulse" />
//               <span className="whitespace-nowrap">Escape Now</span>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FaraarNamaGallery;













//======================================================
//AFTER RESPONSIVE:- Currently Using Code
//=======================================================

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  Share2,
  Bookmark,
  Zap,
} from "lucide-react";

const FaraarNamaGallery = ({
  galleryImages,
  reelVideos,
  youtubeVideos,
  contactRef,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [liked, setLiked] = useState({});
  console.log(contactRef)

  // Default content paths - Correct paths for public folder
  const defaultImages = [
    "/gallery/galleryimg1.jpeg",
    "/gallery/galleryimg2.jpeg",
    "/gallery/galleryimg3.jpeg",
    "/gallery/galleryimg4.jpeg",
    "/gallery/galleryimg5.jpeg",
    "/gallery/galleryimg6.jpeg",
    "/gallery/galleryimg7.jpeg",
    "/gallery/galleryimg8.jpeg",
    "/gallery/galleryimg9.jpeg",
    "/gallery/galleryimg10.png",
    "/gallery/galleryimg11.jpg",
    "/gallery/galleryimg12.jpg",
    "/gallery/galleryimg13.png",
    "/gallery/galleryimg14.jpeg",
    "/gallery/galleryimg15.jpeg",
    "/gallery/galleryimg16.jpeg",
  ];

  // Sample video URLs - Correct paths for public folder
  const defaultReelVideos = [
    "/gallery/waterfall1.mp4",
    "/gallery/darjeeling.mp4",
    "/gallery/meghalayareel.mp4",
    "/gallery/wildlifereel.mp4",
  ];

  const defaultYouTubeVideo = "/gallery/holiyt.mp4";

  const images = galleryImages || defaultImages;
  const reels = reelVideos || defaultReelVideos;
  const youtubeVid = youtubeVideos || defaultYouTubeVideo;

  const toggleMute = (videoId) => {
    setMutedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  const toggleLike = (index) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Smooth scroll function
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      // Using smooth scroll behavior
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      // Fallback: scroll to bottom of page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const MediaCard = ({
    children,
    index,
    className = "",
    isVideo = false,
    isReel = false,
  }) => (
    <div
      className={`group relative overflow-hidden rounded-[12px] md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-700 hover:scale-[1.03] md:hover:scale-[1.06] lg:hover:scale-[1.08] hover:rotate-1 hover:shadow-2xl hover:shadow-black/30 ${className} ${
        hoveredIndex === index
          ? "ring-2 md:ring-2 lg:ring-4 ring-white/50 ring-offset-1 md:ring-offset-1 lg:ring-offset-2 ring-offset-transparent z-20"
          : ""
      } ${
        hoveredIndex !== null && hoveredIndex !== index
          ? "opacity-40 blur-[1px]"
          : "opacity-100 blur-0"
      }`}
      style={{
        transform:
          hoveredIndex === index
            ? `scale(${
                window.innerWidth < 768
                  ? "1.03"
                  : window.innerWidth < 1024
                  ? "1.04"
                  : "1.08"
              }) rotate(${Math.random() > 0.5 ? "1deg" : "-1deg"})`
            : "scale(1) rotate(0deg)",
        boxShadow:
          hoveredIndex === index
            ? "0 25px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 4px 20px -2px rgba(0, 0, 0, 0.1)",
        zIndex:
          hoveredIndex === index
            ? 20
            : hoveredIndex !== null && hoveredIndex !== index
            ? 5
            : 10,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {children}

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Interactive buttons overlay */}
      <div className="absolute top-1.5 md:top-2 lg:top-4 right-1.5 md:right-2 lg:right-4 flex gap-1 md:gap-1.5 lg:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        {isVideo && (
          <button
            onClick={() =>
              toggleMute(
                index === 0
                  ? 0
                  : index === 3
                  ? 3
                  : index === 7
                  ? 7
                  : index === 8
                  ? 8
                  : index === 11
                  ? 11
                  : index
              )
            }
            className="p-1 md:p-1.5 lg:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-black/90 transition-all duration-200 hover:scale-110"
          >
            {mutedVideos[
              index === 0
                ? 0
                : index === 3
                ? 3
                : index === 7
                ? 7
                : index === 8
                ? 8
                : index === 11
                ? 11
                : index
            ] ? (
              <VolumeX size={12} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
            ) : (
              <Volume2 size={12} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
            )}
          </button>
        )}
        <button
          onClick={() => toggleLike(index)}
          className="p-1 md:p-1.5 lg:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-red-500 transition-all duration-200 hover:scale-110"
        >
          <Heart
            size={12}
            className="md:w-3 md:h-3 lg:w-4 lg:h-4"
            fill={liked[index] ? "currentColor" : "none"}
          />
        </button>
        <button className="p-1 md:p-1.5 lg:p-2.5 bg-black/70 text-white rounded-full backdrop-blur-md hover:bg-blue-500 transition-all duration-200 hover:scale-110">
          <Share2 size={12} className="md:w-3 md:h-3 lg:w-4 lg:h-4" />
        </button>
      </div>

      {/* Reel-specific UI elements */}
      {isReel && (
        <>
          <div className="absolute bottom-1.5 md:bottom-2 lg:bottom-4 left-1.5 md:left-2 lg:left-4 right-1.5 md:right-2 lg:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-between text-white">
              <div className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm px-1.5 md:px-2 lg:px-3 py-0.5 md:py-1 lg:py-1.5 rounded-full text-[10px] md:text-xs lg:text-sm font-medium flex items-center gap-1 md:gap-1.5 lg:gap-2">
                <div className="w-1 md:w-1.5 lg:w-2 h-1 md:h-1.5 lg:h-2 bg-red-500 rounded-full animate-pulse"></div>
                Reel
              </div>
              <div className="flex gap-1">
                <Bookmark
                  size={12}
                  className="md:w-4 md:h-4 lg:w-5 lg:h-5 hover:scale-110 transition-transform cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* Reel progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-0.5 lg:h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-80">
            <div className="h-full bg-white/30 animate-pulse"></div>
          </div>
        </>
      )}
    </div>
  );

  const AutoPlayVideo = ({ src, className, videoId, isReel = false }) => (
    <video
      autoPlay
      loop
      muted={mutedVideos[videoId] !== false}
      playsInline
      className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
        isReel ? "object-cover" : "object-cover"
      } ${className}`}
      style={{
        aspectRatio: isReel ? "9/16" : "auto",
      }}
      onLoadedData={(e) => {
        e.target.play().catch(() => {});
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );

  return (
    <div className="min-h-[140vh] md:min-h-[160vh] lg:min-h-[170vh] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-2 md:p-4 lg:p-8 overflow-hidden pb-8 md:pb-12 lg:pb-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Clean Header - No Animation */}
        <div className="text-center mb-4 md:mb-6 lg:mb-10">
          <div className="inline-block">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 bg-clip-text mb-2 md:mb-3 lg:mb-4">
              FaraarNama
            </h1>
            <div className="w-full h-0.5 md:h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mb-2 md:mb-3 lg:mb-4"></div>
            <p className="text-sm md:text-base lg:text-xl text-slate-600 font-light tracking-wide opacity-90">
              They escaped, they lived, they shared ✨
            </p>
          </div>
        </div>

        {/* Enhanced Premium Gallery Grid - Adjusted for wider reels */}
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1.5 md:gap-2 lg:gap-4 h-[110vh] md:h-[120vh] lg:h-[140vh]">
          {/* Main Tall Reel - KEEPING EXACTLY AS YOU LOVED IT (BigBuckBunny.mp4) */}
          <MediaCard
            index={0}
            className="col-span-1 row-span-8 md:row-span-10 lg:row-span-12"
            isVideo={true}
            isReel={true}
          >
            <AutoPlayVideo src={reels[0]} videoId={0} isReel={true} />
          </MediaCard>

          {/* Featured Center Image - Main attraction */}
          <MediaCard
            index={1}
            className="col-span-3 md:col-span-4 lg:col-span-5 row-span-4 md:row-span-5 lg:row-span-6"
          >
            <img
              src={images[4]}
              alt="Main featured adventure"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-1.5 md:bottom-2 lg:bottom-4 left-1.5 md:left-2 lg:left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-sm md:text-base lg:text-2xl font-bold mb-0.5 md:mb-1">
                Featured Adventure
              </h3>
              <p className="text-[10px] md:text-xs lg:text-sm opacity-90">
                The journey begins here
              </p>
            </div>
          </MediaCard>

          {/* New Image Section */}
          <MediaCard
            index={2}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3 md:row-span-4 lg:row-span-5"
          >
            <img
              src={images[6]}
              alt="Sunset moments"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-1 md:bottom-1.5 lg:bottom-2 left-1 md:left-1.5 lg:left-2 text-white">
              <div className="bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm px-1.5 md:px-2 lg:px-2 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-xs font-medium">
                🌅
              </div>
            </div>
          </MediaCard>

          {/* Reel Frame 2 - DOUBLED WIDTH */}
          <MediaCard
            index={3}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-5 md:row-span-6 lg:row-span-7"
            isVideo={true}
            isReel={true}
          >
            <AutoPlayVideo src={reels[1]} videoId={3} isReel={true} />
          </MediaCard>

          {/* Travel Inspiration Section */}
          <MediaCard
            index={4}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3 md:row-span-4"
          >
            <img
              src={images[5]}
              alt="Travel inspiration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center text-white">
                <div className="bg-white/20 backdrop-blur-md px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-2 rounded-full font-medium text-[10px] md:text-xs lg:text-sm">
                  📍 Wanderlust
                </div>
              </div>
            </div>
          </MediaCard>

          {/* Additional Image */}
          <MediaCard
            index={5}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3"
          >
            <img
              src={images[12]}
              alt="Beach vibes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* New Gap Filler Image 1 */}
          <MediaCard
            index={16}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2"
          >
            <img
              src={images[1]}
              alt="Hidden gems"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* Additional Image */}
          <MediaCard
            index={6}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3"
          >
            <img
              src={images[15]}
              alt="Beach vibes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* New Gap Filler Image 2 */}
          <MediaCard
            index={17}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2"
          >
            <img
              src={images[2]}
              alt="City lights"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* YouTube Video Section */}
          <MediaCard
            index={7}
            className="col-span-3 md:col-span-4 lg:col-span-4 row-span-3 md:row-span-4"
            isVideo={true}
          >
            <AutoPlayVideo src={youtubeVid} videoId={6} />
            <div className="absolute bottom-1.5 md:bottom-2 lg:bottom-3 left-1.5 md:left-2 lg:left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-red-600/90 backdrop-blur-sm px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-2 rounded-full text-[10px] md:text-xs lg:text-sm font-medium flex items-center gap-1 md:gap-1.5 lg:gap-2 text-white">
                <Play
                  size={10}
                  className="md:w-3 md:h-3 lg:w-4 lg:h-4"
                  fill="white"
                />
                Vlog
              </div>
            </div>
          </MediaCard>

          {/* Reel Frame 3 - DOUBLED WIDTH */}
          <MediaCard
            index={8}
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-5"
            isVideo={true}
            isReel={true}
          >
            <AutoPlayVideo src={reels[2]} videoId={7} isReel={true} />
          </MediaCard>

          {/* New Gap Filler Image 3 */}
          <MediaCard
            index={18}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2"
          >
            <img
              src={images[3]}
              alt="Adventure time"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* Additional Images filling spaces */}
          <MediaCard
            index={9}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-3"
          >
            <img
              src={images[9]}
              alt="Adventure moments"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* New Gap Filler Image 4 */}
          <MediaCard
            index={19}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
          >
            <img
              src={images[8]}
              alt="Nature's beauty"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          <MediaCard
            index={10}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2"
          >
            <img
              src={images[11]}
              alt="Forest bridge adventure"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-1 md:bottom-1.5 lg:bottom-2 right-1 md:right-1.5 lg:right-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-green-600/80 backdrop-blur-sm px-1.5 md:px-2 lg:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-xs lg:text-sm font-medium">
                🌲 Wild
              </div>
            </div>
          </MediaCard>

          {/* Reel Frame 4 - DOUBLED WIDTH */}
          <MediaCard
            index={11}
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-5"
            isVideo={true}
            isReel={true}
          >
            <AutoPlayVideo src={reels[3]} videoId={11} isReel={true} />
          </MediaCard>

          {/* Image below waterfall1.mp4 (Main Tall Reel) */}
          <MediaCard index={23} className="col-span-1 row-span-2 md:row-span-3">
            <img
              src={images[3]}
              alt="Waterfall magic"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-1 md:bottom-1.5 lg:bottom-2 left-1 md:left-1.5 lg:left-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-cyan-600/80 backdrop-blur-sm px-1.5 md:px-2 lg:px-2 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-xs font-medium">
                💧 Falls
              </div>
            </div>
          </MediaCard>

          {/* New Gap Filler Image 5 */}
          <MediaCard
            index={20}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
          >
            <img
              src={images[0]}
              alt="Epic journey"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          <MediaCard
            index={12}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
          >
            <img
              src={images[13]}
              alt="Mountain peak"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          {/* New Gap Filler Image 6 */}
          <MediaCard
            index={21}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
          >
            <img
              src={images[1]}
              alt="Travel memories"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          <MediaCard
            index={13}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2"
          >
            <img
              src={images[14]}
              alt="Ocean sunset"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          <MediaCard
            index={14}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
          >
            <img
              src={images[7]}
              alt="Group memories"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>

          <MediaCard
            index={15}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2"
          >
            <img
              src={images[10]}
              alt="Historic places"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </MediaCard>
        </div>

        {/* Creative Floating CTA Button with Inter font and custom color */}
        <div className="fixed bottom-3 md:bottom-4 lg:bottom-6 right-3 md:right-4 lg:right-6 z-50 opacity-90 hover:opacity-100 transition-all duration-300">
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 transform cursor-pointer"
            style={{
              backgroundColor: "#E65F25",
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            <div className="relative flex items-center gap-1.5 md:gap-2 text-white font-medium text-xs md:text-sm lg:text-base">
              <Zap
                size={14}
                className="md:w-4 md:h-4 lg:w-5 lg:h-5 animate-pulse"
              />
              <span className="whitespace-nowrap">Escape Now</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaraarNamaGallery;