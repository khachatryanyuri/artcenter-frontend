import React from 'react';
import { MenuItem, Pagination, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';

import { paginationStyles } from '@lib/components/common/styles/paginationStyles';
import { constants } from '@lib/components/common/constants/paginationConstants';
import { PaginationProps } from '@lib/services/interface/common/customPagination/customPagination';

const { textStyle, stackBox } = paginationStyles;
const { CONTENT_FOR_PAGE } = constants;
export default function CustomPagination({ totalCount, page, setPage, perPage, setPerPage }: PaginationProps) {
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    setPerPage(event.target.value as number);
    setPage(1);
  };

  const paginationCount = totalCount ? Math.ceil(totalCount / perPage) : 0;

  return (
    <Stack {...stackBox}>
      <Typography {...textStyle}>{CONTENT_FOR_PAGE}</Typography>
      <Select value={perPage} onChange={handleItemsPerPageChange}>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
      <Pagination
        count={paginationCount}
        page={page}
        onChange={handlePaginationChange}
        siblingCount={0}
        boundaryCount={2}
      />
    </Stack>
  );
}
