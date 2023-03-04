import { BlockSectionsContent } from '../../../constants';
import { Category } from '../../../types';
import { SBlockHead, SBlockTitle } from './BlockHead.styles';
import { RouterBar } from './RouterBar';

interface Props {
  category: Category;
}

export const BlockHead = ({ category }: Props) => {
  return (
    <SBlockHead>
      <RouterBar category={category} />
      <SBlockTitle>{BlockSectionsContent[category]}</SBlockTitle>
    </SBlockHead>
  );
};
