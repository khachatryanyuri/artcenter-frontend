import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { courseStyle } from '@lib/components/courses/styles/courseStyle';
import Content from '@lib/components/common/components/Content';
import Image from 'next/image';
import { useRouter } from 'next/router';

const {
  boxStyles: { mainBox, gridContainer, cardItem, cardTextBox },
  imageStyles,
} = courseStyle;

const { bannerImage, cardImage } = imageStyles;

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
          {...bannerImage}
          width={1200}
          height={400}
        />
        <Typography variant="h3" sx={{ mt: '48px', textAlign: 'center' }}>
          {courseData?.title?.ru}
        </Typography>
        <Content
          variant="body1"
          text={courseData?.desc}
          style={{
            color: 'text.secondary',
            mt: '24px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '24px auto 32px auto',
            
          }}
        />

        <Grid container spacing={4} {...gridContainer}>
          {courseData?.subTypes?.map((value: any, index: number, array: any[]) => {
            const isLastItemOdd = array.length % 2 !== 0 && index === array.length - 1;
            return (
              <Grid item xs={12} sm={6} md={isLastItemOdd ? 12 : 6} key={index}>
                <Box {...cardItem} onClick={() => handleNavigate(value.key)} sx={{ ...cardItem.sx, cursor: 'pointer' }}>
                  <Image
                    loading="lazy"
                    src={value.picture}
                    alt={`${value.key}_image`}
                    {...cardImage}
                    width={300}
                    height={200}
                  />

                  <Box {...cardTextBox}>
                    <Content
                      variant="h4"
                      text={value.title}
                      style={{
                        color: '#000',
                        textAlign: 'center',
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
