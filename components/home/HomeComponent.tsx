import React from 'react';

import MainInfo from '@lib/components/home/components/MainInfo';
import { useContent } from '@lib/services/store/contentsStore';
import OnlineLessons from '@lib/components/home/components/OnlineLessons';
import LessonsServices from '@lib/components/home/components/LessonsServicesComponent';
import Services from '@lib/components/home/components/ServicesComponent';
import { Box, Container } from '@mui/material';

export default function HomePage() {
  const {
    contents: { mainInfo, onlineLessons },
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
        '@media (max-width:600px)': {
          display: 'block',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Box sx={{ maxWidth: '1024px' }}>
        <MainInfo content={{ mainInfo }} />
        <LessonsServices />
        <OnlineLessons content={{ onlineLessons }} />
        <Services />
      </Box>
    </Container>
  );
}
