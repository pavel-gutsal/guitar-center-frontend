import { BlockSectionsContent } from '../../../constants';
import { ChevronRight } from '../../../assets/SVG/ChevronRight';
import { Category } from '../../../types';
import { SBlockHead, SBlockRouter, SBlockTitle } from './BlockHead.styles';
import { BlockHomeButtonIcon } from './Buttons/BlockHomeButtonIcon';
import { BlockLinkLaptops } from './Buttons/BlockLinkLaptops';
import { BlockLinkPhones } from './Buttons/BlockLinkPhones';
import { BlockLinkTablet } from './Buttons/BlockLinkTablet';

interface Props {
  category: Category;
}

export const BlockHead = ({ category }: Props) => {
  return (
    <SBlockHead>
      <SBlockRouter>
        <BlockHomeButtonIcon />
        <ChevronRight />
        {category === Category.phones && <BlockLinkPhones />}
        {category === Category.tablets && <BlockLinkTablet />}
        {category === Category.laptops && <BlockLinkLaptops />}
      </SBlockRouter>
      <SBlockTitle>{BlockSectionsContent[category]}</SBlockTitle>
    </SBlockHead>
  );
};
