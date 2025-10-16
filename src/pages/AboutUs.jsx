import React, { useState, useEffect } from "react";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Employee cards data
  const employees = [
    {
      id: 1,
      name: "Shreya",
      profession: "Graphic Designer",
      image: "/gallery/aboutus/employee1.jpg",
      about:
        "Creative visual designer with 5+ years of experience in branding and digital design.",
      instagram: "https://instagram.com/shreya",
      linkedin: "https://linkedin.com/in/shreya",
    },
    {
      id: 2,
      name: "Rahul",
      profession: "Frontend Developer",
      image: "/gallery/aboutus/employee2.jpg",
      about:
        "Passionate about creating responsive and user-friendly web applications.",
      instagram: "https://instagram.com/rahul",
      linkedin: "https://linkedin.com/in/rahul",
    },
    {
      id: 3,
      name: "Priya",
      profession: "Content Strategist",
      image: "/gallery/aboutus/employee3.jpg",
      about:
        "Crafting compelling narratives that connect brands with their audiences.",
      instagram: "https://instagram.com/priya",
      linkedin: "https://linkedin.com/in/priya",
    },
    {
      id: 4,
      name: "Amit",
      profession: "Project Manager",
      image: "/gallery/aboutus/employee4.jpg",
      about:
        "Ensuring projects are delivered on time with exceptional quality standards.",
      instagram: "https://instagram.com/amit",
      linkedin: "https://linkedin.com/in/amit",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      {/* <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-6 tracking-tight">
            ABOUT US
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto">
            Creating Unforgettable Travel Experiences
          </p>
        </div>
      </section> */}

      {/* Founder Section - Purple/Pink Theme - Single Viewport */}
      <section className="h-screen flex items-center px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side with Creative Design */}
            <div className="relative group h-[80vh] flex items-center">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-200 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-pink-200 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>

              {/* Main Image Card */}
              <div className="relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-6 transform group-hover:rotate-2 transition-all duration-500 shadow-2xl w-full">
                <div className="bg-white rounded-2xl overflow-hidden relative">
                  <img
                    src="/gallery/aboutus/Founder.png"
                    alt="Founder"
                    className="w-full h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Social Media Links - Bottom Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-black mb-3">
                      CONNECT WITH ME
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://instagram.com/founder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/founder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com/@founder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-red-600 to-red-700 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-5 transform group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">
                      10+
                    </div>
                    <div className="text-xs text-gray-600 font-semibold">
                      YEARS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-sm font-bold mb-3 cursor-pointer hover:bg-purple-200 transition-colors">
                  FOUNDER
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
                  Gharsefaraar
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  A passionate explorer and visionary founder who transformed
                  wanderlust into a mission. With over a decade of global
                  adventures, bringing authentic travel experiences to life.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
                  <p className="text-base text-gray-700 italic">
                    "Travel is not just about destinations, it's about the
                    transformative journey and the memories we create along the
                    way."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-5 transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-95">
                  <div className="text-3xl font-black mb-1">50+</div>
                  <div className="text-sm font-semibold opacity-90">
                    Countries Explored
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-5 transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-95">
                  <div className="text-3xl font-black mb-1">1000+</div>
                  <div className="text-sm font-semibold opacity-90">
                    Happy Travelers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section - Dark Green Theme - Single Viewport */}
      <section className="h-screen flex items-center px-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
        {/* Repeating Name Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="text-white text-6xl font-black whitespace-nowrap">
            Gharsefaraar Gharsefaraar Gharsefaraar Gharsefaraar Gharsefaraar
            Gharsefaraar
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-3 cursor-pointer hover:bg-white/30 transition-colors">
                  CEO & CREATIVE HEAD
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                  Anmol
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-5">
                  The creative genius behind our brand, bringing strategic
                  vision and innovative thinking to every journey we craft.
                  Leading with passion and excellence.
                </p>
                <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-5 rounded-r-xl">
                  <p className="text-base text-white italic">
                    "Excellence is not a destination, it's a continuous journey
                    of innovation and dedication to creating extraordinary
                    experiences."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-2xl p-5 transform hover:scale-105 hover:bg-white/30 transition-all duration-300 cursor-pointer active:scale-95">
                  <div className="text-3xl font-black mb-1">100%</div>
                  <div className="text-sm font-semibold opacity-90">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-2xl p-5 transform hover:scale-105 hover:bg-white/30 transition-all duration-300 cursor-pointer active:scale-95">
                  <div className="text-3xl font-black mb-1">85+</div>
                  <div className="text-sm font-semibold opacity-90">
                    Destinations
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative group order-1 lg:order-2 h-[80vh] flex items-center">
              <div className="relative transform group-hover:-rotate-2 transition-all duration-500 w-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src="/gallery/aboutus/CoFounder.png"
                    alt="CEO"
                    className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Social Media Overlay Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                    <div className="text-white mb-3">
                      <div className="text-xs font-bold mb-1 opacity-80">
                        CEO • CREATIVE HEAD
                      </div>
                      <div className="text-2xl font-black">Anmol</div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://instagram.com/ceo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/ceo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com/@ceo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-red-600 to-red-700 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Lead Section - Orange Theme - Single Viewport */}
      {/* <section className="h-screen flex items-center px-4 bg-gradient-to-br from-[#E65F25] via-orange-500 to-red-500 relative overflow-hidden">
      
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-white"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 50%, 95% 100%, 90% 50%, 85% 100%, 80% 50%, 75% 100%, 70% 50%, 65% 100%, 60% 50%, 55% 100%, 50% 50%, 45% 100%, 40% 50%, 35% 100%, 30% 50%, 25% 100%, 20% 50%, 15% 100%, 10% 50%, 5% 100%, 0 50%)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-12">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-bold cursor-pointer hover:bg-white/30 transition-colors active:scale-95">
                Webdeveloper
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-bold cursor-pointer hover:bg-white/30 transition-colors active:scale-95">
                UI/UX Designer
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            <div className="relative group h-[65vh] flex items-center">
              <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 transform group-hover:rotate-2 transition-all duration-500 shadow-2xl w-full">
                <div className="bg-white rounded-2xl overflow-hidden relative">
                  <img
                    src="/gallery/aboutus/Shrey.png"
                    alt="Shrey Goel"
                    className="w-full h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                  />

                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 z-20">
                    <h3 className="text-white text-lg font-black mb-3">
                      Shrey Goel
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://instagram.com/shreygoel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/shreygoel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com/@shreygoel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-red-600 to-red-700 text-white p-3 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 group/icon"
                      >
                        <svg
                          className="w-5 h-5 group-hover/icon:rotate-12 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="space-y-5">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-none">
                  Shrey Goel
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  The technical architect and design visionary who brings
                  digital dreams to life. A master of code and creativity,
                  crafting seamless experiences that match the beauty of our
                  destinations.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 hover:bg-white/30 transition-all duration-300 cursor-pointer active:scale-95">
                  <h3 className="text-xl font-black text-white mb-1">
                    Technical Excellence
                  </h3>
                  <p className="text-sm text-white/80">
                    Building robust, scalable web solutions with cutting-edge
                    technologies
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 hover:bg-white/30 transition-all duration-300 cursor-pointer active:scale-95">
                  <h3 className="text-xl font-black text-white mb-1">
                    Design Innovation
                  </h3>
                  <p className="text-sm text-white/80">
                    Creating stunning visual experiences that captivate and
                    engage users
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-4 rounded-r-xl">
                <p className="text-base text-white italic">
                  "Every pixel, every line of code—crafted with precision to
                  create digital journeys as memorable as the real ones."
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gray-900"
          style={{
            clipPath:
              "polygon(0 50%, 5% 0, 10% 50%, 15% 0, 20% 50%, 25% 0, 30% 50%, 35% 0, 40% 50%, 45% 0, 50% 50%, 55% 0, 60% 50%, 65% 0, 70% 50%, 75% 0, 80% 50%, 85% 0, 90% 50%, 95% 0, 100% 50%, 100% 100%, 0 100%)",
          }}
        ></div>
      </section> */}

      
      {/* <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating extraordinary
              travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
              >
               
                <div className="relative overflow-hidden h-64">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white text-center p-4">
                      <p className="text-sm font-medium">{employee.about}</p>
                    </div>
                  </div>
                </div>

            
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-1">
                    {employee.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    {employee.profession}
                  </p>

                
                  <div className="flex gap-3">
                    <a
                      href={employee.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer group/icon"
                    >
                      <svg
                        className="w-4 h-4 group-hover/icon:rotate-12 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href={employee.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-2 rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer group/icon"
                    >
                      <svg
                        className="w-4 h-4 group-hover/icon:rotate-12 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="min-h-screen flex items-center py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8">OUR MISSION</h2>
          <p className="text-2xl leading-relaxed mb-12 text-gray-300">
            To create extraordinary travel experiences that transform
            perspectives, connect cultures, and build memories that last a
            lifetime. We believe in authentic journeys, responsible tourism, and
            making the world a friendlier place—one adventure at a time.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer active:scale-95">
              <div className="text-5xl font-black mb-4">1000+</div>
              <div className="text-lg font-semibold">Adventures Created</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer active:scale-95">
              <div className="text-5xl font-black mb-4">85+</div>
              <div className="text-lg font-semibold">Destinations</div>
            </div>
            <div className="bg-gradient-to-br from-[#E65F25] to-red-600 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer active:scale-95">
              <div className="text-5xl font-black mb-4">100%</div>
              <div className="text-lg font-semibold">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen flex items-center px-4 bg-gradient-to-br from-[#E65F25] to-orange-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            READY FOR YOUR
            <br />
            NEXT ADVENTURE?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Let's create unforgettable memories together. Your journey starts
            here.
          </p>
          <button className="bg-white text-[#E65F25] px-12 py-6 rounded-full text-xl font-black shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer active:scale-95 hover:bg-gradient-to-r hover:from-white hover:to-orange-50">
            START YOUR JOURNEY
          </button>
        </div>
      </section>
    </div>
  );
}
