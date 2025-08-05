import { ILink } from '@lib/components/common/interface/navbar';

export const LINKS: ILink[] = [
  {
    text: 'fillOutApplication',
    id: 'fllOutTheApplication',
    menu: [
      { text: 'forLessons', href: '/application/online-lessons' },
      { text: 'forServices', href: '/application/services' },
    ],
  },
  {
    text: 'aboutSchool',
    id: 'aboutSchool',
    menu: [
      { text: 'aboutUs', href: '/about' },
      { text: 'faq', href: '/helps' },
      { text: 'discounts', href: '/discounts' },
      { text: 'payment', href: '/payment' },
    ],
  },
  {
    text: 'lessons',
    id: 'lessons',
    href: '/online-courses',
    menu: [
      { text: 'vocals', href: '/online-courses/vocals' },
      { text: 'musicalInstruments', href: '/online-courses/musical_instruments' },
      { text: 'musicTheory', href: '/online-courses/music_theory' },
      { text: 'musicCreation', href: '/online-courses/making_music' },
      { text: 'forChildren', href: '/online-courses/for_children' },
      { text: 'forTeachers', href: '/online-courses/for_music_teachers' },
      { text: 'additionalSubjects', href: '/online-courses/additional_items' },
      { text: 'languages', href: '/online-courses/languages' },
    ],
  },
  { href: '/services', text: 'services', id: 'services' },
  { href: '/contactus', text: 'contacts', id: 'contact' },
];

export const LANGUAGES = [
  { value: 'ru', text: 'Рус' },
  { value: 'en', text: 'Eng' },
  { value: 'hy', text: 'Հայ' },
];

export const SETTINGS = [
  { id: 'profile', name: 'Անձնական էջ' },
  { id: 'logout', name: 'Դուրս գալ' },
];

export const NAVIGATE_PAGES = { HOME_PAGE: '/' };
