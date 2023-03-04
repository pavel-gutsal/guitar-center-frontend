import { useParams } from 'react-router-dom';
import { Product } from '../../modules/Product';
import { Category } from '../../types';
import { SProductPage } from './ProductPage.styles';

interface Props {
  category: Category;
}

export const ProductPage = ({ category }: Props) => {
  const { model } = useParams();

  return (
    <SProductPage>
      <Product category={category} model={model} />
    </SProductPage>
  );
};
