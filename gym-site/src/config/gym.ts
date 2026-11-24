/**
 * MR FITNESS — single editable config
 * Update gym name, contact, address, prices, trainers, and social links here.
 */

export const gymConfig = {
  name: "MR FITNESS",
  /** Navbar / footer wordmark split for accent styling */
  brand: {
    primary: "MR",
    accent: " FITNESS",
  },
  tagline: "BUILT DIFFERENT. TRAIN DIFFERENT.",
  subtitle: "Push your limits. Build strength. Become unstoppable.",

  /** Display symbol used on membership cards — change here for all prices */
  currency: {
    symbol: "₹",
    code: "INR",
  },

  contact: {
    phone: "+91 84400 71458",
    phoneRaw: "918440071458",
    whatsapp: "+91 84400 71458",
    /** Digits only with country code for https://wa.me/ */
    whatsappRaw: "918440071458",
    email: "hello@mrfitness.com",
    address:
      "Sanjivani Plaza, Second Floor, Samdari, Rajasthan 344021, India",
    /** Opens Google Maps search/directions for this address */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sanjivani+Plaza+Second+Floor+Samdari+Rajasthan+344021+India",
    hours: {
      weekdays: "Mon – Sat: 5:00 AM – 11:00 PM",
      weekends: "Sunday: Closed",
    },
  },

  social: {
    instagram: "https://instagram.com/mrfitness",
    facebook: "https://facebook.com/mrfitness",
  },

  whatsappMessage:
    "Hi MR FITNESS! I'd like to enquire about membership.",

  stats: [
    { value: "1000+", label: "Members" },
    { value: "15+", label: "Expert Trainers" },
    { value: "25+", label: "Training Programs" },
    { value: "5", label: "Years of Excellence" },
  ],

  about: {
    heading: "MORE THAN A GYM. IT'S A MINDSET.",
    philosophy:
      "MR FITNESS is built for those who refuse average. We combine elite coaching, industrial-grade equipment, and a community that holds you accountable — every rep, every session, every day.",
    pillars: [
      {
        title: "Equipment",
        description:
          "Competition-grade racks, plates, and machines. No waiting. No excuses. Just pure iron.",
      },
      {
        title: "Trainers",
        description:
          "Certified coaches who live the lifestyle. Programming that adapts to your goals and pushes past plateaus.",
      },
      {
        title: "Community",
        description:
          "A culture of grit and respect. Spot each other. Celebrate PRs. Show up when it's hard.",
      },
    ],
  },

  programs: [
    {
      id: "strength",
      title: "Strength & Conditioning",
      description:
        "Build raw power and athletic capacity with structured progressive overload and conditioning finishers.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "personal",
      title: "Personal Training",
      description:
        "One-on-one coaching tailored to your body, schedule, and ambitions — with form that actually sticks.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "weight-loss",
      title: "Weight Loss",
      description:
        "Sustainable fat loss through smart training density, metabolic work, and accountability systems.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "muscle",
      title: "Muscle Building",
      description:
        "Hypertrophy-focused programming designed to pack on size with precision volume and recovery.",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "hiit",
      title: "HIIT & Cardio",
      description:
        "High-intensity intervals that torch calories, sharpen endurance, and keep sessions electric.",
      image:
        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "functional",
      title: "Functional Training",
      description:
        "Move better in life and sport — multi-planar strength, mobility, and real-world performance.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  trainers: [
    {
      name: "Marcus Kane",
      speciality: "Strength & Powerlifting",
      experience: "8 Years",
      instagram: "https://instagram.com/marcuskane_strength",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofia Reyes",
      speciality: "HIIT & Athletic Conditioning",
      experience: "6 Years",
      instagram: "https://instagram.com/sofiareyes_fit",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Jordan Blake",
      speciality: "Hypertrophy & Body Composition",
      experience: "10 Years",
      instagram: "https://instagram.com/jordanblake_coach",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    },
  ],

  memberships: [
    {
      id: "starter",
      name: "STARTER",
      /** INR monthly — edit here */
      price: 1000,
      duration: "per month",
      highlighted: false,
      benefits: [
        "Full gym floor access",
        "Locker room & showers",
        "2 group classes / week",
        "App workout library",
      ],
    },
    {
      id: "pro",
      name: "PRO",
      price: 1500,
      duration: "per month",
      highlighted: true,
      benefits: [
        "Everything in Starter",
        "Unlimited group classes",
        "1 PT session / month",
        "Nutrition kickstart guide",
        "Priority booking",
      ],
    },
    {
      id: "elite",
      name: "ELITE",
      price: 2000,
      duration: "per month",
      highlighted: false,
      benefits: [
        "Everything in Pro",
        "4 PT sessions / month",
        "Custom programming",
        "Recovery suite access",
        "Guest passes (2 / month)",
      ],
    },
  ],

  testimonials: [
    {
      name: "Alex M.",
      rating: 5,
      text: "MR FITNESS changed how I train. The coaches don't just count reps — they rebuild your mindset. Best decision I made this year.",
    },
    {
      name: "Priya S.",
      rating: 5,
      text: "Dark floors, serious iron, zero fluff. I've dropped 18lbs and finally feel strong in my own skin. This place is different.",
    },
    {
      name: "Devon R.",
      rating: 5,
      text: "Came for the equipment, stayed for the culture. Every session feels like you're part of something bigger.",
    },
  ],

  transform: {
    heading: "YOUR ONLY COMPETITION IS YOU.",
    copy: "Before and after don't tell the whole story — consistency does. Show up. Lift heavy. Trust the process. The mirror will catch up.",
    beforeImage:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80",
  },

  heroImage:
    "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=2000&q=80",

  aboutImage:
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=80",

  nav: [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Membership", href: "#membership" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type GymConfig = typeof gymConfig;

/** Format membership price with config currency (e.g. ₹3,499) */
export function formatPrice(amount: number): string {
  const formatted = amount.toLocaleString("en-IN");
  return `${gymConfig.currency.symbol}${formatted}`;
}

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(
    customMessage ?? gymConfig.whatsappMessage
  );
  return `https://wa.me/${gymConfig.contact.whatsappRaw}?text=${msg}`;
}
