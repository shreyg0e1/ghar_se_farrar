//========================================================
// Before RESPONSIVE:- Before using
//========================================================

// import React from "react";
// import { motion } from "framer-motion";
// import video from "../../assets/bg-video.mp4";
// export default function FullScreenVideo() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden mt-[64px]">
//       {/* Background video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={video}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* Overlay for clarity */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Centered animated content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//         {/* Heading */}
//         <motion.h1
//           className="text-4xl md:text-7xl font-extrabold mb-6
//                      bg-clip-text text-transparent
//                      bg-gradient-to-r from-[#ffffff] via-[#E65F25] to-[#ffffff]
//                      drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           Ready to <span className="text-[#E65F25]">Escape</span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           className="text-lg md:text-2xl max-w-2xl text-gray-200 font-medium
//                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
//         >
//           Discover journeys that connect you with your soul
//         </motion.p>
//       </div>
//     </div>
//   );
// }

//======================================================
//AFTER RESPONSIVE:- Currently Using Code
//=======================================================

import React from "react";
import { motion } from "framer-motion";
import video from "../../assets/bg-video.mp4";

export default function FullScreenVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-[52px] md:mt-[56px] lg:mt-[64px]">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for clarity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered animated content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-5 lg:px-6">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-5 lg:mb-6 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#ffffff] via-[#E65F25] to-[#ffffff]
                     drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ready to <span className="text-[#E65F25]">Escape</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-lg lg:text-2xl max-w-sm md:max-w-xl lg:max-w-2xl text-gray-200 font-medium 
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6 md:mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          Discover journeys that connect you with your soul
        </motion.p>

        {/* CTA Button - Only visible on Mobile */}
        <motion.button
          className="md:hidden bg-[#E65F25] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 cursor-pointer transition-all duration-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
}

// import React, { useRef, useEffect, useState } from "react";
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   BufferGeometry,
//   BufferAttribute,
//   PointsMaterial,
//   Points,
//   MeshBasicMaterial,
//   Mesh,
//   Color,
//   AdditiveBlending,
//   Group,
//   CylinderGeometry,
//   SphereGeometry,
//   BoxGeometry,
//   Vector3,
// } from "three";

// export default function FaraarTravelLanding() {
//   const mountRef = useRef(null);
//   const [showVideo, setShowVideo] = useState(false);
//   const [animationPhase, setAnimationPhase] = useState(0);
//   const frameRef = useRef(null);
//   const particlesRef = useRef(null);
//   const suitcaseRef = useRef(null);
//   const airplaneRef = useRef(null);

//   useEffect(() => {
//     if (showVideo) return;

//     const scene = new Scene();
//     const camera = new PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current?.appendChild(renderer.domElement);

//     // Enhanced Particles
//     const particleGeometry = new BufferGeometry();
//     const particleCount = 800;
//     const positions = new Float32Array(particleCount * 3);
//     const colors = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 3);

//     const brandColor = new Color("#E65F25");
//     const secondaryColor = new Color("#F4A261");

//     for (let i = 0; i < particleCount; i++) {
//       // Spread particles in a larger area
//       positions[i * 3] = (Math.random() - 0.5) * 20;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

//       // Random velocities for collapse animation
//       velocities[i * 3] = (Math.random() - 0.5) * 0.1;
//       velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
//       velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

//       // Mix of brand colors
//       const color = Math.random() > 0.5 ? brandColor : secondaryColor;
//       colors[i * 3] = color.r;
//       colors[i * 3 + 1] = color.g;
//       colors[i * 3 + 2] = color.b;
//     }

//     particleGeometry.setAttribute("position", new BufferAttribute(positions, 3));
//     particleGeometry.setAttribute("color", new BufferAttribute(colors, 3));

//     const particleMaterial = new PointsMaterial({
//       size: 0.15,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//       blending: AdditiveBlending,
//     });

//     const particles = new Points(particleGeometry, particleMaterial);
//     particlesRef.current = { particles, positions, velocities };
//     scene.add(particles);

