import React from 'react';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';

import { SETTINGS } from '@lib/components/common/constants/navbarConstants';
import { navbarStyles } from '@lib/components/common/styles/navbarStyles';
import { useRouter } from 'next/router';
import { userProfileStyle } from '@lib/components/common/styles/userProfileStyles';

const { menuStyles } = navbarStyles;
const { mainBox, iconButton } = userProfileStyle;
const UserMenu = ({ anchorElUser, handleCloseUserMenu, handleOpenShopCart, logout, handleOpenUserMenu }: any) => {
  const router = useRouter();
  const { user } = JSON.parse(localStorage.getItem('auth') || '{}');

  return (
    <Box {...mainBox}>
      <Tooltip title="Open settings">
        <IconButton {...iconButton} onClick={(e) => handleOpenUserMenu(e)}>
          <Avatar alt="Remy Sharp" src={user.picture} />
        </IconButton>
      </Tooltip>
      <Menu
        {...menuStyles}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {SETTINGS.map((setting) => (
          <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
            <Typography
              onClick={() => {
                if (setting.id === 'logout') {
                  logout();
                } else if (setting.id === 'cart') {
                  handleOpenShopCart();
                } else {
                  router.push('profile');
                }
              }}
            >
              {setting.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
