import * as React from 'react';
import { Button, Container } from '@mui/material';

import Content from '@lib/components/common/components/Content';
import { IContent } from '@lib/components/common/interface/content';
import { useRouter } from 'next/router';
import { mainInfoStyles } from '@lib/components/home/styles/mainInfo';

const { mainBox } = mainInfoStyles;

export default function MainInfo({ content: { mainInfo } }: IContent) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };
  return (
    <Container maxWidth={false} {...mainBox}>
      <Content variant="h3" text={mainInfo?.title} style={{ color: '#000', fontWeight: '600 !important' }} />
      <Content variant="h5" text={mainInfo?.desc} style={{ color: '#000', fontWeight: '600 !important', pl: '32px' }} />

      <Button variant="contained" onClick={handleClick} sx={{ alignSelf: 'flex-start' }}>
        Подробнее о школе
      </Button>
    </Container>
  );
}
