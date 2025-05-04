import { IServicesInputField, ServicesInputFieldType, ServicesType } from '@lib/services/interface/services/services';

const { GiftCards } = ServicesType;
const { EMAIL, NUMBER, RADIOGROUP, SELECT, TEXT } = ServicesInputFieldType;

const defineServiceInputField: (type: string) => IServicesInputField[] = (type: string) => {
  return [
    { type: TEXT, label: 'Ազգանուն, Անուն, Հայրանուն', name: 'fullName' },
    { type: TEXT, label: 'Հեռախոսահամար', name: 'phoneNumber' },
    { type: EMAIL, label: 'Էլեկտրոնային հասցե', name: 'email' },
    { type: SELECT, label: 'Ծառայության տեսակ', name: 'selectServices' },
    { type: RADIOGROUP, label: 'Ընտրեք Հրաձգարանը', name: 'shootingRange', title: ['Երևան', 'Վայք', 'Վանաձոր'] },
    {
      type: NUMBER,
      label: type === GiftCards ? 'Քանակ' : 'Նշեք այցելուների քանակ',
      name: 'count',
      inputProps: { min: 0 },
    },
    { type: TEXT, label: 'Ունե՞ք հարցեր կամ այլ նշումներ', name: 'questions', multiline: true, rows: 3 },
  ];
};

const defineErrorKeys: (type: string) => string[] = (type: string) => {
  return type === GiftCards
    ? ['fullName', 'phoneNumber', 'email', 'count']
    : ['fullName', 'phoneNumber', 'email', 'count', 'shootingRange'];
};

const stripHtmlTagsWithRegex = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

const definePageContent = (type: string, contents: any) => {
  const { otherServicesType, freeEntranceType, giftCardsType, shootingInAzatazenType, teamEventsType } = contents;
  switch (type) {
    case ServicesType.Another:
      return {
        title: otherServicesType?.title,
        desc: otherServicesType?.desc,
        image: 'https://azatazen.am/services/otherServicesImage.jpg',
      };
    case ServicesType.FreeEntryWithYourWeapon:
      return {
        title: freeEntranceType?.title,
        desc: freeEntranceType?.desc,
        image: 'https://azatazen.am/services/serviceFreeEntrance.png',
      };
    case ServicesType.GiftCards:
      return {
        title: giftCardsType?.title,
        desc: giftCardsType?.desc,
        image: 'https://azatazen.am/services/giftCardsImage.jpg',
      };
    case ServicesType.Shooting:
      return {
        title: shootingInAzatazenType?.title,
        desc: shootingInAzatazenType?.desc,
        image: 'https://azatazen.am/services/shootingInAzatazenImage.jpg',
      };
    case ServicesType.TeamEvents:
      return {
        title: teamEventsType?.title,
        desc: teamEventsType?.desc,
        image: 'https://azatazen.am/services/teamEventsImage.png',
      };
    default:
      return {
        title: { arm: 'Ծանոթացիր այլ միջոցառումներին' },
        desc: {
          arm: 'Ազատազենը առաջարկում է թիմբիլդինգի հատուկ ծառայություններ կորպորատիվ հաճախորդների համար: Մեր թիմբիլդինգ միջոցառումները նպաստում են համագործակցության, վստահության և առաջնորդության հմտությունների զարգացմանը: 80% կորպորատիվ հաճախորդների կողմից մեր թիմբիլդինգ միջոցառումները բարձր գնահատված են՝ որպես արդյունավետ և նպաստավոր փորձ։ Եկեք և միացեք մեզ՝ ձեր թիմի միասնականությունն ու արդյունավետությունը բարելավելու համար։',
        },
        image: 'https://azatazen.am/services/otherServicesImage.jpg',
      };
  }
};

export { definePageContent, defineServiceInputField, defineErrorKeys, stripHtmlTagsWithRegex };
