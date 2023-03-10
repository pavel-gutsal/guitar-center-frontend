import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectOptions } from '../../../types';
import { SBlockSelectSX, SBlockMenuItemSX } from './SelectElement.styles';

interface Props {
  minWidth: number;
  onChange: (event: SelectChangeEvent) => void;
  selectValue: string;
  selectOptions: SelectOptions;
  defaultValue: string;
}

export const SelectElement = ({
  minWidth,
  onChange: onChangeFn,
  selectValue,
  selectOptions,
  defaultValue,
}: Props) => {
  return (
    <Box sx={{ minWidth }}>
      <FormControl fullWidth>
        <Select
          value={selectValue}
          onChange={onChangeFn}
          defaultValue={defaultValue}
          sx={SBlockSelectSX}
        >
          {Object.values(selectOptions).map(({ label, value }) => {
            return (
              <MenuItem value={value} key={value} sx={SBlockMenuItemSX}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
