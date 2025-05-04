interface IApplicant {
  name: string;
  surname: string;
  email: string;
  comment: string;
  [key: string]: string;
}

interface IErrors {
  name: string;
  surname: string;
  email: string;
  comment: string;
  checked: string;
  otherAmount: string;
  [key: string]: string;
}

interface ISettings {
  type: string;
  periodicity: string;
  amount: string;
}

enum DonationEnums {
  Option4 = 'option4',
  Monthly1 = 'monthly1',
  Type = 'type',
  Periodicity = 'periodicity',
  Amount = 'amount',
  Checked = 'checked',
}

enum Currencies {
  AMD = 'AMD',
}

enum DonationsPeriodicity {
  Оnce = 1,
  EveryMonth = 2,
}

export { DonationEnums, Currencies, DonationsPeriodicity };

export type { IApplicant, IErrors, ISettings };
