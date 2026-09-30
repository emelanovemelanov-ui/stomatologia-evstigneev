export const clinic = {
  name: "Семейная стоматология доктора Евстигнеева",
  shortName: "Стоматология Евстигнеева",
  address: "Московская область, Шаховской район, с. Раменье, ул. Центральная, д. 10 (возле магазина «Магнит»)",
  addressShort: "с. Раменье, ул. Центральная, д. 10",
  phoneDisplay: "+7 (925) 807-58-07",
  phoneTel: "+79258075807",
  whatsapp: "79258075807",
  vkUrl: "https://vk.ru/dr.evstigneev",
  inn: "5079014956",
  legalName: "ООО «Евстигнеев»",
  license: "Л041-01162-50/00632078",
  workHours: "Пн–Пт: 8:30–15:00; Сб–Вс: выходной",
  bookingHours: "Запись по телефону: Пн–Пт 9:00–14:00",
  tagline: "Качественное лечение с комфортом для всей семьи",
  about: [
    "Клиника основана главным врачом и ведущим специалистом Евстигнеевым Дмитрием Юрьевичем.",
    "Имея опыт работы более 10 лет, мы совместно с Евстигнеевой Юлией Игоревной и Евстигнеевым Юрием Евгеньевичем не просто лечим зубы, а предоставляем качественные стоматологические услуги.",
    "Для нас важно оказать услугу не только профессионально и технологично, но и с комфортом для вас.",
  ],
  values: [
    "Знания и соблюдение протоколов лечения",
    "Современное оборудование",
    "Качественные материалы",
    "Размеренность и внимательность",
  ],
} as const;

export type Doctor = {
  slug: string;
  fullName: string;
  specialty: string;
  bio: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dmitry",
    fullName: "Евстигнеев Дмитрий Юрьевич",
    specialty: "Главный врач, стоматолог",
    bio: "Основатель клиники, ведущий специалист. Опыт работы более 10 лет.",
  },
  {
    slug: "yulia",
    fullName: "Евстигнеева Юлия Игоревна",
    specialty: "Врач-стоматолог",
    bio: "Врач-стоматолог клиники. Благодарность администрации муниципального округа Шаховская за добросовестный труд и высокий профессионализм.",
  },
  {
    slug: "yury",
    fullName: "Евстигнеев Юрий Евгеньевич",
    specialty: "Врач-стоматолог",
    bio: "Врач-стоматолог семейной клиники.",
  },
];

export type ServiceSeed = {
  category: string;
  categorySlug: string;
  name: string;
  description: string;
  priceFrom: number | null;
  priceTo: number | null;
  durationMin: number;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  services: ServiceSeed[];
};

export function serviceCategories(): ServiceCategory[] {
  const bySlug = new Map<string, ServiceCategory>();
  for (const s of serviceSeeds) {
    const cat = bySlug.get(s.categorySlug) ?? { slug: s.categorySlug, name: s.category, services: [] };
    cat.services.push(s);
    bySlug.set(s.categorySlug, cat);
  }
  return [...bySlug.values()];
}

/** Prices from the clinic VK shop page (as of saved page). */
export const serviceSeeds: ServiceSeed[] = [
  {
    category: "Консультация и диагностика",
    categorySlug: "consultation",
    name: "Консультация",
    description: "Осмотр, сбор жалоб и рекомендации по лечению.",
    priceFrom: 500,
    priceTo: 1000,
    durationMin: 30,
  },
  {
    category: "Профилактика",
    categorySlug: "prevention",
    name: "Комплексная чистка",
    description: "Ультразвук, Air-Flow и полировка профессиональными пастами.",
    priceFrom: 4500,
    priceTo: 7000,
    durationMin: 60,
  },
  {
    category: "Терапия",
    categorySlug: "therapy",
    name: "Лечение кариеса",
    description: "Лечение кариеса с использованием современных материалов.",
    priceFrom: 6000,
    priceTo: 7000,
    durationMin: 60,
  },
  {
    category: "Эндодонтия",
    categorySlug: "endodontics",
    name: "Лечение корневых каналов",
    description: "Депульпирование, обработка и пломбирование каналов.",
    priceFrom: 4000,
    priceTo: 6000,
    durationMin: 90,
  },
  {
    category: "Хирургия",
    categorySlug: "surgery",
    name: "Удаление зуба",
    description: "Удаление зуба с применением современной анестезии.",
    priceFrom: 2500,
    priceTo: null,
    durationMin: 45,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Временная коронка",
    description: "Временная ортопедическая конструкция.",
    priceFrom: 2000,
    priceTo: null,
    durationMin: 45,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Цельнолитая коронка",
    description: "Прочная цельнолитая коронка.",
    priceFrom: 6000,
    priceTo: null,
    durationMin: 60,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Металлокерамическая коронка",
    description: "Коронка из металлокерамики.",
    priceFrom: 10000,
    priceTo: null,
    durationMin: 60,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Циркониевая коронка",
    description: "Эстетичная и прочная коронка из диоксида циркония.",
    priceFrom: 16000,
    priceTo: null,
    durationMin: 60,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Акриловый протез",
    description: "Съёмный акриловый протез.",
    priceFrom: 25000,
    priceTo: null,
    durationMin: 90,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Ацеталовый протез",
    description: "Съёмный ацеталовый протез.",
    priceFrom: 36000,
    priceTo: null,
    durationMin: 90,
  },
  {
    category: "Ортопедия и протезирование",
    categorySlug: "prosthetics",
    name: "Починка съёмного протеза",
    description: "Ремонт съёмной конструкции. Стоимость по договорённости.",
    priceFrom: null,
    priceTo: null,
    durationMin: 45,
  },
  {
    category: "Терапия",
    categorySlug: "therapy",
    name: "Микроабразия",
    description: "Коррекция поверхностных дефектов эмали. Стоимость по договорённости.",
    priceFrom: null,
    priceTo: null,
    durationMin: 45,
  },
  {
    category: "Профилактика",
    categorySlug: "prevention",
    name: "Стоматологическая каппа",
    description: "Изготовление защитной или лечебной каппы. Стоимость по договорённости.",
    priceFrom: null,
    priceTo: null,
    durationMin: 45,
  },
];
