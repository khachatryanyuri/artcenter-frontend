import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const constants = {
  FORMFIELDS: [
    { label: 'contactForm.fields.nameLabel', name: 'name', type: 'text', multiline: false },
    { label: 'contactForm.fields.emailLabel', name: 'email', type: 'email', multiline: false },
    { label: 'contactForm.fields.messageLabel', name: 'letter', type: 'text', multiline: true },
  ],
  HEADING: 'contactForm.heading',
  SENDBUTTONTEXT: 'contactForm.submitButton',
  CONTACTS_PAGE: 'contacts',
  SUCCESS_MESSAGE: 'contactForm.successMessage',
  ERROR_MESSAGE: 'contactForm.errorMessage',
  PROBLEM_TEXT: 'contactForm.errors.invalidValue',
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
