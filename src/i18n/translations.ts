export type PricingPlan = {
  name: string;
  sub: string;
  price: string;
  period: string;
  desc: string;
  cta: string;
  featured?: boolean;
  badge?: string;
};

export type Translations = {
  locale: "en" | "ru";
  otherLocaleUrl: string;
  otherLocaleLabel: string;

  nav: {
    features: string;
    forWho: string;
    pricing: string;
    templates: string;
    about: string;
  };

  hero: {
    eyebrow: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scriptLine: string;
  };

  trust: {
    tagline: string;
    items: {
      icon: string;
      title: string;
      sub: string;
    }[];
  };

  features: {
    headline: string;
    scriptLine: string;
    cards: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };

  showcase: {
    headline: string;
    scriptLine: string;
    cta: string;
    panels: {
      seating: {
        title: string;
        tables: string;
        guests: string;
      };
      timeline: {
        title: string;
        events: { time: string; label: string }[];
      };
      budget: {
        title: string;
        categories: {
          name: string;
          spent: string;
          limit: string;
        }[];
      };
    };
  };

  pricing: {
    headline: string;
    scriptLine: string;
    plans: PricingPlan[];
  };

  forWho: {
    headline: string;
    scriptLine: string;
    cards: {
      icon: string;
      imgLabel: string;
      title: string;
      desc: string;
    }[];
  };

  cta: {
    headline: string;
    headlineEm: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  footer: {
    copyright: string;
    tagline: string;
    nav: {
      features: string;
      forWho: string;
      pricing: string;
      templates: string;
      about: string;
      blog: string;
      help: string;
    };
  };
};

export const en: Translations = {
  locale: "en",
  otherLocaleUrl: "/ru",
  otherLocaleLabel: "RU",

  nav: {
    features: "Features",
    forWho: "For Who",
    pricing: "Pricing",
    templates: "Templates",
    about: "About",
  },

  hero: {
    eyebrow: "The Wedding Planning Platform",
    subtitle:
      "The all-in-one platform for couples and wedding organizers to plan every detail with joy and ease.",
    ctaPrimary: "Start Planning",
    ctaSecondary: "For Organizers",
    scriptLine: "Платформа для планирования свадьбы",
  },

  trust: {
    tagline: "Trusted by couples and organizers worldwide",
    items: [
      {
        icon: "👥",
        title: "RSVP without sign up",
        sub: "Guests respond instantly",
      },
      {
        icon: "💱",
        title: "Multi-currency support",
        sub: "Plan in any currency",
      },
      {
        icon: "✨",
        title: "Beautiful, easy and smart",
        sub: "Designed for everyone",
      },
    ],
  },

  features: {
    headline: "Everything you need, beautifully organized",
    scriptLine: "Всё, что нужно\n— в одном\nкрасивом\nместе",
    cards: [
      {
        icon: "👥",
        title: "Guest Management",
        desc: "Guests RSVP online without sign up. Collect preferences, plus-ones and more.",
      },
      {
        icon: "🪑",
        title: "Seating Planner",
        desc: "Design your venue with up to 40 tables and 30 seats each. Auto seating included.",
      },
      {
        icon: "💰",
        title: "Budget Tracking",
        desc: "Track every expense with multi-currency, priorities and payment status.",
      },
      {
        icon: "⏱️",
        title: "Timeline Builder",
        desc: "Plan your day minute-by-minute with beautiful timeline templates.",
      },
      {
        icon: "✅",
        title: "Checklist & Tasks",
        desc: "Stay on track with checklists by phases and smart task management.",
      },
    ],
  },

  showcase: {
    headline: "Plan with clarity. See everything come together.",
    scriptLine: "Планируйте с уверенностью.\nВидьте картину целиком.",
    cta: "See how it works",
    panels: {
      seating: {
        title: "Seating Layout",
        tables: "Tables: 8",
        guests: "Guests: 64/80",
      },
      timeline: {
        title: "Wedding Timeline",
        events: [
          { time: "10:00", label: "Ceremony" },
          {
            time: "12:00",
            label: "Cocktail Hour",
          },
          { time: "17:00", label: "Reception" },
          {
            time: "21:00",
            label: "Cake Cutting",
          },
          { time: "23:00", label: "Dancing" },
        ],
      },
      budget: {
        title: "Budget Overview",
        categories: [
          {
            name: "Venue",
            spent: "$8,000",
            limit: "$9,000",
          },
          {
            name: "Catering",
            spent: "$7,500",
            limit: "$8,000",
          },
          {
            name: "Decorations",
            spent: "$3,000",
            limit: "$3,500",
          },
          {
            name: "Photography",
            spent: "$4,000",
            limit: "$2,700",
          },
        ],
      },
    },
  },

  pricing: {
    headline: "Simple pricing for every story",
    scriptLine: "Простые тарифы\nдля вашей истории",
    plans: [
      {
        featured: true,
        badge: "Best for couples",
        name: "Couples Plan",
        sub: "Для пар",
        price: "15",
        period: "year",
        desc: "Perfect for couples planning their own wedding.",
        cta: "Get Started",
      },
      {
        name: "Organizer Plan Starter",
        sub: "Для организаторов",
        price: "20",
        period: "month",
        desc: "Manage up to 40 couples in one workspace.",
        cta: "Choose Plan",
      },
      {
        name: "Organizer Plan Pro",
        sub: "Для организаторов",
        price: "30",
        period: "month",
        desc: "Unlimited couples. All features. All power.",
        cta: "Choose Plan",
      },
    ],
  },

  forWho: {
    headline: "Made for everyone in your big day",
    scriptLine: "Создано для всех,\nкто важен в этот день",
    cards: [
      {
        icon: "💑",
        imgLabel: "couple photo",
        title: "For Couples",
        desc: "Plan together, stay organized and enjoy the journey. Your wedding, your way.",
      },
      {
        icon: "👔",
        imgLabel: "organizer photo",
        title: "For Organizers",
        desc: "Manage multiple weddings with ease and elegance. All clients in one workspace.",
      },
      {
        icon: "📱",
        imgLabel: "guest phone view",
        title: "For Guests",
        desc: "RSVP in seconds. No sign up, just love and celebration.",
      },
    ],
  },

  cta: {
    headline: "Your story is unique.",
    headlineEm: "Let's plan it beautifully.",
    sub: "Join thousands of couples and organizers who trust Doctor Wedding.",
    ctaPrimary: "Start Planning",
    ctaSecondary: "Explore Templates",
  },

  footer: {
    copyright: "© 2024 Doctor Wedding",
    tagline: "Made with love for every love story ♥",
    nav: {
      features: "Features",
      forWho: "For Who",
      pricing: "Pricing",
      templates: "Templates",
      about: "About",
      blog: "Blog",
      help: "Help",
    },
  },
};

export const ru: Translations = {
  locale: "ru",
  otherLocaleUrl: "/",
  otherLocaleLabel: "EN",

  nav: {
    features: "Функции",
    forWho: "Для кого",
    pricing: "Тарифы",
    templates: "Шаблоны",
    about: "О нас",
  },

  hero: {
    eyebrow: "Платформа для планирования свадьбы",
    subtitle:
      "Всё в одном: для пар и организаторов свадеб — планируйте каждую деталь с радостью и лёгкостью.",
    ctaPrimary: "Начать планирование",
    ctaSecondary: "Для организаторов",
    scriptLine: "The Wedding Planning Platform",
  },

  trust: {
    tagline: "Нам доверяют пары и организаторы по всему миру",
    items: [
      {
        icon: "👥",
        title: "RSVP без регистрации",
        sub: "Гости отвечают мгновенно",
      },
      {
        icon: "💱",
        title: "Мультивалютность",
        sub: "Планируйте в любой валюте",
      },
      {
        icon: "✨",
        title: "Красиво, легко и умно",
        sub: "Создано для всех",
      },
    ],
  },

  features: {
    headline: "Всё что нужно — в одном месте",
    scriptLine: "Everything\nyou need,\nbeautifully\norganized",
    cards: [
      {
        icon: "👥",
        title: "Управление гостями",
        desc: "Гости отвечают на приглашение без регистрации. Собирайте предпочтения и многое другое.",
      },
      {
        icon: "🪑",
        title: "Рассадка гостей",
        desc: "Планируйте рассадку до 40 столов и до 30 мест. Есть автоплан.",
      },
      {
        icon: "💰",
        title: "Учёт бюджета",
        desc: "Учёт бюджета в разных валютах, приоритеты и статус платежей.",
      },
      {
        icon: "⏱️",
        title: "Тайминг дня",
        desc: "Планируйте день поминутно с готовыми шаблонами тайминга.",
      },
      {
        icon: "✅",
        title: "Чеклисты и задачи",
        desc: "Чек-листы по этапам и удобное управление задачами.",
      },
    ],
  },

  showcase: {
    headline: "Планируйте с уверенностью.",
    scriptLine: "Plan with clarity.\nSee everything\ncome together.",
    cta: "Как это работает",
    panels: {
      seating: {
        title: "План рассадки",
        tables: "Столов: 8",
        guests: "Гостей: 64/80",
      },
      timeline: {
        title: "Тайминг свадьбы",
        events: [
          { time: "10:00", label: "Церемония" },
          { time: "12:00", label: "Коктейль" },
          { time: "17:00", label: "Приём" },
          { time: "21:00", label: "Торт" },
          { time: "23:00", label: "Танцы" },
        ],
      },
      budget: {
        title: "Обзор бюджета",
        categories: [
          {
            name: "Площадка",
            spent: "$8,000",
            limit: "$9,000",
          },
          {
            name: "Кейтеринг",
            spent: "$7,500",
            limit: "$8,000",
          },
          {
            name: "Декор",
            spent: "$3,000",
            limit: "$3,500",
          },
          {
            name: "Фото",
            spent: "$4,000",
            limit: "$2,700",
          },
        ],
      },
    },
  },

  pricing: {
    headline: "Простые тарифы для вашей истории",
    scriptLine: "Simple pricing\nfor every story",
    plans: [
      {
        featured: true,
        badge: "Лучший выбор",
        name: "Для пар",
        sub: "Couples Plan",
        price: "15",
        period: "год",
        desc: "Идеально для пар, которые планируют свадьбу самостоятельно.",
        cta: "Начать",
      },
      {
        name: "Организатор Старт",
        sub: "Organizer Plan Starter",
        price: "20",
        period: "месяц",
        desc: "Управляйте до 40 парами в одном рабочем пространстве.",
        cta: "Выбрать тариф",
      },
      {
        name: "Организатор Про",
        sub: "Organizer Plan Pro",
        price: "30",
        period: "месяц",
        desc: "Неограниченное количество пар. Все возможности.",
        cta: "Выбрать тариф",
      },
    ],
  },

  forWho: {
    headline: "Создано для всех, кто важен в этот день",
    scriptLine: "Made for everyone\nin your big day",
    cards: [
      {
        icon: "💑",
        imgLabel: "фото пары",
        title: "Для пар",
        desc: "Планируйте вместе, будьте организованы и наслаждайтесь процессом. Ваша свадьба — ваш путь.",
      },
      {
        icon: "👔",
        imgLabel: "фото организатора",
        title: "Для организаторов",
        desc: "Управляйте несколькими свадьбами легко и красиво. Все клиенты в одном пространстве.",
      },
      {
        icon: "📱",
        imgLabel: "вид гостя",
        title: "Для гостей",
        desc: "Ответьте на приглашение за секунды. Без регистрации — только любовь и праздник.",
      },
    ],
  },

  cta: {
    headline: "Ваша история уникальна.",
    headlineEm: "Давайте спланируем её красиво.",
    sub: "Присоединяйтесь к тысячам пар и организаторов, которые доверяют Doctor Wedding.",
    ctaPrimary: "Начать планирование",
    ctaSecondary: "Смотреть шаблоны",
  },

  footer: {
    copyright: "© 2024 Doctor Wedding",
    tagline: "Создано с любовью для каждой истории любви ♥",
    nav: {
      features: "Функции",
      forWho: "Для кого",
      pricing: "Тарифы",
      templates: "Шаблоны",
      about: "О нас",
      blog: "Блог",
      help: "Помощь",
    },
  },
};
