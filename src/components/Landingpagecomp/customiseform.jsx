// import React, { useState } from "react";
// import { Calendar, MapPin, Users, Phone, Mail, User, Clock, Navigation, Sparkles } from "lucide-react";

// export default function CustomiseTripForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     destination: '',
//     startDate: '',
//     endDate: '',
//     duration: '',
//     groupSize: '',
//     startingPoint: '',
//     phone: '',
//     email: ''
//   });

//   const [focusedField, setFocusedField] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you! We will contact you within 24 hours. ✨');
//   };

//   return (
//     <div
//       className="w-full relative min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/gallery/bgimgcontact.jpeg')",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       {/* Enhanced gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>

//       {/* Floating particles effect */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
//             style={{
//               left: `${20 + i * 15}%`,
//               top: `${10 + i * 20}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + i * 0.5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-3xl px-6 py-12">
//         {/* Premium Heading */}
//         <div className="text-center mb-10">
//           <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text mb-4">
//             Customise Your Dream Trip
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6"></div>
//           <p className="text-xl text-white/90 font-light tracking-wide flex items-center justify-center gap-2">
//             <Sparkles className="w-5 h-5 text-orange-300" />
//             Answer a few questions & we'll craft your perfect escape
//             <Sparkles className="w-5 h-5 text-orange-300" />
//           </p>
//         </div>

//         {/* Premium Glassmorphism Form */}
//         <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.01]">

//           {/* Subtle animated border glow */}
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//           <div className="relative z-10 p-8 md:p-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               {/* Full Name */}
//               <div className="md:col-span-2 group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <User size={18} className="text-orange-300" />
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField('fullName')}
//                     onBlur={() => setFocusedField(null)}
//                     placeholder="Enter your full name"
//                     className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg"
//                     style={{
//                       focusRingColor: '#E65F25',
//                       boxShadow: focusedField === 'fullName' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                     }}
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Destination */}
//               <div className="md:col-span-2 group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <MapPin size={18} className="text-orange-300" />
//                   Destination / Region
//                 </label>
//                 <select
//                   name="destination"
//                   value={formData.destination}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('destination')}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg appearance-none cursor-pointer"
//                   style={{
//                     focusRingColor: '#E65F25',
//                     boxShadow: focusedField === 'destination' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                   }}>
//                   <option value="" className="bg-slate-900 text-white">Select your dream destination</option>
//                   <option value="spiti" className="bg-slate-900 text-white">🏔️ Spiti Valley - The Cold Desert</option>
//                   <option value="japan" className="bg-slate-900 text-white">🎌 Japan - Land of Rising Sun</option>
//                   <option value="thailand" className="bg-slate-900 text-white">🏝️ Thailand - Tropical Paradise</option>
//                   <option value="bali" className="bg-slate-900 text-white">🌺 Bali - Island of Gods</option>
//                   <option value="europe" className="bg-slate-900 text-white">🏰 Europe - Historic Wonders</option>
//                 </select>
//               </div>

//               {/* Aesthetic Date Inputs */}
//               <div className="group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Calendar size={18} className="text-orange-300" />
//                   Departure Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField('startDate')}
//                     onBlur={() => setFocusedField(null)}
//                     className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg"
//                     style={{
//                       focusRingColor: '#E65F25',
//                       boxShadow: focusedField === 'startDate' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none',
//                       colorScheme: 'dark'
//                     }}
//                   />
//                   <Calendar size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-300/70 pointer-events-none" />
//                 </div>
//               </div>

//               <div className="group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Calendar size={18} className="text-orange-300" />
//                   Return Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={formData.endDate}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField('endDate')}
//                     onBlur={() => setFocusedField(null)}
//                     className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg"
//                     style={{
//                       focusRingColor: '#E65F25',
//                       boxShadow: focusedField === 'endDate' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none',
//                       colorScheme: 'dark'
//                     }}
//                   />
//                   <Calendar size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-300/70 pointer-events-none" />
//                 </div>
//               </div>

