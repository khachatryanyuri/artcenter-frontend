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
        <Typography variant="h2" sx={{ mt: '32px' }}>
          {types.title.ru}
        </Typography>
        <Content variant="h4" text={types.desc} style={{ color: '#000', mt: '32px' }} />

        <Grid container spacing={4} {...gridContainer}>
          {types?.type?.map((value: any, index: number) => {
            return (
              <Grid item xs={12} key={index} {...gridItem}>
                <Content variant="h4" text={value.name} style={{ color: '#000', mt: '32px', mb: '12px' }} />

                {courses.map((coursesValue: any, coursesIndex: number) => {
                  return (
                    <Grid item xs={12} lg={3} key={coursesIndex} {...gridItem}>
                      {coursesValue.subTypesThemeKey === value.key ? (
                        <>
                          <Image
                            loading="lazy"
                            src={coursesValue.picture}
                            alt={`${types.key}_image`}
                            {...imageStyle}
                            width={300}
                            height={300}
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
                      ) : null}
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
