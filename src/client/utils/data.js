/* Pour importer dynamiquement des images situées dans 
  le dossier public pour un projet crée avec :
    ---> Bare react project :
        process.env.PUBLIC_URL + "ban-1.jpg"

    ---> React project with Vite : 
        meta.env.BASE_URL + "assets/images/ban-1.jpg"
*/
export const banner = [
  {
    img: "banner-1.jpg",
    alt: "women's latest fashion sale",
    ban_sub: "Women's latest fashion",
    ban_title: "Trending item",
    price: 20,
    text_link: "Shop now",
  },
  {
    img: "banner-2.jpg",
    alt: "modern sunglasses",
    ban_title: "Trending accessories",
    ban_sub: "modern sunglasses",
    price: 15,
    text_link: "Shop now",
  },
  {
    img: "banner-3.jpg",
    alt: "new fashion summer sale",
    ban_title: "Sale Offer",
    ban_sub: "new fashion summer sale",
    price: 30,
    text_link: "Shop now",
  },
];

export const minimalUnderBanner = [
  {
    img: "dress.svg",
    name: "dress & frock",
    countInStock: 53,
  },
  {
    img: "coat.svg",
    name: "winter wear",
    countInStock: 58,
  },
  {
    img: "glasses.svg",
    name: "grasses & lens",
    countInStock: 10,
  },
  {
    img: "shorts.svg",
    name: "short & jeans",
    countInStock: 84,
  },
  {
    img: "tee.svg",
    name: "t-shirt",
    countInStock: 36,
  },
  {
    img: "jacket.svg",
    name: "jacket",
    countInStock: 16,
  },
  {
    img: "watch.svg",
    name: "watch",
    countInStock: 27,
  },
  {
    img: "hat.svg",
    name: "hat & caps",
    countInStock: 39,
  },
];

export const sideCategory = [
  {
    cat_img: "dress.svg",
    title: "Clothes",
    ind: "clothe",
    nested: [
      {
        product_name: "Shirt",
        product_number: 300,
      },
      {
        product_name: "Shorts & jeans",
        product_number: 60,
      },
      {
        product_name: "Jacket",
        product_number: 50,
      },
      {
        product_name: "dress & frock",
        product_number: 87,
      },
    ],
  },
  {
    cat_img: "shoes.svg",
    title: "Footwear",
    ind: "footwear",
    nested: [
      {
        product_name: "Sports",
        product_number: 45,
      },
      {
        product_name: "Formal",
        product_number: 75,
      },
      {
        product_name: "Causual",
        product_number: 35,
      },
      {
        product_name: "Safety Shoes",
        product_number: 26,
      },
    ],
  },
  {
    cat_img: "jewelry.svg",
    title: "Jewelry",
    ind: "jewelry",
    nested: [
      {
        product_name: "Earrings",
        product_number: 46,
      },
      {
        product_name: "Couple Rings",
        product_number: 73,
      },
      {
        product_name: "Necklace",
        product_number: 61,
      },
    ],
  },
  {
    cat_img: "perfume.svg",
    title: "Perfumes",
    ind: "perfume",
    nested: [
      {
        product_name: "Clothes Perfumes",
        product_number: 12,
      },
      {
        product_name: "Deodorant",
        product_number: 62,
      },
      {
        product_name: "Jacket",
        product_number: 50,
      },
      {
        product_name: "dress & frock",
        product_number: 87,
      },
    ],
  },
  {
    cat_img: "cosmetics.svg",
    title: "Cosmetics",
    ind: "cosmetic",
    nested: [
      {
        product_name: "Shampoo",
        product_number: 68,
      },
      {
        product_name: "Sunscreen",
        product_number: 46,
      },
      {
        product_name: "Body Wash",
        product_number: 79,
      },
      {
        product_name: "Make up",
        product_number: 23,
      },
    ],
  },
  {
    cat_img: "glasses.svg",
    title: "glasses",
    ind: "glasse",
    nested: [
      {
        product_name: "Sunglasses",
        product_number: 50,
      },
      {
        product_name: "lenses",
        product_number: 48,
      },
    ],
  },
  {
    cat_img: "bag.svg",
    title: "Bags",
    ind: "bag",
    nested: [
      {
        product_name: "Shopping Bag",
        product_number: 62,
      },
      {
        product_name: "Gym BackPack",
        product_number: 35,
      },
      {
        product_name: "Purse",
        product_number: 80,
      },
      {
        product_name: "Walet",
        product_number: 75,
      },
    ],
  },
];

