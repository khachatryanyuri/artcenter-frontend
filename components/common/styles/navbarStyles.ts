import { theme } from '@lib/styles/componentsStyles';

// Палитра "Вечерний Закат"
const colors = {
  bgAppbar: '#2A2540', // Глубокий Индиго (Фон AppBar/Footer)
  bgTopBar: '#1E1A2E', // Еще темнее для верхней полоски (как в прошлый раз)
  bgMenu: '#3C325B', // Темно-лиловый (Выпадающие и мобильное меню)
  textPrimary: '#F5F3F7', // Бледно-лавандовый (Основной текст на темном)
  textSecondary: '#CEC9DC', // Приглушенная Лаванда (Второстепенный текст на темном)
  accentOrange: '#E64A19', // Горящий Оранжевый (Акценты)
  accentCoral: '#FF7043', // Яркий Коралл (Hover акценты)
};

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
        color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        '&:hover': {
          textDecoration: 'underline',
          color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
        },
        lineHeight: 1.75,
      },
    },
    linkBreadcrumb: {
      sx: {
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '21px',
        color: colors.textSecondary, // <--- ИЗМЕНЕНИЕ
        cursor: 'pointer',
        '&:hover': {
          color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
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
          color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
          textDecoration: 'none',
          fontWeight: 700,
          transition: 'color 0.3s ease',
        },
        color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        [theme.breakpoints.down('lg')]: {
          color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ (для мобильной версии)
          '&:hover': {
            color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
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
          color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
          textDecoration: 'none',
          fontWeight: 700,
          transition: 'color 0.3s ease',
        },
        color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        [theme.breakpoints.down('lg')]: {
          '&:hover': {
            color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
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
          backgroundColor: colors.accentCoral, // <--- ИЗМЕНЕНИЕ
          borderRadius: '6px',
        },
        backgroundColor: colors.accentOrange, // <--- ИЗМЕНЕНИЕ
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
        backgroundColor: colors.bgTopBar, // <--- ИЗМЕНЕНИЕ
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
          width: '100%', // Для мобильного меню
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
    sx: {
      mt: '45px',
      // Стили для выпадающего меню (десктоп)
      '& .MuiMenu-paper': {
        backgroundColor: colors.bgMenu, // <--- ИЗМЕНЕНИЕ
        color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
      },
      '& .MuiMenuItem-root': {
        color: colors.textPrimary,
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.1)', // <--- Легкое затемнение при ховере
          color: colors.accentOrange,
        },
      },
    },
  },
  iconStyles: {
    style: { cursor: 'pointer' },
  },
  accordionStyles: {
    // Стили для мобильного меню
    accordion: {
      sx: {
        width: '100%',
        boxShadow: 'none',
        backgroundColor: colors.bgMenu, // <--- ИЗМЕНЕНИЕ
        color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        '&:before': {
          // Убираем верхний разделитель
          display: 'none',
        },
      },
    },
    accordionSummary: {
      sx: {
        width: '100%',
        backgroundColor: colors.bgMenu, // <--- ИЗМЕНЕНИЕ
        color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': {
          color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        },
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
      // Делаем иконку меню "menue.svg" белой (светлой)
      '& img': {
        filter: 'brightness(0) invert(1)',
      },
    },
  },
  menuItem: {
    sx: {
      display: 'flex',
      padding: 0,
      margin: 0,
      width: '100%',
      backgroundColor: colors.bgMenu, // <--- ИЗМЕНЕНИЕ
    },
  },
};

export const isOpenAccordionStyle = (isSelect: boolean) => {
  return isSelect
    ? {
        sx: {
          width: '100%',
          backgroundColor: colors.bgMenu, 
          color: colors.accentOrange, // <--- ИЗМЕНЕНИЕ: Текст активного заголовка оранжевый
          fontWeight: 700,
          '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: colors.accentOrange }, // <--- ИЗМЕНЕНИЕ: Иконка активного заголовка оранжевая
          // Убеждаемся, что при открытом состоянии цвет текста заголовка не перебивается
          '& .MuiTypography-root': {
             color: colors.accentOrange,
          }
        },
      }
    : {
        sx: {
          width: '100%',
          backgroundColor: colors.bgMenu, 
          color: colors.textPrimary, 
          '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: colors.textPrimary }, 
          // Убеждаемся, что при закрытом состоянии текст заголовка светлый
          '& .MuiTypography-root': {
             color: colors.textPrimary,
          }
        },
      };
};

export const selectLanguageStyles = (open: boolean) => {
  return {
    button: {
      sx: {
        padding: 0,
        margin: 0,
        justifyContent: 'flex-start',
        color: open ? colors.accentOrange : colors.textPrimary, // <--- ИЗМЕНЕНИЕ
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
        color: open ? colors.accentOrange : colors.textPrimary, // <--- ИЗМЕНЕНИЕ
        fontWeight: open ? 700 : null,
        transition: open ? 'color 0.3s ease' : null,
      },
    },
    menuBox: {
      sx: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: colors.bgMenu, // <--- ИЗМЕНЕНИЕ
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 1,
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s, transform 0.3s',
        pointerEvents: open ? 'auto' : 'none',
        // Стили для MuiMenuItem внутри этого выпадающего меню
        '& .MuiMenuItem-root': {
          color: colors.textPrimary,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: colors.accentOrange,
          },
        },
      },
    },
  };
};

// Стили для обертки мобильного меню
export const mobileMenuPaperProps = {
  PaperProps: {
    sx: {
      backgroundColor: colors.bgMenu, // <--- ИЗМЕНЕНИЕ
      color: colors.textPrimary, // <--- ИЗМЕНЕНИЕ
      maxWidth: '240px', // Как у тебя было
    },
  },
};