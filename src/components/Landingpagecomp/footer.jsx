//========================================================
// Before RESPONSIVE:- Before using
//========================================================

// import React from "react";
// import { Instagram, Linkedin, Youtube } from "lucide-react";

// const PricelessFooter = () => {
//   const year = new Date().getFullYear();

//   return (

// <footer className="relative w-full bg-[#1f1f1f] text-white font-[Inter]">
//       {/* Right-side brand logo - starts below the divider line */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none select-none absolute bottom-30 right-20 flex items-start justify-end pr-6"
//       >
//         <img
//           src="/gallery/logo.png"
//           alt="Brand logo"
//           className="
//             h-[220px] md:h-[260px] lg:h-[300px]
//             opacity-90 object-contain
//           "
//         />
//       </div>

//       <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 relative">
//         {/* Heading */}
//         <div className="mb-6">
//           <h1 className="leading-tight tracking-[-0.02em] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold">
//             <span className="block text-white font-bold">
//               Your adventure is priceless,
//             </span>
//             <span className="block text-[#737373] font-bold">
//               their regret is endless.
//             </span>
//           </h1>
//         </div>

//         {/* Pills */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           {[
//             { label: "Youtube", link: "https://youtube.com" },
//             { label: "Instagram", link: "https://instagram.com" },
//             { label: "Linkedin", link: "https://linkedin.com" },
//             { label: "Whatsapp", link: "https://wa.me/919773868499" },
//             { label: "Phone", link: "tel:+919773868499" },
//           ].map(({ label, link }) => (
//             <a
//               key={label}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 rounded-full px-6 py-2 text-sm font-medium
//                 border border-white/20 text-gray-200
//                 hover:bg-[#E65F25] hover:border-[#E65F25]
//                 active:scale-95
//                 transition-all cursor-pointer
//                 min-w-[110px] text-center
//               "
//             >
//               {label}
//             </a>
//           ))}
//         </div>

//         {/* Thin divider */}
//         <div className="h-px w-full bg-white/15 mb-8" />

//         {/* Links + info grid */}
//         <div className="relative pr-[22%]">
//           {/* Row 1 - Top navigation links */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
//             {[
//               {
//                 heading: "Explore",
//                 links: [
//                   "Upcoming Trips",
//                   "Weekend Trips",
//                   "Long Weekend",
//                   "Travel Blogs",
//                   "Corporate Tours",
//                 ],
//               },
//               {
//                 heading: "About Us",
//                 links: ["Why go Faraar", "Testimonials"],
//               },
//               {
//                 heading: "Support",
//                 links: ["Contact Us", "Book Now", "Payment"],
//               },
//               {
//                 heading: "Terms & Info",
//                 links: [
//                   "Disclaimer",
//                   "Terms & Condition",
//                   "Privacy",
//                   "Cancellation",
//                 ],
//               },
//             ].map(({ heading, links }) => (
//               <div key={heading}>
//                 <h3 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wide">
//                   {heading}
//                 </h3>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   {links.map((link) => (
//                     <li
//                       key={link}
//                       className="hover:text-[#E65F25] cursor-pointer transition-colors active:scale-95"
//                     >
//                       {link}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Row 2 - aligned */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//             <div>
//               <h3 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wide">
//                 Office
//               </h3>
//               <p className="text-sm text-gray-400 leading-6">
//                 A-2/D1 Nawada,<br />
//                 Uttam Nagar,<br />
//                 New Delhi - 110059
//               </p>
//             </div>

