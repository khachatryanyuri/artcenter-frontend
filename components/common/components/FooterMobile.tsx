import * as React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';

import artcenterLogo from '@lib/public/Logo.png';
import { footerStyles } from '@lib/components/common/styles/footerStyle';
import { ALL_RIGHTS_RESERVED, BOTTOM_DATA, SECTIONS_DATA } from '@lib/components/common/constants/footerConstants';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { SocialMedia } from '@lib/components/common/components/SocialMedia';
import { useTranslation } from 'react-i18next';

const {
  boxStyles: { linkBox, lastBox, imageBoxMobile },
  textStyles: { sectionHeading, copyrightText },
  linkStyles: { link, privacyLinks },
} = footerStyles;

export default function FooterMobile() {
  const { t } = useTranslation();
  return (
    <>
      <Box {...imageBoxMobile}>
        <Image loading="lazy" src={artcenterLogo} alt={'artcenterLogo'} height={100} width={100} />
      </Box>
      <Grid container spacing={3} sx={{ textAlign: 'center' }}>
        {SECTIONS_DATA.map((value, index) => (
          <Grid item key={`section-box-${index}`} xs={12}>
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
        <SocialMedia iconColor={'#fff'} />
        <Typography {...copyrightText}>{ALL_RIGHTS_RESERVED}</Typography>
        {BOTTOM_DATA.map((value, subIndex) => (
          <Fragment key={`privacy-link-${subIndex}`}>
            <LinkNavigate text={t(value.title)} navigatePage={value.link} styles={privacyLinks} />
          </Fragment>
        ))}
      </Box>
    </>
  );
}
