import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../../../../app/hooks';
import { BlockSortBy, CartPerPage } from '../../../../constants';
import {
  dispatchLimit,
  dispatchSortBy,
} from '../../../../features/CatalogueQuery/CatalogueQueryReducer';
import { Limit, SortBy } from '../../../../types';
import { SelectElement } from '../../SelectElement';
import { SBlockSelectBar } from './BlockSelectBar.styles';

interface Props {
  limit: Limit;
  sortBy: SortBy;
}

export const BlockSelectBar = ({ limit, sortBy }: Props) => {
  const dispatch = useAppDispatch();

  const sortByHandler = (event: SelectChangeEvent) => {
    dispatch(dispatchSortBy(event.target.value as SortBy));
  };

  const cartsPerPageHandler = (event: SelectChangeEvent) => {
    dispatch(dispatchLimit(event.target.value as SortBy));
  };

  return (
    <SBlockSelectBar>
      <SelectElement
        minWidth={170}
        onChange={sortByHandler}
        selectValue={String(sortBy)}
        selectOptions={BlockSortBy}
        defaultValue={BlockSortBy.newest.value}
      />
      <SelectElement
        minWidth={80}
        onChange={cartsPerPageHandler}
        selectValue={String(limit)}
        selectOptions={CartPerPage}
        defaultValue={String(CartPerPage.SIXTEEN.value)}
      />
    </SBlockSelectBar>
  );
};
