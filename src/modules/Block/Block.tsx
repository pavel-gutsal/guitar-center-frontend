import { SBlock } from './Block.styles';
import { database } from '../../db';
import { CartContainer } from './CardContainer';

export const Block = () => {
  return (
    <SBlock>
      <CartContainer products={database.phones} />
    </SBlock>
  );
};
