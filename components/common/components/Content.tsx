import { Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';

import { IContentProps } from '@lib/components/common/interface/content';

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
  const [html, setHtml] = useState('');
  const [paragraphCount, setParagraphCount] = useState(0);

  useEffect(() => {
    if (text?.ru) {
      setHtml(text.ru);
      const parser = new DOMParser();
      const doc = parser.parseFromString(text.ru, 'text/html');
      const paragraphs = doc.querySelectorAll('p');
      setParagraphCount(paragraphs.length);
    } else {
      setHtml(text);
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const paragraphs = doc.querySelectorAll('p');
      setParagraphCount(paragraphs.length);
    }
  }, [text?.ru, text]);

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
