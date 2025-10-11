// // src/data/BestSellingTours.js

// export const bestSellingToursData = {
//   title: "Best-Selling Tours",
//   subtitle: "Discover our most popular adventures that travelers love",
//   backgroundColor: "from-gray-50 to-orange-50",
//   badgeIcon: null, // No special badge for best selling
//   badgeText: "",
//   badgeColor: "",
//   buttonText: "Book Now",
//   buttonColor: "from-orange-500 to-red-600",
//   tours: [
//     {
//       id: 1,
//       title: "5 Day Leh Ladakh Tour Package with Turtuk and Tso Moriri",
//       location: "Leh, Ladakh",
//       duration: "5 Days",
//       groupSize: "2-15 People",
//       price: "27,500",
//       rating: "4.8",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       features: ["Meals", "Transport", "Guide"]
//     },
//     {
//       id: 2,
//       title: "Best Ladakh Bike Trip from Srinagar to Manali Umling La | Tso Moriri",
//       location: "Srinagar to Manali",
//       duration: "12 Days",
//       groupSize: "4-8 People", 
//       price: "42,999",
//       rating: "4.9",
//       image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       features: ["Bike", "Meals", "Support Vehicle"]
//     },
//     {
//       id: 3,
//       title: "11 Days Ladakh Tour Package with Umling La Manali Leh Srinagar",
//       location: "Manali to Srinagar",
//       duration: "11 Days",
//       groupSize: "2-12 People",
//       price: "37,499",
//       rating: "4.7",
//       image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       features: ["Hotels", "Meals", "Sightseeing"]
//     },
//     {
//       id: 4,
//       title: "8 Days Premium Ladakh Adventure with Nubra Valley",
//       location: "Nubra Valley",
//       duration: "8 Days",
//       groupSize: "2-10 People",
//       price: "32,999",
//       rating: "4.8",
//       image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       features: ["Luxury Stay", "Desert Safari", "Photography"]
//     },
//     {
//       id: 5,
//       title: "6 Days Spiti Valley Complete Circuit from Manali",
//       location: "Spiti Valley",
//       duration: "6 Days",
//       groupSize: "2-12 People",
//       price: "23,999",
//       rating: "4.6",
//       image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       features: ["Mountain Views", "Local Culture", "Adventure"]
//     },
//     {
//       id: 6,
//       title: "9 Days Kashmir Great Lakes Trek with Camping",
//       location: "Kashmir",
//       duration: "9 Days",
//       groupSize: "6-15 People",
//       price: "18,999",
//       rating: "4.9",
//       image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       features: ["Trekking", "Camping", "Alpine Lakes"]
//     }
//   ]
// };

// export default bestSellingToursData;















































// src/data/BestSellingTours.js

export const bestSellingToursData = [
  {
    id: 1,
    title: "7 Day Leh Ladakh Tour Package with Turtuk and Top Monasteries",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 27500,
    originalPrice: 35000,
    rating: 4.8,
    reviewCount: 1250,
    location: "Leh, Ladakh",
    duration: "7 Days 6 Nights",
    groupSize: "2-15 People",
    season: "May-September",
    tourType: "Adventure Tour",
    highlights: ["Pangong Lake", "Nubra Valley", "Turtuk Village", "Top Monasteries", "Khardung La Pass"],
    inclusions: ["Accommodation", "Meals", "Transport", "Guide"],
    difficulty: "Moderate",
    bestTime: "June to September",
    startingPoint: "Leh Airport",
    endingPoint: "Leh Airport"
  },
  {
    id: 2,
    title: "Best Ladakh Bike Trip from Srinagar to Manali | Umling La | Top Monasteries",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 42990,
    originalPrice: 55000,
    rating: 4.9,
    reviewCount: 890,
    location: "Srinagar to Manali",
    duration: "11 Days 10 Nights",
    groupSize: "6-12 People",
    season: "June-September",
    tourType: "Bike Adventure",
    highlights: ["Umling La Pass", "Highest Motorable Road", "Bike Adventure", "Scenic Routes", "Mountain Passes"],
    inclusions: ["Royal Enfield", "Accommodation", "Meals", "Support Vehicle", "Guide"],
    difficulty: "High",
    bestTime: "June to September",
    startingPoint: "Srinagar",
    endingPoint: "Manali"
  },
  {
    id: 3,
    title: "11 Days Ladakh Tour Package with Umling La | Hanle | Leh Srinagar",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 37690,
    originalPrice: 48000,
    rating: 4.7,
    reviewCount: 1100,
    location: "Leh to Srinagar",
    duration: "11 Days 10 Nights",
    groupSize: "4-16 People",
    season: "May-October",
    tourType: "Complete Circuit",
    highlights: ["Hanle Observatory", "Umling La Pass", "Astronomy Experience", "Cultural Sites", "High Altitude Lakes"],
    inclusions: ["Accommodation", "All Meals", "Transport", "Permits", "Guide"],
    difficulty: "Moderate to High",
    bestTime: "May to September",
    startingPoint: "Leh",
    endingPoint: "Srinagar"
  },
  {
    id: 4,
    title: "11 Days Manali Leh Manali Tour Package with Umling La",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 37990,
    originalPrice: 49000,
    rating: 4.6,
    reviewCount: 950,
    location: "Manali to Leh Circuit",
    duration: "11 Days 10 Nights",
    groupSize: "2-14 People",
    season: "June-September",
    tourType: "Circuit Tour",
    highlights: ["Rohtang Pass", "Khardung La", "High Mountain Passes", "Complete Circuit", "Adventure Drive"],
    inclusions: ["Accommodation", "Breakfast & Dinner", "Transport", "Driver", "Permits"],
    difficulty: "Moderate",
    bestTime: "June to September",
    startingPoint: "Manali",
    endingPoint: "Manali"
  },
  {
    id: 5,
    title: "9 Days Kashmir to Ladakh Tour Package | Srinagar Leh Srinagar",
    image: "https://images.unsplash.com/photo-1596640810230-7b80a5ad38be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 32990,
    originalPrice: 42000,
    rating: 4.8,
    reviewCount: 1350,
    location: "Srinagar to Leh",
    duration: "9 Days 8 Nights",
    groupSize: "4-18 People",
    season: "May-September",
    tourType: "Kashmir Ladakh Combo",
    highlights: ["Kashmir Beauty", "Ladakh Adventure", "Best of Both Worlds", "Scenic Journey", "Cultural Diversity"],
    inclusions: ["Hotels", "Houseboat Stay", "All Meals", "Transport", "Sightseeing"],
    difficulty: "Easy to Moderate",
    bestTime: "May to September",
    startingPoint: "Srinagar",
    endingPoint: "Srinagar"
  },
  {
    id: 6,
    title: "7 Days Leh Ladakh Tour Package | Budget Friendly Adventure",
    image: "https://images.unsplash.com/photo-1601985456244-4b3f3c317c99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 22990,
    originalPrice: 30000,
    rating: 4.5,
    reviewCount: 1800,
    location: "Leh, Ladakh",
    duration: "7 Days 6 Nights",
    groupSize: "2-20 People",
    season: "May-October",
    tourType: "Budget Adventure",
    highlights: ["Budget Friendly", "Core Ladakh Experience", "Pangong Lake", "Local Culture", "Monasteries"],
    inclusions: ["Basic Accommodation", "Breakfast", "Transport", "Guide"],
    difficulty: "Easy",
    bestTime: "June to September",
    startingPoint: "Leh",
    endingPoint: "Leh"
  }
];

export default bestSellingToursData;