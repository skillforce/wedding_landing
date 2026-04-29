export type ReviewLocale = "en" | "ru";
export type ReviewRole = "couple" | "organizer";

export interface Review {
  name: string;
  role: ReviewRole;
  photo: string;
  review: string;
}

const avatar = (bg: string, accent: string, initials: string) =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="28" fill="${encodeURIComponent(bg)}"/><circle cx="48" cy="36" r="18" fill="${encodeURIComponent(accent)}" opacity=".9"/><path d="M20 86c5-20 19-31 28-31s23 11 28 31" fill="${encodeURIComponent(accent)}" opacity=".55"/><text x="48" y="52" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="700" fill="white">${encodeURIComponent(initials)}</text></svg>`;

export const reviews: Record<ReviewLocale, Review[]> = {
  en: [
    {
      name: "Emma & Daniel Reed",
      role: "couple",
      photo: avatar("#efe3d4", "#b9875f", "ER"),
      review:
        "Doctor Wedding gave us one calm place for guests, seating, budget, and the timeline. We stopped losing details in chats and actually enjoyed the last month before the wedding.",
    },
    {
      name: "Sophia Miller",
      role: "organizer",
      photo: avatar("#f1e4bf", "#c9a84c", "SM"),
      review:
        "I manage twelve weddings at the same time, and the shared workspace made status checks much faster. My assistant and I now update tasks once instead of repeating everything across spreadsheets.",
    },
    {
      name: "Olivia Bennett",
      role: "organizer",
      photo: avatar("#dfe7f6", "#6a7a9a", "OB"),
      review:
        "The guest list and RSVP flow saved hours every week. I can see changes immediately, assign follow-ups, and keep couples informed without another long email thread.",
    },
    {
      name: "Maya Collins",
      role: "organizer",
      photo: avatar("#f2dfd3", "#b8943f", "MC"),
      review:
        "Budget planning became much cleaner for our team. Vendor payments, estimates, and final numbers are easier to compare, so our planning meetings stay focused.",
    },
    {
      name: "Isabella Hart",
      role: "organizer",
      photo: avatar("#e7e0f0", "#7a6a9a", "IH"),
      review:
        "Timeline coordination is where we felt the biggest gain. Everyone sees the same schedule, and last-minute changes no longer require ten separate calls.",
    },
  ],
  ru: [
    {
      name: "Анна и Максим Волковы",
      role: "couple",
      photo: avatar("#efe3d4", "#b9875f", "АВ"),
      review:
        "Doctor Wedding собрал гостей, рассадку, бюджет и тайминг в одном спокойном месте. Мы перестали искать детали в чатах и наконец спокойно готовились к свадьбе.",
    },
    {
      name: "Екатерина Смирнова",
      role: "organizer",
      photo: avatar("#f1e4bf", "#c9a84c", "ЕС"),
      review:
        "Я веду несколько свадеб параллельно, и рабочее пространство сильно ускорило контроль статусов. Команда обновляет задачи один раз, без дублирования в таблицах.",
    },
    {
      name: "Мария Орлова",
      role: "organizer",
      photo: avatar("#dfe7f6", "#6a7a9a", "МО"),
      review:
        "Список гостей и RSVP экономят часы каждую неделю. Я сразу вижу изменения, назначаю follow-up и держу пару в курсе без длинных переписок.",
    },
    {
      name: "Полина Коваль",
      role: "organizer",
      photo: avatar("#f2dfd3", "#b8943f", "ПК"),
      review:
        "Бюджет стал намного прозрачнее для команды. Предоплаты, оценки и финальные суммы проще сравнивать, поэтому встречи проходят быстрее и по делу.",
    },
    {
      name: "Дарья Лебедева",
      role: "organizer",
      photo: avatar("#e7e0f0", "#7a6a9a", "ДЛ"),
      review:
        "Самый заметный эффект был в тайминге дня. Все видят один и тот же план, а срочные изменения больше не требуют десятка отдельных звонков.",
    },
  ],
};
