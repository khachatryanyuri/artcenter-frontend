export interface PaginationProps {
  totalCount: number | undefined;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  setPerPage: (perPage: number) => void;
}