//               {/* Duration */}
//               <div className="group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Clock size={18} className="text-orange-300" />
//                   Duration Type
//                 </label>
//                 <select
//                   name="duration"
//                   value={formData.duration}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('duration')}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg appearance-none cursor-pointer"
//                   style={{
//                     focusRingColor: '#E65F25',
//                     boxShadow: focusedField === 'duration' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                   }}>
//                   <option value="" className="bg-slate-900 text-white">Choose flexibility</option>
//                   <option value="fixed" className="bg-slate-900 text-white">📅 Fixed Duration</option>
//                   <option value="flexible" className="bg-slate-900 text-white">🔄 Flexible Duration</option>
//                 </select>
//               </div>

//               {/* Group Size */}
//               <div className="group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Users size={18} className="text-orange-300" />
//                   Travel Group
//                 </label>
//                 <select
//                   name="groupSize"
//                   value={formData.groupSize}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('groupSize')}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg appearance-none cursor-pointer"
//                   style={{
//                     focusRingColor: '#E65F25',
//                     boxShadow: focusedField === 'groupSize' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                   }}>
//                   <option value="" className="bg-slate-900 text-white">Select travel companions</option>
//                   <option value="solo" className="bg-slate-900 text-white">🧳 Solo Adventure</option>
//                   <option value="couple" className="bg-slate-900 text-white">💑 Romantic Getaway</option>
//                   <option value="family" className="bg-slate-900 text-white">👨‍👩‍👧‍👦 Family Trip</option>
//                   <option value="group" className="bg-slate-900 text-white">👥 Group Expedition</option>
//                 </select>
//               </div>

//               {/* Starting Point */}
//               <div className="group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Navigation size={18} className="text-orange-300" />
//                   Starting City
//                 </label>
//                 <input
//                   type="text"
//                   name="startingPoint"
//                   value={formData.startingPoint}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('startingPoint')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Which city will you depart from?"
//                   className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg"
//                   style={{
//                     focusRingColor: '#E65F25',
//                     boxShadow: focusedField === 'startingPoint' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                   }}
//                 />
//               </div>

//               {/* Phone Number */}
//               <div className="group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Phone size={18} className="text-orange-300" />
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('phone')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="+91 12345 67890"
//                   className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg"
//                   style={{
//                     focusRingColor: '#E65F25',
//                     boxShadow: focusedField === 'phone' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                   }}
//                 />
//               </div>

//               {/* Email */}
//               <div className="md:col-span-2 group">
//                 <label className="flex items-center gap-3 text-white/90 mb-4 font-semibold text-sm tracking-wider uppercase">
//                   <Mail size={18} className="text-orange-300" />
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="your.email@example.com"
//                   className="w-full rounded-2xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-lg"
//                   style={{
//                     focusRingColor: '#E65F25',
//                     boxShadow: focusedField === 'email' ? '0 0 20px rgba(230, 95, 37, 0.3)' : 'none'
//                   }}
//                 />
//               </div>

//               {/* Premium Submit Button */}
//               <div className="md:col-span-2 mt-8">
//                 <button
//                   onClick={handleSubmit}
//                   className="group relative w-full py-5 rounded-2xl font-bold text-xl text-white overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-xl transform cursor-pointer"
//                   style={{ backgroundColor: '#E65F25' }}
//                 >
//                   <div className="relative flex items-center justify-center gap-4">
//                     <Sparkles size={24} className="animate-pulse" />
//                     <span className="tracking-wide">Request Callback</span>
//                     <Sparkles size={24} className="animate-pulse" />
//                   </div>

//                   {/* Premium shimmer effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-300/30 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
//                 </button>
//               </div>

//             </div>
//           </div>

//           {/* Bottom decoration */}
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
//         </div>

//         {/* Footer note */}
//         <div className="mt-8 text-center">
//           <p className="text-white/70 text-sm font-light tracking-wide flex items-center justify-center gap-2">
//             <Clock size={16} className="text-orange-300" />
//             Our travel experts will reach out within 24 hours
//           </p>
//         </div>
//       </div>

//       {/* Custom CSS for date picker styling */}
//       <style jsx>{`
//         input[type="date"]::-webkit-calendar-picker-indicator {
//           filter: invert(1);
//           opacity: 0.7;
//           cursor: pointer;
//         }

//         input[type="date"]::-webkit-inner-spin-button,
//         input[type="date"]::-webkit-clear-button {
//           display: none;
//         }

//         select {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
//           background-position: right 1rem center;
//           background-repeat: no-repeat;
//           background-size: 1.5em 1.5em;
//           padding-right: 3rem;
//         }
//       `}</style>
//     </div>
//   );
// }

