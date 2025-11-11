import { Theme } from '@mui/material/styles';

export const sliderStyles = {
  swiperContainer: {
    width: '100%',
    height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
    '& .swiper': {
      width: '100%',
      height: '100%',
    },
    '& .swiper-slide': {
      textAlign: 'center',
      fontSize: '18px',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    '& .swiper-slide img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    '& .swiper-button-next, & .swiper-button-prev': {
      '&::after': {
        fontSize: { xs: '24px', md: '32px' },
      },
      '&.swiper-button-disabled': {
        opacity: 0.5,
        cursor: 'default',
      },
    },

    '& .swiper-pagination-bullet': {
      opacity: 0.7,
      '&.swiper-pagination-bullet-active': {
        opacity: 1,
      },
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: { xs: '16px', md: '32px' },
    boxSizing: 'border-box',
  },
  textContainer: {
    zIndex: 1,
    maxWidth: '800px',
  },
  title: {
    marginBottom: { xs: '8px', md: '16px' },
    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: 1.2,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  description: {
    marginBottom: { xs: '16px', md: '24px' },
    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
    fontWeight: 400,
    lineHeight: 1.5,
    textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
  },
  button: {
    padding: { xs: '10px 20px', md: '12px 24px' },
    fontSize: { xs: '0.9rem', md: '1.1rem' },
  },
};
