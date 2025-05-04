export enum MemberEnum {
  MemberSupporterEnum = 'member-supporter',
  FullMemberEnum = 'full-member',
}

interface IImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface IMember {
  desc: IMultiLanguage;
  rights: IMultiLanguage;
  obligation: IMultiLanguage;
  can: IMultiLanguage;
  buttonText: string;
  memberTopImage: IImageData;
  memberBottomImage: IImageData;
  link: IMultiLanguage;
  navigatePage: string;
}

interface IMultiLanguage {
  title: { arm: string; rus?: string; eng?: string };
  desc: { arm: string; rus?: string; eng?: string };
  [key: string]: { arm: string; rus?: string; eng?: string };
}

export type { IMultiLanguage };
