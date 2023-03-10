import { useParams } from 'react-router-dom';
import { Error } from '../../modules/Error';
import { Product } from '../../modules/Product';
import { ProductSkeleton } from '../../modules/Product/ProductSkeleton';
import { useGetProduct } from '../../services/product.service';
import { Category } from '../../types';
import { SProductPage } from './ProductPage.styles';

interface Props {
  category: Category;
}

export const ProductPage = ({ category }: Props) => {
  const { model } = useParams();

  const { data: product, isLoading, isError } = useGetProduct(model);

  return (
    <SProductPage>
      {isLoading && <ProductSkeleton category={category} model={model} />}
      {product && !product.error && product.item && product.details && (
        <Product
          category={category}
          item={product.item}
          details={product.details}
        />
      )}
      {isError && <Error />}
    </SProductPage>
  );
};
