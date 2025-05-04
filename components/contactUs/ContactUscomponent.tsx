import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';

import contuctusImg from '@lib/public/contactUs/contactus.png';
import { contactUsStyles } from '@lib/components/contactUs/styles/contactUsStyles';
import { constants } from '@lib/components/contactUs/constants/constants';
import { Form } from '@lib/components/contactUs/components/Form';
import Join from '@lib/components/common/components/Join';
import { ContactInfo } from '@lib/components/contactUs/components/ContactInfo';

const {
  boxStyles: { mainBox, formBox, imageBox, subscribeMainBox },
  imgStyle,
} = contactUsStyles;

const { IMG_ALT } = constants;

export default function ContactUs() {
  return (
    <>
      <Grid container {...mainBox}>
        <Grid item xs={12} md={6} {...formBox}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6} {...imageBox}>
          <Image width={100} height={100} loading="lazy" src={contuctusImg} alt={IMG_ALT} {...imgStyle} />
        </Grid>
        <ContactInfo />
      </Grid>
      <Box {...subscribeMainBox}>
        <Join />
      </Box>
    </>
  );
}
