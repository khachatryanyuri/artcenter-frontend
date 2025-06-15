import { ILink } from '@lib/components/common/interface/navbar';

export const LINKS: ILink[] = [
  {
    text: 'Заполнить заявку',
    id: 'fllOutTheApplication',
    menu: [
      { text: 'На уроки', href: '/application/online-lessons' },
      { text: 'На услуги', href: '/application/services' },
    ],
  },
  {
    text: 'О школе',
    id: 'аboutSchool',
    menu: [
      { text: 'О нас', href: '/about' },
      { text: 'Вопрос-ответ', href: '/helps' },
      { text: 'Скидки', href: '/discounts' },
      { text: 'Оплата', href: '/payment' },
    ],
  },

  {
    text: 'Уроки',
    id: 'lessons',
    href: '/online-courses',
    menu: [
      { text: 'Вокал', href: '/online-courses/vocals' },
      { text: 'Музыкальные инструменты', href: '/online-courses/musical_instruments' },
      { text: 'Теория музыки', href: '/online-courses/music_theory' },
      { text: 'Создание музыки', href: '/online-courses/making_music' },
      { text: 'Для детей', href: '/online-courses/for_children' },
      { text: 'Для преподавателей музыки', href: '/online-courses/for_music_teachers' },
      { text: 'Дополнительные предметы', href: '/online-courses/additional_items' },
      { text: 'Языки', href: '/online-courses/languages' },
    ],
  },
  { href: '/services', text: 'Услуги', id: 'services' },
  { href: '/contactus', text: 'Контакты', id: 'contact' },
];

export const LANGUAGES = [
  { href: '/', text: 'Рус' },
  { href: '/', text: 'Eng' },
];

export const NAVIGATE_PAGES = { HOME_PAGE: '/' };
