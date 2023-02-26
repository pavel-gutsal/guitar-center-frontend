import { SCartContainer } from './CardContainer.styles';
import { Cart } from '../Cart';
import { CartSceleton } from '../CartSceleton';
import { CatalogItem } from '../../../types';

const emptyArray = Array(12).fill(null);

interface Props {
  products?: CatalogItem[] | null;
  loading?: boolean | null;
}

export const CartContainer = ({ products = null, loading = null }: Props) => {
  return (
    <SCartContainer cartsNumber={products?.length || 1}>
      {loading &&
        emptyArray.map((_, index) => {
          return <CartSceleton key={index} />;
        })}
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return <Cart product={product} key={product._id} />;
        })}
    </SCartContainer>
  );
};
