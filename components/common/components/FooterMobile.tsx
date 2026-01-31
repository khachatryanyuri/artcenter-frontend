import * as React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';

import artcenterLogo from '@lib/public/Logo.png';
import { footerStyles } from '@lib/components/common/styles/footerStyle';
import { SECTIONS_DATA } from '@lib/components/common/constants/footerConstants';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { SocialMedia } from '@lib/components/common/components/SocialMedia';
import { useTranslation } from 'react-i18next';
import arcaImg from '@lib/public/donation/arca.png';
import visaImg from '@lib/public/donation/visa.png';
import masterCardImg from '@lib/public/donation/masterCard.png';

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
                  {linkData.link ? (
                    <LinkNavigate text={t(linkData.subTitle)} navigatePage={linkData.link} styles={link} />
                  ) : (
                    <Typography variant="body1" sx={{ color: '#fff', fontSize: '10px !important' }}>
                      {t(linkData.subTitle)}
                    </Typography>
                  )}
                </Fragment>
              ))}
            </Box>
          </Grid>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 4, width: '100%' }}>
          <Image
            style={{ width: '60px', height: 'auto' }}
            loading="lazy"
            src={arcaImg}
            alt={'arcaImg'}
            height={50}
            width={100}
          />
          <Image
            style={{ width: '60px', height: 'auto' }}
            loading="lazy"
            src={visaImg}
            alt={'visaImg'}
            height={50}
            width={100}
          />
          <Image
            style={{ width: '60px', height: 'auto' }}
            loading="lazy"
            src={masterCardImg}
            alt={'masterCardImg'}
            height={50}
            width={100}
          />
        </Box>
      </Grid>
      <Box {...lastBox}>
        <SocialMedia iconColor={'#fff'} />
        <Typography {...copyrightText}>{t('onlineMusicSchool')}</Typography>
      </Box>
    </>
  );
}
