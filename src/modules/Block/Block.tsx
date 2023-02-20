import { SBlock } from './Block.styles';
import { database } from '../../db';
import { CartContainer } from './CardContainer';
import { BlockHead } from './BlockHead';
import { BlockSections } from '../../constants';
import { BlockSelectBar } from './BlockHead/BlockSelectBar';
import { BlockPagination } from './BlockPagination';

interface Props {
  location: BlockSections;
}

export const Block = ({ location }: Props) => {
  return (
    <SBlock>
      <BlockHead location={location} />
      <BlockSelectBar />
      <CartContainer products={database[location]} />
      <BlockPagination />
    </SBlock>
  );
};
