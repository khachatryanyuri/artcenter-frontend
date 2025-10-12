import * as React from 'react';
import { Button, Container } from '@mui/material';

import Content from '@lib/components/common/components/Content';
import { IContent } from '@lib/components/common/interface/content';
import { useRouter } from 'next/router';
import { mainInfoStyles } from '@lib/components/home/styles/mainInfo';
import { useTranslation } from 'react-i18next';


const { mainBox } = mainInfoStyles;

export default function MainInfo({ content: { mainInfo } }: IContent) {
  const { t } = useTranslation();
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };
  return (
    <Container maxWidth={false} {...mainBox}>
      <Content variant="h3" text={mainInfo?.title} style={{ color: '#000', fontWeight: '600 !important' }} />
      <Content variant="h5" text={mainInfo?.desc} style={{ color: '#000', fontWeight: '600 !important', pl: '32px' }} />

      <Button variant="contained" onClick={handleClick} sx={{ alignSelf: 'flex-start' }}>
        {t('mainInfo.buttonText')}
      </Button>
    </Container>
  );
}
