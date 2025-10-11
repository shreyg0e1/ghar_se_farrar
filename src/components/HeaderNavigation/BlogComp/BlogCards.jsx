import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';

const BlogCards = ({ 
  blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      date: "1 Oct, 2025",
      readTime: "7 minutes read",
      title: "50 Amazing Places To Visit In London 2025",
      description: "Explore 50 incredible places to visit in London in 2025! From Buckingham Palace and Tower Bridge to free museums and hidden gems.",
      tags: ["Adventure", "Europe", "Places To Visit", "Travel"],
      link: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      date: "1 Oct, 2025",
      readTime: "2 minutes read",
      title: "Chicham Bridge Spiti - Asia's Highest Suspension Bridge & Must-Visit Spot",
      description: "Chicham Bridge, located high in Spiti Valley, is more than just a bridge - it's an adventure! Find key facts, travel tips, and why it's a must-visit.",
      tags: ["Places To Visit", "Spiti", "Travel"],
      link: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80",
      date: "1 Oct, 2025",
      readTime: "3 minutes read",
      title: "Buckingham Palace's First Christmas Pop-Up Shop",
      description: "This winter, Buckingham Palace is adding some festive sparkle to London with its very first Christmas pop-up shop offering unique royal gifts.",
      tags: ["news", "Travel News", "Travel", "Places To Visit"],
      link: "#"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      date: "28 Sep, 2025",
      readTime: "5 minutes read",
      title: "Hidden Waterfalls of Meghalaya: Nature's Best Kept Secrets",
      description: "Discover the most spectacular hidden waterfalls in Meghalaya. From Nohkalikai to Seven Sisters Falls, experience nature's raw beauty in Northeast India.",
      tags: ["Waterfalls", "Adventure", "Places To Visit", "Monsoon"],
      link: "#"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      date: "25 Sep, 2025",
      readTime: "6 minutes read",
      title: "Ultimate Guide to Himalayan Hill Stations in Winter",
      description: "Experience the magic of snowfall in India's most beautiful hill stations. Perfect stays, activities, and travel tips for your winter mountain escape.",
      tags: ["Stays in Hills", "Snowfall", "Mountains", "Travel"],
      link: "#"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      date: "22 Sep, 2025",
      readTime: "4 minutes read",
      title: "Street Food Paradise: 10 Must-Try Local Cuisines Across India",
      description: "Embark on a culinary journey through India's diverse street food culture. From Mumbai's vada pav to Delhi's chaat, taste the real flavors of India.",
      tags: ["Places to Eat", "Culture", "Things to Do", "Travel"],
      link: "#"
    }
  ]
}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div 
      className="w-full py-12 px-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(245, 237, 224, 0.3))',
        fontFamily: "'Crimson Text', serif"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.location.href = blog.link}
            >
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  border: '1px solid #E5D4C1'
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 115, 85, 0.4) 0%, rgba(107, 86, 63, 0.6) 100%)',
                      opacity: hoveredCard === blog.id ? 1 : 0
                    }}
                  ></div>

                  {/* Animated Corner Accent */}
                  {hoveredCard === blog.id && (
                    <>
                      <div 
                        className="absolute top-0 left-0 w-20 h-20 transition-all duration-500"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, transparent 100%)',
                          clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                        }}
                      ></div>
                      <div 
                        className="absolute bottom-0 right-0 w-20 h-20 transition-all duration-500"
                        style={{
                          background: 'linear-gradient(135deg, transparent 0%, rgba(255, 215, 0, 0.3) 100%)',
                          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                        }}
                      ></div>
                    </>
                  )}

                  {/* Shimmer Effect */}
                  {hoveredCard === blog.id && (
                    <div 
                      className="absolute inset-0 animate-shimmer"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                        backgroundSize: '200% 100%'
                      }}
                    ></div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1.5" style={{ color: '#8B7355' }}>
                      <Calendar size={16} strokeWidth={2} />
                      <span className="font-medium">{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5" style={{ color: '#8B7355' }}>
                      <Clock size={16} strokeWidth={2} />
                      <span className="font-medium">{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-3 leading-tight transition-colors duration-300"
                    style={{ 
                      color: hoveredCard === blog.id ? '#6B563F' : '#2C2C2C',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  >
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{ 
                      color: '#5C5C5C',
                      fontFamily: "'Crimson Text', serif"
                    }}
                  >
                    {blog.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                          background: hoveredCard === blog.id 
                            ? 'linear-gradient(135deg, #8B7355 0%, #6B563F 100%)'
                            : 'rgba(139, 115, 85, 0.1)',
                          color: hoveredCard === blog.id ? '#FFFFFF' : '#6B563F',
                          border: hoveredCard === blog.id ? 'none' : '1px solid #D4C4B0'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Indicator */}
                  {hoveredCard === blog.id && (
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold animate-pulse" style={{ color: '#8B7355' }}>
                      <span>Read More</span>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path 
                          d="M6 3L11 8L6 13" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Crimson+Text:wght@400;600;700&display=swap');
        
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
      `}</style>
    </div>
  );
};

export default BlogCards; 