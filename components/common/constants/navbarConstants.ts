import { ILink } from '@lib/components/common/interface/navbar';

export const LINKS: ILink[] = [
  {
    text: 'Заполнить заявку',
    id: 'fllOutTheApplication',
    menu: [
      { text: 'На уроки', href: '/' },
      { text: 'На услуги', href: '/' },
      { text: 'На подарочный сертификат', href: '/' },
    ],
  },
  {
    text: 'О школе',
    id: 'аboutСchool',
    menu: [
      { text: 'Отзывы', href: '/' },
      { text: 'Вопрос-ответ', href: '/' },
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
  { href: '/', text: 'Контакты', id: 'contact' },
];

export const LINKS_MIN: ILink[] = [
  {
    text: 'ԱզատազԷն ԿՀԿ',
    id: 'khk',
    menu: [
      { text: 'Մեր Մասին', href: '/about' },
      { text: 'Ծառայություններ', href: '/services' },
      { text: 'Անդամակցություն', href: '/membership' },
      { text: 'Խորհրդի կազմ', href: '/board-members' },
      { text: 'Գործընկերներ', href: '/partnership' },
      { text: 'Ռազմավարություն', href: '/strategy' },
      { text: 'Կանոնադրություն', href: '/statute' },
    ],
  },
  {
    text: 'Քննություն',
    id: 'exam',
    menu: [
      { text: 'Գրանցվել', href: '/calendly' },
      { text: 'Տեսական քննություն', href: '/theoretical-exam' },
      { text: 'Գործնական քննություն', href: '/practical-exam' },
      { text: 'Փորձնական քննություն', href: '/exam' },
    ],
  },
  {
    text: 'Օգտակար',
    id: 'usefull',
    menu: [
      { text: 'Զենքի ձեռքբերում', href: '/first-weapon' },
      { text: 'Լրակազմ', href: '/inventory' },
      { text: 'Փաստաթղթեր', href: '/laws' },
    ],
  },
  {
    text: 'Նորություններ',
    id: 'news',
    menu: [
      { href: '/news', text: 'Նորություններ' },
      { href: '/media', text: 'Մեդիա' },
    ],
  },
  {
    text: 'Այլ',
    id: 'other',
    menu: [
      { href: '/shooting-range', text: 'Հրաձգարաններ' },
      { href: '/shop', text: 'Ռազմախանութ' },
      {
        text: 'Դասընթացներ',
        href: '/courses',
      },
    ],
  },
  { href: '/contactus', text: 'Կապ', id: 'contact' },
];

export const LINKS_MOBILE: ILink[] = [
  {
    text: 'ԱզատազԷն ԿՀԿ',
    menu: [
      { text: 'Մեր Մասին', href: '/about' },
      { text: 'Ծառայություններ', href: '/services' },
      { text: 'Անդամակցություն', href: '/membership' },
      { text: 'Խորհրդի կազմ', href: '/board-members' },
      { text: 'Գործընկերներ', href: '/partnership' },
      { text: 'Ռազմավարություն', href: '/strategy' },
      { text: 'Կանոնադրություն', href: '/statute' },
    ],
  },
  {
    text: 'Քննություն',
    id: 'exam',
    menu: [
      { text: 'Գրանցվել', href: '/calendly' },
      { text: 'Տեսական քննություն', href: '/theoretical-exam' },
      { text: 'Գործնական քննություն', href: '/practical-exam' },
      { text: 'Փորձնական քննություն', href: '/exam' },
    ],
  },

  {
    text: 'Դասընթացներ',
    href: '/courses',
  },
  { href: '/shooting-range', text: 'Հրաձգարաններ' },
  {
    text: 'Օգտակար',
    menu: [
      { text: 'Զենքի ձեռքբերում', href: '/first-weapon' },
      { text: 'Լրակազմ', href: '/inventory' },
      { text: 'Փաստաթղթեր', href: '/laws' },
    ],
  },
  {
    text: 'Այլ',
    menu: [
      { href: '/shop', text: 'Ռազմախանութ' },
      { href: '/news', text: 'Նորություններ' },
      { href: '/media', text: 'Մեդիա' },
    ],
  },
  { href: '/contactus', text: 'Կապ' },
];
export const LINK_donation = { href: '/donation', text: 'Նվիրաբերել' };

export const LANGUAGES = [
  { href: '/', text: 'Рус' },
  { href: '/', text: 'Eng' },
];

export const USER_ACTIONS = [
  { href: '/signup', text: 'Գրանցվել' },
  { href: '/signin', text: 'Մուտք գործել' },
];

export const SETTINGS = [
  { id: 'profile', name: 'Անձնական էջ' },
  { id: 'logout', name: 'Դուրս գալ' },
];

export const IMAGES_ALT = { LOGO_ALT: 'Azatazen logo', MENUE: 'menue' };
export const NAVIGATE_PAGES = { HOME_PAGE: '/' };
