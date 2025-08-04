import * as React from 'react';
import Image from 'next/image';
import { Box, Container } from '@mui/material';

import Content from '@lib/components/common/components/Content';
import Join from '@lib/components/common/components/Join';
// import { servicesStyles } from '@lib/components/services/styles/services';
import successIcon from '@lib/public/services/successIcon.png';
import { IMessage } from '@lib/services/interface/successMessage/successMessage';

// const {
//   registrationSuccessStyles: { boxStyles },
// } = servicesStyles;

export const SuccessMessageComponent = ({ message }: { message: IMessage }) => {
  return (
    <Container maxWidth={false}>
      {/* <Box {...boxStyles}> */}
        <Image src={successIcon} alt={'successIcon'} />
        <Content variant="h4" text={message?.title} />
      {/* </Box> */}
      <Join />
    </Container>
  );
};
