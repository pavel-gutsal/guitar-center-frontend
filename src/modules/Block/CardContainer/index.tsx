import { isNil } from 'lodash';
import { SCartContainer } from './CardContainer.styles';
import { Cart } from '../Cart';
import { CartSceleton } from '../CartSceleton';
import { ModifiedCatalogItem } from '../../../types';

const emptyArray = Array(12).fill(null);

interface Props {
  products?: ModifiedCatalogItem[] | null;
  loading?: boolean | null;
  onHeartClick?: (model: string) => void;
  onBuyClick?: (model: string) => void;
  updateUserCartLoading?: boolean;
}

export const CartContainer = ({
  products = null,
  loading = null,
  onHeartClick,
  onBuyClick,
  updateUserCartLoading,
}: Props) => {
  return (
    <SCartContainer cartsNumber={products?.length || 1}>
      {loading &&
        emptyArray.map((_, index) => {
          return <CartSceleton key={index} />;
        })}
      {products &&
        products.length > 0 &&
        !isNil(onHeartClick) &&
        !isNil(onBuyClick) &&
        !isNil(updateUserCartLoading) &&
        products.map((product) => {
          return (
            <Cart
              product={product}
              key={product._id}
              onHeartClick={onHeartClick}
              onBuyClick={onBuyClick}
              updateUserCartLoading={updateUserCartLoading}
            />
          );
        })}
    </SCartContainer>
  );
};