//             <div>
//               <h3 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wide">
//                 Follow Us!
//               </h3>
//               <div className="flex items-center gap-3">
//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-md bg-white/10 hover:bg-[#E65F25] transition-colors cursor-pointer active:scale-95"
//                 >
//                   <Instagram className="w-4 h-4 text-white" />
//                 </a>
//                 <a
//                   href="https://youtube.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-md bg-white/10 hover:bg-[#E65F25] transition-colors cursor-pointer active:scale-95"
//                 >
//                   <Youtube className="w-4 h-4 text-white" />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-md bg-white/10 hover:bg-[#E65F25] transition-colors cursor-pointer active:scale-95"
//                 >
//                   <Linkedin className="w-4 h-4 text-white" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wide">
//                 Reachout us On
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>
//                   <a
//                     href="mailto:Gharsefaraar@gmail.com"
//                     className="hover:text-[#E65F25] cursor-pointer active:scale-95"
//                   >
//                     Gharsefaraar@gmail.com
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.gharsefaraar.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-[#E65F25] cursor-pointer active:scale-95"
//                   >
//                     www.gharsefaraar.com
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="tel:+919773868499"
//                     className="hover:text-[#E65F25] cursor-pointer active:scale-95"
//                   >
//                     +91 9773868499
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div></div> {/* Empty column to maintain grid alignment */}
//           </div>
//         </div>

//         {/* Bottom copyright - centered */}
//         <div className="mt-10 text-xs text-gray-500 text-center">
//           © {year} Gharsefaraar. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default PricelessFooter;

//========================================================
//// AFTER RESPONSIVE:- Currently Using
//========================================================

import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const PricelessFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#1f1f1f] text-white font-[Inter]">
      {/* Right-side brand logo - starts below the divider line */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-20 md:bottom-24 lg:bottom-30 right-4 md:right-12 lg:right-20 flex items-start justify-end pr-2 md:pr-4 lg:pr-6"
      >
        <img
          src="/gallery/logo.png"
          alt="Brand logo"
          className="h-[140px] md:h-[200px] lg:h-[300px] opacity-90 object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-5 lg:px-6 pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-10 lg:pb-12 relative">
        {/* Heading */}
        <div className="mb-4 md:mb-5 lg:mb-6">
          <h1 className="leading-tight tracking-[-0.02em] text-[22px] md:text-[38px] lg:text-[52px] font-bold">
            <span className="block text-white font-bold">
              Your adventure is priceless,
            </span>
            <span className="block text-[#737373] font-bold">
              their regret is endless.
            </span>
          </h1>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2 md:gap-2.5 lg:gap-3 mb-4 md:mb-5 lg:mb-6">
          {[
            { label: "Youtube", link: "https://youtube.com" },
            { label: "Instagram", link: "https://instagram.com" },
            { label: "Linkedin", link: "https://linkedin.com" },
            { label: "Whatsapp", link: "https://wa.me/919773868499" },
            { label: "Phone", link: "tel:+919773868499" },
          ].map(({ label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2 text-xs md:text-sm lg:text-sm font-medium border border-white/20 text-gray-200 hover:bg-[#E65F25] hover:border-[#E65F25] active:scale-95 transition-all cursor-pointer min-w-[90px] md:min-w-[100px] lg:min-w-[110px] text-center"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Thin divider */}
        <div className="h-px w-full bg-white/15 mb-5 md:mb-6 lg:mb-8" />

        {/* Links + info grid */}
        <div className="relative pr-0 md:pr-[18%] lg:pr-[22%]">
          {/* Row 1 - Top navigation links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
            {[
              {
                heading: "Explore",
                links: [
                  "Upcoming Trips",
                  "Weekend Trips",
                  "Long Weekend",
                  "Travel Blogs",
                  "Corporate Tours",
                ],
              },
              {
                heading: "About Us",
                links: ["Why go Faraar", "Testimonials"],
              },
              {
                heading: "Support",
                links: ["Contact Us", "Book Now", "Payment"],
              },
              {
                heading: "Terms & Info",
                links: [
                  "Disclaimer",
                  "Terms & Condition",
                  "Privacy",
                  "Cancellation",
                ],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h3 className="mb-2.5 md:mb-3 lg:mb-4 text-xs md:text-sm lg:text-sm font-semibold text-gray-200 uppercase tracking-wide">
                  {heading}
                </h3>
                <ul className="space-y-1.5 md:space-y-2 lg:space-y-2 text-xs md:text-sm lg:text-sm text-gray-400">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="hover:text-[#E65F25] cursor-pointer transition-colors active:scale-95"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Row 2 - aligned */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <div>
              <h3 className="mb-2.5 md:mb-3 lg:mb-4 text-xs md:text-sm lg:text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Office
              </h3>
              <p className="text-xs md:text-sm lg:text-sm text-gray-400 leading-5 md:leading-6 lg:leading-6">
                A-2/D1 Nawada,
                <br />
                Uttam Nagar,
                <br />
                New Delhi - 110059
              </p>
            </div>
            <div>
              <h3 className="mb-2.5 md:mb-3 lg:mb-4 text-xs md:text-sm lg:text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Follow Us!
              </h3>
              <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 lg:p-2 rounded-md bg-white/10 hover:bg-[#E65F25] transition-colors cursor-pointer active:scale-95"
                >
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 lg:p-2 rounded-md bg-white/10 hover:bg-[#E65F25] transition-colors cursor-pointer active:scale-95"
                >
                  <Youtube className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 lg:p-2 rounded-md bg-white/10 hover:bg-[#E65F25] transition-colors cursor-pointer active:scale-95"
                >
                  <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-white" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-2.5 md:mb-3 lg:mb-4 text-xs md:text-sm lg:text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Reachout us On
              </h3>
              <ul className="space-y-1.5 md:space-y-2 lg:space-y-2 text-xs md:text-sm lg:text-sm text-gray-400">
                <li>
                  <a
                    href="mailto:Gharsefaraar@gmail.com"
                    className="hover:text-[#E65F25] cursor-pointer active:scale-95 break-all"
                  >
                    Gharsefaraar@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gharsefaraar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E65F25] cursor-pointer active:scale-95 break-all"
                  >
                    www.gharsefaraar.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919773868499"
                    className="hover:text-[#E65F25] cursor-pointer active:scale-95"
                  >
                    +91 9773868499
                  </a>
                </li>
              </ul>
            </div>
            <div></div> {/* Empty column to maintain grid alignment */}
          </div>
        </div>

        {/* Bottom copyright - centered */}
        <div className="mt-6 md:mt-8 lg:mt-10 text-[10px] md:text-xs lg:text-xs text-gray-500 text-center">
          © {year} Gharsefaraar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default PricelessFooter;
