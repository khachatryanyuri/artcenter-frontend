import React from 'react';
import { useContent } from '@lib/services/store/contentsStore';
import OnlineLessons from '@lib/components/home/components/OnlineLessons';
import LessonsServices from '@lib/components/home/components/LessonsServicesComponent';
import Services from '@lib/components/home/components/ServicesComponent';
import { Box, Container } from '@mui/material';
import SliderComponent from '@lib/components/home/components/SliderComponent';
import MainInfo from '@lib/components/home/components/MainInfo';
import { theme } from '@lib/styles/componentsStyles';
export default function HomePage() {
  const {
    contents: { onlineLessons, mainInfo },
  } = useContent('home');

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#FBFBFB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 !important',
        '@media (max-width:600px)': {
          display: 'block',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <SliderComponent />
      <Container
        maxWidth={false}
        sx={{
          padding: '64px 120px !important',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#FBFBFB',
          [theme.breakpoints.down('md')]: {
            padding: '64px 64px !important',
          },
          [theme.breakpoints.down('sm')]: {
            padding: '32px 32px !important',
          },
          '@media (max-width: 560px)': {
            padding: '24px 12px !important',
          },
        }}
      >
        <MainInfo content={{ mainInfo }} />
        <LessonsServices />
        <OnlineLessons content={{ onlineLessons }} />
        <Services />
      </Container>
    </Container>
  );
}
