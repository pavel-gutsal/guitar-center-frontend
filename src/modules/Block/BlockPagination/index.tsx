import Pagination from '@mui/material/Pagination';
import { SBlockPagination } from './BlockPagination.styles';

export const BlockPagination = () => {
  return (
    <SBlockPagination>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="orange"
      />
    </SBlockPagination>
  );
};
