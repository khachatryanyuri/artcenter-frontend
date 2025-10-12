import servicesImage from '@lib/public/homePage/services.jpg';
import lessonsImage from '@lib/public/homePage/lessons.jpg';

export const globalConstants = {
  LESSONS_SERVICES_DATA: [
    { buttonText: 'mainInfo.lessonsButtonText', link: '/application/online-lessons', img: lessonsImage },
    { buttonText: 'mainInfo.servicesButtonText', link: '/application/services', img: servicesImage },
  ],
};