//     // 3D Suitcase
//     const suitcaseGroup = new Group();

//     // Main body
//     const bodyGeometry = new BoxGeometry(2, 1.5, 0.6);
//     const bodyMaterial = new MeshBasicMaterial({
//       color: "#E65F25",
//       transparent: true,
//       opacity: 0,
//     });
//     const suitcaseBody = new Mesh(bodyGeometry, bodyMaterial);

//     // Handle
//     const handleGeometry = new CylinderGeometry(0.05, 0.05, 1, 8);
//     const handleMaterial = new MeshBasicMaterial({
//       color: "#8B4513",
//       transparent: true,
//       opacity: 0,
//     });
//     const handle = new Mesh(handleGeometry, handleMaterial);
//     handle.rotation.z = Math.PI / 2;
//     handle.position.y = 1.2;

//     // Wheels
//     const wheelGeometry = new CylinderGeometry(0.2, 0.2, 0.1, 16);
//     const wheelMaterial = new MeshBasicMaterial({
//       color: "#333",
//       transparent: true,
//       opacity: 0,
//     });

//     const wheel1 = new Mesh(wheelGeometry, wheelMaterial);
//     const wheel2 = new Mesh(wheelGeometry, wheelMaterial);
//     wheel1.position.set(-0.7, -0.9, 0.4);
//     wheel2.position.set(0.7, -0.9, 0.4);
//     wheel1.rotation.x = Math.PI / 2;
//     wheel2.rotation.x = Math.PI / 2;

//     suitcaseGroup.add(suitcaseBody, handle, wheel1, wheel2);
//     suitcaseGroup.position.set(0, -5, 0);
//     suitcaseRef.current = suitcaseGroup;
//     scene.add(suitcaseGroup);

//     // 3D Airplane
//     const airplaneGroup = new Group();

//     // Fuselage
//     const fuselageGeometry = new CylinderGeometry(0.3, 0.1, 3, 12);
//     const fuselageMaterial = new MeshBasicMaterial({
//       color: "#E65F25",
//       transparent: true,
//       opacity: 0,
//     });
//     const fuselage = new Mesh(fuselageGeometry, fuselageMaterial);
//     fuselage.rotation.z = Math.PI / 2;

//     // Wings
//     const wingGeometry = new BoxGeometry(3, 0.1, 1);
//     const wingMaterial = new MeshBasicMaterial({
//       color: "#F4A261",
//       transparent: true,
//       opacity: 0,
//     });
//     const wings = new Mesh(wingGeometry, wingMaterial);

//     // Tail
//     const tailGeometry = new BoxGeometry(0.8, 0.05, 0.6);
//     const tailMaterial = new MeshBasicMaterial({
//       color: "#E65F25",
//       transparent: true,
//       opacity: 0,
//     });
//     const tail = new Mesh(tailGeometry, tailMaterial);
//     tail.position.x = -1.2;
//     tail.position.y = 0.3;

//     airplaneGroup.add(fuselage, wings, tail);
//     airplaneGroup.position.set(-15, 0, 0);
//     airplaneRef.current = airplaneGroup;
//     scene.add(airplaneGroup);

//     camera.position.set(0, 0, 10);

//     let collapseProgress = 0;

//     const animate = () => {
//       frameRef.current = requestAnimationFrame(animate);

//       const time = Date.now() * 0.001;

//       // Particle animation
//       if (animationPhase === 0) {
//         particles.rotation.y += 0.002;
//         particles.position.y = Math.sin(time * 0.5) * 0.3;

//         // Gentle floating motion for individual particles
//         const positions = particles.geometry.attributes.position.array;
//         for (let i = 0; i < positions.length; i += 3) {
//           positions[i + 1] += Math.sin(time + i * 0.1) * 0.002;
//         }
//         particles.geometry.attributes.position.needsUpdate = true;
//       }

