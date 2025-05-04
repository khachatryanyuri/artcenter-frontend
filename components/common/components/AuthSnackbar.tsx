import { useRouter } from 'next/router';
import * as React from 'react';
import Image from 'next/image';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import logo from '@lib/public/common/AZATAZENLOGO.png';
import Googlelogo from '@lib/public/common/google.png';
import FaceBooklogo from '@lib/public/common/facebook.png';
import { authSnackbarStyles } from '@lib/components/common/styles/authSnackbarStyles';
import { AUTH_SNACKBUR } from '@lib/components/common/constants/authSnackbarConstants';
import { useEffect } from 'react';

const {
  contentPropsStyles,
  anchorOriginStyles,
  boxStyles: { boxGlobal, boxTitleGlobal, boxСocial, boxСocialIcons, boxMore, boxButton },
  imgStyles,
  typographystyles: { typographySocial, typographySocialGlobal },
  closeIconStyles,
} = authSnackbarStyles;

const { signinMethods, and, moreMethods, signIn, signUp } = AUTH_SNACKBUR;

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const router = useRouter();

  const onClickSignIn = () => {
    router.push('signin');
  };

  const onClickSignUp = () => {
    router.push('signup');
  };
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClickLoginGoogle = async () => {
    window.open('http://localhost:5001/api/user/google', '_self');
  };

  const handleClickLoginFacebook = () => {
    window.open('http://localhost:5001/api/user/facebook', '_self');
  };

  const action = (
    <React.Fragment>
      <CloseIcon
        {...closeIconStyles}
        onClick={() => {
          setOpen(false);
        }}
      />
      <Box {...boxGlobal}>
        <Image loading="lazy" src={logo} alt={'logo'} width={500} height={150} style={{ ...imgStyles }} />
        <Box {...boxTitleGlobal}>
          <Typography variant="h4" {...typographySocialGlobal}>
            {signinMethods}
          </Typography>
          <Box {...boxСocial}>
            <Box {...boxСocialIcons}>
              <Image
                loading="lazy"
                src={Googlelogo}
                alt={'Googlelogo'}
                width={60}
                height={60}
                style={{ ...imgStyles }}
                onClick={handleClickLoginGoogle}
              />
            </Box>
            <Typography variant="h5" {...typographySocial}>
              {and}
            </Typography>
            <Box {...boxСocialIcons}>
              <Image
                loading="lazy"
                src={FaceBooklogo}
                alt={'FaceBooklogo'}
                width={60}
                height={60}
                style={{ ...imgStyles }}
                onClick={handleClickLoginFacebook}
              />
            </Box>
          </Box>
        </Box>
        <Box {...boxMore}>
          <Typography variant="h5" {...typographySocial}>
            {moreMethods}
          </Typography>
        </Box>
        <Box {...boxButton}>
          <Button variant="outlined" onClick={onClickSignUp}>
            {signIn}
          </Button>
          <Button variant="contained" onClick={onClickSignIn}>
            {signUp}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );

  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{ ...anchorOriginStyles }}
        ContentProps={{ ...contentPropsStyles }}
      />
    </Box>
  );
}
