import { Container, Grid } from '@mui/material';
import Image from 'next/image';

import { aboutUsStyles } from '@lib/components/aboutUs/styles/aboutUsStyles';
import Content from '@lib/components/common/components/Content';
import { detailedCourseStyles } from '@lib/components/courses/styles/courseStyle';

const {
  boxStyles: { boxContentHead },
  typographyStyles: { typographyHeading },
  image,
} = aboutUsStyles;

const {
  boxStyles: { mainBox, mainContainer, iconBox },

  imgStyles: { newsImage },
  iconStyles: { shareIcon, iconButtonStyle },
} = detailedCourseStyles;

export default function AboutUsComponent({ courseData, imageSrc }: any) {
  const content = courseData?.data?.[0];
  return (
    <Container maxWidth={false} {...mainBox}>
      <Grid container>
        <Grid item xs={12}>
          {imageSrc && <Image loading="lazy" src={imageSrc} alt={content?.title} {...newsImage} />}
          <Content variant="h1" style={typographyHeading} text={content?.title} />
          <Content variant="h5" style={boxContentHead} text={content?.description} />
        </Grid>
      </Grid>
    </Container>
  );
}