//===========================================================
//// Before Responsive working code
//===========================================================
// import React, { useState } from "react";
// import {
//   Calendar,
//   MapPin,
//   Users,
//   Phone,
//   Mail,
//   User,
//   Clock,
//   Navigation,
//   Sparkles,
// } from "lucide-react";

// export default function CustomiseTripForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     destination: "",
//     startDate: "",
//     endDate: "",
//     duration: "",
//     groupSize: "",
//     startingPoint: "",
//     phone: "",
//     email: "",
//   });

//   const [focusedField, setFocusedField] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you! We will contact you within 24 hours. ✨");
//   };

//   return (
//     <div
//       className="w-full relative min-h-screen flex items-center justify-center bg-cover bg-center py-8"
//       style={{
//         backgroundImage: "url('/gallery/bgimgcontact.jpeg')",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       {/* Enhanced gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>

//       {/* Floating particles effect */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
//             style={{
//               left: `${20 + i * 15}%`,
//               top: `${10 + i * 20}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + i * 0.5}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-3xl px-4 py-6">
//         {/* Premium Heading */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text mb-2">
//             Customise Your Dream Trip
//           </h1>
//           <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4"></div>
//           <p className="text-sm text-white/90 font-light tracking-wide flex items-center justify-center gap-1">
//             <Sparkles className="w-4 h-4 text-orange-300" />
//             Answer a few questions & we'll craft your perfect escape
//             <Sparkles className="w-4 h-4 text-orange-300" />
//           </p>
//         </div>

//         {/* Premium Glassmorphism Form */}
//         <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.01]">
//           {/* Subtle animated border glow */}
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//           <div className="relative z-10 p-6 md:p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Full Name */}
//               <div className="md:col-span-2 group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <User size={14} className="text-orange-300" />
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("fullName")}
//                     onBlur={() => setFocusedField(null)}
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base"
//                     style={{
//                       boxShadow:
//                         focusedField === "fullName"
//                           ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                           : "none",
//                     }}
//                   />
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Destination */}
//               <div className="md:col-span-2 group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <MapPin size={14} className="text-orange-300" />
//                   Destination / Region
//                 </label>
//                 <select
//                   name="destination"
//                   value={formData.destination}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("destination")}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base appearance-none cursor-pointer"
//                   style={{
//                     boxShadow:
//                       focusedField === "destination"
//                         ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                         : "none",
//                   }}
//                 >
//                   <option value="" className="bg-slate-900 text-white">
//                     Select your dream destination
//                   </option>
//                   <option value="spiti" className="bg-slate-900 text-white">
//                     🏔 Spiti Valley
//                   </option>
//                   <option value="japan" className="bg-slate-900 text-white">
//                     🎌 Japan
//                   </option>
//                   <option value="thailand" className="bg-slate-900 text-white">
//                     🏝 Thailand
//                   </option>
//                   <option value="bali" className="bg-slate-900 text-white">
//                     🌺 Bali
//                   </option>
//                   <option value="europe" className="bg-slate-900 text-white">
//                     🏰 Europe
//                   </option>
//                 </select>
//               </div>

//               {/* Aesthetic Date Inputs */}
//               <div className="group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Calendar size={14} className="text-orange-300" />
//                   Departure Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("startDate")}
//                     onBlur={() => setFocusedField(null)}
//                     className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base"
//                     style={{
//                       boxShadow:
//                         focusedField === "startDate"
//                           ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                           : "none",
//                       colorScheme: "dark",
//                     }}
//                   />
//                   <Calendar
//                     size={16}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300/70 pointer-events-none"
//                   />
//                 </div>
//               </div>

//               <div className="group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Calendar size={14} className="text-orange-300" />
//                   Return Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={formData.endDate}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("endDate")}
//                     onBlur={() => setFocusedField(null)}
//                     className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base"
//                     style={{
//                       boxShadow:
//                         focusedField === "endDate"
//                           ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                           : "none",
//                       colorScheme: "dark",
//                     }}
//                   />
//                   <Calendar
//                     size={16}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300/70 pointer-events-none"
//                   />
//                 </div>
//               </div>

