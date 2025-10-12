import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';

import { footerStyles } from '@lib/components/common/styles/footerStyle';
import { ALL_RIGHTS_RESERVED, BOTTOM_DATA, SECTIONS_DATA } from '@lib/components/common/constants/footerConstants';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { SocialMedia } from '@lib/components/common/components/SocialMedia';
import FooterMobile from '@lib/components/common/components/FooterMobile';
import { useTranslation } from 'react-i18next';

const {
  boxStyles: { footerBox, linkBox, lastBox, lastTextLinkBox, privacyBox, boxMax, boxMobile },
  textStyles: { sectionHeading, copyrightText },
  linkStyles: { link, privacyLinks },
} = footerStyles;

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Container maxWidth={false} {...footerBox}>
      <Box {...boxMax}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            {/* <Image
              loading="lazy"
              src={azatazenLogo}
              alt={'azatazenLogo'}
              style={{ width: '100%', height: 'auto', maxWidth: '126px' }}
            /> */}
          </Grid>
          {SECTIONS_DATA.map((value, index) => (
            <Grid item key={`section-box-${index}`} xs={2}>
              <Typography variant="body1" key={`section-heading-${index}`} {...sectionHeading}>
                {value.title}
              </Typography>
              <Box key={`link-box-${index}`} {...linkBox}>
                {value.data.map((linkData, subIndex) => (
                  <Fragment key={`privacy-link-${subIndex}`}>
                    <LinkNavigate text={t(linkData.subTitle)} navigatePage={linkData.link} styles={link} />
                  </Fragment>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box {...lastBox}>
          <Box {...lastTextLinkBox}>
            <Typography {...copyrightText}>{ALL_RIGHTS_RESERVED}</Typography>
            <Box {...privacyBox}>
              {BOTTOM_DATA.map((value, subIndex) => (
                <Fragment key={`privacy-link-${subIndex}`}>
                  <LinkNavigate text={t(value.title)} navigatePage={value.link} styles={privacyLinks} />
                </Fragment>
              ))}
            </Box>
          </Box>
          <SocialMedia iconColor={'#fff'} />
        </Box>
      </Box>
      <Box {...boxMobile}>
        <FooterMobile />
      </Box>
    </Container>
  );
}
