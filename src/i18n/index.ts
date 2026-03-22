// src/i18n/index.ts

export type Locale = 'uz' | 'en';

const uz = {
  // ── Navbar ─────────────────────────────────────────────────────────
  nav: {
    author:       'Muallif',
    mission:      'Missiya',
    curriculum:   "O'quv rejasi",
    architecture: 'Arxitektura',
    outcome:      'Natija',
    contact:      'Kontakt',
    enroll:       'Kursga yozilish',
  },

  // ── Hero ───────────────────────────────────────────────────────────
  hero: {
    badge: "3 oylik intensiv o'quv dasturi",
    title: 'Professional \niOS Muhandisligi',
    desc1: 'Murakkab tizimlarni loyihalash:',
    desc2: 'Arxitektura',
    desc3: ', ',
    desc4: 'modullashtirish va mustahkam yechimlar.',
    cta:   'Batafsil',
  },

  // ── Mentor ─────────────────────────────────────────────────────────
  mentor: {
    education: "Ta'lim",
    underDev:  'Ishlab chiqilmoqda',
  },

  // ── Mission ────────────────────────────────────────────────────────
  mission: {
    title1:      'Kurs',
    title2:      'Missiyasi',
    quote:       '"Bugungi IT sohasida shunchaki SwiftUI interfeyslarini chizish yetarli emas. Haqiqiy Production darajasidagi loyihalar har qanday o\'zgarishga moslashuvchan (Maintainable) va ishonchli (Testable) kod bazasi talab qiladi. Ushbu kurs iOS Engineeringni yangi bosqichiga olib chiqib, yirik tizimlarni professional arxitektura asosida loyihalashga yo\'naltirilgan."',
    forWhomLabel: 'Kimlar uchun:',
    forWhomBadge: 'Strong Junior & Middle iOS Engineerlar uchun',
    forWhomDesc:  '"Spagetti koddan" xalos bo\'lish va tizimga professional iOS arxitektor ko\'zi bilan qarashni istovchi dasturchilar uchun.',
    feat1: "Ilovani bir-biriga bog'lanmagan modullarga ajratish va RIBs patterni orqali yuqori darajadagi Scalability-ga erishish.",
    feat2: "SOLID tamoyillari, POP va OOP paradigmalari asosidagi professional \"Clean Code\" madaniyati.",
    feat3: "Biznes mantiqni UI qatlamidan to'liq ajratish va qatlamlar o'rtasida xatosiz Data Flow-ni yo'lga qo'yish.",
  },

  // ── Curriculum ─────────────────────────────────────────────────────
  curriculum: {
    title1: "O'quv",
    title2: 'Rejasi',
  },

  months: [
    "1-oy — SwiftUI Foundation & Application Architecture",
    "2-oy — Engineering & Global Architecture",
    "3-oy — Production Features & Advanced Engineering",
  ],

  // ── Modules (faqat tarjima qilinadigan qismlar) ────────────────────
  modules: [
    { title: 'UI Elements, State & Navigation',         subs: ['State va Data Flow', 'Lists va Dynamic UI'] },
    { title: 'App Lifecycle & Flow Architecture',        subs: ['Practical: Lifecycle-driven management'] },
    { title: 'MVVM Architecture',                        subs: [] },
    { title: 'Dependency Injection & POP',               subs: [] },
    { title: 'Global Managers & SOLID',                  subs: [] },
    { title: 'Interactor Layer & Refactoring',           subs: ['Centralized global Business Logic'] },
    { title: 'CoreBuilder & Composition Root',           subs: [] },
    { title: 'CoreRouter & Routing Patterns',            subs: [] },
    { title: 'Environment & Build Configuration',        subs: [] },
    { title: 'Analytics, Security & Localization',       subs: ['App Security & Protected UI'] },
    { title: 'Modular Architecture & RIBs',              subs: [] },
    { title: 'Unit & UI Testing Strategies',             subs: [] },
  ],

  // ── Final Picture ──────────────────────────────────────────────────
  finalPicture: {
    scalability: "Istalgancha modullarni qo'shish va kengaytirish imkoniyati.",
    testability: "Har bir qatlam DI va Protocollar orqali 100% testlanuvchan.",
    isolation:   "Business Logic UI dan butunlay ajratilgan tizim.",
  },

  // ── RIBs ───────────────────────────────────────────────────────────
  ribs: {
    deepLink:        "Ilovaning istalgan qismiga yo'naltirish.",
    businessLogic:   "UI ga bog'lanmagan mantiq boshqaruvi.",
    extremeIsolation:"Modullar o'rtasidagi qat'iy nazorat.",
  },

  // ── Outcome ────────────────────────────────────────────────────────
  outcome: {
    title1: 'Kutilayotgan',
    title2: 'Natija',
  },

  outcomeList: [
    { title: "Advanced MVVM / VIPER",            desc: "'Massive ViewController' muammolariga chek qo'yib, biznes mantiqni UI'dan 100% ajratish." },
    { title: "Modular Clean Architecture",       desc: "'Tegma buzib qo\`yasan' qabilidagi kodlardan xalos bo'lib, loyihani RIBs asosida butunlay mustaqil modullarga bo'lish." },
    { title: "Production-Grade Unit Testing",    desc: "Biznes mantiqni 100% Test Coverage bilan himoyalab, ilova barqarorligini to'liq kafolatlash." },
    { title: "Advanced DI & Routing",            desc: "Ekrandan ekranga o'tishdagi 'spagetti' navigatsiyaga chek qo'yib, UI'dan to'liq uzilgan markazlashgan xavfsiz routing yaratish." },
    { title: "SOLID & Clean Code",               desc: "O'zgarishlarga chidamli va oson kengaytiriladigan (Scalable) mustahkam kod bazasini qurish." },
    { title: "Core Infrastructure",              desc: "Markazlashgan CoreRouter, CoreBuilder va CoreInteractor komponentlari qo'llanilgan arxitektura." },
    { title: "Production-Ready Base",            desc: "Istalgan yangi yirik loyihani qo'rqmasdan boshlash uchun kuchli shablon (Boilerplate)." },
  ],

  // ── FAQ ────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Kursga qo'shilish uchun qanday daraja va texnik bilimlar talab qilinadi?",
      a: "Kurs kamida 1 yillik amaliy tajribaga ega (Strong Junior) dasturchilar uchun mo'ljallangan. Sizdan SwiftUI, Swift (OOP/POP) va Git bo'yicha mustaqil ishlash tajribasi talab qilinadi. Noldan o'rganayotganlar uchun bu kurs og'irlik qiladi.",
    },
    {
      q: "Kursda qaysi frameworkdan foydalaniladi: SwiftUI yoki UIKit?",
      a: "SwiftUI",
    },
    {
      q: "Nega bu kursda o'qishim kerak? AI (ChatGPT, Claude) ga prompt yozsam barcha ishlarni qilib beradi-ku.",
      a: "AI taqdim etgan yechimlarni nazorat qilish, xatosini topish va yirik tizimga moslashtirish uchun dasturchining o'zida chuqur arxitektura bilimi bo'lishi shart. Biz bilan aynan 'AI boshqara olmaydigan' muhandislik mahoratini o'zlashtirasiz.",
    },
    {
      q: "Loyiha arxitekturasini noldan quramizmi va u qanday loyiha bo'ladi?",
      a: "Ha, biz noldan boshlab har qanday yirik domen (bank, e-commerce) uchun mos keluvchi universal arxitektura quramiz. Fokus butunlay biznes mantiq va tizim dizaynida bo'lgani sababli, UI ataylab minimal saqlanadi.",
    },
    {
      q: "Kurs qancha vaqt davom etadi va darslar qanday formatda o'tkaziladi?",
      a: "Kurs 3 oy davom etadi. Darslar haftada 2 marta, 2.5–3 soatdan mentor bilan kelishilgan holda oflayn yoki onlayn formatda bo'lib o'tadi.",
    },
    {
      q: "Dars yozuvlari va materiallar kursdan keyin ham menda qoladimi?",
      a: "Ha. Barcha dars yozuvlari, arxitektura sxemalari va yozilgan kodlar (Source code) sizda umrbod qoladi.",
    },
    {
      q: "Uy vazifalari va amaliyot qanday tekshiriladi?",
      a: "GitHub repozitoriyingizda tekshiriladi. Siz kodni Pull Request (PR) qilasiz, mentor esa uni Code Review qiladi.",
    },
    {
      q: "Kursni tugatgandan so'ng men Senior iOS Developer bo'lamanmi?",
      a: "Seniorlik — bu yillar davomida to'plangan tajriba va mas'uliyat natijasidir. Kurs sizni bittada Senior qilib qo'ymaydi, lekin Senior darajasida fikrlashga, toza kod yozishga va murakkab tizimlarni mustaqil boshqarishga o'rgatadi.",
    },
    {
      q: "Kurs narxi qancha va to'lovni bo'lib to'lash imkoniyati bormi?",
      a: "Oylik to'lov — 2,500,000 UZS (Jami 3 oy). Agar kurs uchun to'liq to'lovni oldindan qilsangiz, 15% chegirma taqdim etiladi. Joylar soni sifatli Code Review ta'minlash maqsadida qat'iy cheklangan (maksimum 12 kishi).",
    },
    {
      q: "Kurs narxi biroz qimmat emasmi? Bu sarmoya o'zini oqlaydimi?",
      a: "Bu shunchaki to'lov emas, daromad potensialingizni oshirishga qaratilgan sarmoyadir. O'rganilgan arxitektura bilimlari intervyulardan muvaffaqiyatli o'tish ko'rsatkichingizni sezilarli darajada oshiradi. Kasbiy darajangizning (Grade) bir pog'ona ko'tarilishi kurs investitsiyasini birinchi oydanoq qoplab beradi.",
    },
  ],

  // ── Footer ─────────────────────────────────────────────────────────
  footer: {
    title1: "BOG'LANISH",
    title2: 'UCHUN',
  },
} as const;

