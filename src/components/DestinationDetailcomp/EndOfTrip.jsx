import React from 'react';

const EndOfTrip = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving Plane */}
        <div className="absolute top-8 left-0 w-12 h-8 opacity-30">
          <svg 
            className="w-full h-full text-orange-300 animate-bounce" 
            style={{ animationDuration: '3s', animationDirection: 'alternate' }}
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-12 right-1/4 w-6 h-6 bg-orange-200 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-12 left-1/3 w-4 h-4 bg-orange-300 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated Title */}
        <div className="mb-8">
          <h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#E65F25] to-orange-600 bg-clip-text text-transparent mb-4 animate-fadeIn font-inter"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              backgroundImage: 'linear-gradient(135deg, #E65F25, #ff7f39)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            End Of Trip
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#E65F25] to-transparent w-32 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EndOfTrip;
