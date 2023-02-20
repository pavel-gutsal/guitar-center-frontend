import { useLocation } from 'react-router-dom';
import { BlockSections } from '../../constants';
import { Block } from '../../modules/Block/Block';
import { SBlockContainer } from './BlockContent.styles';

export const BlockContent = () => {
  const location = useLocation();

  return (
    <SBlockContainer>
      <Block location={location.pathname.slice(1) as BlockSections} />
    </SBlockContainer>
  );
};
