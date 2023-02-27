import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BlockSortBy, CartsPerPage } from '../../../../constants';
import { Limit, SortBy } from '../../../../types';
import {
  SBlockSelectBar,
  SBlockSelectSX,
  SBlockMenuItemSX,
} from './BlockSelectBar.styles';

interface Props {
  limit: Limit;
  setLimit: React.Dispatch<React.SetStateAction<Limit>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sortBy: SortBy;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

export const BlockSelectBar = ({
  limit,
  setLimit,
  setPage,
  sortBy,
  setSortBy,
}: Props) => {
  const sortByHandler = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortBy);
    setPage(1);
  };

  const cartsPerPageHandler = (event: SelectChangeEvent) => {
    setLimit(Number(event.target.value));
    setPage(1);
  };

  return (
    <SBlockSelectBar>
      <Box sx={{ minWidth: 170 }}>
        <FormControl fullWidth>
          <Select
            value={String(sortBy)}
            onChange={sortByHandler}
            defaultValue={BlockSortBy.newest.value}
            sx={SBlockSelectSX}
          >
            {Object.values(BlockSortBy).map(({ label, value }) => {
              return (
                <MenuItem value={value} key={value} sx={SBlockMenuItemSX}>
                  {label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <Select
            value={String(limit)}
            onChange={cartsPerPageHandler}
            defaultValue={String(CartsPerPage.SIXTEEN)}
            sx={SBlockSelectSX}
          >
            {Object.values(CartsPerPage).map((value) => {
              return (
                <MenuItem
                  value={String(value)}
                  key={value}
                  sx={SBlockMenuItemSX}
                >
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </SBlockSelectBar>
  );
};
