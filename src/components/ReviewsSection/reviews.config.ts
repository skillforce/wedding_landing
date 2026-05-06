export type ReviewLocale = "en" | "ru";
export type ReviewRole = "couple" | "organizer";

export interface Review {
  name: string;
  role: ReviewRole;
  photo: string;
  review: string;
}

export const reviews: Record<ReviewLocale, Review[]> = {
  en: [
    {
      name: "Emma & Daniel Reed",
      role: "couple",
      photo: "/images/avatars/avatar-daniel.avif",
      review:
        "Two months out we were drowning in spreadsheets and group chats. Doctor Wedding pulled everything — guests, seating, the whole timeline — into one place, and we finally stopped managing chaos and started actually looking forward to the day.",
    },
    {
      name: "Sophia Miller",
      role: "organizer",
      photo: "/images/avatars/avatar-sophia.avif",
      review:
        "Running twelve weddings at once, I used to spend half my week just chasing updates. Now my assistant and I share one workspace and I always know exactly where every event stands — no status calls needed.",
    },
    {
      name: "Olivia Bennett",
      role: "organizer",
      photo: "/images/avatars/avatar-olivia.avif",
      review:
        "Guest lists used to mean four versions of the same file and a full inbox every Monday. The confirmation tracking alone reclaimed hours — I see who responded, who needs a nudge, and the couple stays updated automatically.",
    },
    {
      name: "Maya Collins",
      role: "organizer",
      photo: "/images/avatars/avatar-maya.avif",
      review:
        "Our budget reviews always started with 'wait, is this the latest version?' That doesn't happen anymore. Deposits, estimates, what's still outstanding — one view, and our planning calls actually end on time.",
    },
    {
      name: "Isabella Hart",
      role: "organizer",
      photo: "/images/avatars/avatar-isabella.avif",
      review:
        "The day-of timeline is where weddings succeed or fall apart. Since switching, every vendor and family member works from the same schedule. A last-minute change used to mean twenty calls — now it's one update.",
    },
  ],
  ru: [
    {
      name: "Анна и Максим Волковы",
      role: "couple",
      photo: "/images/avatars/avatar-daniel.avif",
      review:
        "За два месяца до свадьбы мы буквально тонули в таблицах и переписках. Doctor Wedding собрал всё в одном месте — гостей, рассадку, тайминг — и мы наконец перестали просто справляться и начали по-настоящему ждать этого дня.",
    },
    {
      name: "Екатерина Смирнова",
      role: "organizer",
      photo: "/images/avatars/avatar-sophia.avif",
      review:
        "Когда ведёшь двенадцать свадеб одновременно, половина дня уходит только на то, чтобы понять, где что стоит. Теперь мы с помощницей работаем в одном пространстве — я открываю проект и сразу вижу всю картину.",
    },
    {
      name: "Мария Орлова",
      role: "organizer",
      photo: "/images/avatars/avatar-olivia.avif",
      review:
        "Список гостей — это всегда было несколько версий файла и полный ящик сообщений по понедельникам. Одно только отслеживание подтверждений сэкономило мне несколько часов в неделю, а пара получает обновления сама.",
    },
    {
      name: "Полина Коваль",
      role: "organizer",
      photo: "/images/avatars/avatar-maya.avif",
      review:
        "Наши встречи по бюджету всегда начинались с вопроса «это актуальная версия?». Теперь нет. Авансы, оценки, что ещё не оплачено — всё в одном месте, и мы наконец укладываемся в отведённое время.",
    },
    {
      name: "Дарья Лебедева",
      role: "organizer",
      photo: "/images/avatars/avatar-isabella.avif",
      review:
        "Тайминг дня — это то, от чего зависит всё. Раньше любое изменение означало двадцать звонков. Теперь обновляешь один раз — и все: поставщики, семья, команда — видят актуальный план.",
    },
  ],
};
