interface ApplicationForm {
  id: string;
  fullName: string;
  birthday: string;
  email: string;
  familiarizedWithCharter: boolean;
  haveWeapon: boolean;
  howYouKnow: string;
  phoneNumber: number;
  preferredCommunicationMethod: string;
  reasonToJoin: string;
  weaponName: string;
  weaponCaliber: string;
  createdAt: string;
  updatedAt: string;
  newPicture: {
    rawFile: File;
    src: string;
    title: string;
  };
  picture?: string;
}

export default ApplicationForm;