//       if (animationPhase === 1) {
//         // Suitcase appears
//         suitcaseRef.current.children.forEach(child => {
//           child.material.opacity = Math.min(child.material.opacity + 0.03, 1);
//         });
//         suitcaseRef.current.position.y += 0.08;
//         suitcaseRef.current.rotation.y += 0.02;
//       }

//       if (animationPhase === 2) {
//         // Airplane appears and particles start collapsing
//         airplaneRef.current.children.forEach(child => {
//           child.material.opacity = Math.min(child.material.opacity + 0.03, 1);
//         });
//         airplaneRef.current.position.x += 0.15;
//         airplaneRef.current.position.y += 0.03;
//         airplaneRef.current.rotation.z += 0.01;

//         suitcaseRef.current.children.forEach(child => {
//           child.material.opacity = Math.max(child.material.opacity - 0.03, 0);
//         });

//         // Particle collapse animation
//         collapseProgress += 0.02;
//         const positions = particles.geometry.attributes.position.array;
//         const { velocities } = particlesRef.current;

//         for (let i = 0; i < positions.length; i += 3) {
//           const targetX = airplaneRef.current.position.x;
//           const targetY = airplaneRef.current.position.y;
//           const targetZ = 0;

//           // Move particles towards airplane position
//           positions[i] += (targetX - positions[i]) * 0.02;
//           positions[i + 1] += (targetY - positions[i + 1]) * 0.02;
//           positions[i + 2] += (targetZ - positions[i + 2]) * 0.02;
//         }
//         particles.geometry.attributes.position.needsUpdate = true;

//         // Scale airplane as particles merge
//         const scale = 1 + collapseProgress * 2;
//         airplaneRef.current.scale.set(scale, scale, scale);
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       if (frameRef.current) cancelAnimationFrame(frameRef.current);
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//     };
//   }, [showVideo, animationPhase]);

//   const handleStart = () => {
//     setAnimationPhase(1);
//     setTimeout(() => setAnimationPhase(2), 2000);
//     setTimeout(() => setShowVideo(true), 4500);
//   };

//   if (showVideo) {
//     return (
//       <div className="relative w-full h-screen overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           style={{ filter: 'brightness(0.8)' }}
//         >
//           <source src="../assets/bg-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6">
//               Welcome to <span style={{ color: "#E65F25" }}>Faraar</span>
//             </h1>
//             <p className="text-lg md:text-2xl text-gray-200 drop-shadow-lg max-w-3xl mx-auto">
//               Discover journeys that connect you with your soul
//             </p>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes fade-in-up {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-fade-in-up {
//             animation: fade-in-up 1s ease-out;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
//       <div ref={mountRef} className="absolute inset-0" />

//       {/* Centered Intro Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
//         {animationPhase === 0 && (
//           <div className="animate-fade-in">
//             <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 drop-shadow-lg">
//               Welcome to <span style={{ color: "#E65F25" }}>Faraar</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 mb-10">
//               Escape the ordinary ✨
//             </p>
//             <button
//               onClick={handleStart}
//               className="px-12 py-5 rounded-full text-xl font-medium text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-95 cursor-pointer"
//               style={{
//                 background: "linear-gradient(135deg, #E65F25 0%, #F4A261 100%)",
//                 boxShadow: "0 10px 30px rgba(230, 95, 37, 0.3)",
//               }}
//             >
//               Start Journey
//             </button>
//           </div>
//         )}

//         {animationPhase === 1 && (
//           <div className="animate-pulse">
//             <h2 className="text-4xl md:text-6xl font-medium text-[#E65F25] drop-shadow-lg">
//               Packing your dreams...
//             </h2>
//           </div>
//         )}

//         {animationPhase === 2 && (
//           <div className="animate-bounce">
//             <h2 className="text-4xl md:text-6xl font-medium text-[#E65F25] drop-shadow-lg">
//               Taking off...
//             </h2>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-in-out;
//         }
//         .hover\\:shadow-3xl:hover {
//           box-shadow: 0 20px 40px rgba(230, 95, 37, 0.4);
//         }
//       `}</style>
//     </div>
//   );
// }
