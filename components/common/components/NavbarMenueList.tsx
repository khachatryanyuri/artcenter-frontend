import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import { Box, MenuItem, SxProps, Theme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { selectLanguageStyles, navbarStyles } from '@lib/components/common/styles/navbarStyles';
import { IDonationLink, IHrefLink, ILink, IMenuLink } from '@lib/components/common/interface/navbar';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const {
  linkStyles,
  boxStyles: { menuItemBox },
} = navbarStyles;

export default function NavbarMenuList({ data, styles }: { data: ILink[]; styles: { sx: SxProps<Theme> } }) {
  const [menuOpen, setMenuOpen] = useState<{ [key: string]: boolean }>({});
  const { t } = useTranslation();

  const handleMouseOver = (value: string) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [value]: true,
    }));
  };

  const handleMouseOut = (value: string) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [value]: false,
    }));
  };
  const router = useRouter();
  return (
    <Box {...styles}>
      {data.map((link: any, index: number) => (
        <Fragment key={`${link.text}-${index}`}>
          {link.menu ? (
            <Box
              {...menuItemBox}
              onMouseOver={() => handleMouseOver((link as IDonationLink).id)}
              onMouseOut={() => handleMouseOut((link as IDonationLink).id)}
              // onClick={() => link.href && router.push(link.href)}
            >
              <Button
                variant="text"
                {...selectLanguageStyles(menuOpen[(link as IDonationLink).id]).hover}
                endIcon={<KeyboardArrowDownIcon {...selectLanguageStyles(menuOpen[(link as IDonationLink).id]).icon} />}
              >
                {t(link.text)}
              </Button>

              <Box {...selectLanguageStyles(menuOpen[(link as IDonationLink).id]).menuBox}>
                {(link as IMenuLink).menu.map((value) => (
                  <MenuItem
                    key={value.text}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMouseOut((link as IDonationLink).id);
                      router.push(value.href);
                    }}
                  >
                    <LinkNavigate text={t(value.text)} navigatePage={value.href} styles={linkStyles.menuLink} />
                  </MenuItem>
                ))}
              </Box>
            </Box>
          ) : (
            <LinkNavigate text={t(link.text)} navigatePage={(link as IHrefLink).href} styles={linkStyles.linkButton} />
          )}
        </Fragment>
      ))}
    </Box>
  );
}
