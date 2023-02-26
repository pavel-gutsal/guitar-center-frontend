import Pagination from '@mui/material/Pagination';
import { SBlockPagination } from './BlockPagination.styles';

interface Props {
  page: number;
  pagesNumber: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const BlockPagination = ({ page, pagesNumber, setPage }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
