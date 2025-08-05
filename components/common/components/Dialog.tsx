import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Alert,
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  SlideProps,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { pageData } from '@lib/components/common/constants/dialogConstants';
import { dialogStyles } from '@lib/components/common/styles/dialogStyles';
import logoImage from '@lib/public/common/next1.svg';
import { ProductDialogProps, TextsEnum } from '@lib/services/interface/common/dialog/dialog';

const { CURRENCY, CLOSE_INFO, ADD_CART, ALLERT, TOTAL_PRICE, CONTACT_US, PRICE, SIZE, PHOTO_ALT, LOGO_ALT, ABOUT } =
  pageData;
const { uniform } = TextsEnum;
const {
  appBarStyles,
  typographyStyles,
  gridStyles,
  boxStyles,
  textFieldStyles,
  imageBoxStyles,
  textBoxStyle,
  headerStyle,
  descBoxStyles,
  infoBoxStyles,
  buttonBox,
  logoBox,
  imageStyles,
  sizeBox,
} = dialogStyles;

const Transition = React.forwardRef<unknown, SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDialog: React.FC<ProductDialogProps> = ({ open, handleClose, value }) => {
  const { id, type, name, model, size, info, price, pictures, quantity } = value;
  const header = `${name?.arm}${ABOUT}`;
  const description = info?.arm ? info.arm.split('\n') : [];

  const [countProduct, setCountProduct] = useState(0);
  const [countQuantity, setCountQuantity] = useState(quantity);
  const [errorCount, setErrorCount] = useState(false);
  const [uniformSize, setUniformSize] = useState('');

  useEffect(() => {
    setCountQuantity(quantity);
  }, [quantity]);

  const handleCountProduct = (value: number) => {
    setErrorCount(false);
    const newCountProduct = Math.max(value, 0);
    setCountProduct(newCountProduct);
    setCountQuantity(Math.max(countQuantity - (newCountProduct - countProduct), 0));
    if (value > quantity) setErrorCount(true);
  };

  const handleAddToCart = () => {
    handleClose();
    setCountProduct(0);
  };

  const handleCloseDialog = () => {
    handleClose();
    setCountProduct(0);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setUniformSize(event.target.value as string);
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar {...appBarStyles}>
        <Toolbar>
          <IconButton onClick={handleCloseDialog} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography {...typographyStyles} variant="h6">
            {CLOSE_INFO}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false}>
        <Grid container {...gridStyles}>
          <Grid item xs={6}>
            <Box {...imageBoxStyles}>
              {pictures && pictures.length > 0 && (
                <Image loading="lazy" width={700} height={850} {...imageStyles} src={pictures[0]} alt={PHOTO_ALT} />
              )}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box {...textBoxStyle}>
              <Typography {...headerStyle} variant="h3">
                {header}
              </Typography>
              <Box {...descBoxStyles}>
                {description?.map((value: string, index: number) => (
                  <Typography key={index} variant="h5">
                    ● {value}
                  </Typography>
                ))}
              </Box>
              <Box {...infoBoxStyles}>
                <Typography variant="h5">{`${PRICE} ${price}դր․`}</Typography>

                <Typography variant="h5">{CONTACT_US}</Typography>
                <Box {...boxStyles}>
                  <TextField
                    {...textFieldStyles}
                    type="number"
                    value={countProduct}
                    onChange={(e) => handleCountProduct(parseInt(e.target.value, 10))}
                    InputProps={{
                      inputProps: {
                        max: quantity,
                        min: 0,
                        onKeyDown: (event) => {
                          event.preventDefault();
                        },
                      },
                    }}
                  />
                  {type === uniform && (
                    <Box {...sizeBox}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{SIZE}</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={uniformSize}
                          label="Size"
                          onChange={handleChange}
                        >
                          <MenuItem value={'XS'}>XS</MenuItem>
                          <MenuItem value={'S'}>S</MenuItem>
                          <MenuItem value={'M'}>M</MenuItem>
                          <MenuItem value={'L'}>L</MenuItem>
                          <MenuItem value={'XL'}>XL</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                  <Typography variant="h5">{`${TOTAL_PRICE} ${price * countProduct} ${CURRENCY}`}</Typography>
                </Box>
                {errorCount && <Alert severity="error">{ALLERT}</Alert>}
              </Box>
              <Box {...buttonBox}>
                <Button variant="contained" fullWidth onClick={handleAddToCart}>
                  {ADD_CART}
                </Button>
              </Box>
              <Box {...logoBox}>
                <Image width={300} height={150} src={logoImage} alt={LOGO_ALT} loading="lazy" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default ProductDialog;
