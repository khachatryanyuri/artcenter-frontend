import * as React from 'react';
import { Button, Container } from '@mui/material';

import Content from '@lib/components/common/components/Content';
import { IContent } from '@lib/components/common/interface/content';
import { useRouter } from 'next/router';
import { mainInfoStyles } from '@lib/components/home/styles/mainInfo';
import { useTranslation } from 'react-i18next';

const { mainBox } = mainInfoStyles;

export default function MainInfo({ content: { onlineLessons } }: IContent) {
  const router = useRouter();
  const { t } = useTranslation();
  const handleClick = () => {
    router.push('/discounts');
  };
  return (
    <Container maxWidth={false} {...mainBox}>
      <Content variant="h3" text={onlineLessons?.title} style={{ color: '#000', fontWeight: '600 !important' }} />
      <Content
        variant="h5"
        text={onlineLessons?.desc}
        style={{ color: '#000', pl: '32px' }}
      />

      <Button variant="contained" onClick={handleClick} sx={{ alignSelf: 'flex-start' }}>
        {t('mainInfo.aboutTheBenefitsButtonText')}
      </Button>
    </Container>
  );
}
