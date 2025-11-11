import * as React from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';
import { globalConstants } from '@lib/components/home/constants/globalHomeConstants';
import { newsStyles } from '@lib/components/home/styles/newsStyles';
import { useTranslation } from 'react-i18next';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';

const {
  boxStyles: { mainBox, allNewsBox, newsBox, newsTextBox},
  imageStyles: { newsImage },
  linkStylesNews,
} = newsStyles;

const { LESSONS_SERVICES_DATA } = globalConstants;

export default function LessonsServices() {
  const { t } = useTranslation();
  return (
    <Container {...mainBox} maxWidth={false}>
      <Grid {...allNewsBox} container>
        {LESSONS_SERVICES_DATA.map((value: any, index: number) => (
          <Fragment key={index}>
            <Grid {...newsBox} item xs={10} lg={5.7}>
              <Image width={100} height={100} src={value.img} alt={value.img} loading="lazy" {...newsImage} />
              <Box {...newsTextBox}>
                <LinkNavigate text={t(value.buttonText)} navigatePage={`${value.link}`} styles={{...linkStylesNews}} />
              </Box>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
}
