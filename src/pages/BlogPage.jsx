import React, { useState } from 'react';
import BlogHeroSection from '../components/HeaderNavigation/BlogComp/BlogHeroSection';
import FiltersButtonBlog from '../components/HeaderNavigation/BlogComp/FiltersButtonBlog';
import BlogCards from '../components/HeaderNavigation/BlogComp/BlogCards';

const BlogPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Blogs");

  // Filter change handler
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    console.log("Selected filter:", filter);
    // Yahan aap filtering logic add kar sakte hain
    // Jaise BlogCards ko filtered data pass karna
  };

  // Sample blogs data - aap isko backend se fetch kar sakte hain
  const allBlogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      date: "1 Oct, 2025",
      readTime: "7 minutes read",
      title: "50 Amazing Places To Visit In London 2025",
      description: "Explore 50 incredible places to visit in London in 2025! From Buckingham Palace and Tower Bridge to free museums and hidden gems.",
      tags: ["Adventure", "Europe", "Places To Visit", "Travel"],
      link: "#",
      category: "Places to Visit"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      date: "1 Oct, 2025",
      readTime: "2 minutes read",
      title: "Chicham Bridge Spiti - Asia's Highest Suspension Bridge & Must-Visit Spot",
      description: "Chicham Bridge, located high in Spiti Valley, is more than just a bridge - it's an adventure! Find key facts, travel tips, and why it's a must-visit.",
      tags: ["Places To Visit", "Spiti", "Travel"],
      link: "#",
      category: "Places to Visit"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80",
      date: "1 Oct, 2025",
      readTime: "3 minutes read",
      title: "Buckingham Palace's First Christmas Pop-Up Shop",
      description: "This winter, Buckingham Palace is adding some festive sparkle to London with its very first Christmas pop-up shop offering unique royal gifts.",
      tags: ["news", "Travel News", "Travel", "Places To Visit"],
      link: "#",
      category: "News"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      date: "28 Sep, 2025",
      readTime: "5 minutes read",
      title: "Hidden Waterfalls of Meghalaya: Nature's Best Kept Secrets",
      description: "Discover the most spectacular hidden waterfalls in Meghalaya. From Nohkalikai to Seven Sisters Falls, experience nature's raw beauty in Northeast India.",
      tags: ["Waterfalls", "Adventure", "Places To Visit", "Monsoon"],
      link: "#",
      category: "Mountains"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      date: "25 Sep, 2025",
      readTime: "6 minutes read",
      title: "Ultimate Guide to Himalayan Hill Stations in Winter",
      description: "Experience the magic of snowfall in India's most beautiful hill stations. Perfect stays, activities, and travel tips for your winter mountain escape.",
      tags: ["Stays in Hills", "Snowfall", "Mountains", "Travel"],
      link: "#",
      category: "Mountains"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      date: "22 Sep, 2025",
      readTime: "4 minutes read",
      title: "Street Food Paradise: 10 Must-Try Local Cuisines Across India",
      description: "Embark on a culinary journey through India's diverse street food culture. From Mumbai's vada pav to Delhi's chaat, taste the real flavors of India.",
      tags: ["Places to Eat", "Culture", "Things to Do", "Travel"],
      link: "#",
      category: "Places to Shop"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      date: "20 Sep, 2025",
      readTime: "8 minutes read",
      title: "Backpacking Through Southeast Asia: A Complete Guide",
      description: "Everything you need to know about backpacking through Southeast Asia on a budget. Tips, tricks, and must-visit destinations for adventure seekers.",
      tags: ["Adventure", "Travel", "Stories"],
      link: "#",
      category: "Stories"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
      date: "18 Sep, 2025",
      readTime: "5 minutes read",
      title: "Top 10 Camping Sites in India for Nature Lovers",
      description: "Discover the best camping destinations across India where you can reconnect with nature and create unforgettable memories under the stars.",
      tags: ["Adventure", "Things to Do", "Nature"],
      link: "#",
      category: "Things to Do"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
      date: "15 Sep, 2025",
      readTime: "6 minutes read",
      title: "Instagram-Worthy Cafes in Mumbai You Must Visit",
      description: "Explore Mumbai's most aesthetic cafes perfect for your Instagram feed. Great coffee, beautiful ambiance, and photogenic spots await!",
      tags: ["Aesthetic Places", "Places to Eat", "Culture"],
      link: "#",
      category: "Aesthetic Places"
    }
  ];

  // Filter blogs based on selected filter
  const filteredBlogs = selectedFilter === "All Blogs" 
    ? allBlogs 
    : allBlogs.filter(blog => 
        blog.category === selectedFilter || 
        blog.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Hero Section */}
      <BlogHeroSection 
        backgroundImage="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=80"
        mainTitle="Travel Blogs"
        mainDescription="Discover hidden gems, offbeat destinations, and unforgettable travel experiences. From misty mountains to serene beaches, explore India's diverse landscapes through authentic stories and expert travel guides."
        featuredBlog={{
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
          title: "Exploring the Untouched Beauty of Himachal Pradesh",
          description: "Journey through pristine valleys, ancient temples, and charming hill stations. Experience the magic of Himachal's hidden trails, local culture, and breathtaking mountain vistas that will leave you spellbound.",
          link: "#"
        }}
        sideBlog={{
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
          link: "#"
        }}
        rotatingCategories={[
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
        ]}
      />

      {/* Filters Button Section */}
      <FiltersButtonBlog 
        onFilterChange={handleFilterChange}
        initialFilter="All Blogs"
      />

      {/* Blog Cards Section */}
      <BlogCards blogs={filteredBlogs} />
    </div>
  );
};

export default BlogPage;