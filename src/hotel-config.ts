// ============================================
// HOTEL_CONFIG - Core hotel identity & contact
// ============================================
export const HOTEL_CONFIG = {
  name: "See Villa Tacoli",
  shortName: "See Villa",
  type: "Hotel" as const,

  location: {
    street: "Seestraße 68",
    postalCode: "9872",
    city: "Millstatt",
    region: "Kärnten",
    country: "Österreich",
    coordinates: {
      lat: 46.8028,
      lng: 13.5783,
    },
  },

  contact: {
    email: "kontakt@see-villa.at",
    phone: {
      main: { display: "+43 (0) 4766-2102", href: "tel:+4347662102" },
      whatsapp: {
        display: "",
        href: "",
      },
    },
    website: {
      main: "https://www.see-villa.eu",
      booking: "https://www.see-villa.eu/buchung",
    },
  },

  social: {
    facebook: "https://www.facebook.com/seevillamillstatt",
    instagram: "https://www.instagram.com/seevillamillstatt",
    youtube: undefined,
  },

  legal: {
    taxId: "",
    imprint: {
      de: "https://www.see-villa.eu/impressum",
      en: "https://www.see-villa.eu/impressum",
      it: "https://www.see-villa.eu/impressum",
    },
    privacy: {
      de: "https://www.see-villa.eu/datenschutz",
      en: "https://www.see-villa.eu/datenschutz",
      it: "https://www.see-villa.eu/datenschutz",
    },
  },

  branding: {
    logo: {
      main: "https://www.see-villa.eu/wp-content/uploads/2017/07/see-villa-logo-std.png",
      mobile: "https://www.see-villa.eu/wp-content/uploads/2017/07/see-villa-logo-std.png",
      alt: "https://www.see-villa.eu/wp-content/uploads/2017/07/see-villa-logo-std.png",
    },
    dimensions: {
      mobile: { width: 132, height: 74 },
      desktop: { width: 189, height: 138 },
    },
  },

  copyright: {
    year: 2026,
    holder: "See Villa Tacoli",
  },
};

// ============================================
// BOOKING_CONFIG - Reservation settings
// ============================================
export const BOOKING_CONFIG = {
  bookingUrls: {
    de: "https://www.see-villa.eu/buchung",
    en: "https://www.see-villa.eu/buchung",
    it: "https://www.see-villa.eu/buchung",
  },

  dates: {
    minBookingDate: "2026-03-06",
  },

  checkIn: {
    from: "14:00",
    to: "20:00",
  },

  checkOut: {
    until: "11:00",
  },

  touristTax: {
    amount: 2.5,
    currency: "EUR",
    per: "person/day",
    exemptUnderAge: 14,
  },

  cancellation: {
    tiers: [
      { daysBeforeArrival: 60, fee: 0, description: "Free cancellation" },
      { daysBeforeArrival: 21, fee: 30, feeType: "percent" as const },
      { daysBeforeArrival: 7, fee: 75, feeType: "percent" as const },
      { daysBeforeArrival: 0, fee: 95, feeType: "percent" as const },
    ],
    depositRefundable: false,
  },

  policies: {
    pets: { allowed: true, fee: 15, per: "night" },
    additionalPerson: { fee: 0, per: "night" },
    breakfastOnlyDeduction: { amount: 0, per: "person" },
  },
};

// ============================================
// TECHNICAL_CONFIG - Dev/deployment settings
// ============================================
export const TECHNICAL_CONFIG = {
  projectId: "A1032",

  urls: {
    production: "https://example.com",
    staging: "",
  },

  analytics: {
    gtmId: "GTM-PNP7DSX2",
  },

  email: {
    from: "noreply@example.com",
    replyTo: "kontakt@see-villa.at",
    transactional: "see-villa-tacoli@updates.alpinads.app",
    assetsBaseUrl: "https://example.com",
  },

  credits: {
    agency: "Alpin Ads",
    agencyUrl: "https://alpinads.com/",
  },
};

