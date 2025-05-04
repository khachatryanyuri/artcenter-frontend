import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { courseStyle, gridItemStyles } from '@lib/components/courses/styles/courseStyle';
import { constants } from '@lib/components/courses/constants/constants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Join from '@lib/components/common/components/Join';

const { BUTTONT_TEXT, BUTTONT__INFO } = constants;
const {
  boxStyles: { mainBox, gridContainer, gridItem, gridItemPayment },
  buttonStyles,
  typographyStyles: { typographyContentTitle, typographyContentDesc, typographyPayment },
} = courseStyle;

export default function DetailedCourseComponent({ data }: any) {
  const handleNavigate = (navigateLink: string) => {
    if (typeof window !== 'undefined') {
      window.open(navigateLink, '_blank');
    }
  };
  return (
    <Container maxWidth={false}>
      <Box {...mainBox}>
        <Typography variant="h2">{data.title.arm}</Typography>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          {...buttonStyles}
          onClick={() => handleNavigate(data?.calendlyLink)}
        >
          {BUTTONT_TEXT}
        </Button>
        <Grid container spacing={4} {...gridContainer}>
          {data?.content?.arm?.map((value: any, index: number, array: any[]) => {
            const isLastItemOdd = array.length % 2 !== 0 && index === array.length - 1;
            return (
              <Grid item xs={12} lg={isLastItemOdd ? 12 : 6} key={index} {...gridItem}>
                <Box {...gridItemStyles(isLastItemOdd)}>
                  <Typography {...typographyContentTitle} variant="h5">
                    {value?.title}
                  </Typography>
                  <Typography
                    {...typographyContentDesc}
                    variant="body1"
                    dangerouslySetInnerHTML={{ __html: value?.description }}
                  />
                </Box>
              </Grid>
            );
          })}
          <Grid item xs={12} {...gridItemPayment}>
            <Typography
              {...typographyPayment}
              variant="body1"
              dangerouslySetInnerHTML={{ __html: data?.payment?.arm }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: '72px' }}>
          <Typography variant="h5">{BUTTONT__INFO}</Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            {...buttonStyles}
            onClick={() => handleNavigate(data?.calendlyLink)}
          >
            {BUTTONT_TEXT}
          </Button>
        </Box>
      </Box>
      <Join />
    </Container>
  );
}
