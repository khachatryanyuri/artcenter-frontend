export const PAGE_TEXT = {
  NEW_PASSWORD: 'Նոր գաղտնաբառ',
  EMAIL: 'Էլ․ Փոստ',
  SEND: 'Ուղարկել',
  DONT_HAVE_AN_ACCOUNT: 'Դեռ չունե՞ք հաշիվ`',
  REGISTER: 'Գրանցվել',
  PASSWORD: 'Գաղտնաբառ',
  RE_PASSWORD: 'Կրկնեք գաղտնաբառը',
  SEND_RMAIL: 'Ուղարկել էլ․ հասցեին',
  SIGNIN: 'Մուտք գործել',
  FORGET_PASSWORD: 'Մոռացել եմ գաղտնաբառը',
  SURNAME: 'Ազգանուն',
  HAVE_A_ACCOUNT: 'Արդեն ունեք հաշիվ՞',
  GOOGLE_ACOUNT: 'Մուտք Google-ի հաշվի օգնությամբ',
  FACEBOOK_ACOUNT: 'Մուտք Facebook-ի հաշվի օգնությամբ',
  MODAL_TITLE: 'Դասընթացին դիմելու համար մուտք գործեք հաշիվ',
};

export const SIGNUP_FIELDS = [
  { label: 'Անուն', name: 'name', type: 'text' },
  { label: 'Ազգանուն', name: 'surname', type: 'text' },
  { label: 'Ծննդյան ամսաթիվ', name: 'birthday', type: 'date' },
  { label: 'Էլ․ Փոստ', name: 'email', type: 'email' },
  //TODO add when implement the shop
  // { label: 'Բնակության հասցե', name: 'address', type: 'text' },
  { label: 'Հեառախոսահամար', name: 'phoneNumber', type: 'text' },
  { label: 'Գաղտնաբառ', name: 'password', type: 'password' },
  { label: 'Կրկնեք գաղտնաբառը', name: 'repassword', type: 'password' },
  { label: 'Լուսանկար', name: 'picture', type: 'file' },
];

export const VALIDATION_MESSAGES = {
  EMPTY_FIELD: 'դատարկ դաշտ',
  WRONG_EMAIL: 'սխալ էլ․ հասցե',
  PASSWORDS_DONT_MATCH: 'գաղտնաբառերը չեն համապատասխանում',
  PASSWORD_REQS: 'գաղտնաբառը պետք է ունենա 8 եւ ավել նիշ',
  WRONG_FORMAT: 'Սխալ ֆորմատ',
  LESS_THAN_18_ERROR: 'Գրանցվել կարող են 18֊ից մեծ անձինք։',
};
