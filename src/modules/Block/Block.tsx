import { useState } from 'react';
import { SBlock } from './Block.styles';
import { database } from '../../db';
import { CartContainer } from './CardContainer';
import { BlockHead } from './BlockHead';
import { BlockSections } from '../../constants';
import { BlockSelectBar } from './BlockHead/BlockSelectBar';
import { BlockPagination } from './BlockPagination';

export const Block = () => {
  const [blockHeadSection, setBlockHeadSection] = useState<BlockSections>(
    BlockSections.PHONES
  );
  return (
    <SBlock>
      <BlockHead blockHeadSection={blockHeadSection} />
      <BlockSelectBar />
      <CartContainer products={database.phones} />
      <BlockPagination />
    </SBlock>
  );
};
