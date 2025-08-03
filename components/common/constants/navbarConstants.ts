import { ILink } from '@lib/components/common/interface/navbar';

export const LINKS: ILink[] = [
  {
    text: 'fillOutApplication', // Заполнить заявку
    id: 'fllOutTheApplication',
    menu: [
      { text: 'forLessons', href: '/application/online-lessons' }, // На уроки
      { text: 'forServices', href: '/application/services' }, // На услуги
    ],
  },
  {
    text: 'aboutSchool', // О школе
    id: 'aboutSchool',
    menu: [
      { text: 'aboutUs', href: '/about' }, // О нас
      { text: 'faq', href: '/helps' }, // Вопрос-ответ
      { text: 'discounts', href: '/discounts' }, // Скидки
      { text: 'payment', href: '/payment' }, // Оплата
    ],
  },
  {
    text: 'lessons', // Уроки
    id: 'lessons',
    href: '/online-courses',
    menu: [
      { text: 'vocals', href: '/online-courses/vocals' }, // Вокал
      { text: 'musicalInstruments', href: '/online-courses/musical_instruments' }, // Музыкальные инструменты
      { text: 'musicTheory', href: '/online-courses/music_theory' }, // Теория музыки
      { text: 'musicCreation', href: '/online-courses/making_music' }, // Создание музыки
      { text: 'forChildren', href: '/online-courses/for_children' }, // Для детей
      { text: 'forTeachers', href: '/online-courses/for_music_teachers' }, // Для преподавателей музыки
      { text: 'additionalSubjects', href: '/online-courses/additional_items' }, // Дополнительные предметы
      { text: 'languages', href: '/online-courses/languages' }, // Языки
    ],
  },
  { href: '/services', text: 'services', id: 'services' }, // Услуги
  { href: '/contactus', text: 'contacts', id: 'contact' }, // Контакты
];

export const LANGUAGES = [
  { value: 'ru', text: 'Рус' },
  { value: 'en', text: 'Eng' },
  { value: 'hy', text: 'Հայ' },
];

export const NAVIGATE_PAGES = { HOME_PAGE: '/' };
