import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import mainImage1 from '@lib/public/homePage/swiper1.png';
import mainImage2 from '@lib/public/homePage/swiper2.png';
import mainImage3 from '@lib/public/homePage/swiper3.png';



import { sliderStyles } from '@lib/components/home/styles/sliderStyles';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    bgAppbar: Palette['primary'];
    textPrimary: Palette['primary'];
    textSecondary: Palette['primary'];
    accentOrange: Palette['primary'];
    borderColor: Palette['primary'];
  }
  
  interface PaletteOptions {
    bgAppbar?: PaletteOptions['primary'];
    textPrimary?: PaletteOptions['primary'];
    textSecondary?: PaletteOptions['primary'];
    accentOrange?: PaletteOptions['primary'];
    borderColor?: PaletteOptions['primary'];
  }
}

const slides = [
  {
    image: mainImage1,
    titleKey: 'slider.slide1.title',
    descriptionKey: 'slider.slide1.description',
  },
  {
    image: mainImage2,
    titleKey: 'slider.slide2.title',
    descriptionKey: 'slider.slide2.description',
  },
  {
    image: mainImage3,
    titleKey: 'slider.slide3.title',
    descriptionKey: 'slider.slide3.description',
  },
];

export default function SliderComponent() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Box sx={sliderStyles.swiperContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={t(slide.titleKey)}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}