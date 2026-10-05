export type DietaryType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: DietaryType;
  category: string;
  isSpecialToday?: boolean;
  isAvailable: boolean;
}

export interface BusinessOutlet {
  id: string;
  name: string;
  tagline: string;
  category: string;
  cuisineTag: string;
  distanceMeters: number;
  distanceText: string;
  walkTime: string;
  isOpen: boolean;
  hoursToday: string;
  priceRange: string;
  address: string;
  verified: boolean;
  favoritesCount: number;
  isFavorite?: boolean;
  menu: MenuItem[];
}

export interface OwnerDashboardData {
  outletName: string;
  outletId: string;
  proprietorName: string;
  isOpen: boolean;
  metrics: {
    dinersReachedToday: number;
    menuViewsToday: number;
    activeFavorites: number;
    avgPublishSpeedSeconds: number;
  };
}

export interface ModerationReport {
  id: string;
  outletId: string;
  outletName: string;
  reportedItem: string;
  reason: string;
  reportedAt: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

export interface AdminPlatformStats {
  registeredOutlets: number;
  verifiedOutlets: number;
  pendingVerificationCount: number;
  openReportsCount: number;
  uptimePercentage: string;
}

export const INITIAL_OUTLETS: BusinessOutlet[] = [
  {
    id: 'out-01',
    name: 'Annapurna Executive Thali',
    tagline: 'Home-style Rotational Thalis & Fresh Phulkas',
    category: 'Pure Veg Thali',
    cuisineTag: 'North & West Indian',
    distanceMeters: 280,
    distanceText: '280m',
    walkTime: '4 min walk',
    isOpen: true,
    hoursToday: '11:30 AM – 3:30 PM (Lunch Rush)',
    priceRange: '₹85 – ₹140',
    address: 'Galaxy Tech Plaza, Ground Floor, Opp. Wing B',
    verified: true,
    favoritesCount: 142,
    isFavorite: false,
    menu: [
      {
        id: 'm-101',
        name: 'Special Paneer Lababdar Thali',
        description: 'Fresh Paneer Lababdar, Dal Tadka, 3 Butter Phulkas, Jeera Rice, Kachumber Salad, Gulab Jamun',
        price: 140,
        dietary: 'veg',
        category: 'Thali',
        isSpecialToday: true,
        isAvailable: true,
      },
      {
        id: 'm-102',
        name: 'Executive Dal Makhani & Jeera Rice',
        description: 'Slow-simmered black lentils with tempered cumin basmati rice and roasted papad',
        price: 110,
        dietary: 'veg',
        category: 'Thali',
        isAvailable: true,
      },
      {
        id: 'm-103',
        name: 'Methi Thepla & Curd Lunch Box',
        description: '4 spiced fenugreek flatbreads with fresh curd and house-made mango pickle',
        price: 85,
        dietary: 'veg',
        category: 'Quick Lunch',
        isAvailable: true,
      },
      {
        id: 'm-104',
        name: 'Chilled Spiced Chaas (Buttermilk)',
        description: 'Roasted cumin and mint spiced churned buttermilk',
        price: 25,
        dietary: 'veg',
        category: 'Beverages',
        isAvailable: true,
      },
      {
        id: 'm-105',
        name: 'Warm Gulab Jamun (2 pcs)',
        description: 'Khoya dumplings steeped in aromatic saffron-cardamom syrup',
        price: 40,
        dietary: 'veg',
        category: 'Dessert',
        isAvailable: true,
      },
    ],
  },
  {
    id: 'out-02',
    name: 'Biryani Junction & Coastal Kitchen',
    tagline: 'Authentic Dum Biryanis & Coastal Specials',
    category: 'Non-Veg',
    cuisineTag: 'Hyderabadi & Mughlai',
    distanceMeters: 450,
    distanceText: '450m',
    walkTime: '6 min walk',
    isOpen: true,
    hoursToday: '12:00 PM – 4:00 PM',
    priceRange: '₹130 – ₹220',
    address: 'Sector 4 Walkway, Commercial Bay Shop 8',
    verified: true,
    favoritesCount: 98,
    isFavorite: false,
    menu: [
      {
        id: 'm-201',
        name: 'Hyderabadi Chicken Dum Biryani Box',
        description: 'Aromatic basmati rice with succulent bone-in chicken, Mirchi Ka Salan, and cooling raita',
        price: 210,
        dietary: 'non-veg',
        category: 'Biryani',
        isSpecialToday: true,
        isAvailable: true,
      },
      {
        id: 'm-202',
        name: 'Paneer Dum Biryani Lunch Pack',
        description: 'Slow cooked fragrant long-grain rice layered with cottage cheese and mint masala',
        price: 170,
        dietary: 'veg',
        category: 'Biryani',
        isAvailable: true,
      },
      {
        id: 'm-203',
        name: 'Egg Curry & Butter Roti Combo',
        description: '2 farm eggs simmered in roasted onion gravy served with 3 tawa rotis',
        price: 130,
        dietary: 'egg',
        category: 'Quick Lunch',
        isAvailable: true,
      },
      {
        id: 'm-204',
        name: 'Royal Kesari Phirni',
        description: 'Creamy ground rice pudding scented with saffron strands and sliced pistachios',
        price: 50,
        dietary: 'veg',
        category: 'Dessert',
        isAvailable: true,
      },
    ],
  },
  {
    id: 'out-03',
    name: 'Shree Ganesh Tiffin & South Express',
    tagline: 'Crisp Dosas, Filter Coffee & Rapid Office Combos',
    category: 'South Indian',
    cuisineTag: 'Udupi & Chettinad',
    distanceMeters: 620,
    distanceText: '620m',
    walkTime: '8 min walk',
    isOpen: true,
    hoursToday: '7:30 AM – 9:30 PM (All Day)',
    priceRange: '₹30 – ₹110',
    address: 'Cyber Boulevard, Tower 2 Kiosk Corridor',
    verified: true,
    favoritesCount: 215,
    isFavorite: true,
    menu: [
      {
        id: 'm-301',
        name: 'Crispy Ghee Podi Masala Dosa',
        description: 'Golden thin crepe smeared with spicy roasted lentil podi and potato filling',
        price: 85,
        dietary: 'veg',
        category: 'South Indian',
        isSpecialToday: true,
        isAvailable: true,
      },
      {
        id: 'm-302',
        name: 'South Executive Lunch Combo',
        description: 'Hot Sambar Rice, Curd Rice, Cabbage Poriyal, Appalam, and spicy lemon pickle',
        price: 110,
        dietary: 'veg',
        category: 'Thali',
        isAvailable: true,
      },
      {
        id: 'm-303',
        name: 'Thatte Idli with White Butter',
        description: 'Two fluffy Karnataka-style steamed rice cakes with drumstick sambar & coconut chutney',
        price: 65,
        dietary: 'veg',
        category: 'Quick Lunch',
        isAvailable: true,
      },
      {
        id: 'm-304',
        name: 'Madras Degree Filter Coffee',
        description: 'Fresh chicory infusion whipped with frothy boiled milk in traditional brass dabarah',
        price: 30,
        dietary: 'veg',
        category: 'Beverages',
        isAvailable: true,
      },
    ],
  },
  {
    id: 'out-04',
    name: 'Deccan Mess & Working Canteen',
    tagline: 'Traditional Everyday Meals & Homestyle Sabzis',
    category: 'Pure Veg Thali',
    cuisineTag: 'Maharashtrian & Deccan',
    distanceMeters: 850,
    distanceText: '850m',
    walkTime: '11 min walk',
    isOpen: true,
    hoursToday: '11:45 AM – 3:15 PM',
    priceRange: '₹25 – ₹120',
    address: 'Lane 3, Behind West Gate Metro Station',
    verified: false,
    favoritesCount: 41,
    isFavorite: false,
    menu: [
      {
        id: 'm-401',
        name: 'Unlimited Daily Working Thali',
        description: '2 seasonal homestyle sabzis, yellow dal tadka, hot rotis, steamed rice, and solkadhi',
        price: 100,
        dietary: 'veg',
        category: 'Thali',
        isSpecialToday: true,
        isAvailable: true,
      },
      {
        id: 'm-402',
        name: 'Kolhapuri Egg Curry Plate',
        description: 'Spicy brown roast gravy with 2 boiled eggs and 2 bajra bhakris',
        price: 120,
        dietary: 'egg',
        category: 'Quick Lunch',
        isAvailable: true,
      },
      {
        id: 'm-403',
        name: 'Spiced Kokum Solkadhi',
        description: 'Soothing digestive cooler made with wild kokum fruit, coconut milk, and garlic',
        price: 25,
        dietary: 'veg',
        category: 'Beverages',
        isAvailable: true,
      },
    ],
  },
];

export const INITIAL_OWNER_DATA: OwnerDashboardData = {
  outletName: 'Annapurna Executive Thali',
  outletId: 'OUT-01',
  proprietorName: 'Rajesh Sharma',
  isOpen: true,
  metrics: {
    dinersReachedToday: 184,
    menuViewsToday: 42,
    activeFavorites: 142,
    avgPublishSpeedSeconds: 15,
  },
};

export const INITIAL_ADMIN_STATS: AdminPlatformStats = {
  registeredOutlets: 48,
  verifiedOutlets: 42,
  pendingVerificationCount: 6,
  openReportsCount: 2,
  uptimePercentage: '99.8%',
};

export const INITIAL_MODERATION_REPORTS: ModerationReport[] = [
  {
    id: 'rep-101',
    outletId: 'out-04',
    outletName: 'Deccan Mess & Working Canteen',
    reportedItem: 'Unlimited Working Thali',
    reason: 'Listed price ₹100; chalkboard at counter said ₹110 during lunch peak.',
    reportedAt: '12:14 PM Today',
    status: 'pending',
  },
  {
    id: 'rep-102',
    outletId: 'out-02',
    outletName: 'Biryani Junction & Coastal Kitchen',
    reportedItem: 'Chicken Dum Biryani',
    reason: 'Item was marked available but sold out when diner arrived.',
    reportedAt: '1:05 PM Today',
    status: 'pending',
  },
];

export const FOOD_FILTER_CATEGORIES = [
  'All',
  'Pure Veg Thali',
  'Non-Veg',
  'South Indian',
  'Quick Lunch',
  'Beverages',
] as const;
