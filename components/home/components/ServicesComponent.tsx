import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';

import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { servicesRangeStyles } from '@lib/components/home/styles/servicesRangeStyles';
import Content from '@lib/components/common/components/Content';

import lessonsImage from '@lib/public/homePage/getLessons.jpg';
import servicesImage from '@lib/public/homePage/getServices.jpg';

const {
  linkStyles,
  imageStyles,
  boxStyles: { headerBox, infoBox, childInfoBox, leftChildBox, leftChildTextBox },
} = servicesRangeStyles;

export default function Services() {
  return (
    <Container
      maxWidth={false}
      sx={{
        paddingTop: '64px',
        backgroundColor: '#FBFBFB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box {...headerBox}>
        <Content variant="h2" text={'Наши уроки и услуги'} />
      </Box>
      <Grid container {...infoBox}>
        <Grid item {...childInfoBox} xs={10} lg={5}>
          <Box {...leftChildBox}>
            <Image src={lessonsImage} alt={'lessonsImage'} loading="lazy" {...imageStyles} />
            <Box {...leftChildTextBox}>
              <LinkNavigate text={'Выбрать уроки'} navigatePage={'/'} styles={linkStyles} />
            </Box>
          </Box>
        </Grid>
        <Grid item {...childInfoBox} xs={10} lg={5}>
          <Box {...leftChildBox}>
            <Image src={servicesImage} alt={'servicesImage'} loading="lazy" {...imageStyles} />
            <Box {...leftChildTextBox}>
              <LinkNavigate text={'Выбрать услуги'} navigatePage={'/'} styles={{ ...linkStyles }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
