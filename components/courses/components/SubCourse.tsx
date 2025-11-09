import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';

import { courseStyle } from '@lib/components/courses/styles/courseStyle';
import Content from '@lib/components/common/components/Content';
import Image from 'next/image';
import { useRouter } from 'next/router';

const {
  boxStyles: { mainBox, gridContainer, gridItem },
  imageStyle,
} = courseStyle;

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
        <Image loading="lazy" src={types.picture} alt={`${types.key}_image`} {...imageStyle} width={300} height={300} />
        <Content variant="h5" text={types.title} style={{ mt: '32px' }} />
        <Content variant="h5" text={types.desc} style={{ color: '#000', mt: '32px' }} />

        <Grid container spacing={4} {...gridContainer}>
          {types?.type?.map((value: any, index: number) => {
            return (
              <Grid item xs={12} key={index}>
                <Content
                  variant="h3"
                  text={value.name}
                  style={{ color: '#C35F1C', mt: '32px', mb: '32px', textAlign: 'center' }}
                />
                <Grid container spacing={3}>
                  {courses.map((coursesValue: any, coursesIndex: number) => {
                    if (coursesValue.subTypesThemeKey !== value.key) {
                      return null;
                    }

                    return (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={coursesIndex} {...gridItem}>
                        <>
                          <Image
                            loading="lazy"
                            src={coursesValue.picture}
                            alt={`${types.key}_image`}
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                            width={350}
                            height={200}
                            onClick={() => handleNavigate(coursesValue.id)}
                          />
                          <Content
                            variant="h4"
                            text={coursesValue.title}
                            style={{
                              color: '#000',
                              mt: '32px',
                              mb: '12px',
                              textAlign: 'center',
                            }}
                          />
                        </>
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
