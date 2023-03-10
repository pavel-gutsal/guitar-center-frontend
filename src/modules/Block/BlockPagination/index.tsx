import Pagination from '@mui/material/Pagination';
import { useAppDispatch } from '../../../app/hooks';
import { dispatchPage } from '../../../features/CatalogueQuery/CatalogueQueryReducer';
import { SBlockPagination } from './BlockPagination.styles';

interface Props {
  page: number;
  pagesNumber: number;
}

export const BlockPagination = ({ page, pagesNumber }: Props) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(dispatchPage(value));
    window.scrollTo(0, 0);
  };

  return (
    <SBlockPagination>
      <Pagination
        count={pagesNumber}
        onChange={handleChange}
        page={page}
        variant="outlined"
        shape="rounded"
        color="orange"
      />
    </SBlockPagination>
  );
};
