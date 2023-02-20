import { CatalogItem } from '../../../db/type';
import { SCartContainer } from './CardContainer.styles';
import { Cart } from '../Cart';

interface Props {
  products: CatalogItem[];
}

export const CartContainer = ({ products }: Props) => {
  return (
    <SCartContainer cartsNumber={products.length}>
      {products.map((product) => {
        return <Cart product={product} key={product.id} />;
      })}
    </SCartContainer>
  );
};
