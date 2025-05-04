import { Skeleton } from '@mui/material';
import * as React from 'react';

export default function SkeletonCard() {
  return (
    <>
      <Skeleton variant="rectangular" width="100%" height="220px" />
      <Skeleton sx={{ mt: '8px', fontSize: '2rem' }} width="100%" />
      <Skeleton sx={{ mt: '8px', fontSize: '1rem' }} width="100%" />
      <Skeleton sx={{ mt: '8px', fontSize: '1rem' }} width="100%" />
    </>
  );
}
