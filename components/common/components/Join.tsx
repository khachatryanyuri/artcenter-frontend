import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import { Button } from '@mui/material';

import { constants } from '@lib/components/common/constants/join';
import { joinStyles } from '@lib/components/common/styles/joinStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { useRouter } from 'next/router';
import { useContent } from '@lib/services/store/contentsStore';
import Content from '@lib/components/common/components/Content';

const { JOIN, JOIN_HERE, KNOW_MORE, MEMBERSHIP, MEMBERSHIP_REQUEST } = constants;

const {
  boxStyles: { mainBox, headerBox, buttonBox, privacyBox },
  buttonStyles,
  gridStyles,
  linkStyles,
} = joinStyles;

export default function Join() {
  const { contents, isLoading } = useContent('join');
  const { joinInfo } = contents;
  const router = useRouter();

  const handleClick = () => {
    router.push(MEMBERSHIP_REQUEST);
  };
  return (
    <Container {...mainBox} maxWidth={false}>
      <Grid container {...gridStyles} spacing={'8px'}>
        <Grid item xs={12} lg={6}>
          <Box {...headerBox}>
            <Content variant="h3" text={joinInfo?.title} />
            <Content variant="h5" text={joinInfo?.desc} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} {...buttonBox}>
          <Button variant="contained" {...buttonStyles} onClick={handleClick} endIcon={<ArrowForwardIcon />}>
            {JOIN}
          </Button>
          <Box {...privacyBox}>
            <Typography variant="body1">{KNOW_MORE}</Typography>
            <LinkNavigate text={JOIN_HERE} navigatePage={MEMBERSHIP} styles={{ ...linkStyles }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