// ============================================
// SEO_CONFIG - Metadata for all languages
// ============================================
export const SEO_CONFIG = {
  baseUrl: "https://example.com",
  ogImage: "https://www.see-villa.eu/wp-content/uploads/2019/07/hausundsee_RGB-800x540.jpg",

  home: {
    de: {
      title: "See-Villa Tacoli – 4-Sterne Schlosshotel am Millstätter See | Kärnten",
      description: "Das 4-Sterne Schlosshotel See-Villa Tacoli in Millstatt/Kärnten: 200 m Seeufer, Falstaff-ausgezeichnetes Restaurant, historisches Ambiente & moderne Eleganz seit 1884.",
      ogTitle: "See-Villa Tacoli – Ihr Schlosshotel am Millstätter See",
      ogDescription: "Genießen Sie Ruhe, Kulinarik und aristokratischen Glanz in unserem 4-Sterne-Hotel direkt am Millstätter See in Kärnten. Jetzt anfragen!",
      ogLocale: "de_DE",
    },
    en: {
      title: "See Villa Tacoli – 4-Star Castle Hotel on Lake Millstatt | Carinthia",
      description: "The 4-star castle hotel See Villa Tacoli in Millstatt/Carinthia: 200 m of lakefront, Falstaff-awarded restaurant, historic ambience & modern elegance since 1884.",
      ogTitle: "See Villa Tacoli – Your Castle Hotel on Lake Millstatt",
      ogDescription: "Enjoy tranquillity, fine dining and aristocratic splendour at our 4-star hotel directly on Lake Millstatt in Carinthia. Enquire now!",
      ogLocale: "en_US",
    },
    it: {
      title: "See Villa Tacoli – Hotel 4 Stelle sul Lago di Millstatt | Carinzia",
      description: "L'hotel castello 4 stelle See Villa Tacoli a Millstatt/Carinzia: 200 m di riva, ristorante premiato dal Falstaff, atmosfera storica ed eleganza moderna dal 1884.",
      ogTitle: "See Villa Tacoli – Il Vostro Hotel Castello sul Lago di Millstatt",
      ogDescription: "Godetevi relax, cucina raffinata e splendore aristocratico nel nostro hotel 4 stelle direttamente sul Lago di Millstatt in Carinzia. Richiedi ora!",
      ogLocale: "it_IT",
    },
  },

  keywords: ["See Villa Millstatt","Hotel Millstätter See","Schlosshotel Kärnten","4 Sterne Hotel Kärnten","Urlaub Millstatt","Hotel am See Österreich","Falstaff Restaurant Kärnten","Familienurlaub Millstätter See","Skiurlaub Goldeck","Wellnessurlaub Kärnten","See Villa Tacoli","Hotel Seeblick Kärnten"],
};

// ============================================
// Helper functions
// ============================================
export function getHotelConfig() {
  return HOTEL_CONFIG;
}
export function getBookingConfig(): BookingConfigLegacy {
  return bookingConfig;
}
export function getTechnicalConfig() {
  return TECHNICAL_CONFIG;
}
export function getSeoConfig() {
  return SEO_CONFIG;
}

// ============================================
// Legacy aliases for backward compatibility
// ============================================
export interface HotelProfile {
  address: {
    line1: string;
    line2: string;
  };
  contact: {
    email: string;
    phone: {
      display: string;
      href: string;
    };
  };
  hotelName: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
  };
  legal: {
    imprintBaseUrl: string;
    privacyBaseUrl: string;
  };
  credits: {
    alpinAdsUrl: string;
  };
  logo: {
    src: string;
    mobileSrc: string;
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
}

export const hotelProfile: HotelProfile = {
  hotelName: HOTEL_CONFIG.name,
  address: {
    line1: HOTEL_CONFIG.location.street,
    line2: `${HOTEL_CONFIG.location.postalCode} ${HOTEL_CONFIG.location.city}, ${HOTEL_CONFIG.location.region} - ${HOTEL_CONFIG.location.country}`,
  },
  contact: {
    email: HOTEL_CONFIG.contact.email,
    phone: HOTEL_CONFIG.contact.phone.main,
  },
  social: {
    ...HOTEL_CONFIG.social,
    whatsapp: HOTEL_CONFIG.contact.phone.whatsapp.href,
  },
  legal: {
    imprintBaseUrl: HOTEL_CONFIG.legal.imprint.de,
    privacyBaseUrl: HOTEL_CONFIG.legal.privacy.de,
  },
  credits: { alpinAdsUrl: TECHNICAL_CONFIG.credits.agencyUrl },
   logo: {
    src: HOTEL_CONFIG.branding.logo.main,
    mobileSrc: HOTEL_CONFIG.branding.logo.mobile,
    mobile: HOTEL_CONFIG.branding.dimensions.mobile,
    desktop: HOTEL_CONFIG.branding.dimensions.desktop,
  },
};

export interface SiteConfig {
  baseUrl: string;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  baseUrl: SEO_CONFIG.baseUrl,
  ogImage: SEO_CONFIG.ogImage,
};

export interface BookingConfigLegacy {
  minDate: string;
}

export const bookingConfig: BookingConfigLegacy = {
  minDate: BOOKING_CONFIG.dates.minBookingDate,
};

export function getHotelProfile(): HotelProfile {
  return hotelProfile;
}

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}
