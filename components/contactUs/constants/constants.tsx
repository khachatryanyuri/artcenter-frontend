import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const constants = {
  FORMFIELDS: [
    { label: 'Անուն Ազգանուն', name: 'name', type: 'text', multiline: false },
    { label: 'Էլ․ Հասցե', name: 'email', type: 'email', multiline: false },
    { label: 'Նամակ', name: 'letter', type: 'text', multiline: true },
  ],
  HEADING: 'Կապ Ազատազէնի հետ',
  SENDBUTTONTEXT: 'Դիմել',
  CONTACTS_PAGE: 'contacts',
  SUCCESS_MESSAGE: 'Ձեր նամակը հաջողությամբ ուղարկված է։',
  ERROR_MESSAGE: 'Ձեր նամակը չի գրանցվել։',
  PROBLEM_TEXT: 'Ունենք խնդիր',
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
  { key: 'email', icon: <EmailIcon />, link: 'mailto:info@azatazen.am', text: 'info@azatazen.am' },
  {
    key: 'location',
    icon: <LocationOnIcon />,
    link: 'https://yandex.ru/maps/org/azatazen/123975783232/?ll=44.180671%2C40.391897&mode=search&sll=44.635154%2C40.159158&sspn=0.288469%2C0.134506&text=azatazen&z=9',
    text: 'Ողջաբերդ',
  },
  {
    key: 'phone',
    icon: <LocalPhoneIcon />,
    text: '+374 41 542002',
  },
];

export { constants, CONTACT_INFO };
