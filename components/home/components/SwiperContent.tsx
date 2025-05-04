import React from 'react';
import { Box, Typography } from '@mui/material';

import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { lessonStyles } from '@lib/components/home/styles/lessonsStyles';
import { ISwiperContent } from '@lib/components/interface/home';

const {
  boxStyles: { textGlobalBox },
  customStyle: { titleStyle, descStyle },
} = lessonStyles;

const SwiperContent = ({ linkText, navigatePage, linkStyles, customStyle }: ISwiperContent) => (
  <Box {...textGlobalBox}>
    <LinkNavigate text={linkText} navigatePage={navigatePage} styles={linkStyles} />
  </Box>
);

export default SwiperContent;
