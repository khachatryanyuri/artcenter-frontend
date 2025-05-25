import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const constants = {
  FORMFIELDS: [
    { label: 'Ваше имя', name: 'name', type: 'text', multiline: false },
    { label: 'Ваш E-mail', name: 'email', type: 'email', multiline: false },
    { label: 'Ваше сообщение или вопрос', name: 'letter', type: 'text', multiline: true },
  ],
  HEADING: 'Связаться с нами',
  SENDBUTTONTEXT: 'Отпровить',
  CONTACTS_PAGE: 'contacts',
  SUCCESS_MESSAGE: 'Ваше письмо успешно отправлено.',
  ERROR_MESSAGE: 'Ваше письмо не было зарегестрировано.',
  PROBLEM_TEXT: 'Непровильное значение.',
  INITIAL_STATE: {
    name: '',
    email: '',
    letter: '',
  },
  ERROR_STATE: {
    name: false,
    email: false,
    letter: false,
  },

  IMG_ALT: 'contact us image',
};

const CONTACT_INFO = [
  { key: 'email', icon: <EmailIcon />, link: 'mailto:info@.am', text: 'info@.am' },
  {
    key: 'location',
    icon: <LocationOnIcon />,
    link: '',
    text: 'Артцентер',
  },
  {
    key: 'phone',
    icon: <LocalPhoneIcon />,
    text: '+374 00 000000',
  },
];

export { constants, CONTACT_INFO };
