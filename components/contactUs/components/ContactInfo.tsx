import { Box, Link, Typography } from '@mui/material';

import { SocialMedia } from '@lib/components/common/components/SocialMedia';
import { CONTACT_INFO } from '@lib/components/contactUs/constants/constants';
import { contactUsStyles } from '@lib/components/contactUs/styles/contactUsStyles';

const {
  contactInfoStyles: { linkBox, linkStyles, mainBox },
} = contactUsStyles;

export const ContactInfo = () => {
  return (
    <Box {...mainBox}>
      <Box {...linkBox}>
        {CONTACT_INFO.map((value) => (
          <>
            <Link key={value.key} href={value.link} {...linkStyles}>
              {value.icon}
              <Typography variant="body2">{value.text}</Typography>
            </Link>
          </>
        ))}
      </Box>
      <SocialMedia iconColor={'#A6A6A6'} />
    </Box>
  );
};