//               {/* Duration */}
//               <div className="group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Clock size={14} className="text-orange-300" />
//                   Duration Type
//                 </label>
//                 <select
//                   name="duration"
//                   value={formData.duration}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("duration")}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base appearance-none cursor-pointer"
//                   style={{
//                     boxShadow:
//                       focusedField === "duration"
//                         ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                         : "none",
//                   }}
//                 >
//                   <option value="" className="bg-slate-900 text-white">
//                     Choose flexibility
//                   </option>
//                   <option value="fixed" className="bg-slate-900 text-white">
//                     📅 Fixed Duration
//                   </option>
//                   <option value="flexible" className="bg-slate-900 text-white">
//                     🔄 Flexible Duration
//                   </option>
//                 </select>
//               </div>

//               {/* Group Size */}
//               <div className="group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Users size={14} className="text-orange-300" />
//                   Travel Group
//                 </label>
//                 <select
//                   name="groupSize"
//                   value={formData.groupSize}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("groupSize")}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base appearance-none cursor-pointer"
//                   style={{
//                     boxShadow:
//                       focusedField === "groupSize"
//                         ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                         : "none",
//                   }}
//                 >
//                   <option value="" className="bg-slate-900 text-white">
//                     Select travel companions
//                   </option>
//                   <option value="solo" className="bg-slate-900 text-white">
//                     🧳 Solo Adventure
//                   </option>
//                   <option value="couple" className="bg-slate-900 text-white">
//                     💑 Romantic Getaway
//                   </option>
//                   <option value="family" className="bg-slate-900 text-white">
//                     👨‍👩‍👧‍👦 Family Trip
//                   </option>
//                   <option value="group" className="bg-slate-900 text-white">
//                     👥 Group Expedition
//                   </option>
//                 </select>
//               </div>

//               {/* Starting Point */}
//               <div className="group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Navigation size={14} className="text-orange-300" />
//                   Starting City
//                 </label>
//                 <input
//                   type="text"
//                   name="startingPoint"
//                   value={formData.startingPoint}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("startingPoint")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Which city will you depart from?"
//                   className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base"
//                   style={{
//                     boxShadow:
//                       focusedField === "startingPoint"
//                         ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                         : "none",
//                   }}
//                 />
//               </div>

//               {/* Phone Number */}
//               <div className="group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Phone size={14} className="text-orange-300" />
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("phone")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="+91 12345 67890"
//                   className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base"
//                   style={{
//                     boxShadow:
//                       focusedField === "phone"
//                         ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                         : "none",
//                   }}
//                 />
//               </div>

//               {/* Email */}
//               <div className="md:col-span-2 group">
//                 <label className="flex items-center gap-2 text-white/90 mb-2 font-semibold text-xs tracking-wider uppercase">
//                   <Mail size={14} className="text-orange-300" />
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("email")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="your.email@example.com"
//                   className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-base"
//                   style={{
//                     boxShadow:
//                       focusedField === "email"
//                         ? "0 0 15px rgba(230, 95, 37, 0.3)"
//                         : "none",
//                   }}
//                 />
//               </div>

//               {/* Premium Submit Button */}
//               <div className="md:col-span-2 mt-6">
//                 <button
//                   onClick={handleSubmit}
//                   className="group relative w-full py-3 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-lg transform cursor-pointer"
//                   style={{ backgroundColor: "#E65F25" }}
//                 >
//                   <div className="relative flex items-center justify-center gap-2">
//                     <Sparkles size={18} className="animate-pulse" />
//                     <span className="tracking-wide">Request Callback</span>
//                     <Sparkles size={18} className="animate-pulse" />
//                   </div>

//                   {/* Premium shimmer effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/0 via-orange-300/30 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom decoration */}
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
//         </div>

//         {/* Footer note */}
//         <div className="mt-6 text-center">
//           <p className="text-white/70 text-xs font-light tracking-wide flex items-center justify-center gap-1">
//             <Clock size={12} className="text-orange-300" />
//             Our travel experts will reach out within 24 hours
//           </p>
//         </div>
//       </div>

//       {/* Custom CSS for date picker styling */}
//       <style jsx>{`
//         input[type="date"]::-webkit-calendar-picker-indicator {
//           filter: invert(1);
//           opacity: 0.7;
//           cursor: pointer;
//         }

//         input[type="date"]::-webkit-inner-spin-button,
//         input[type="date"]::-webkit-clear-button {
//           display: none;
//         }

//         select {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
//           background-position: right 0.75rem center;
//           background-repeat: no-repeat;
//           background-size: 1em 1em;
//           padding-right: 2.5rem;
//         }
//       `}</style>
//     </div>
//   );
// }

