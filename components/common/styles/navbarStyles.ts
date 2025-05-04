import { theme } from '@lib/styles/componentsStyles';

export const navbarStyles = {
  breadcrumbsStyles: {
    sx: {
      '& ol': { gap: '6px' },
    },
  },
  breadcrumbsLanguageStyles: {
    sx: {
      marginRight: '16px',
      '& ol': { gap: '6px' },
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  },

  linkStyles: {
    menuLink: {
      sx: {
        '&:hover': {
          textDecoration: 'underline',
        },
        lineHeight: 1.75,
      },
    },
    linkBreadcrumb: {
      sx: {
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '21px',
        color: '#777777',
        '&:hover': {
          color: '#C35F1C',
          textDecoration: 'none',
          fontWeight: 700,
          transition: 'color 0.3s ease',
        },
      },
    },
    linkButton: {
      sx: {
        padding: '14px 16px',
        '&:hover': {
          color: '#C35F1C',
          textDecoration: 'none',
          fontWeight: 700,
          transition: 'color 0.3s ease',
        },
        color: '#000',
        [theme.breakpoints.down('lg')]: {
          '&:hover': {
            color: '#C35F1C',
            backgroundColor: 'transparent',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'color 0.3s ease',
          },
          fontSize: '16px',
          padding: 0,
        },
        '@media (max-width:500px)': {
          fontWeight: 400,
          lineHeight: '24px',
          fontSize: '12px',
        },
      },
    },
    openAccordionStyle: {
      sx: {
        padding: '14px 16px',
        textWrap: 'wrap',
        '&:hover': {
          color: '#C35F1C',
          textDecoration: 'none',
          fontWeight: 700,
          transition: 'color 0.3s ease',
        },
        color: '#676767',
        [theme.breakpoints.down('lg')]: {
          '&:hover': {
            color: '#C35F1C',
            backgroundColor: 'transparent',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'color 0.3s ease',
          },
          fontSize: '16px',
          padding: 0,
        },
        '@media (max-width:500px)': {
          fontWeight: 400,
          lineHeight: '24px',
          fontSize: '12px',
        },
      },
    },

    linkButtonDonation: {
      sx: {
        padding: '8px 14px',
        borderRadius: '6px',
        '&:hover': {
          color: '#fff',
          textDecoration: 'underline',
          backgroundColor: '#000',
          borderRadius: '6px',
        },
        backgroundColor: '#C35F1C',
        color: '#fff',

        [theme.breakpoints.down('lg')]: {
          textAlign: 'center',
          margin: '6px',
        },
      },
    },
  },
  toolbarStyles: {
    toolbarLangvige: {
      sx: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#F4F4F4',
        gap: '8px',
        [theme.breakpoints.down('lg')]: {
          justifyContent: 'space-between',
        },
      },
    },
    toolbarLinks: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('lg')]: {
          display: 'none',
        },
      },
    },
    toolbarLinksMobile: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
      },
    },
  },
  boxStyles: {
    userDataBox: { sx: { display: 'flex', alignItems: 'center', gap: '16px' } },
    menuItemBox: { sx: { position: 'relative' } },
    boxToolbar: {
      sx: {
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xl')]: {
          display: 'none',
        },
        [theme.breakpoints.down('lg')]: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    boxToolbarLaptop: {
      sx: {
        display: 'none',
        gap: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xl')]: {
          display: 'flex',
        },
      },
    },
  },
  menuStyles: {
    sx: { mt: '45px' },
  },
  iconStyles: {
    style: { cursor: 'pointer' },
  },
  accordionStyles: {
    accordion: { sx: { width: '100%', boxShadow: 'none', backgroundColor: '#fff' } },
    accordionSummary: {
      sx: {
        width: '100%',
        backgroundColor: '#fff',
      },
    },
  },
  boxToolbarDesktop: {
    sx: {
      [theme.breakpoints.down('xl')]: {
        display: 'none',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'block',
      },
    },
  },
  boxToolbarLaptop: {
    sx: {
      display: 'none',
      [theme.breakpoints.down('xl')]: {
        display: 'block',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  },
  mobileMenue: {
    sx: {
      display: 'flex',
      gap: '7px',
      alignItems: 'center',
    },
  },
  menuItem: {
    sx: {
      display: 'flex',
      padding: 0,
      margin: 0,
    },
  },
};

export const isOpenAccordionStyle = (isSelect: boolean) => {
  return isSelect
    ? {
        sx: {
          width: '100%',
          backgroundColor: '#fff',
          color: '#C35F1C',
          fontWeight: 700,
          '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: '#C35F1C' },
        },
      }
    : { sx: { width: '100%', backgroundColor: '#fff' } };
};

export const selectLanguageStyles = (open: boolean) => {
  return {
    button: {
      sx: {
        padding: 0,
        margin: 0,
        justifyContent: 'flex-start',
        color: open ? '#C35F1C' : undefined,
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
      },
    },
    icon: {
      sx: {
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s linear',
        fontSize: '24px !important',
      },
    },
    hover: {
      sx: {
        color: open ? '#C35F1C' : null,
        fontWeight: open ? 700 : null,
        transition: open ? 'color 0.3s ease' : null,
      },
    },
    menuBox: {
      sx: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s, transform 0.3s',
        pointerEvents: open ? 'auto' : 'none',
      },
    },
  };
};
