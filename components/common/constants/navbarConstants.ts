import { ILink } from '@lib/components/common/interface/navbar';

export const LINKS: ILink[] = [
  {
    text: 'Заполнить заявку',
    id: 'fllOutTheApplication',
    menu: [
      { text: 'На уроки', href: '/zayavka/uroki' },
      { text: 'На услуги', href: '/zayavka/uslugi' },
      { text: 'На подарочный сертификат', href: '/' },
    ],
  },
  {
    text: 'О школе',
    id: 'аboutСchool',
    menu: [
      { text: 'Отзывы', href: '/' },
      { text: 'Вопрос-ответ', href: '/helps' },
      { text: 'Скидки', href: '/' },
      { text: 'Оплата', href: '/exam' },
      { text: 'Подарочный сертификат', href: '/' },
      { text: 'Сертификат об обучении', href: '/' },
    ],
  },

  {
    text: 'Уроки',
    id: 'lessons',
    menu: [
      { text: 'Вокал', href: '/' },
      { text: 'Музыкальные инструменты', href: '/' },
      { text: 'Теория музыки', href: '/' },
      { text: 'Создание музыки', href: '/' },
      { text: 'Для детей', href: '/' },
      { text: 'Для преподавателей музыки', href: '/' },
      { text: 'Дополнительные предметы', href: '/' },
      { text: 'Языки', href: '/' },
    ],
  },
  { href: '/', text: 'Услуги', id: 'services' },
  { href: '/', text: 'Блог', id: 'blog' },
  { href: '/contactus', text: 'Контакты', id: 'contact' },
];

export const LANGUAGES = [
  { href: '/', text: 'Рус' },
  { href: '/', text: 'Eng' },
];

export const NAVIGATE_PAGES = { HOME_PAGE: '/' };
