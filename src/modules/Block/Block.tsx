import { SBlock } from './Block.styles';
import { CartContainer } from './CardContainer';
import { BlockHead } from './BlockHead';
import { BlockSelectBar } from './BlockHead/BlockSelectBar';
import { BlockPagination } from './BlockPagination';
import { Category } from '../../types';
import { useGetCatalogue } from '../../services/catalogue.service';
import { BlockSelectBarSkeleton } from './BlockHead/BlockSelectBarSkeleton';
import { useAppSelector } from '../../app/hooks';

interface Props {
  category: Category;
}

export const Block = ({ category }: Props) => {
  const { sortBy, page, limit } = useAppSelector(
    (state) => state.catalogueQuery
  );

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
          <BlockSelectBar limit={limit} sortBy={sortBy} />
          <CartContainer products={catalogue.array} />
          {Math.ceil(catalogue.length / limit) > 1 && (
            <BlockPagination
              page={page}
              pagesNumber={Math.ceil(catalogue.length / limit)}
            />
          )}
        </>
      )}
    </SBlock>
  );
};
