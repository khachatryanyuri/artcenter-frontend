import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { detailedCourseStyles } from '@lib/components/courses/styles/courseStyle';
import { constants } from '@lib/components/courses/constants/constants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Content from '@lib/components/common/components/Content';

const { BUTTONT_TEXT, BUTTONT__INFO } = constants;
const {
  boxStyles: { mainBox, mainContainer },
  textStyles: { heading },
  imgStyles: { newsImage },
  iconStyles: { shareIcon },
} = detailedCourseStyles;

export default function DetailedCourseComponent({ data }: any) {
  const handleNavigate = (navigateLink: string) => {
    if (typeof window !== 'undefined') {
      window.open(navigateLink, '_blank');
    }
  };
  return (
    <Container maxWidth={false} {...mainContainer}>
      <Grid {...mainBox} container>
        <Typography variant="h2" {...heading}>
          {data?.title?.ru}
        </Typography>
        <Grid item xs={12}>
          <Image width={800} height={600} src={data?.picture} alt={data?.id} loading="lazy" {...newsImage} />

          <Content variant="h5" text={data?.description} style={{ sx: { pt: '24px' } }} />
        </Grid>
        <Box sx={{ mt: '72px' }}>
          <Typography variant="h5">{BUTTONT__INFO}</Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            {...shareIcon}
            onClick={() => handleNavigate(data?.id)}
          >
            {BUTTONT_TEXT}
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}
