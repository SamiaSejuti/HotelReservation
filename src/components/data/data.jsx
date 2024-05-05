export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Rooms",
    },
    {
      id: 5,
      path: "/page",
      text: "Page",
      subItems: [
        {
          id: 51,
          path: "/booking",
          text: "Booking",
        },
        {
          id: 52,
          path: "/team",
          text: "Our Team",
        },
        {
          id: 53,
          path: "/testimonial",
          text: "Testimonial",
        },
      ],
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
  ];
  export const socialIcons = [
    {
      icon: <i className="fab fa-facebook-f"></i>,
    },
    {
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      icon: <i className="fab fa-instagram"></i>,
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    {
      icon: <i className="fab fa-youtube"></i>,
    },
  ];
  
  export const carouselData = [
    {
      img: "carousel-1.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: "carousel-2.jpg",
      title: "Step Into A World Of Peace And Comfort",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: "carousel-3.jpg",
      title: "Reserve Your Stay In A Peaceful Gateaway",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: "carousel-4.jpg",
      title: "We Have Got Your Dream Destination Covered",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
  ];
  export const about = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
      text: "Rooms",
      count: "7861",
    },
    {
      icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
      text: "Staffs",
      count: "1234",
    },
    {
      icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
      text: "Clients",
      count: "4321",
    },
  ];
  
  export const services = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
      name: "Rooms & Appartment",
      discription: "Elegant stays blending comfort and style.",
    },
    {
      icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
      name: "Food & Restaurant",
      discription: "Savor fine dining and exquisite flavors.",
    },
    {
      icon: <i class="fa fa-spa fa-2x text-primary"></i>,
      name: "Spa & Fitness",
      discription: "Relax and rejuvenate with our wellness services.",
    },
  
    {
      icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
      name: "Sports & Gaming",
      discription: "Engage in thrilling sports and games.",
    },
    {
      icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
      name: "Event & Party",
      discription: "Host memorable events and vibrant parties",
    },
  
    {
      icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
      name: "Gym & Yoga",
      discription: "Achieve fitness goals in modern facilities.",
    },
  ];
  export const team = [
    {
      image: "team-1.jpg",
      name: "Ethan Taylor",
      designation: "CEO",
    },
    {
      image: "team-2.jpg",
      name: "Christina Johnson",
      designation: "General Manager",
    },
    {
      image: "team-3.jpg",
      name: "Toby Rivera",
      designation: "Master Chef",
    },
    {
      image: "team-4.jpg",
      name: "Chris Helens",
      designation: "Operations Manager",
    },
  ];
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Restaurant",
        },
        {
          name: "Spa & Fitness",
        },
        {
          name: "Sports & Gaming",
        },
        {
          name: "Event & Party",
        },
        {
          name: "Gym & Yoga",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "123 Street, New York, USA",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+012 345 67890",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "info@aquaoasis.com",
    },
  ];
  
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "book@aquaoasis.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "tech@aquaoasis.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "info@aquaoasis.com",
    },
  ];
  export const testimonial = [
    {
      description:
      "My stay at the resort was nothing short of spectacular. The attention to detail and customer service were top-notch. Highly recommended for anyone seeking a luxury getaway!",
      name: "Emma Clarke",
      profession: "Interior Designer",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "testimonial-1.jpg",
    },
    {
      description:
        "I hosted a corporate event here and was incredibly impressed with the staff's professionalism and the venue's breathtaking aesthetics. A perfect place for any event!",
      name: "William Ryerburgs",
      profession: "Software Engineer",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "testimonial-2.jpg",
    },
    {
      description:
        "From the stunning, spacious and beautifully appointed rooms to the exquisite dining options, everything was impeccable. It’s definitely one of the top destinations on my travel list",
      name: "Daniel Hunch",
      profession: "Entrepreneur",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "testimonial-3.jpg",
    },
  ];
  
  export const roomItems = [
    {
      img: "room-1.jpg",
      price: "$110/night",
      name: "Junior Suit",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        
      ],
      description:
        "Discover comfort and affordability in our Junior Suite. This suite provides a cozy, compact space with essential amenities, including a comfortable bed, an en-suite bathroom, and complimentary WiFi. Perfect for budget-conscious travelers, the room offers a simple yet stylish retreat with all the basics for a relaxing stay.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
      facilities: [
        { icon: <i className="fa fa-bed text-primary me-2"></i>, quantity: 1, name: "bed" },
        { icon: <i className="fa fa-bath text-primary me-2"></i>, quantity: 1, name: "bath" },
        { icon: <i className="fa fa-wifi text-primary me-2"></i>, quantity: "Free", name: "Wifi" },
      ]
    },
    
  
    {
      img: "room-2.jpg",
      price: "$160/night",
      name: "Executive Suite",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Elevate your stay in our Executive Suite, designed for both business and leisure travelers. This suite features a spacious layout with a luxurious king-sized bed, a modern bathroom, a well-appointed sitting area, and high-speed WiFi. Ideal for guests who appreciate enhanced comfort, the suite offers a refined setting to work or unwind.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
      facilities: [
        { icon: <i className="fa fa-bed text-primary me-2"></i>, quantity: 1, name: "bed" },
        { icon: <i className="fa fa-bath text-primary me-2"></i>, quantity: 1, name: "bath" },
        { icon: <i className="fa fa-wifi text-primary me-2"></i>, quantity: "Free", name: "Wifi" },
      ]
    },
    {
      img: "room-3.jpg",
      price: "$210/night",
      name: "Super Deluxe",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Indulge in the luxury of our Super Deluxe room. This premium suite boasts an expansive layout with two super king-sized beds, bathrooms, and top-tier amenities. Elegantly decorated, it offers a sophisticated ambiance with high-end decor and panoramic views, making it the ultimate choice for guests seeking the best in town.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
      facilities: [
        { icon: <i className="fa fa-bed text-primary me-2"></i>, quantity: 2, name: "bed" },
        { icon: <i className="fa fa-bath text-primary me-2"></i>, quantity: 2, name: "bath" },
        { icon: <i className="fa fa-wifi text-primary me-2"></i>, quantity: "Free", name: "Wifi" },
      ]
    }
  ];
  
  