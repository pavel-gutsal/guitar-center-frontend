import { useLocation } from 'react-router-dom';
import { Block } from '../../modules/Block/Block';
import { Category } from '../../types';
import { SBlockContainer } from './BlockContent.styles';

export const BlockContent = () => {
  const location = useLocation();
  const category = location.pathname.slice(1) as Category;

  return (
    <SBlockContainer>
      <Block category={category} />
    </SBlockContainer>
  );
};
