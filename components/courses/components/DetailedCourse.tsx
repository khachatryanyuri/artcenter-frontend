import * as React from 'react';
import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';

import { detailedCourseStyles } from '@lib/components/courses/styles/courseStyle';
import { constants } from '@lib/components/courses/constants/constants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Content from '@lib/components/common/components/Content';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { SocialMediaEnum } from '@lib/services/interface/news/news';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { getLocalizedText } from '@lib/services/helpers/service';

const { BUTTONT_TEXT, BUTTONT__INFO } = constants;
const {
  boxStyles: { mainBox, mainContainer, iconBox },

  imgStyles: { newsImage },
  iconStyles: { shareIcon, iconButtonStyle },
} = detailedCourseStyles;

const { facebook, linkedin, twitter } = SocialMediaEnum;

export default function DetailedCourseComponent({ data }: any) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();

  const handleNavigate = () => {
    const url =
      data.typesKey === 'curses' ? `/application/online-lessons?id=${data.id}` : `/application/services?id=${data.id}`;
    router.push(url);
  };

  const handleShare = (platform: string) => {
    const localizedText = getLocalizedText(data?.title, locale || 'hy');
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(localizedText);

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&title=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <Container maxWidth={false} {...mainContainer}>
      <Grid {...mainBox} container>
        <Content
          variant="h3"
          text={data?.title}
          style={{ sx: { margin: '0 auto', mb: '64px', textAlign: 'center' } }}
        />
        <Grid item xs={12}>
          <Image width={800} height={600} src={data?.picture} alt={data?.id} loading="lazy" {...newsImage} />
          <Box {...iconBox}>
            <IconButton onClick={() => handleShare(facebook)}>
              <Facebook {...iconButtonStyle} />
            </IconButton>
            <IconButton onClick={() => handleShare(linkedin)}>
              <LinkedIn {...iconButtonStyle} />
            </IconButton>
            <IconButton onClick={() => handleShare(twitter)}>
              <Twitter {...iconButtonStyle} />
            </IconButton>
          </Box>

          <Content variant="h5" text={data?.description} style={{ sx: { pt: '24px' } }} />
        </Grid>
        <Box sx={{ mt: '72px' }}>
          <Typography variant="h5">{t(BUTTONT__INFO)}</Typography>
          <Button variant="outlined" endIcon={<ArrowForwardIcon />} {...shareIcon} onClick={handleNavigate}>
            {t(BUTTONT_TEXT)}
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}