export const sideProducts = [
  {
    img: "1.jpg",
    title: "Baby fabric shoes ",
    rating: 5,
    delPrice: 5,
    currentPrice: 4,
  },
  {
    img: "2.jpg",
    title: "men's boodies t-shirt",
    rating: 4.5,
    delPrice: 17,
    currentPrice: 7,
  },
  {
    img: "3.jpg",
    title: "girls t-shirt",
    rating: 4.5,
    delPrice: 5,
    currentPrice: 3,
  },
  {
    img: "4.jpg",
    title: "woolen hat for men",
    rating: 5,
    delPrice: 15,
    currentPrice: 12,
  },
];

export const productBox = [
  // New arrivals
  {
    title: "New Arrival",
    list_one: [
      {
        img: "clothes-1.jpg",
        subtitle: "Relaxed Short full sleeve t-shirt",
        link: "Clothes",
        delPrice: 12,
        currentPrice: 12,
      },
      {
        img: "clothes-2.jpg",
        subtitle: "Girld pnk Embro design Top",
        link: "Clothes",
        delPrice: 61,
        currentPrice: 9,
      },
      {
        img: "clothes-3.jpg",
        subtitle: "Black Floral Wrap Midi Skirt",
        link: "Clothes",
        delPrice: 76,
        currentPrice: 25,
      },
      {
        img: "shirt-1.jpg",
        subtitle: "Pure Garment Dyed Cotton Shirt",
        link: "Mens Fashion",
        delPrice: 68,
        currentPrice: 13,
      },
    ],
    list_second: [
      {
        img: "jacket-5.jpg",
        subtitle: "Men Yarn Fleece Full-zip Jackets",
        link: "Winter wear",
        delPrice: 61,
        currentPrice: 12,
      },
      {
        img: "jacket-1.jpg",
        subtitle: "Mens Winter Leathers Jackets",
        link: "Winter wear",
        delPrice: 32,
        currentPrice: 20,
      },
      {
        img: "jacket-3.jpg",
        subtitle: "Mens Winter Leathers Jackets",
        link: "Jackets",
        delPrice: 50,
        currentPrice: 25,
      },
      {
        img: "shorts-1.jpg",
        subtitle: "Better Basics French Terry SmeatShorts",
        link: "Shorts",
        delPrice: 20,
        currentPrice: 10,
      },
    ],
  },
  // Trending
  {
    title: "Trending",
    list_one: [
      {
        img: "sports-1.jpg",
        subtitle: "Running & Trekking Shoes-White",
        link: "Sports",
        delPrice: 49,
        currentPrice: 15,
      },
      {
        img: "sports-2.jpg",
        subtitle: "Trekking & Running Shoes - Black",
        link: "Sports",
        delPrice: 78,
        currentPrice: 36,
      },
      {
        img: "party-wear-1.jpg",
        subtitle: "Womens Party Wear Shoes",
        link: "Party Wear",
        delPrice: 42,
        currentPrice: 94,
      },
      {
        img: "sports-3.jpg",
        subtitle: "Sports Claw women's Shoes",
        link: "Sports",
        delPrice: 54,
        currentPrice: 65,
      },
    ],
    list_second: [
      {
        img: "sports-6.jpg",
        subtitle: "Air Trekking Shoes",
        link: "Sports",
        delPrice: 52,
        currentPrice: 55,
      },
      {
        img: "shoe-3.jpg",
        subtitle: "Boot With Suede Detail",
        link: "Boots",
        delPrice: 20,
        currentPrice: 30,
      },
      {
        img: "shoe-1.jpg",
        subtitle: "Mens Leather Formal Wear Shoes",
        link: "Formal",
        delPrice: 56,
        currentPrice: 78,
      },
      {
        img: "shoe-2.jpg",
        subtitle: "Casual Men's Brown shoes",
        link: "Casual",
        delPrice: 50,
        currentPrice: 55,
      },
    ],
  },
  // Trending
  {
    title: "Top Rated",
    list_one: [
      {
        img: "watch-3.jpg",
        subtitle: " Pocket Watch Leather Pouch",
        link: "Watches",
        delPrice: 50,
        currentPrice: 34,
      },
      {
        img: "jewellery-3.jpg",
        subtitle: "Silver Deer Heart Necklace",
        link: "Jewellry",
        delPrice: 84,
        currentPrice: 34,
      },
      {
        img: "perfume.jpg",
        subtitle: "Titan 100 MI Womens Perfume",
        link: "Perfume",
        delPrice: 42,
        currentPrice: 10,
      },
      {
        img: "belt.jpg",
        subtitle: "Men's Leather Reversible Belt",
        link: "Belt",
        delPrice: 54,
        currentPrice: 30,
      },
    ],
    list_second: [
      {
        img: "jewellery-2.jpg",
        subtitle: "Platinum Zircon Classic Ring",
        link: "Jewellry",
        delPrice: 62,
        currentPrice: 65,
      },
      {
        img: "watch-1.jpg",
        subtitle: "Smart Watch Vital Plus",
        link: "watches",
        delPrice: 56,
        currentPrice: 70,
      },
      {
        img: "shampoo.jpg",
        subtitle: "Shampoo Conditionner Packs",
        link: "Cosmetics",
        delPrice: 22,
        currentPrice: 30,
      },
      {
        img: "jewellery-1.jpg",
        subtitle: "Rose Gold Peacock Earrings",
        link: "Jewellry",
        delPrice: 20,
        currentPrice: 30,
      },
    ],
  },
];

