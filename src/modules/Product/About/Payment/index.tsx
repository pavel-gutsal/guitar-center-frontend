import { CatalogItem } from '../../../../types';
import { BottomBar } from './BottomBar';
import { SPayment, STitle, SUpperBarWrapper } from './Payment.styles';
import { PaymentBar } from './PaymentBar';
import { UpperBar } from './UpperBar';

interface Props {
  data: CatalogItem;
  comments: number;
}

export const Payment = ({ data, comments }: Props) => {
  return (
    <SPayment>
      <STitle>{data.name}</STitle>
      <SUpperBarWrapper>
        <UpperBar rating={data.rating} comments={comments} />
      </SUpperBarWrapper>
      <PaymentBar data={data} />
      <BottomBar data={data} />
    </SPayment>
  );
};
