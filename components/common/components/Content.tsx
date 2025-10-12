import { Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IContentProps } from '@lib/components/common/interface/content';
import { getLocalizedText } from '@lib/services/helpers/service';

const NewTypography = styled(Typography)`
  & * {
    all: unset;
    display: revert;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export default function Content({ variant, style = {}, text, useResetStyles = true, ...props }: IContentProps) {
  const { locale } = useRouter();
  const [html, setHtml] = useState('');
  const [paragraphCount, setParagraphCount] = useState(0);

  useEffect(() => {
    const localizedText = getLocalizedText(text, locale || 'hy');
    setHtml(localizedText);
    const parser = new DOMParser();
    const doc = parser.parseFromString(localizedText, 'text/html');
    setParagraphCount(doc.querySelectorAll('p').length);

  }, [text, locale]);

  return (
    <>
      {paragraphCount < 2 || (paragraphCount > 1 && !useResetStyles) ? (
        <NewTypography variant={variant} {...style} {...props} dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <Typography variant={variant} {...style} {...props} dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
}
