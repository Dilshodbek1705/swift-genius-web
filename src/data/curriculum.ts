// ╔══════════════════════════════════════════════════════════════════════════╗
// ║   iOS Senior/Lead Engineering Curriculum — Turon Business Edition        ║
// ║   3 Months · 12 Modules · Aligned to 5-Layer System Design Architecture  ║
// ║   Target: Middle → Senior / Lead iOS Engineers                           ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// ── Month Map ─────────────────────────────────────────────────────────────────
//
//  MONTH 1 — Architecture Foundation          (Modules 01 – 04)
//     01 · SPM Modular Infrastructure
//     02 · SwiftUI Mastery & App Root Architecture
//     03 · Protocol-Oriented Design & AppEnvironment
//     04 · Dependency Injection & DI Container
//
//  MONTH 2 — RIBs Core Architecture           (Modules 05 – 08)
//     05 · RIBs Layer 1 — Builder & Composition Root
//     06 · RIBs Layer 2 — Interactor & Business Logic
//     07 · RIBs Layer 3 — Router & Navigation Architecture
//     08 · Advanced Custom Property Wrappers
//
//  MONTH 3 — Production-Grade Engineering     (Modules 09 – 12)
//     09 · Swift 6 Strict Concurrency & Thread Safety
//     10 · Advanced Protocol-Oriented Networking
//     11 · Enterprise SDK Integrations & Production Systems
//     12 · Testing, QA & Architecture Defence
//
// ─────────────────────────────────────────────────────────────────────────────

import type { Translations } from '../i18n/index.ts';

export interface SubSection {
  head: string;
  items: string[];
}

export interface Module {
  num: string;
  category: string;
  title: string;
  subsections: SubSection[];
}

export interface Month {
  name: string;
  items: Module[];
}

