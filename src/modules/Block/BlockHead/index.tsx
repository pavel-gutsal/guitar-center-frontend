import { BlockSections } from '../../../constants';
import { ChevronRight } from '../../../SVG/ChevronRight';
import { SBlockHead, SBlockRouter, SBlockTitle } from './BlockHead.styles';
import { BlockHomeButtonIcon } from './Buttons/BlockHomeButtonIcon';
import { BlockLinkAccessories } from './Buttons/BlockLinkAccessories';
import { BlockLinkPhones } from './Buttons/BlockLinkPhones';
import { BlockLinkTablet } from './Buttons/BlockLinkTablet';

interface Props {
  blockHeadSection: BlockSections;
}

export const BlockHead = ({ blockHeadSection }: Props) => {
  return (
    <SBlockHead>
      <SBlockRouter>
        <BlockHomeButtonIcon />
        <ChevronRight />
        {blockHeadSection === BlockSections.PHONES && <BlockLinkPhones />}
        {blockHeadSection === BlockSections.TABLETS && <BlockLinkTablet />}
        {blockHeadSection === BlockSections.ACCESSORIES && (
          <BlockLinkAccessories />
        )}
      </SBlockRouter>
      <SBlockTitle>{blockHeadSection}</SBlockTitle>
    </SBlockHead>
  );
};
