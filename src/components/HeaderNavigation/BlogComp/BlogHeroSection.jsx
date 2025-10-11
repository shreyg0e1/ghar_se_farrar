import React, { useState, useEffect } from 'react';

const BlogHeroSection = ({ 
  backgroundImage = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=80",
  mainTitle = "Travel Blogs",
  mainDescription = "Discover hidden gems, offbeat destinations, and unforgettable travel experiences. From misty mountains to serene beaches, explore India's diverse landscapes through authentic stories and expert travel guides.",
  featuredBlog = {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Exploring the Untouched Beauty of Himachal Pradesh",
    description: "Journey through pristine valleys, ancient temples, and charming hill stations. Experience the magic of Himachal's hidden trails, local culture, and breathtaking mountain vistas that will leave you spellbound.",
    link: "#"
  },
  sideBlog = {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    link: "#"
  },
  rotatingCategories = [
    {
      title: "Monsoon",
      description: "Experience India's magical monsoon season with lush green landscapes, cascading waterfalls, and misty mountain trails. Perfect time for nature lovers and adventure seekers."
    },
    {
      title: "Stays in Hills",
      description: "Discover cozy mountain retreats, luxury resorts, and charming homestays nestled in serene hill stations. Wake up to breathtaking views and fresh mountain air."
    },
    {
      title: "Waterfalls",
      description: "Chase the most spectacular waterfalls across India. From thundering cascades to hidden streams, find your perfect nature escape and create unforgettable memories."
    },
    {
      title: "Snowfall",
      description: "Witness winter wonderlands transform Indian hill stations. Enjoy snow-covered peaks, thrilling snow activities, and cozy fireside moments in pristine white landscapes."
    },
    {
      title: "Places to Eat",
      description: "Savor authentic local cuisines and hidden culinary gems on your travels. From street food to fine dining, discover flavors that define each destination's culture."
    },
    {
      title: "Must Visit",
      description: "Explore handpicked destinations that deserve a spot on every traveler's bucket list. Iconic landmarks, cultural heritage sites, and breathtaking natural wonders await."
    }
  ]
}) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => 
        (prevIndex + 1) % rotatingCategories.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingCategories.length]);

  const currentCategory = rotatingCategories[currentCategoryIndex];

  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: "'Playfair Display', 'Georgia', serif"
      }}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-stone-100 bg-opacity-90"></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <h1 
            className="text-7xl font-bold mb-6 tracking-tight"
            style={{ 
              color: '#4A2C2A',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800
            }}
          >
            {mainTitle}
          </h1>
          <div className="w-80 h-0.5 bg-stone-800 mb-6"></div>
          <p 
            className="max-w-md text-justify leading-relaxed"
            style={{ 
              color: '#2C2C2C',
              fontSize: '0.95rem',
              fontFamily: "'Crimson Text', serif"
            }}
          >
            {mainDescription}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Featured Blog */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Blog Card */}
            <div 
              className="bg-white bg-opacity-60 backdrop-blur-sm rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:bg-opacity-80 overflow-hidden group"
              onMouseEnter={() => setHoveredCard('featured')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.location.href = featuredBlog.link}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title}
                  className="w-full h-96 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold mb-3 transition-colors duration-300"
                  style={{ 
                    color: hoveredCard === 'featured' ? '#4A2C2A' : '#3C3C3C',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  {featuredBlog.title}
                </h3>
                <p 
                  className="text-justify leading-relaxed"
                  style={{ 
                    color: '#5C5C5C',
                    fontSize: '0.95rem',
                    fontFamily: "'Crimson Text', serif"
                  }}
                >
                  {featuredBlog.description}
                </p>
                {hoveredCard === 'featured' && (
                  <div className="mt-4 h-0.5 w-16 bg-stone-700 animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Additional Featured Card */}
            <div 
              className="bg-white bg-opacity-60 backdrop-blur-sm rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:bg-opacity-80 overflow-hidden group"
              onMouseEnter={() => setHoveredCard('additional')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.location.href = "#"}
            >
              <div className="flex">
                <div className="relative overflow-hidden w-2/5">
                  <img 
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
                    alt="Travel adventure"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5 w-3/5">
                  <h3 
                    className="text-lg font-bold mb-2 transition-colors duration-300"
                    style={{ 
                      color: hoveredCard === 'additional' ? '#4A2C2A' : '#3C3C3C',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  >
                    Adventure Trails: Your Complete Trekking Guide
                  </h3>
                  <p 
                    className="text-justify leading-relaxed text-sm"
                    style={{ 
                      color: '#5C5C5C',
                      fontFamily: "'Crimson Text', serif"
                    }}
                  >
                    Embark on thrilling trekking adventures across India's most scenic trails. Expert tips, gear guides, and hidden routes for every skill level.
                  </p>
                  {hoveredCard === 'additional' && (
                    <div className="mt-3 h-0.5 w-12 bg-stone-700 animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Rotating Categories & Side Blog */}
          <div className="lg:col-span-1 space-y-6">
            {/* Rotating Category Card */}
            <div 
              className="bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 hover:bg-opacity-70 cursor-pointer"
              onMouseEnter={() => setHoveredCard('category')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2 
                className="text-5xl font-bold mb-4 tracking-tight transition-all duration-500"
                style={{ 
                  color: hoveredCard === 'category' ? '#8B4513' : '#4A2C2A',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                {currentCategory.title}
              </h2>
              <p 
                className="text-justify leading-relaxed transition-opacity duration-500"
                style={{ 
                  color: '#2C2C2C',
                  fontSize: '0.9rem',
                  fontFamily: "'Crimson Text', serif"
                }}
              >
                {currentCategory.description}
              </p>
              <div className="flex gap-1 mt-4">
                {rotatingCategories.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentCategoryIndex 
                        ? 'w-8 bg-stone-700' 
                        : 'w-1 bg-stone-400'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Side Blog Card */}
            <div 
              className="bg-white bg-opacity-60 backdrop-blur-sm rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:bg-opacity-80 overflow-hidden group"
              onMouseEnter={() => setHoveredCard('side')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.location.href = sideBlog.link}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={sideBlog.image} 
                  alt="Travel destination"
                  className="w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-1 w-16 bg-white"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ 
                    color: hoveredCard === 'side' ? '#4A2C2A' : '#3C3C3C',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  Weekend Getaways: Escape to Nature's Paradise
                </h3>
                <p 
                  className="text-justify leading-relaxed"
                  style={{ 
                    color: '#5C5C5C',
                    fontSize: '0.9rem',
                    fontFamily: "'Crimson Text', serif"
                  }}
                >
                  Unwind with handpicked weekend destinations perfect for quick escapes. Rejuvenate your soul with scenic beauty and peaceful retreats.
                </p>
                {hoveredCard === 'side' && (
                  <div className="mt-4 h-0.5 w-16 bg-stone-700 animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Crimson+Text:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default BlogHeroSection;