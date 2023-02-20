import {
  BlockSections,
  BlockSectionsContent,
  ROUTES,
} from '../../../constants';
import { ChevronRight } from '../../../SVG/ChevronRight';
import { SBlockHead, SBlockRouter, SBlockTitle } from './BlockHead.styles';
import { BlockHomeButtonIcon } from './Buttons/BlockHomeButtonIcon';
import { BlockLinkLaptops } from './Buttons/BlockLinkLaptops';
import { BlockLinkPhones } from './Buttons/BlockLinkPhones';
import { BlockLinkTablet } from './Buttons/BlockLinkTablet';

interface Props {
  location: BlockSections;
}

export const BlockHead = ({ location }: Props) => {
  return (
    <SBlockHead>
      <SBlockRouter>
        <BlockHomeButtonIcon />
        <ChevronRight />
        {location === BlockSections.phones && <BlockLinkPhones />}
        {location === BlockSections.tablets && <BlockLinkTablet />}
        {location === BlockSections.laptops && <BlockLinkLaptops />}
      </SBlockRouter>
      <SBlockTitle>{BlockSectionsContent[location]}</SBlockTitle>
    </SBlockHead>
  );
};