// ────────────────────────────────────────────────────────────────────
const en: typeof uz = {
  nav: {
    author:       'Author',
    mission:      'Mission',
    curriculum:   'Curriculum',
    architecture: 'Architecture',
    outcome:      'Outcome',
    contact:      'Contact',
    enroll:       'Enroll Now',
  },

  hero: {
    badge: '3-Month Intensive Program',
    title: 'Professional \niOS Engineering',
    desc1: 'Designing complex systems:',
    desc2: 'Architecture',
    desc3: ', ',
    desc4: 'modularization & robust solutions.',
    cta:   'Learn More',
  },

  mentor: {
    education: 'Education',
    underDev:  'In Development',
  },

  mission: {
    title1:      'Course',
    title2:      'Mission',
    quote:       '"Simply drawing SwiftUI interfaces is no longer enough in today\'s IT industry. Real production-level projects require a codebase that is Maintainable and Testable under any change. This course takes iOS Engineering to a new level, focused on architecting large-scale systems professionally."',
    forWhomLabel: 'Who is it for:',
    forWhomBadge: 'For Strong Junior & Middle iOS Engineers',
    forWhomDesc:  'For developers who want to escape "spaghetti code" and learn to look at a system through the eyes of a professional iOS architect.',
    feat1: 'Split the app into loosely coupled modules and achieve high Scalability through the RIBs pattern.',
    feat2: 'A professional Clean Code culture based on SOLID principles, POP and OOP paradigms.',
    feat3: 'Fully decouple business logic from the UI layer and establish error-free Data Flow between layers.',
  },

  curriculum: {
    title1: 'Course',
    title2: 'Curriculum',
  },

  months: [
    "Month 1 — SwiftUI Foundation & Application Architecture",
    "Month 2 — Engineering & Global Architecture",
    "Month 3 — Production Features & Advanced Engineering",
  ],

  modules: [
    { title: 'UI Elements, State & Navigation',         subs: ['State & Data Flow', 'Lists & Dynamic UI'] },
    { title: 'App Lifecycle & Flow Architecture',        subs: ['Practical: Lifecycle-driven management'] },
    { title: 'MVVM Architecture',                        subs: [] },
    { title: 'Dependency Injection & POP',               subs: [] },
    { title: 'Global Managers & SOLID',                  subs: [] },
    { title: 'Interactor Layer & Refactoring',           subs: ['Centralized Global Business Logic'] },
    { title: 'CoreBuilder & Composition Root',           subs: [] },
    { title: 'CoreRouter & Routing Patterns',            subs: [] },
    { title: 'Environment & Build Configuration',        subs: [] },
    { title: 'Analytics, Security & Localization',       subs: ['App Security & Protected UI'] },
    { title: 'Modular Architecture & RIBs',              subs: [] },
    { title: 'Unit & UI Testing Strategies',             subs: [] },
  ],

  finalPicture: {
    scalability: 'Add and extend modules without limits.',
    testability: 'Every layer is 100% testable via DI and Protocols.',
    isolation:   'A system where Business Logic is fully separated from the UI.',
  },

  ribs: {
    deepLink:         'Navigate to any part of the app via deep links.',
    businessLogic:    'Logic management independent of the UI.',
    extremeIsolation: 'Strict control between modules.',
  },

  outcome: {
    title1: 'Expected',
    title2: 'Outcome',
  },

  outcomeList: [
    { title: "Advanced MVVM / VIPER",            desc: "Putting an end to 'Massive ViewController' problems and 100% separating business logic from the UI." },
    { title: "Modular Clean Architecture",       desc: "Getting rid of 'don't touch it or you'll break it' code and fully splitting the project into independent modules based on RIBs." },
    { title: "Production-Grade Unit Testing",    desc: "Protecting business logic with 100% Test Coverage and fully guaranteeing application stability." },
    { title: "Advanced DI & Routing",            desc: "Putting an end to 'spaghetti' navigation between screens and creating centralized safe routing fully decoupled from UI." },
    { title: "SOLID & Clean Code",               desc: "Building a robust codebase that is resilient to changes and easily extensible (Scalable)." },
    { title: "Core Infrastructure",              desc: "Architecture employing centralized CoreRouter, CoreBuilder, and CoreInteractor components." },
    { title: "Production-Ready Base",            desc: "A powerful template (Boilerplate) for fearlessly starting any new large project." },
  ],

  faqs: [
    {
      q: "What level and technical skills are required to join the course?",
      a: "The course is designed for developers with at least 1 year of practical experience (Strong Junior). You need independent working experience with SwiftUI, Swift (OOP/POP), and Git. Beginners will find this course too challenging.",
    },
    {
      q: "Which framework is used in the course: SwiftUI or UIKit?",
      a: "SwiftUI",
    },
    {
      q: "Why should I study here? AI (ChatGPT, Claude) can do all the work if I write a prompt.",
      a: "To control AI-provided solutions, find errors, and adapt them to large systems, a developer must have deep architectural knowledge. With us, you'll master engineering skills that 'AI cannot manage'.",
    },
    {
      q: "Do we build a project architecture from scratch, and what kind of project will it be?",
      a: "Yes, we build a universal architecture from scratch suitable for any large domain (banking, e-commerce). The focus is entirely on business logic and system design, so the UI is intentionally kept minimal.",
    },
    {
      q: "How long does the course last and what format are the classes?",
      a: "The course lasts 3 months. Classes are held twice a week, 2.5–3 hours each, in offline or online format agreed with the mentor.",
    },
    {
      q: "Will I keep the class recordings and materials after the course?",
      a: "Yes. All class recordings, architecture diagrams, and written code (Source code) remain yours for life.",
    },
    {
      q: "How are homework and practice reviewed?",
      a: "Reviewed in your GitHub repository. You submit the code via Pull Request (PR), and the mentor performs a Code Review.",
    },
    {
      q: "Will I become a Senior iOS Developer after finishing the course?",
      a: "Seniority is the result of experience and responsibility accumulated over years. The course won't make you a Senior overnight, but it will teach you to think at a Senior level, write clean code, and independently manage complex systems.",
    },
    {
      q: "How much does the course cost and is there an installment option?",
      a: "Monthly payment — 2,500,000 UZS (3 months total). If you pay the full course fee upfront, a 15% discount is provided. Spots are strictly limited to ensure quality Code Review (maximum 12 people).",
    },
    {
      q: "Isn't the course price a bit expensive? Is this investment worth it?",
      a: "This is not just a payment — it's an investment aimed at increasing your earning potential. The architectural knowledge gained significantly improves your success rate in interviews. Leveling up your grade by one step covers the course investment from the first month.",
    },
  ],

  footer: {
    title1: 'GET IN',
    title2: 'TOUCH',
  },
};

// ────────────────────────────────────────────────────────────────────
const translations: Record<Locale, typeof uz> = { uz, en };

export function getLang(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof uz;
