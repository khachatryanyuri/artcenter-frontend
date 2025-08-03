import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Breadcrumbs, Button, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';

import { navbarStyles, selectLanguageStyles } from '@lib/components/common/styles/navbarStyles';
import { LINKS, LANGUAGES, NAVIGATE_PAGES } from '@lib/components/common/constants/navbarConstants';
import ToolbarMobile from '@lib/components/common/components/ToolbarMobile';
import NavbarMenuList from '@lib/components/common/components/NavbarMenueList';
import i18n from '@lib/i18n';

const { HOME_PAGE } = NAVIGATE_PAGES;
const { linkStyles, toolbarStyles, boxStyles, breadcrumbsLanguageStyles } = navbarStyles;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [languageMobile, setLanguageMobile] = useState<string>('Рус');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language: string) => {
    setLanguageMobile(language);
    setAnchorEl(null);
  };

  // const [language, setLanguage] = useState<string | null>(null);

  // useEffect(() => {
  //   const lang = localStorage.getItem('i18nextLng');
  //   setLanguage(lang);
  // }, []);

  const handleLanguageChange = async (language: string) => {
    try {
      i18n.changeLanguage(language);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <AppBar position="sticky" sx={{ zIndex: 1000 }}>
      <Toolbar {...toolbarStyles.toolbarLangvige}>
        <Breadcrumbs separator="|" {...breadcrumbsLanguageStyles}>
          {LANGUAGES.map((language) => (
            <Box key={language.text}>
              <Typography
                variant="h6"
                {...linkStyles.linkBreadcrumb}
                onClick={() => {
                  handleLanguageChange(language.value);
                }}
              >
                {language.text}
              </Typography>
            </Box>
          ))}
        </Breadcrumbs>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          {...selectLanguageStyles(open).button}
        >
          <LanguageIcon />
          {languageMobile}
          <ExpandMoreIcon {...selectLanguageStyles(open).icon} />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {LANGUAGES.map((language) => (
            <MenuItem key={language.text} onClick={() => handleClose(language.text)}>
              <Typography
                variant="h6"
                {...linkStyles.linkBreadcrumb}
                onClick={() => {
                  handleLanguageChange(language.value);
                }}
              >
                {language.text}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
      <Toolbar {...toolbarStyles.toolbarLinks}>
        <Link href={HOME_PAGE}></Link>
        <NavbarMenuList data={LINKS} styles={boxStyles.boxToolbar} />
        <NavbarMenuList data={LINKS} styles={boxStyles.boxToolbarLaptop} />
      </Toolbar>
      <ToolbarMobile />
    </AppBar>
  );
}
