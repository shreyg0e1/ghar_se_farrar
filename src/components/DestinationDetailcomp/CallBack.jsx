import React, { useState } from 'react';

const CallBack = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E65F25] via-orange-500 to-orange-600"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Suitcase */}
          <div className="absolute top-8 left-8 w-16 h-12 opacity-20">
            <svg 
              className="w-full h-full text-white animate-bounce" 
              style={{ animationDuration: '3s' }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M18,6H16V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V6H6A2,2 0 0,0 4,8V19A2,2 0 0,0 6,21H18A2,2 0 0,0 20,19V8A2,2 0 0,0 18,6M10,4H14V6H10V4M18,19H6V8H8V10H10V8H14V10H16V8H18V19Z"/>
            </svg>
          </div>
          
          {/* Animated Plane */}
          <div className="absolute top-12 right-16 w-20 h-14 opacity-20">
            <svg 
              className="w-full h-full text-white animate-pulse" 
              style={{ animationDuration: '2s' }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"/>
            </svg>
          </div>
          
          {/* Floating Circles */}
          <div className="absolute top-20 right-8 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-16 left-16 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
            <div className="mb-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 font-inter leading-tight">
                Bigger Group? Get special offers up to{' '}
                <span className="text-yellow-300 drop-shadow-lg">50% Off!</span>
              </h2>
              <p className="text-white/90 text-lg lg:text-xl font-medium">
                We create unforgettable adventures, customised for your group.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                className="group relative px-8 py-4 bg-white text-[#E65F25] font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ cursor: 'pointer' }}
              >
                {/* Button Background Animation */}
                <div className={`absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform transition-transform duration-300 ${isHovered ? 'scale-100' : 'scale-0'} rounded-xl`}></div>
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <svg 
                    className={`w-6 h-6 transform transition-all duration-300 ${isHovered ? 'rotate-12 text-[#E65F25]' : 'text-[#E65F25]'}`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,15.5C18.75,15.5 17.58,15.84 16.56,16.43L10.89,10.76C11.15,10.04 11.15,9.24 10.89,8.52L16.56,2.85C17.58,3.44 18.75,3.78 20,3.78C21.78,3.78 23.25,2.31 23.25,0.53C23.25,-1.25 21.78,-2.72 20,-2.72C18.22,-2.72 16.75,-1.25 16.75,0.53C16.75,1.28 17.01,1.96 17.42,2.5L11.75,8.17C10.73,7.58 9.56,7.24 8.31,7.24C4.89,7.24 2.11,10.02 2.11,13.44C2.11,16.86 4.89,19.64 8.31,19.64C11.73,19.64 14.51,16.86 14.51,13.44C14.51,12.69 14.25,12.01 13.84,11.47L19.51,5.8C20.53,6.39 21.7,6.73 22.95,6.73C24.73,6.73 26.2,5.26 26.2,3.48C26.2,1.7 24.73,0.23 22.95,0.23C21.17,0.23 19.7,1.7 19.7,3.48C19.7,4.23 19.96,4.91 20.37,5.45"/>
                  </svg>
                  <span className={`font-bold transition-colors duration-300 ${isHovered ? 'text-[#E65F25]' : 'text-[#E65F25]'}`}>
                    Get A Callback
                  </span>
                </div>
                
                {/* Glowing Effect */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                     style={{ 
                       boxShadow: '0 0 30px rgba(255, 255, 255, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2)' 
                     }}>
                </div>
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                </svg>
                <span className="text-sm">Free Consultation</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L16.5 14.74L17.91 21.91L12 18.35L6.09 21.91L7.5 14.74L2 9L8.91 8.26L12 2Z"/>
                </svg>
                <span className="text-sm">Best Price Guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Group Travel Adventure"
                  className="w-full h-64 lg:h-80 object-cover transform hover:scale-110 transition-transform duration-700"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  50% OFF
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-white rounded-full animate-bounce opacity-80"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            className="w-full h-4 fill-current text-white/10" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25"
            />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5"
            />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CallBack;