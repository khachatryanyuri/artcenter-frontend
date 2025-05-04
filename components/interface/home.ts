import { StaticImageData } from 'next/image';

type CustomSwiperProps = {
  data: INewsItem[];
  linkStyles: { sx: { [key: string]: string | number } };
  customStyle?: boolean;
};

type SwiperType = {
  navigation: {
    nextEl: HTMLElement | null;
    prevEl: HTMLElement | null;
  };
  slideNext: (speed?: number, runCallbacks?: boolean) => void;
  slidePrev: (speed?: number, runCallbacks?: boolean) => void;
  slides: HTMLElement[];
  activeIndex: number;
};

interface INewsItem {
  buttonText: string;
  link: string;
  img: string | StaticImageData;
}

interface ISwiperContent {
  linkText: string;
  navigatePage: string;
  linkStyles: { sx: { [key: string]: string | number } };
  customStyle?: boolean;
}

export type { SwiperType, CustomSwiperProps, INewsItem, ISwiperContent };
