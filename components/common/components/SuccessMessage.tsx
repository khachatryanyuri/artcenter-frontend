import * as React from 'react';
import Image from 'next/image';
import { Box, Container } from '@mui/material';

import Content from '@lib/components/common/components/Content';
import Join from '@lib/components/common/components/Join';
import successIcon from '@lib/public/services/successIcon.png';
import { IMessage } from '@lib/services/interface/successMessage/successMessage';

export const SuccessMessageComponent = ({ message }: { message: IMessage }) => {
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mt: '62px',
          gap: '26px',
        }}
      >
        <Image src={successIcon} alt={'successIcon'} />
        <Content variant="h4" text={message?.title} />
      </Box>
      <Join />
    </Container>
  );
};
