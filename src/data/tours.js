export const tours = [
  {
    id: 1,
    title: "Economy Umrah Package",
    duration: "7 Days / 6 Nights",
    price: 899,
    shortDescription: "Affordable Umrah package with quality accommodations",
    description: "Complete Umrah experience with comfortable accommodations and transport...",
    image: "/images/tour1.jpg",
    included: ["3-star hotel in Makkah", "2-star hotel in Madinah", "Visa assistance", "Airport transfers"],
    excluded: ["Flight tickets", "Meals", "Personal expenses"],
    itinerary: [
      { day: 1, description: "Arrival in Jeddah, transfer to Makkah" },
      { day: 2, description: "Perform Umrah" },
      // ... more days
    ]
  },
  {
    id: 2,
    title: "Premium Umrah Package",
    duration: "10 Days / 9 Nights",
    price: 1499,
    shortDescription: "Luxury accommodations close to Haram",
    description: "Experience Umrah in comfort with 5-star hotels and VIP services...",
    image: "/images/tour2.jpg",
    included: ["5-star hotel in Makkah", "4-star hotel in Madinah", "Visa assistance", "Private transport"],
    excluded: ["Flight tickets", "Personal expenses"],
    itinerary: []
  },
  {
    id: 3,
    title: "Deluxe Hajj Package",
    duration: "21 Days / 20 Nights",
    price: 3999,
    shortDescription: "Complete Hajj guidance with expert scholars",
    description: "Full-service Hajj package with experienced guides...",
    image: "/images/tour3.jpg",
    included: ["Premium tent in Mina", "5-star hotels", "Expert guidance", "All meals"],
    excluded: ["Flight tickets", "Personal expenses"],
    itinerary: []
  },
  {
    id: 4,
    title: "Family Umrah Package",
    duration: "8 Days / 7 Nights",
    price: 1199,
    shortDescription: "Family-friendly package with group discounts",
    description: "Special package designed for families with children...",
    image: "/images/tour4.jpg",
    included: ["Family rooms", "Child-friendly services", "Visa assistance", "Group transport"],
    excluded: ["Flight tickets", "Meals"],
    itinerary: []
  }
]