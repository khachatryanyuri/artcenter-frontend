import * as React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

import { LinkNavigateProps } from '@lib/services/interface/common/linkNavigate/linkNavigate';

const LinkNavigate: React.FC<LinkNavigateProps> = ({ text, navigatePage, styles, arowImg, query }) => {
  return (
    <>
      <Link href={{ pathname: navigatePage, query: query }}>
        <Typography variant="h6" {...styles}>
          {text}
        </Typography>
      </Link>
      {arowImg}
    </>
  );
};

export default LinkNavigate;
