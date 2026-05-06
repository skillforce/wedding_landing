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
      image: string;
      title: string;
      desc: string;
    }[];
  };

  showcase: {
    headline: string;
    scriptLine: string;
    cta: string;
    tabs: string[];
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
      image: string;
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
  otherLocaleUrl: "/",
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
      "From the first yes to the last dance — everything you need to plan your wedding, all in one place.",
    ctaPrimary: "Start Planning",
    ctaSecondary: "For Organizers",
    scriptLine: "Plan the day you've always dreamed of",
  },

  trust: {
    tagline: "Couples and organizers in 40+ countries plan with us",
    items: [
      {
        icon: "👥",
        title: "Guests RSVP without signing up",
        sub: "No accounts, no friction — just a quick tap and done",
      },
      {
        icon: "💱",
        title: "Any currency, any country",
        sub: "Budget in the currency that makes sense to you",
      },
      {
        icon: "✨",
        title: "Genuinely easy to use",
        sub: "Anyone can pick it up and just go",
      },
    ],
  },

  features: {
    headline: "Everything you need, in one beautiful place",
    scriptLine: "All you need,\nin one beautiful place",
    cards: [
      {
        image: "/images/features/letter.avif",
        title: "Guest Management",
        desc: "Add your guests, store their preferences and details — everything you need to make seating arrangements a breeze.",
      },
      {
        image: "/images/features/seating.avif",
        title: "Seating Planner",
        desc: "Design your venue layout however you like. Or let the auto-planner figure it out for you.",
      },
      {
        image: "/images/features/calculator.avif",
        title: "Budget Tracking",
        desc: "Track every expense with multi-currency support, priorities, and payment status — always know where you stand.",
      },
      {
        image: "/images/features/timeline.avif",
        title: "Timeline Builder",
        desc: "Plan your wedding day minute by minute. Start from a template or build your own — it's your day.",
      },
      {
        image: "/images/features/clock.avif",
        title: "Checklists & Tasks",
        desc: "Stay on top of everything with checklists organized by phase. Nothing slips through the cracks.",
      },
    ],
  },

  showcase: {
    headline: "Your wedding plan, clearly in view",
    scriptLine: "Guests, seating, budget, and timeline stay organized in one calm workspace.",
    cta: "See how it works",
    tabs: ["Guests", "Seating", "Budget", "Checklist", "Day Plan"],
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
    scriptLine: "Simple pricing\nfor every story",
    plans: [
      {
        featured: true,
        name: "Couple Plan",
        sub: "For Couples",
        price: "4.99",
        period: "month",
        desc: "Everything you need to plan your own wedding — guest list, seating, budget, timeline, and more.",
        cta: "Choose Plan",
      },
      {
        name: "Organizer Plan",
        sub: "For Organizers",
        price: "14.99",
        period: "month",
        desc: "Unlimited couples. All features. One workspace. Manage every client's plan without limits.",
        cta: "Choose Plan",
      },
    ],
  },

  forWho: {
    headline: "Made for everyone who makes the day special",
    scriptLine: "Made for everyone\nwho matters most",
    cards: [
      {
        image: "/images/forWho/couple.avif",
        imgLabel: "couple photo",
        title: "For Couples",
        desc: "Planning a wedding is one of the most exciting things you'll ever do — and also one of the most overwhelming. Doctor Wedding gives you a single place to keep it all: your guest list, seating chart, budget, day-of timeline, and every task along the way. Plan together in real time, stay on top of everything without the stress, and actually enjoy getting ready for the best day of your lives.",
      },
      {
        image: "/images/forWho/organizator.avif",
        imgLabel: "organizer photo",
        title: "For Organizers",
        desc: "Running multiple weddings at once means a lot can fall through the cracks — unless you have the right tools. Doctor Wedding keeps all your clients in a single workspace, each with their own guest list, budget, and timeline. No more jumping between spreadsheets, notes, and group chats. Just a clear view of every wedding you're managing, and more time for the work your clients hired you to do.",
      },
    ],
  },

  cta: {
    headline: "Your story is one of a kind.",
    headlineEm: "Let's plan it beautifully.",
    sub: "Thousands of couples and organizers use Doctor Wedding to plan weddings they'll always remember.",
    ctaPrimary: "Start Planning",
    ctaSecondary: "Explore Templates",
  },

  footer: {
    copyright: "© 2026 Doctor Wedding",
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
  otherLocaleUrl: "/en",
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
      "От первого «да» до последнего танца — всё для планирования свадьбы в одном месте.",
    ctaPrimary: "Начать планирование",
    ctaSecondary: "Для организаторов",
    scriptLine: "The Wedding Planning Platform",
  },

  trust: {
    tagline: "Нам доверяют пары и организаторы в более чем 40 странах",
    items: [
      {
        icon: "👥",
        title: "Гости отвечают без регистрации",
        sub: "Никаких аккаунтов — просто быстрый ответ",
      },
      {
        icon: "💱",
        title: "Любая валюта, любая страна",
        sub: "Ведите бюджет в той валюте, в которой думаете",
      },
      {
        icon: "✨",
        title: "Удобно с первой минуты",
        sub: "Берёшь и просто работаешь — объяснять не нужно",
      },
    ],
  },

  features: {
    headline: "Всё, что нужно — в одном красивом месте",
    scriptLine: "Всё, что нужно —\nв одном красивом месте",
    cards: [
      {
        image: "/images/features/letter.avif",
        title: "Управление гостями",
        desc: "Добавляйте гостей, храните их пожелания и данные — всё, что нужно для удобной рассадки.",
      },
      {
        image: "/images/features/seating.avif",
        title: "Рассадка гостей",
        desc: "Планируйте рассадку так, как удобно вам. Или доверьтесь автоплану — он справится.",
      },
      {
        image: "/images/features/calculator.avif",
        title: "Учёт бюджета",
        desc: "Отслеживайте каждую трату в разных валютах. Приоритеты, статус платежей — всегда знаете, где вы стоите.",
      },
      {
        image: "/images/features/timeline.avif",
        title: "Тайминг дня",
        desc: "Планируйте день поминутно. Выберите шаблон или постройте свой — это ваш день.",
      },
      {
        image: "/images/features/clock.avif",
        title: "Чеклисты и задачи",
        desc: "Чек-листы по этапам подготовки — ничего не потеряется и не забудется.",
      },
    ],
  },

  showcase: {
    headline: "Вся свадьба — в одном понятном плане",
    scriptLine: "Гости, рассадка, бюджет и тайминг всегда под рукой.",
    cta: "Как это работает",
    tabs: ["Гости", "Рассадка", "Бюджет", "Чеклист", "День"],
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
    scriptLine: "Простые тарифы\nдля вашей истории",
    plans: [
      {
        featured: true,
        name: "Тариф для пар",
        sub: "Для пар",
        price: "4.99",
        period: "месяц",
        desc: "Всё необходимое для планирования свадьбы: список гостей, рассадка, бюджет, тайминг и многое другое.",
        cta: "Выбрать тариф",
      },
      {
        name: "Тариф организатора",
        sub: "Для организаторов",
        price: "14.99",
        period: "месяц",
        desc: "Неограниченное количество пар. Все функции. Одно рабочее пространство. Без каких-либо лимитов.",
        cta: "Выбрать тариф",
      },
    ],
  },

  forWho: {
    headline: "Для пар и организаторов",
    scriptLine: "Всё для подготовки свадьбы — в одном удобном пространстве",
    cards: [
      {
        image: "/images/forWho/couple.avif",
        imgLabel: "фото пары",
        title: "Для пар",
        desc: "Подготовка к свадьбе — это и радость, и настоящий водоворот задач. Doctor Wedding собирает всё в одном месте: список гостей, план рассадки, бюджет, тайминг дня и все задачи по этапам. Планируйте вместе в реальном времени, не теряйте нить и наслаждайтесь каждым шагом — вы заслуживаете получать удовольствие от подготовки к лучшему дню в вашей жизни.",
      },
      {
        image: "/images/forWho/organizator.avif",
        imgLabel: "фото организатора",
        title: "Для организаторов",
        desc: "Когда ведёшь несколько свадеб одновременно, мелочи легко теряются — если нет правильных инструментов. Doctor Wedding держит всех клиентов в одном пространстве: каждая пара со своим списком гостей, бюджетом и таймингом. Никаких таблиц, заметок и переписок в разных местах. Только чёткая картина по каждой свадьбе — и больше времени на то, за что вас нанимают.",
      },
    ],
  },

  cta: {
    headline: "Ваша история неповторима.",
    headlineEm: "Давайте спланируем её красиво.",
    sub: "Тысячи пар и организаторов планируют свадьбы мечты с Doctor Wedding.",
    ctaPrimary: "Начать планирование",
    ctaSecondary: "Смотреть шаблоны",
  },

  footer: {
    copyright: "© 2026 Doctor Wedding",
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