export const productGrid = [
  {
    first_img: "jacket-3.jpg",
    second_img: "jacket-4.jpg",
    badge: "15%",
    badge_design: "",
    category: "jacket",
    title: "Mens winter Leathers Jackets",
    rating: 3,
    currentPrice: 45,
    delPrice: 75,
  },
  {
    first_img: "shirt-1.jpg",
    second_img: "shirt-2.jpg",
    badge: "sale",
    badge_design: "angle black",
    category: "Shirt",
    title: "Pure Garment Dyed Cotton Shirt",
    rating: 3,
    currentPrice: 45,
    delPrice: 56,
  },
  {
    first_img: "jacket-5.jpg",
    second_img: "jacket-6.jpg",

    category: "jacket",
    title: "Men Yarn Fleece full-Zip Jacket",
    rating: 3,
    currentPrice: 58,
    delPrice: 45,
  },
  {
    first_img: "clothes-3.jpg",
    second_img: "clothes-4.jpg",
    badge: "New",
    badge_design: "angle pink",
    category: "Skirt",
    title: "Black Floral Wrap Midi Skirt",
    rating: 3,
    currentPrice: 25,
    delPrice: 35,
  },
  {
    first_img: "shoe-2.jpg",
    second_img: "shoe-2_1.jpg",

    category: "Causual",
    title: "Casual Men's brown shoes",
    rating: 3,
    currentPrice: 99,
    delPrice: 105,
  },
  {
    first_img: "watch-3.jpg",
    second_img: "watch-4.jpg",
    badge: "Sale",
    badge_design: "angle black",
    category: "Watches",
    title: "Pocket Watch Leather Pouch",
    rating: 3.5,
    currentPrice: 120,
    delPrice: 150,
  },
  {
    first_img: "watch-1.jpg",
    second_img: "watch-2.jpg",
    category: "Watches",
    title: "Smart watche vital plus",
    rating: 3.5,
    currentPrice: 100,
    delPrice: 120,
  },
  {
    first_img: "party-wear-1.jpg",
    second_img: "party-wear-2.jpg",
    badge: "Sale",
    badge_design: "angle pink",
    category: "party wear",
    title: "Womens party wear shoes",
    rating: 4.5,
    currentPrice: 25,
    delPrice: 30,
  },
  {
    first_img: "jacket-1.jpg",
    second_img: "jacket-2.jpg",

    category: "jacket",
    title: "Mens winter leathers",
    rating: 3,
    currentPrice: 32,
    delPrice: 45,
  },
  {
    first_img: "sports-2.jpg",
    second_img: "sports-4.jpg",
    badge: "15%",
    badge_design: "angle pink",
    category: "sports",
    title: "Trekking & running shoes - black",
    rating: 4.5,
    currentPrice: 58,
    delPrice: 64,
  },
  {
    first_img: "shoe-1.jpg",
    second_img: "shoe-1_1.jpg",

    category: "sportsformal",
    title: "Men's Leather formal wear shoes",
    rating: 4.5,
    currentPrice: 52,
    delPrice: 67,
  },
  {
    first_img: "shorts-1.jpg",
    second_img: "shorts-2.jpg",
    badge: "sale",
    badge_design: "angle black",
    category: "shorts",
    title: "Better basics french terry",
    rating: 5,
    currentPrice: 78,
    delPrice: 85,
  },
];

