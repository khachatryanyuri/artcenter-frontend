import { StaticImageData } from 'next/image';
import { IMultiLanguage } from '../membership/membership';

interface ICardProps {
  icon: StaticImageData;
  title: string;
  navigatePage: string;
  content: IMultiLanguage;
  giftCards?: boolean;
}

enum ServicesType {
  Shooting = 'shooting',
  FreeEntryWithYourWeapon = 'freeEntry',
  TeamEvents = 'teamEvents',
  GiftCards = 'giftCards',
  Another = 'another',
  ShootingRange = 'shooting-range',
}

interface IRegisteredPerson {
  fullName: string;
  phoneNumber: string;
  email: string;
  shootingRange?: string;
  peopleCount?: number;
  giftCartCount?: number;
  questions?: string;
}

interface IServices {
  id: string;
  type:
    | ServicesType.Another
    | ServicesType.FreeEntryWithYourWeapon
    | ServicesType.GiftCards
    | ServicesType.Shooting
    | ServicesType.TeamEvents;
  title: Record<string, string>;
  description: Record<string, string[]>;
  duration?: Record<string, string>;
  registeredPersons: IRegisteredPerson[];
  requiresPayment: boolean;
  serviceCost?: Record<string, string>;
  serviceManagerEmail: string;
  picture: string;
}

interface IServicesInputField {
  type: 'text' | 'email' | 'select' | 'radioGroup' | 'number';
  label: string;
  name: string;
  title?: string[];
  multiline?: boolean;
  rows?: number;
}

enum ServicesInputFieldType {
  TEXT = 'text',
  EMAIL = 'email',
  SELECT = 'select',
  RADIOGROUP = 'radioGroup',
  NUMBER = 'number',
}

interface IRegisterToServicesProps {
  serviceData: IServices[] | null;
  id: string;
}

interface ShootingInAzatazenProps {
  shootingInAzatazen: IMultiLanguage;
}

interface FreeEntranceProps {
  freeEntrance: IMultiLanguage;
}

interface ExamsAndOthersProps {
  weaponExam: IMultiLanguage;
  otherServices: IMultiLanguage;
}

interface DiscountsProps {
  discount1: IMultiLanguage;
  discount2: IMultiLanguage;
  discount3: IMultiLanguage;
}

interface IContentData {
  servicesHead: IMultiLanguage;
  shootingInAzatazen: IMultiLanguage;
  freeEntrance: IMultiLanguage;
  teamEvents: IMultiLanguage;
  giftCards: IMultiLanguage;
  weaponExam: IMultiLanguage;
  otherServices: IMultiLanguage;
  discount1: IMultiLanguage;
  discount2: IMultiLanguage;
  discount3: IMultiLanguage;
  [key: string]: { [key: string]: { [key: string]: string } } | IMultiLanguage;
}

export type {
  ICardProps,
  IServices,
  IServicesInputField,
  IRegisterToServicesProps,
  ShootingInAzatazenProps,
  IContentData,
  FreeEntranceProps,
  ExamsAndOthersProps,
  DiscountsProps,
};
export { ServicesInputFieldType, ServicesType };
