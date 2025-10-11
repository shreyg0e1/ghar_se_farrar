import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FiltersButtonBlog = ({ 
  onFilterChange = () => {},
  initialFilter = "All Blogs"
}) => {
  const filters = [
    "All Blogs",
    "Places to Visit",
    "Mountains",
    "Things to Do",
    "Aesthetic Places",
    "Places to Shop",
    "Stories",
    "News",
    "General",
    "Culture"
  ];

  // Triple the filters for infinite loop effect
  const infiniteFilters = [...filters, ...filters, ...filters];
  
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Start at the middle set
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstButton = container.querySelector('button');
      if (firstButton) {
        const buttonWidth = firstButton.offsetWidth + 12; // button width + gap
        container.scrollLeft = buttonWidth * filters.length;
      }
    }
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const handleScroll = () => {
    if (isScrolling || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const firstButton = container.querySelector('button');
    if (!firstButton) return;
    
    const buttonWidth = firstButton.offsetWidth + 12; // button width + gap
    const totalWidth = buttonWidth * filters.length;
    
    // If scrolled to the beginning of first set, jump to beginning of middle set
    if (container.scrollLeft < buttonWidth) {
      container.scrollLeft = totalWidth + container.scrollLeft;
    }
    // If scrolled past the middle set, jump back to middle set
    else if (container.scrollLeft >= totalWidth * 2) {
      container.scrollLeft = totalWidth + (container.scrollLeft - totalWidth * 2);
    }
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const firstButton = container.querySelector('button');
    if (!firstButton) return;
    
    const buttonWidth = firstButton.offsetWidth + 12; // button width + gap
    const scrollAmount = buttonWidth; // Scroll ONE button at a time
    
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      handleScroll();
      setIsScrolling(false);
    }, 400);
  };

  return (
    <div 
      className="relative w-full py-5 px-4"
      style={{ 
        fontFamily: "'Crimson Text', serif",
        background: 'linear-gradient(to bottom, rgba(250, 245, 235, 0.5), rgba(255, 255, 255, 0.8))'
      }}
    >
      <div className="max-w-5xl mx-auto relative flex items-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="flex-shrink-0 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer z-10 border border-stone-200 hover:border-stone-300"
          style={{ 
            color: '#6B563F'
          }}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        {/* Filters Container - Shows exactly 5 buttons */}
        <div className="flex-1 overflow-hidden">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(filter)}
                className={`relative px-5 py-2.5 rounded-full whitespace-nowrap font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer flex-shrink-0 ${
                  activeFilter === filter
                    ? 'shadow-lg'
                    : 'shadow-sm hover:shadow-md'
                }`}
                style={{
                  background: activeFilter === filter
                    ? 'linear-gradient(135deg, #8B7355 0%, #6B563F 100%)'
                    : '#FFFFFF',
                  color: activeFilter === filter ? '#FFFFFF' : '#4A2C2A',
                  border: activeFilter === filter 
                    ? '1.5px solid #6B563F' 
                    : '1.5px solid #E5D4C1',
                  fontFamily: "'Crimson Text', serif",
                  letterSpacing: '0.3px',
                  minWidth: 'fit-content',
                  transform: activeFilter === filter ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.transform = 'scale(1.03) translateY(-1px)';
                    e.currentTarget.style.borderColor = '#D4C4B0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.borderColor = '#E5D4C1';
                  }
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.98)';
                }}
                onMouseUp={(e) => {
                  if (activeFilter === filter) {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  } else {
                    e.currentTarget.style.transform = 'scale(1.03) translateY(-1px)';
                  }
                }}
              >
                {/* Text */}
                <span className="relative z-10">{filter}</span>
                
                {/* Hover shine effect */}
                {activeFilter !== filter && (
                  <span 
                    className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 115, 85, 0.08) 0%, rgba(107, 86, 63, 0.12) 100%)'
                    }}
                  ></span>
                )}
                
                {/* Active indicator */}
                {activeFilter === filter && (
                  <span 
                    className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                    style={{
                      background: '#FFD700',
                      boxShadow: '0 0 6px rgba(255, 215, 0, 0.5)'
                    }}
                  ></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="flex-shrink-0 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer z-10 border border-stone-200 hover:border-stone-300"
          style={{ 
            color: '#6B563F'
          }}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FiltersButtonBlog;