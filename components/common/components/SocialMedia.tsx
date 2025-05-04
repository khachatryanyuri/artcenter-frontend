import * as React from 'react';
import { Box } from '@mui/material';

import { footerStyles } from '@lib/components/common/styles/footerStyle';
import { SOCIAL_MEDIA } from '@lib/components/common/constants/footerConstants';
import Link from 'next/link';

const {
  boxStyles: { socialMediaBox },
} = footerStyles;

export const SocialMedia = ({ iconColor }: { iconColor: string }) => {
  return (
    <Box {...socialMediaBox}>
      {SOCIAL_MEDIA.map((value) => (
        <Link key={value.key} href={value.link}>
          {value.icon(iconColor)}
        </Link>
      ))}
    </Box>
  );
};