//========================================================
// AFter RESPONSIVE:- Currently using
//========================================================

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Phone,
  Mail,
  User,
  Clock,
  Navigation,
  Sparkles,
} from "lucide-react";

export default function CustomiseTripForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    destination: "",
    startDate: "",
    endDate: "",
    duration: "",
    groupSize: "",
    startingPoint: "",
    phone: "",
    email: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      // Prepare the data for API submission
      const submissionData = {
        name: formData.fullName,
        desination: formData.destination,
        departureDate: formData.startDate,
        returnDate: formData.endDate,
        durationType: formData.duration,
        travelGroup: formData.groupSize,
        startingCity: formData.startingPoint,
        contactNumber: formData.phone,
        email: formData.email,
        submittedAt: new Date().toISOString(),
      };

      // Send data to API
      const response = await axios.post(
        "https://crm-ghar-se-frar.onrender.com/dream/add",
        { ...submissionData }
      );

      console.log("API Response:", response.data);

      // Show success modal
      setShowSuccessModal(true);

      // Reset form after successful submission
      setFormData({
        fullName: "",
        destination: "",
        startDate: "",
        endDate: "",
        duration: "",
        groupSize: "",
        startingPoint: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      let errorMessage = "An error occurred. Please try again.";

      if (error.response) {
        errorMessage =
          error.response.data.message || "Submission failed. Please try again.";
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. Please try again.";
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className="w-full relative min-h-screen flex items-center justify-center bg-cover bg-center py-8 md:py-8 lg:py-8"
      style={{
        backgroundImage: "url('/gallery/bgimgcontact.jpeg')",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 md:px-4 lg:px-4 py-4 md:py-5 lg:py-6">
        {/* Premium Heading */}
        <div className="text-center mb-4 md:mb-5 lg:mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text mb-2">
            Customise Your Dream Trip
          </h1>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-3 md:mb-4"></div>
          <p className="text-xs md:text-sm text-white/90 font-light tracking-wide flex items-center justify-center gap-1 px-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-orange-300" />
            <span className="text-center">
              Answer a few questions & we'll craft your perfect escape
            </span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-orange-300" />
          </p>
        </div>

        {/* Premium Glassmorphism Form */}
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 lg:hover:scale-[1.01]">
          {/* Subtle animated border glow */}
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10 p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-6">
              {/* Full Name */}
              <div className="md:col-span-2 group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <User
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base"
                    style={{
                      boxShadow:
                        focusedField === "fullName"
                          ? "0 0 15px rgba(230, 95, 37, 0.3)"
                          : "none",
                    }}
                  />
                  <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Destination */}
              <div className="md:col-span-2 group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <MapPin
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Destination / Region
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("destination")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base appearance-none cursor-pointer custom-select"
                  style={{
                    boxShadow:
                      focusedField === "destination"
                        ? "0 0 15px rgba(230, 95, 37, 0.3)"
                        : "none",
                  }}
                >
                  <option value="" className="bg-slate-900 text-white">
                    Select your dream destination
                  </option>
                  <option value="spiti" className="bg-slate-900 text-white">
                    🏔 Spiti Valley
                  </option>
                  <option value="japan" className="bg-slate-900 text-white">
                    🎌 Japan
                  </option>
                  <option value="thailand" className="bg-slate-900 text-white">
                    🏝 Thailand
                  </option>
                  <option value="bali" className="bg-slate-900 text-white">
                    🌺 Bali
                  </option>
                  <option value="europe" className="bg-slate-900 text-white">
                    🏰 Europe
                  </option>
                </select>
              </div>

              {/* Aesthetic Date Inputs */}
              <div className="group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Calendar
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Departure Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("startDate")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base"
                    style={{
                      boxShadow:
                        focusedField === "startDate"
                          ? "0 0 15px rgba(230, 95, 37, 0.3)"
                          : "none",
                      colorScheme: "dark",
                    }}
                  />
                  <Calendar
                    size={14}
                    className="md:w-4 md:h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300/70 pointer-events-none"
                  />
                </div>
              </div>

              <div className="group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Calendar
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Return Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("endDate")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base"
                    style={{
                      boxShadow:
                        focusedField === "endDate"
                          ? "0 0 15px rgba(230, 95, 37, 0.3)"
                          : "none",
                      colorScheme: "dark",
                    }}
                  />
                  <Calendar
                    size={14}
                    className="md:w-4 md:h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300/70 pointer-events-none"
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Clock
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Duration Type
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("duration")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base appearance-none cursor-pointer custom-select"
                  style={{
                    boxShadow:
                      focusedField === "duration"
                        ? "0 0 15px rgba(230, 95, 37, 0.3)"
                        : "none",
                  }}
                >
                  <option value="" className="bg-slate-900 text-white">
                    Choose flexibility
                  </option>
                  <option value="fixed" className="bg-slate-900 text-white">
                    📅 Fixed Duration
                  </option>
                  <option value="flexible" className="bg-slate-900 text-white">
                    🔄 Flexible Duration
                  </option>
                </select>
              </div>

              {/* Group Size */}
              <div className="group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Users
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Travel Group
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("groupSize")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base appearance-none cursor-pointer custom-select"
                  style={{
                    boxShadow:
                      focusedField === "groupSize"
                        ? "0 0 15px rgba(230, 95, 37, 0.3)"
                        : "none",
                  }}
                >
                  <option value="" className="bg-slate-900 text-white">
                    Select travel companions
                  </option>
                  <option value="solo" className="bg-slate-900 text-white">
                    🧳 Solo Adventure
                  </option>
                  <option value="couple" className="bg-slate-900 text-white">
                    💑 Romantic Getaway
                  </option>
                  <option value="family" className="bg-slate-900 text-white">
                    👨‍👩‍👧‍👦 Family Trip
                  </option>
                  <option value="group" className="bg-slate-900 text-white">
                    👥 Group Expedition
                  </option>
                </select>
              </div>

              {/* Starting Point */}
              <div className="group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Navigation
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Starting City
                </label>
                <input
                  type="text"
                  name="startingPoint"
                  value={formData.startingPoint}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("startingPoint")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Which city will you depart from?"
                  className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base"
                  style={{
                    boxShadow:
                      focusedField === "startingPoint"
                        ? "0 0 15px rgba(230, 95, 37, 0.3)"
                        : "none",
                  }}
                />
              </div>

              {/* Phone Number */}
              <div className="group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Phone
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+91 12345 67890"
                  className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base"
                  style={{
                    boxShadow:
                      focusedField === "phone"
                        ? "0 0 15px rgba(230, 95, 37, 0.3)"
                        : "none",
                  }}
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2 group">
                <label className="flex items-center gap-1.5 md:gap-2 text-white/90 mb-1.5 md:mb-2 font-semibold text-[10px] md:text-xs tracking-wider uppercase">
                  <Mail
                    size={12}
                    className="md:w-3.5 md:h-3.5 text-orange-300"
                  />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm md:text-base"
                  style={{
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 15px rgba(230, 95, 37, 0.3)"
                        : "none",
                  }}
                />
              </div>

              {/* Premium Submit Button */}
              <div className="md:col-span-2 mt-3 md:mt-4 lg:mt-6">
                <button
                  onClick={handleSubmit}
                  className="group relative w-full py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold text-base md:text-lg text-white overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-lg transform cursor-pointer"
                  style={{ backgroundColor: "#E65F25" }}
                >
                  <div className="relative flex items-center justify-center gap-2">
                    <Sparkles
                      size={16}
                      className="md:w-[18px] md:h-[18px] animate-pulse"
                    />
                    <span className="tracking-wide">Request Callback</span>
                    <Sparkles
                      size={16}
                      className="md:w-[18px] md:h-[18px] animate-pulse"
                    />
                  </div>

                  {/* Premium shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-orange-400/0 via-orange-300/30 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
        </div>

        {/* Footer note */}
        <div className="mt-3 md:mt-4 lg:mt-6 text-center">
          <p className="text-white/70 text-[10px] md:text-xs font-light tracking-wide flex items-center justify-center gap-1">
            <Clock size={10} className="md:w-3 md:h-3 text-orange-300" />
            Our travel experts will reach out within 24 hours
          </p>
        </div>
      </div>

      {/* Custom CSS for date picker styling */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.7;
          cursor: pointer;
        }

        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-clear-button {
          display: none;
        }

        .custom-select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1em 1em;
          padding-right: 2.5rem;
        }
      `}</style>
    </div>
  );
}
