import { CircularProgress } from '@mui/material';
import { isNil } from 'lodash';
import { ShoppintCard } from '../../../types';
import {
  SCheckout,
  SProceedButton,
  SProductPrice,
  SText,
  STotalPrice,
} from './Checkout.style';

const calculateItemNumber = (normilizedList: ShoppintCard[] | undefined) => {
  if (isNil(normilizedList)) return undefined;
  return normilizedList.reduce((prev, curr) => curr.number + prev, 0);
};

const calculateTotalPrice = (normilizedList: ShoppintCard[] | undefined) => {
  if (isNil(normilizedList)) return undefined;
  return normilizedList.reduce(
    (prev, curr) => curr.number * (curr.details?.discountedPrice || 0) + prev,
    0
  );
};

interface Props {
  normilizedList: ShoppintCard[] | undefined;
  fadeOut: boolean;
  openCheckoutModalHanler: () => void;
  loading: boolean;
}

export const Checkout = ({
  normilizedList,
  fadeOut,
  openCheckoutModalHanler,
  loading,
}: Props) => {
  return (
    <SCheckout fadeOut={fadeOut}>
      <SProductPrice>
        <SText>
          {`${calculateItemNumber(normilizedList)} items worth`}
          <span>{`${calculateTotalPrice(normilizedList)} $`}</span>
        </SText>
      </SProductPrice>
      <SProductPrice>
        <SText>
          estimated shipping
          <span>free</span>
        </SText>
      </SProductPrice>
      <SProductPrice padding="25px 0">
        <STotalPrice>
          Total
          <span>{`${calculateTotalPrice(normilizedList)} $`}</span>
        </STotalPrice>
      </SProductPrice>
      <SProceedButton onClick={openCheckoutModalHanler} disabled={loading}>
        {loading ? <CircularProgress color="inherit" size={24} /> : 'Proceed'}
      </SProceedButton>
    </SCheckout>
  );
};
