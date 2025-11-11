import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { courseStyle } from '@lib/components/courses/styles/courseStyle';
import Content from '@lib/components/common/components/Content';
import Image from 'next/image';
import { useRouter } from 'next/router';

const {
  boxStyles: { mainBox, gridContainer, cardItem, cardTextBox },
  imageStyles,
} = courseStyle;

const { bannerImage, cardImage } = imageStyles;

export default function SubCourseComponent({ typeData, courseData }: any) {
  let types = typeData.data[0];
  let courses = courseData.data;
  const router = useRouter();

  const handleNavigate = (navigateLink: string) => {
    router.push(`${router.asPath}/${navigateLink}`);
  };

  return (
    <Container maxWidth={false}>
      <Box {...mainBox}>
        <Image
          loading="lazy"
          src={types.picture}
          alt={`${types.key}_image`}
          {...bannerImage}
          width={1200}
          height={400}
        />
        <Content variant="h3" text={types.title} style={{ mt: '48px', textAlign: 'center' }} />

        <Content
          variant="body1"
          text={types.desc}
          style={{
            color: 'text.secondary',
            mt: '24px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '24px auto 0 auto',
          }}
        />

        <Grid container spacing={4} {...gridContainer}>
          {types?.type?.map((value: any, index: number) => {
            return (
              <Grid item xs={12} key={index}>
                <Content
                  variant="h3"
                  text={value.name}
                  style={{ color: '#C35F1C', mt: '32px', mb: '32px', textAlign: 'center' }}
                />
                <Grid container spacing={4}>
                  {courses.map((coursesValue: any, coursesIndex: number) => {
                    if (coursesValue.subTypesThemeKey !== value.key) {
                      return null;
                    }

                    return (
                      <Grid item xs={12} sm={6} md={4} key={coursesIndex}>
                        <Box {...cardItem}>
                          <Image
                            loading="lazy"
                            src={coursesValue.picture}
                            alt={`${types.key}_image`}
                            {...cardImage}
                            width={350}
                            height={200}
                            onClick={() => handleNavigate(coursesValue.id)}
                            style={{ ...cardImage.style, cursor: 'pointer' }}
                          />

                          <Box {...cardTextBox}>
                            <Content
                              variant="h5"
                              text={coursesValue.title}
                              style={{
                                color: '#000',
                                mt: '0px',
                                mb: '0px',
                                textAlign: 'center',
                              }}
                            />
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