export function getModules(): Module[] {
  return [

    // ══════════════════════════════════════════════════════════════════════════
    // MONTH 1 — ARCHITECTURE FOUNDATION & MODULAR INFRASTRUCTURE
    // ══════════════════════════════════════════════════════════════════════════

    {
      num: '01',
      category: 'Modular Architecture',
      title: 'SPM Modular Infrastructure & Dependency Graphs',
      subsections: [
        {
          head: 'Why Modularise? Isolation Principles',
          items: [
            'Monolith vs. Modular: Monolit arxitekturani qismlarga boʻlish va testlash strategiyasi',
            'Dependency Graph: 5 qatlamli toʻgʻri qaramlik ierarxiyasini qurish qoidalari',
            'Cyclic Dependencies: Modullar oʻrtasidagi halokatli aylanma bogʻliqliklarni aniqlash',
          ],
        },
        {
          head: 'DesignSystem & Shared Packages',
          items: [
            'Design Tokens: Ranglar, shriftlar va oʻlchamlarni yagona modulga jamlash',
            'Resource Bundling: SPM ichida rasm va mahalliylashtirish (xcstrings) fayllari bilan ishlash',
            'Shared Infrastructure: Biometriya, tarmoq monitoringi va xavfsiz dynamic Keychain storage',
          ],
        },
        {
          head: 'CorePackage & Feature Anatomy',
          items: [
            'Core Core: AppEnvironment, DI Container va global oyna boshqaruvchilari (Alert/Snackbar)',
            'Binary Targets: Yopiq kodli uchinchi tomon frameworklarini (.xcframework) SPM ga integratsiya qilish',
            'Isolated Features: Horizontal modullarni bir-biridan mustaqil (Demo App pattern) rivojlantirish',
          ],
        },
      ],
    },

    {
      num: '02',
      category: 'SwiftUI Foundations',
      title: 'Advanced SwiftUI State, Layout & Navigation Engines',
      subsections: [
        {
          head: 'Modern SwiftUI State Management (Swift 6)',
          items: [
            'Data Driven: @State, @Binding, @Bindable va yangi @Observable makrosidan unumli foydalanish',
            'State Lifetimes: @StateObject va @ObservedObject xatolaridan qochish va xotira boshqaruvi',
            'Custom Environment: Tizimli sozlamalar va localizerlarni ierarxiya boʻylab xavfsiz uzatish',
          ],
        },
        {
          head: 'Advanced Layout & UI Primitives',
          items: [
            'ViewModifiers: Tizimli vizual koʻrinishlarni global oʻzgartirish mexanizmlari',
            'Performance Budgeting: Katta dynamic roʻyxatlarda Lazy stacklarni optimallashtirish',
            'Skeleton Screens: Koʻp fazali animatsiyaga ega boʻlgan universal Shimmer effektlarini qurish',
          ],
        },
        {
          head: 'Decoupled Navigation Engine',
          items: [
            'AnyRouter: Type-erased declarative navigatsiya (Push, Sheet, Modal va Alert tizimi)',
            'Programmatic Control: ViewModel ichidan turib popToRoot va ommaviy yopish (bulk dismiss) buyruqlari',
            'App Root Flow: Splash → Auth → Main oqimlarini holatga qarab silliq (animation) almashtirish',
          ],
        },
      ],
    },

    {
      num: '03',
      category: 'Software Engineering',
      title: 'Protocol-Oriented Architecture & Domain Inversion',
      subsections: [
        {
          head: 'Protocol-Oriented Programming & Contracts',
          items: [
            'POP Scale: Murakkab inheritance oʻrniga kompozitsiyadan foydalanish afzalliklari',
            'AppEnvironment: Seanslarni tiklash, tokenlarni tekshirish va avtomatik Logout ssenariylari',
            'Dependency Inversion (DIP): Modullarni aniq klasslarga emas, consumer-owned interfeyslarga bogʻlash',
            'SOLID in Practice: Real kod misolida SRP, OCP, LSP, ISP va DIP tamoyillarini qoʻllash',
          ],
        },
      ],
    },

    {
      num: '04',
      category: 'Dependency Injection',
      title: 'Dependency Injection & DI Container Architecture',
      subsections: [
        {
          head: 'DI Patterns & Container Implementation',
          items: [
            'Injection Types: Constructor injection vs. Service Locator pattern tahlili',
            'Custom Container: Meta-type kalitlar va dynamic casting orqali xavfsiz dynamic dynamic resolver qurish',
            'Lifecycle Rules: Singleton va Transient obyektlarning yashash muddatlarini boshqarish',
            'Composition Root: Ilova kirish qismida barcha zanjirlarni bogʻlash (AppDelegate va App bootstrap)',
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // MONTH 2 — MODULAR ARCHITECTURE IN ACTION (COMPOSER, LOGIC & NAVIGATION)
    // ══════════════════════════════════════════════════════════════════════════

    {
      num: '05',
      category: 'Component Design',
      title: 'Modular Composition Layer — Structural App Factories',
      subsections: [
        {
          head: 'Object Graph Factories',
          items: [
            'Value-Type Builders: Retain cycle xavfisiz, xotirada toza toʻplanadigan struct-based modullar',
            'AppCompositionRoot: Dynamic UI oqimlarini shartli bayroqlar (flags) orqali yigʻuvchi markaz',
            'Lazy Allocation: Modullarni faqat ekran faollashgan paytda xotiradan ajratish (allocation)',
            'Linear Wizard Flows: Koʻp bosqichli shakllar va identifikatsiya jarayonlari uchun moslashuvchan hostlar',
          ],
        },
      ],
    },

    {
      num: '06',
      category: 'Business Logic',
      title: 'The Business Logic Layer — Interactors & Shared Logic',
      subsections: [
        {
          head: 'Feature & Core Interactors',
          items: [
            'Asynchronous Interception: Xatolik va yuklanishlarni (loading state) global boshqaruvchi wrapperlar',
            'Session Management: Maxfiy kalit va tokenlarni Unix vaqtlari boʻyicha tekshirish mantiqi',
            'Cross-Module Pipeline: Sibling modullarni ulash oʻrniga protokollar orqali horizontal navigatsiya',
          ],
        },
      ],
    },

    {
      num: '07',
      category: 'Navigation Architecture',
      title: 'The Navigation Layer — Routers & Screen Coordinators',
      subsections: [
        {
          head: 'Production Navigation Topologies',
          items: [
            'Router Viewport: SwiftUI koʻrinishlariga kontekstual dynamic sheet va modallarni xavfsiz ulash',
            'Reference Loops: Struct-based Router va Builder yordamida circular reference muammosini yoʻqotish',
            'Flow State Machines: Bosqichma-bosqich boshqariladigan yoʻnalishlarni chiziqli holat matritsalariga oʻtkazish',
            'Deep Linking: URL manzillarini toʻgʻridan-toʻgʻri ichki modulli ekranlarga xavfsiz mapping qilish',
          ],
        },
      ],
    },

    {
      num: '08',
      category: 'Advanced Swift',
      title: 'Advanced Custom Property Wrappers for Enterprise Apps',
      subsections: [
        {
          head: 'Custom Wrappers Design Rules',
          items: [
            'Anatomy: wrappedValue, projectedValue ($) va boshlangʻich parametrizatsiya qoidalari',
            'Thread-Safety: Kam xarajatli os_unfair_lock yoki mutex orqali @Atomic wrapper loyihalash',
            'Data Hygiene & Validation: Matnlarni avtomatik tozalash (@Trimmed) va kirish maskalari (@Masked)',
            'Storage & Caching: Qiymatlarni maʼlum TTL (Time-To-Live) bilan saqlash va console xavfsizligi (@SensitiveData)',
          ],
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // MONTH 3 — CONCURRENCY, NETWORKING & ENTERPRISE PERFORMANCE
    // ══════════════════════════════════════════════════════════════════════════

    {
      num: '09',
      category: 'Swift Concurrency',
      title: 'Swift 6 Strict Concurrency, Actors & Thread Safety',
      subsections: [
        {
          head: 'Swift 6 Concurrency Model',
          items: [
            'Data Isolation: Sendable protokoli shartlari va dynamic crossing compiler warninglarini yechish',
            '@MainActor Bounds: UI qatlami, ViewModel va Routerni asosiy oqim xavfsizligiga moslash',
            'Actor Re-entrancy: await paytida actor holati oʻzgarib ketishi va interleaving muammolari',
            'Request Coalescing: Bir vaqtda tushgan 10 ta soʻrovni bitta token refreshga bogʻlash (Actor Task pooling)',
          ],
        },
      ],
    },

    {
      num: '10',
      category: 'Networking',
      title: 'Advanced Protocol-Oriented Networking Layers',
      subsections: [
        {
          head: 'Endpoint & Network Executing',
          items: [
            'EndpointProtocol: Sendable talablariga mos, xavfsiz HTTP soʻrov shartnomalarini tuzish',
            'NetworkExecuting Abstraction: URLSession’ni butunlay yashirish va 100% offline mock testlash imkoniyati',
            'Token Interception: 401 xatolik kelganda soʻrovlarni muzlatish, tokenni yangilab, qayta yuborish (Retry loop)',
            'Security & Logging: SSL/TLS Certificate Pinning va ishlab chiqish muhitida maxfiy maʼlumotlarni filtrlash',
          ],
        },
      ],
    },
  ];
}
/** Modullarni 3 oyga taqsimlangan ko'rinishi (oy nomlari `t` dan tarjima qilinadi). */
export function getMonths(t: Translations): Month[] {
  const modules = getModules();
  return [
    { name: t.months[0], items: modules.slice(0, 4) },
    { name: t.months[1], items: modules.slice(4, 8) },
    { name: t.months[2], items: modules.slice(8, 12) }
  ];
}
