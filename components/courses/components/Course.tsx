import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import { courseStyle } from '@lib/components/courses/styles/courseStyle';
import Content from '@lib/components/common/components/Content';
import Image from 'next/image';
import { useRouter } from 'next/router';

const {
  boxStyles: { mainBox, gridContainer, gridItem },
  imageStyle,
} = courseStyle;

export default function CourseComponent({ data }: any) {
  let courseData = data.data[0];
  const router = useRouter();

  const handleNavigate = (navigateLink: string) => {
    router.push(`${router.asPath}/${navigateLink}`);
  };

  return (
    <Container maxWidth={false}>
      <Box {...mainBox}>
        <Image
          loading="lazy"
          src={courseData?.picture}
          alt={`${courseData?.key}_image`}
          {...imageStyle}
          width={300}
          height={300}
        />
        <Typography variant="h2" sx={{ mt: '32px' }}>
          {courseData?.title?.ru}
        </Typography>
        <Content variant="h5" text={courseData?.desc} style={{ color: '#000', mt: '32px' }} />

        <Grid container spacing={4} {...gridContainer}>
          {courseData?.subTypes?.map((value: any, index: number, array: any[]) => {
            const isLastItemOdd = array.length % 2 !== 0 && index === array.length - 1;
            return (
              <Grid
                item
                xs={12}
                lg={isLastItemOdd ? 12 : 6}
                key={index}
                {...gridItem}
                onClick={() => {
                  handleNavigate(value.key);
                }}
              >
                <Content variant="h4" text={value.title} style={{ color: '#C35F1C', mt: '32px', mb: '12px' }} />
                <Image
                  loading="lazy"
                  src={value.picture}
                  alt={`${value.key}_image`}
                  {...imageStyle}
                  width={300}
                  height={300}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
