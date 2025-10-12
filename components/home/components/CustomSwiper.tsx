import * as React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRef } from 'react';
import SwiperCore from 'swiper';

import { lessonStyles } from '@lib/components/home/styles/lessonsStyles';
import SwiperContent from '@lib/components/home/components/SwiperContent';
import { CustomSwiperProps, SwiperType, INewsItem } from '@lib/components/interface/home';

import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Navigation]);

const {
  boxStyles: { lessonMainBox, lessonBox, boxButtons, boxGlobalButtons },
  imageStyles: { lessonImage },
  setCustomGridStyle,
  setCustomImgStyle,
} = lessonStyles;

export default function CustomSwiper({ data, linkStyles, customStyle }: CustomSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        navigation={false}
        spaceBetween={customStyle ? -120 : -80}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data?.map((value: INewsItem, index: number) => (
          <SwiperSlide key={index}>
            <Grid {...setCustomGridStyle(customStyle)}>
              <Box {...lessonMainBox}>
                <Box {...lessonBox}>
                  <Image
                    width={100}
                    height={100}
                    src={value.img}
                    alt={value.buttonText}
                    loading="lazy"
                    {...lessonImage}
                    {...setCustomImgStyle(customStyle)}
                  />
                  <SwiperContent linkText={t(value.buttonText)} navigatePage={`${value.link}`} linkStyles={linkStyles} />
                </Box>
              </Box>
            </Grid>
          </SwiperSlide>
        ))}
        <Box {...boxGlobalButtons}>
          <Box {...boxButtons} onClick={() => swiperRef.current?.slidePrev()}>
            <WestIcon sx={{ color: '#B1B1B1' }} />
          </Box>
          <Box {...boxButtons} onClick={() => swiperRef.current?.slideNext()}>
            <EastIcon sx={{ color: '#B1B1B1' }} />
          </Box>
        </Box>
      </Swiper>
    </>
  );
}
