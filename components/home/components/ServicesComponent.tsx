import * as React from 'react';
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';

import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { servicesRangeStyles } from '@lib/components/home/styles/servicesRangeStyles';
import Content from '@lib/components/common/components/Content';

import lessonsImage from '@lib/public/homePage/getLessons.jpg';
import servicesImage from '@lib/public/homePage/getServices.jpg';
import { useTranslation } from 'react-i18next';
import { newsStyles } from '@lib/components/home/styles/newsStyles';
const {
  linkStyles,
  boxStyles: { headerBox },
} = servicesRangeStyles;

const {
  boxStyles: { mainBox, allNewsBox, newsBox, newsTextBox },
  imageStyles: { newsImage },
} = newsStyles;

export default function Services() {
  const { t } = useTranslation();
  return (
    <Container maxWidth={false} {...mainBox}>
      <Box {...headerBox}>
        <Content
          variant="h2"
          text={t('mainInfo.ourLessonsAndServices')}
          style={{ color: '#E64A19', fontWeight: '600 !important' }}
        />
      </Box>
      <Grid container {...allNewsBox}>
        <Grid {...newsBox} item xs={10} lg={5.7}>
          <Image width={100} height={100} src={lessonsImage} alt={'lessonsImage'} loading="lazy" {...newsImage} />
          <Box {...newsTextBox}>
            <LinkNavigate text={t('mainInfo.chooseLessons')} navigatePage={'/online-courses'} styles={linkStyles} />
          </Box>
        </Grid>
        <Grid {...newsBox} item xs={10} lg={5.7}>
          <Image width={100} height={100} src={servicesImage} alt={'servicesImage'} loading="lazy" {...newsImage} />
          <Box {...newsTextBox}>
            <LinkNavigate text={t('mainInfo.chooseServices')} navigatePage={'/services'} styles={{ ...linkStyles }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
