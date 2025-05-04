import * as React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';

import azatazenLogo from '@lib/public/homePage/azatazenWhite.svg';
import { footerStyles } from '@lib/components/common/styles/footerStyle';
import { ALL_RIGHTS_RESERVED, BOTTOM_DATA, SECTIONS_DATA } from '@lib/components/common/constants/footerConstants';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { SocialMedia } from '@lib/components/common/components/SocialMedia';

const {
  boxStyles: { linkBox, lastBox, privacyBox },
  textStyles: { sectionHeading, copyrightText },
  linkStyles: { link, privacyLinks },
} = footerStyles;

export default function FooterLaptop() {
  return (
    <>
      <Image loading="lazy" src={azatazenLogo} alt={'azatazenLogo'} />
      <Grid container spacing={3}>
        {SECTIONS_DATA.map((value, index) => (
          <Grid item key={`section-box-${index}`} xs={4}>
            <Typography variant="body1" key={`section-heading-${index}`} {...sectionHeading}>
              {value.title}
            </Typography>
            <Box key={`link-box-${index}`} {...linkBox}>
              {value.data.map((linkData, subIndex) => (
                <Fragment key={`privacy-link-${subIndex}`}>
                  <LinkNavigate text={linkData.subTitle} navigatePage={linkData.link} styles={link} />
                </Fragment>
              ))}
            </Box>
          </Grid>
        ))}
        <Grid item xs={2}>
          <SocialMedia iconColor={'#fff'} />
        </Grid>
      </Grid>
      <Box {...lastBox}>
        <Typography {...copyrightText}>{ALL_RIGHTS_RESERVED}</Typography>
        <Box {...privacyBox}>
          {BOTTOM_DATA.map((value, subIndex) => (
            <Fragment key={`privacy-link-${subIndex}`}>
              <LinkNavigate text={value.title} navigatePage={value.link} styles={privacyLinks} />
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
}
