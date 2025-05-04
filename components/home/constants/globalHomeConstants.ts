import servicesImage from '@lib/public/homePage/services.jpg';
import giftSertImage from '@lib/public/homePage/giftSert.jpg';
import lessonsImage from '@lib/public/homePage/lessons.jpg';

export const globalConstants = {
  LESSONS_SERVICES_DATA: [
    { buttonText: 'Записаться на уроки', link: '/', img: lessonsImage },
    { buttonText: 'Заказать услуги', link: '/', img: servicesImage },
    { buttonText: 'Заказать подарочный сертификат', link: '/', img: giftSertImage },
  ],
};
