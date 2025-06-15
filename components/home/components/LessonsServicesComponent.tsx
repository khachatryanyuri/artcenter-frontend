import * as React from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';
import CustomSwiper from '@lib/components/home/components/CustomSwiper';
import { globalConstants } from '@lib/components/home/constants/globalHomeConstants';
import SwiperContent from '@lib/components/home/components/SwiperContent';
import { newsStyles } from '@lib/components/home/styles/newsStyles';

const {
  boxStyles: { mainBox, allNewsBox, newsBox, newsTextBox, boxTitle, customSwiperBox },
  imageStyles: { newsImage },
  linkStylesNews,
} = newsStyles;

const { LESSONS_SERVICES_DATA } = globalConstants;

export default function LessonsServices() {
  return (
    <Container {...mainBox} maxWidth={false}>
      <Grid {...allNewsBox} container>
        {LESSONS_SERVICES_DATA.map((value: any, index: number) => (
          <>
            <Fragment key={index}>
              <Grid {...newsBox} item xs={10} sm={5}>
                <Image width={100} height={100} src={value.img} alt={value.img} loading="lazy" {...newsImage} />
                <Box {...newsTextBox}>
                  <SwiperContent
                    linkText={value.buttonText}
                    navigatePage={`${value.link}`}
                    linkStyles={linkStylesNews}
                  />
                </Box>
              </Grid>
            </Fragment>
          </>
        ))}
      </Grid>
      <Box {...customSwiperBox}>
        <CustomSwiper data={LESSONS_SERVICES_DATA} linkStyles={linkStylesNews} customStyle={true} />
      </Box>
    </Container>
  );
}
