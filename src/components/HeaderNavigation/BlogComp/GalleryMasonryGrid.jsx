import React, { useState } from 'react';

const GalleryMasonryGrid = ({ 
  images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90",
      alt: "Mountain landscape",
      span: 2 // Takes 2 rows
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=90",
      alt: "Travel destination",
      span: 1
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=90",
      alt: "Adventure",
      span: 1
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=90",
      alt: "City landscape",
      span: 1
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=90",
      alt: "Lake view",
      span: 2
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90",
      alt: "Nature",
      span: 1
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=90",
      alt: "Mountain peaks",
      span: 2
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=90",
      alt: "Scenic view",
      span: 1
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=90",
      alt: "Waterscape",
      span: 1
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90",
      alt: "Travel",
      span: 2
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=90",
      alt: "Adventure travel",
      span: 1
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90",
      alt: "Mountain range",
      span: 1
    }
  ]
}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div 
      className="w-full min-h-screen py-12 px-4 mt-10"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(245, 237, 224, 0.4))',
        fontFamily: "'Crimson Text', serif"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid - Pinterest Style Masonry */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gridAutoRows: '200px'
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                gridRowEnd: `span ${image.span}`,
                border: '2px solid transparent'
              }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  backfaceVisibility: 'hidden'
                }}
                loading="lazy"
              />

              {/* Overlay on Hover */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 115, 85, 0.3) 0%, rgba(74, 44, 42, 0.5) 100%)',
                  opacity: hoveredImage === image.id ? 1 : 0
                }}
              />

              {/* Shimmer Effect on Hover */}
              {hoveredImage === image.id && (
                <div 
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                    backgroundSize: '200% 100%'
                  }}
                />
              )}

              {/* Border Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-lg transition-all duration-500"
                style={{
                  border: hoveredImage === image.id ? '2px solid rgba(139, 115, 85, 0.5)' : '2px solid transparent'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-6xl max-h-[72vh] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                maxHeight: '72vh'
              }}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#4A2C2A" 
                strokeWidth="2.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryMasonryGrid;