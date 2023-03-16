import { useMemo } from 'react';
import { SBlock } from './Block.styles';
import { CartContainer } from './CardContainer';
import { BlockHead } from './BlockHead';
import { BlockSelectBar } from './BlockHead/BlockSelectBar';
import { BlockPagination } from './BlockPagination';
import { Category, ModifiedCatalogItem } from '../../types';
import { useGetCatalogue } from '../../services/catalogue.service';
import { BlockSelectBarSkeleton } from './BlockHead/BlockSelectBarSkeleton';
import { useAppSelector } from '../../app/hooks';
import { normalizeCatalogue } from './utils';

import { useBuyBotton } from '../../hooks/useBuyBotton.hook';

interface Props {
  category: Category;
}

export const Block = ({ category }: Props) => {
  const { onHeartClick, onBuyClick, updateUserCartLoading } = useBuyBotton();
  const { sortBy, page, limit } = useAppSelector(
    (state) => state.catalogueQuery
  );
  const { userCartExist, cartArray, likedArray } = useAppSelector(
    (state) => state.userCart
  );

  const {
    data: catalogue,
    isLoading,
    isError,
    error,
  } = useGetCatalogue({ category, page, limit, sortBy });

  const modifiedCatalogue: ModifiedCatalogItem[] | undefined = useMemo(
    (): ModifiedCatalogItem[] | undefined =>
      normalizeCatalogue({
        userCartExist,
        cartArray,
        likedArray,
        catalogue: catalogue?.array,
      }),
    [userCartExist, cartArray, likedArray, catalogue]
  );

  return (
    <SBlock>
      <BlockHead category={category} />
      {isLoading && (
        <>
          <BlockSelectBarSkeleton />
          <CartContainer loading={isLoading} />
        </>
      )}
      {modifiedCatalogue && modifiedCatalogue.length > 0 && (
        <>
          <BlockSelectBar limit={limit} sortBy={sortBy} />
          <CartContainer
            products={modifiedCatalogue}
            onHeartClick={onHeartClick}
            onBuyClick={onBuyClick}
            updateUserCartLoading={updateUserCartLoading}
          />
          {catalogue &&
            catalogue.length &&
            Math.ceil(catalogue.length / limit) > 1 && (
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
