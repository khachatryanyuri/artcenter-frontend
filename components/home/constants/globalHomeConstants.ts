import servicesImage from '@lib/public/homePage/services.jpg';
import lessonsImage from '@lib/public/homePage/lessons.jpg';

export const globalConstants = {
  LESSONS_SERVICES_DATA: [
    { buttonText: 'Записаться на уроки', link: '/application/online-lessons', img: lessonsImage },
    { buttonText: 'Заказать услуги', link: '/application/services', img: servicesImage },
  ],
};
