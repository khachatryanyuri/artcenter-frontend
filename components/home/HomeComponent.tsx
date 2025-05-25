import React from 'react';

import MainInfo from '@lib/components/home/components/MainInfo';
import { useContent } from '@lib/services/store/contentsStore';
import OnlineLessons from '@lib/components/home/components/OnlineLessons';
import LessonsServices from '@lib/components/home/components/LessonsServicesComponent';
import Services from '@lib/components/home/components/ServicesComponent';

export default function HomePage() {
  const {
    contents: { mainInfo, onlineLessons },
  } = useContent('home');

  return (
    <>
      <MainInfo content={{ mainInfo }} />
      <LessonsServices />
      <OnlineLessons content={{ onlineLessons }} />
      <Services />
    </>
  );
}
