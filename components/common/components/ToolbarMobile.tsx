import React, { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Accordion, AccordionDetails, AccordionSummary, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import artcenterLogo from '@lib/public/Logo.png';
import { isOpenAccordionStyle, mobileMenuPaperProps, navbarStyles } from '@lib/components/common/styles/navbarStyles';
import { NAVIGATE_PAGES, LINKS } from '@lib/components/common/constants/navbarConstants';
import LinkNavigate from './LinkNavigate';
import menue from '@lib/public/homePage/menue.svg';
import { IHrefLink, ILink } from '@lib/components/common/interface/navbar';

const { HOME_PAGE } = NAVIGATE_PAGES;
const {
  linkStyles,
  toolbarStyles,
  boxStyles,
  accordionStyles: { accordion, accordionSummary },
  mobileMenue,
  menuItem,
} = navbarStyles;

export default function ToolbarMobile() {
  const [menus, setMenus] = useState<null | HTMLElement>(null);
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenus(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenus(null);
  };

  const handleAccordionClick = (index: string) => {
    const isOpen = openAccordions.includes(index);
    if (isOpen) {
      setOpenAccordions(openAccordions.filter((item) => item !== index));
    } else {
      setOpenAccordions([...openAccordions, index]);
    }
  };

  return (
    <>
      <Toolbar {...toolbarStyles.toolbarLinksMobile}>
        <Link href={HOME_PAGE}>
          <Image
            loading="lazy"
            height={100}
            width={100}
            src={artcenterLogo}
            alt={'artcenterLogo'}
            style={{
              cursor: 'pointer',
            }}
          />
        </Link>

        <Box {...mobileMenue}>
          <Image
            loading="lazy"
            src={menue}
            alt="menus"
            onClick={(event: any) => handleMenuOpen(event)}
            width={25}
            height={25}
          />
        </Box>

        <Menu anchorEl={menus} open={Boolean(menus)} onClose={() => handleMenuClose()} {...mobileMenuPaperProps}>
          <MenuItem {...menuItem}>
            <Box {...boxStyles.boxToolbar}>
              {LINKS.map((link: ILink, index: number) => {
                return (
                  <React.Fragment key={`${link.text}-${index}`}>
                    {link.menu ? (
                      <Accordion
                        {...accordion}
                        expanded={openAccordions.includes(`${index}`)}
                        onChange={() => handleAccordionClick(`${index}`)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          {...isOpenAccordionStyle(openAccordions.includes(`${index}`))}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              ...(openAccordions.includes(`${index}`) && { fontWeight: '700 !important' }),
                            }}
                          >
                            {link.text}
                          </Typography>
                        </AccordionSummary>
                        {link.menu.map((value: { text: string; href: string }) => (
                          <AccordionDetails key={value.text} onClick={handleMenuClose}>
                            <LinkNavigate
                              text={value.text}
                              navigatePage={value.href}
                              styles={linkStyles.openAccordionStyle}
                            />
                          </AccordionDetails>
                        ))}
                      </Accordion>
                    ) : (
                      <Accordion {...accordion}>
                        <AccordionSummary {...accordionSummary} onClick={handleMenuClose}>
                          <LinkNavigate
                            text={link.text}
                            navigatePage={(link as IHrefLink).href}
                            styles={linkStyles.linkButton}
                          />
                        </AccordionSummary>
                      </Accordion>
                    )}
                  </React.Fragment>
                );
              })}
            </Box>
          </MenuItem>
        </Menu>
      </Toolbar>
    </>
  );
}
