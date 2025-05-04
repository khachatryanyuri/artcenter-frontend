import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';
import { sortAndFilterStyles } from '@lib/components/common/styles/sortAndFilterStyles';
import { constants } from '@lib/components/common/constants/sortAndFilterConstants';

const {
  TEXTS: { SELECT_REGULATIONS, SORT_BY_PROD, ALL, CARTS, UNIFORMS, PRICE },
} = constants;

const {
  boxStyles: { mainBox, dialogBox, dialogContentBox, formControl },
  textStyles: { dialogTitle },
} = sortAndFilterStyles;
export default function SortAndFilter({ setSort, setPage, sort, setFilter }: any) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: { target: { value: string } }) => {
    event.target.value === 'all' ? setFilter({}) : setFilter({ type: event.target.value });

    setPage(1);
    setOpen(false);
  };

  const handleClickOpenFilter = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    setOpen(false);
  };

  const handleSortChange = (field: string) => {
    const newOrder = sort.field === field && sort.order === 'ASC' ? 'DESC' : 'ASC';

    setSort({ field, order: newOrder });
    setPage(1);
  };

  return (
    <Box {...mainBox}>
      <Button onClick={handleClickOpenFilter}>
        <FilterListIcon />
      </Button>
      <Dialog {...dialogBox} fullWidth disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle {...dialogTitle}>{SELECT_REGULATIONS}</DialogTitle>
        <DialogContent>
          <Box component="form" {...dialogContentBox}>
            <FormControl {...formControl}>
              <InputLabel htmlFor="demo-dialog-native">{SORT_BY_PROD}</InputLabel>
              <Select
                native
                onChange={handleChange}
                input={<OutlinedInput label={SORT_BY_PROD} id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={'all'}>{ALL}</option>
                <option value={'giftCart'}>{CARTS}</option>
                <option value={'uniform'}>{UNIFORMS}</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>

      <Button variant="text" onClick={() => handleSortChange('createdAt')}>
        {PRICE} {sort.field === 'createdAt' && (sort.order === 'ASC' ? '▲' : '▼')}
      </Button>
    </Box>
  );
}
