/* =========================================================
   BLACKIE PHOTOGRAPHY — PRICES & SETTINGS
   Edit prices here ONCE. The tablet menu (index.html) and
   the printable booklet (print.html) both read from this file.
   ========================================================= */
window.BLACKIE = {
  studio: {
    name: "Blackie Photography",
    tagline: "Professional portraits that capture your best moments beautifully.",
    phones: ["0550 322 842", "0244 299 515"],
    whatsapp: "233550322842",           // bookings are sent here (0550 322 842)
    location: "Santasi, Kumasi, Ashanti Region",
    instagram: "blackie_photography_",
    tiktok: "Blackie Photography",
    logo: "https://austin-marfo.github.io/blackie-pricelist/favicon1.png",
    menuUrl: "https://austin-marfo.github.io/blackie-pricelist/", // used for the QR code in print.html
    hours: { open: 8, close: 19 }       // booking time slots (24h clock)
  },

  // Paste your Google Apps Script web-app URL here (see SETUP.md).
  // Leave empty "" to skip the Google Sheet and only use WhatsApp.
  sheetUrl: "https://script.google.com/macros/s/AKfycbyt9S0b2l0oFNLmEirYuT-wrUEHe4qKaAm8G4rubVsf4PxpXXRtZ5bOlQ1_wKlDJF88Bg/exec",

  currency: "GH¢",
  popularTier: "classic",

  categories: [
    {
      id: "solo", name: "Solo", blurb: "One person, your session", icon: "solo",
      tiers: [
        { id: "essential", name: "Essential", price: 250, outfits: 2, photos: 6,  minutes: 30 },
        { id: "classic",   name: "Classic",   price: 400, outfits: 3, photos: 10, minutes: 60 },
        { id: "premium",   name: "Premium",   price: 600, outfits: 4, photos: 15, minutes: 90 }
      ]
    },
    {
      id: "kids", name: "Kids", blurb: "Ages 1–5", icon: "kids",
      tiers: [
        { id: "essential", name: "Essential", price: 300, outfits: 2, photos: 6,  minutes: 45 },
        { id: "classic",   name: "Classic",   price: 450, outfits: 3, photos: 10, minutes: 60 },
        { id: "premium",   name: "Premium",   price: 650, outfits: 4, photos: 15, minutes: 90 }
      ]
    },
    {
      id: "couple", name: "Couple", blurb: "Two people, one story", icon: "couple",
      tiers: [
        { id: "essential", name: "Essential", price: 350, outfits: 2, photos: 6,  minutes: 45 },
        { id: "classic",   name: "Classic",   price: 500, outfits: 3, photos: 10, minutes: 75 },
        { id: "premium",   name: "Premium",   price: 700, outfits: 4, photos: 15, minutes: 90 }
      ]
    },
    {
      id: "group", name: "Group / Family", blurb: "Family, friends & groups (3+)", icon: "group",
      tiers: [
        { id: "essential", name: "Essential", price: 350, people: 3, outfits: 2, photos: 6,  minutes: 45 },
        { id: "classic",   name: "Classic",   price: 500, people: 4, outfits: 3, photos: 10, minutes: 75 },
        { id: "premium",   name: "Premium",   price: 700, people: 5, outfits: 4, photos: 15, minutes: 90 }
      ]
    }
  ],

  // type: "toggle" = yes/no, "count" = quantity stepper
  addons: [
    { id: "outdoor",     name: "Outdoor session",       price: 100, type: "toggle", note: "Shoot on location" },
    { id: "look",        name: "Extra look / outfit",    price: 50,  type: "count",  note: "per look", max: 5 },
    { id: "photo",       name: "Extra edited photo",     price: 20,  type: "count",  note: "per photo", max: 20 },
    { id: "bundle5",     name: "+5 edited photos bundle", price: 80, type: "count",  note: "save GH¢20", max: 4, badge: "Best value" },
    { id: "person",      name: "Extra person",           price: 100, type: "count",  note: "per person", max: 10, only: ["group"] }
  ],

  notes: [
    "Session time includes setup and outfit/look changes.",
    "Walk-ins are welcome and attended to based on availability.",
    "Advance booking is recommended to secure your preferred time."
  ]
};