export const blog = [
  {
    img: "blog-1.jpg",
    category: "Fashion",
    title: "Clothes Retails KPIs 2021 Guide for Clothes Executives",
    owner: "Ing Hippolyte Avoce",
    date: "Avril 24, 2024",
  },
  {
    img: "blog-2.jpg",
    category: "Clothes",
    title: "Curbside fashion trends: How to win the Pickup Battle",
    owner: "Mlle Georgina",
    date: "Feb 25, 2023",
  },
  {
    img: "blog-3.jpg",
    category: "Shoes",
    title: "EBT vendors: Claim Your share of SNAP Online Revenue",
    owner: "Mr Selsa",
    date: "Jan 25, 2023",
  },
  {
    img: "blog-4.jpg",
    category: "Electronics",
    title: "Curbside fashion Trends: How to win the Pickup Battle",
    owner: "Mr Pelmer",
    date: "Dec 25, 2021",
  },
];

export const footerCategoryLink = [
  {
    title: "Fashion",
    links: [
      "T-Shirt",
      "Shirts",
      "Shorts & Jeans",
      "jacket",
      "dress & frock",
      "innerwear",
      "hosiery",
    ],
  },
  {
    title: "footwear",
    links: [
      "sports",
      "formal",
      "boots",
      "casual",
      "cowboy shoes",
      "safety shoes",
      "party wear shoes",
      "Brabded",
      "Firstcopy",
      "long shoes",
    ],
  },
  {
    title: "jewellry",
    links: [
      "Necklace",
      "Earrings",
      "couple rings",
      "pendants",
      "crystal",
      "bangles",
      "bracelets",
      "nosepin",
      "chain",
      "Earrings",
      "couple rings",
    ],
  },
  {
    title: "Cosmetics",
    links: [
      "Shampoo",
      "Bodywash",
      "facewash",
      "makeup kit",
      "liner",
      "lipstick",
      "perfume",
      "body soap",
      "scrub",
      "hair gel",
      "hair colors",
      "hair dye",
      "sunscreen",
      "skin loson",
      "Liner",
      "Lipstick",
    ],
  },
];

export const footerNavLink = [
  {
    nav_title: "Popular Categories",
    link: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"],
  },
  {
    nav_title: "Products",
    link: ["Price drop", "New Products", "Best sales", "Contact us", "Sitemap"],
  },
  {
    nav_title: "Our Company",
    link: [
      "Delivery",
      "Legal Notice",
      "Terms and Conditions",
      "About us",
      "Secure payment",
    ],
  },
  {
    nav_title: "Services",
    link: [
      "Prices drop",
      "New products",
      "Best sales",
      "Contact us",
      "Sitemap",
    ],
  },
];
