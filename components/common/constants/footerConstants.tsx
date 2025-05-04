import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

export const ALL_RIGHTS_RESERVED = '© 2024 Azatazen. All rights reserved.';
export const BOTTOM_DATA = [
  { title: 'Գաղտնիության քաղաքականությունը', link: '/statute' },
  { title: 'Օգտվելու պայմանները', link: '/statute' },
];

export const SECTIONS_DATA = [
  {
    title: 'Ազատազէն ԿՀԿ',
    data: [
      { subTitle: 'Մեր Մասին', link: '/about' },
      { subTitle: 'Խորհրդի կազմ', link: '/board-members' },
      { subTitle: 'Անդամակցություն', link: '/membership' },
      { subTitle: 'Ծառայություններ', link: '/services' },
      { subTitle: 'Գործընկերներ', link: '/partnership' },
      { subTitle: 'Ռազմավարություն', link: '/strategy' },
      { subTitle: 'Կանոնադրություն', link: '/statute' },
      { subTitle: 'Աջակցել', link: '/donation' },
      { subTitle: 'Կապ', link: '/contactus' },
    ],
  },
  {
    title: 'Օգտակար',
    data: [
      { subTitle: 'Օրենսդրություն', link: '/laws' },
      { subTitle: 'Զենքի ձեռքբերում', link: '/first-weapon' },
      { subTitle: 'Զենքի խանութները ՀՀ-ում', link: '/shop' },
      { subTitle: 'Լրակազմ', link: '/inventory' },
    ],
  },
  {
    title: 'Նորություններ',
    data: [
      { subTitle: 'Նորություններ', link: '/news' },
      { subTitle: 'Մեդիա', link: '/media' },
    ],
  },

  {
    title: 'Այլ',
    data: [
      { subTitle: 'Հրաձգարան', link: '/shooting-range' },
      { subTitle: 'Խանութ', link: '/shop' },
      { subTitle: 'Դասընթացներ', link: '/courses' },
    ],
  },
  {
    title: 'Օգտատեր',
    data: [
      { subTitle: 'Գրանցվել', link: '/signin' },
      { subTitle: 'Մուտք գործել', link: '/signup' },
      { subTitle: 'Նվիրաբերել', link: '/donation' },
    ],
  },
];

export const SOCIAL_MEDIA = [
  {
    key: 'youtube',
    icon: (style: string) => <YouTube sx={{ color: style }} />,
    link: 'https://www.youtube.com/@Azatazen',
  },
  {
    key: 'facebook',
    icon: (style: string) => <Facebook sx={{ color: style }} />,
    link: 'https://www.facebook.com/azatazen',
  },
  {
    key: 'instagram',
    icon: (style: string) => <Instagram sx={{ color: style }} />,
    link: 'https://www.instagram.com/azatazen/',
  },
  {
    key: 'linkedIn',
    icon: (style: string) => <LinkedIn sx={{ color: style }} />,
    link: 'https://am.linkedin.com/company/azatazenrhk',
  },
];
