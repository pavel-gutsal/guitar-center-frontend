import { useState } from 'react';
import { SBlock } from './Block.styles';
import { CartContainer } from './CardContainer';
import { BlockHead } from './BlockHead';
import { BlockSelectBar } from './BlockHead/BlockSelectBar';
import { BlockPagination } from './BlockPagination';
import { Category, Limit, SortBy } from '../../types';
import { useGetCatalogue } from '../../services/catalogue.service';
import { BlockSelectBarSkeleton } from './BlockHead/BlockSelectBarSkeleton';

interface Props {
  category: Category;
}

export const Block = ({ category }: Props) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEWEST);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(Limit.SIXTEEN);

  const {
    data: catalogue,
    isLoading,
    isError,
    error,
  } = useGetCatalogue({ category, page, limit, sortBy });

  return (
    <SBlock>
      <BlockHead category={category} />
      {isLoading && (
        <>
          <BlockSelectBarSkeleton />
          <CartContainer loading={isLoading} />
        </>
      )}
      {catalogue && catalogue.length > 0 && (
        <>
          <BlockSelectBar
            limit={limit}
            setLimit={setLimit}
            setPage={setPage}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <CartContainer products={catalogue.array} />
          <BlockPagination
            page={page}
            setPage={setPage}
            pagesNumber={Math.ceil(catalogue.length / limit)}
          />
        </>
      )}
    </SBlock>
  );
};
