import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Breadcrumbs, Button, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';
import artcenterLogo from '@lib/public/Logo.png';

import { mobileMenuPaperProps, navbarStyles, selectLanguageStyles } from '@lib/components/common/styles/navbarStyles';
import { LINKS, LANGUAGES, NAVIGATE_PAGES } from '@lib/components/common/constants/navbarConstants';
import ToolbarMobile from '@lib/components/common/components/ToolbarMobile';
import NavbarMenuList from '@lib/components/common/components/NavbarMenueList';
import i18n from '@lib/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const { HOME_PAGE } = NAVIGATE_PAGES;
const { linkStyles, toolbarStyles, boxStyles, breadcrumbsLanguageStyles } = navbarStyles;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [languageMobile, setLanguageMobile] = useState<string>('Рус');
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language: string) => {
    setLanguageMobile(language);
    setAnchorEl(null);
  };

  const { push, pathname, asPath, query, locale } = useRouter();

  const handleLanguageChange = (lng: string) => {
    push({ pathname, query }, undefined, { locale: lng });
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
          {...mobileMenuPaperProps}
        >
          {LANGUAGES.map((language) => (
            <MenuItem
              key={language.text}
              onClick={() => handleClose(language.text)}
              sx={{ backgroundColor: '#3C325B', width: '100%' }}
            >
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
        <Link href={HOME_PAGE}>
          <Image
            loading="lazy"
            height={100}
            width={100}
            src={artcenterLogo}
            alt={"artcenterLogo"}
            style={{
              cursor: 'pointer',
            }}
          />
        </Link>
        <NavbarMenuList data={LINKS} styles={boxStyles.boxToolbar} />
        <NavbarMenuList data={LINKS} styles={boxStyles.boxToolbarLaptop} />
      </Toolbar>
      <ToolbarMobile />
    </AppBar>
  );
}
