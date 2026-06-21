// src/data/mentor.ts
// Mentor bo'limi va footer uchun statik ma'lumotlar.
import type { Translations } from '../i18n/index.ts';

export interface MentorProject {
  name: string;
  logo: string;
  href: string | null;
  badge: string | null;
}

export interface SocialLink {
  name: string;
  href: string;
  logo: string;
  color: string;
}

/** Mentorning App Store loyihalari (badge tarjimasi `t` dan keladi). */
export function getMentorProjects(t: Translations): MentorProject[] {
  return [
    { name: 'MyBank UZ',       logo: '/mybank_logo.png',      href: 'https://apps.apple.com/uz/app/mybank-uz/id6503429804',                     badge: null },
    { name: 'Milliy Business', logo: '/milliy_logo.png',      href: 'https://apps.apple.com/uz/app/milliy-business/id6742812650',                badge: null },
    { name: 'Sello',           logo: '/sello_logo.png',       href: 'https://apps.apple.com/uz/app/sello-pay-payments-transfers/id1603818062',    badge: null },
    { name: 'SwiftGenius',     logo: '/swiftGenius_logo.png', href: 'https://apps.apple.com/uz/app/swiftgenius/id6759780139',                     badge: null },
    { name: 'MyBank Business', logo: '/mybank_business.png',  href: null,                                                                         badge: t.mentor.underDev },
  ];
}

/** Mentorning ta'lim muassasalari. */
export const EDUCATION: string[] = [
  'Swift Academy',
  'PDP Academy',
  'Essential Developer Academy',
  'Swiftful Thinking',
];

/** Footer ijtimoiy tarmoq havolalari. */
export const SOCIALS: SocialLink[] = [
  { name: 'Telegram',     href: 'https://t.me/iosDev007',                                        logo: '/telegram_logo.png', color: 'hover:border-blue-500' },
  { name: 'LinkedIn',     href: 'https://www.linkedin.com/in/dilshodbek-qulmirzayev-14b308282/', logo: '/linkedin_logo.png', color: 'hover:border-blue-400' },
  { name: 'Swift Genius', href: 'https://www.youtube.com/@swift_Genius',                         logo: '/youtube_logo.png',  color: 'hover:border-red-500'  },
];
