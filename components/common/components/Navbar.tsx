import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Breadcrumbs, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';

import { navbarStyles, selectLanguageStyles } from '@lib/components/common/styles/navbarStyles';
import { LINKS, LANGUAGES, NAVIGATE_PAGES } from '@lib/components/common/constants/navbarConstants';
import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import ToolbarMobile from '@lib/components/common/components/ToolbarMobile';
import NavbarMenuList from '@lib/components/common/components/NavbarMenueList';

const { HOME_PAGE } = NAVIGATE_PAGES;
const { linkStyles, toolbarStyles, boxStyles, breadcrumbsLanguageStyles } = navbarStyles;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string>('Рус');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (language: string) => {
    setLanguage(language);
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ zIndex: 1000 }}>
      <Toolbar {...toolbarStyles.toolbarLangvige}>
        <Breadcrumbs separator="|" {...breadcrumbsLanguageStyles}>
          {LANGUAGES.map((language) => (
            <Box key={language.text}>
              <LinkNavigate text={language.text} navigatePage={language.href} styles={linkStyles.linkBreadcrumb} />
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
          {language}
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
              <LinkNavigate text={language.text} navigatePage={language.href} styles={linkStyles.linkBreadcrumb} />
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
