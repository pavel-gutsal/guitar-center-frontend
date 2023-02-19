import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { CartsPerPage, BlockSortBy } from '../../../../constants';
import {
  SBlockSelectBar,
  SBlockSelectSX,
  SBlockMenuItemSX,
} from './BlockSelectBar.styles';

export const BlockSelectBar = () => {
  const [sortBy, setSortBy] = useState<string>(BlockSortBy.popularity);
  const [cartsPerPage, setCartsPerPage] = useState<number>(
    CartsPerPage.SIXTEEN
  );

  const sortByHandler = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const cartsPerPageHandler = (event: SelectChangeEvent) => {
    setCartsPerPage(event.target.value);
  };

  return (
    <SBlockSelectBar>
      <Box sx={{ minWidth: 160 }}>
        <FormControl fullWidth>
          <Select
            value={sortBy}
            onChange={sortByHandler}
            defaultValue={BlockSortBy.popularity}
            sx={SBlockSelectSX}
            color="orange"
          >
            {Object.values(BlockSortBy).map((value) => {
              return (
                <MenuItem
                  value={value}
                  key={value}
                  color="orange"
                  sx={SBlockMenuItemSX}
                >
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <Select
            value={cartsPerPage}
            onChange={cartsPerPageHandler}
            defaultValue={CartsPerPage.SIXTEEN}
            color="orange"
            sx={SBlockSelectSX}
          >
            {Object.values(CartsPerPage).map((value) => {
              return (
                <MenuItem
                  value={value}
                  key={value}
                  sx={SBlockMenuItemSX}
                  color="orange"
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
