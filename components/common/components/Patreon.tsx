import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';

import { patreonStyles } from '@lib/components/common/styles/patreonStyles';
import { globalConstants } from '@lib/components/home/constants/globalHomeConstants';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const {
  TEXTS: { PATREON },
  LINK_TEXTS: { PATREON_LINK },
  IMAGE_ALT: { USEFUL_ALT },
  IMAGE_SRC: { patreonLogo },
  NAVIGATE_PAGES: { PATREON_PAGE },
} = globalConstants;
const { patreonLink, parentBox, patreonContent, patreonImage, supportLabel } = patreonStyles;

export default function Patreon() {
  const copyToClipboard = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigator.clipboard.writeText(PATREON_PAGE);
  };
  return (
    <Box {...parentBox}>
      <Image src={patreonLogo} alt={USEFUL_ALT} {...patreonImage} />
      <Box {...patreonContent}>
        <Typography variant="h3" {...supportLabel}>
          {PATREON}
        </Typography>
        <Link href={PATREON_PAGE}>
          {PATREON_LINK}
          <ContentCopyIcon onClick={copyToClipboard} titleAccess="Copy" {...patreonLink} />
        </Link>
      </Box>
    </Box>
  );
}
