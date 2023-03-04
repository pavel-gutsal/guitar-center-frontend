import { IMAGE_PAY } from '../../../../assets/creditPay';
import { BankTransaction } from '../../../../assets/SVG/BankTransaction';
import { Cash } from '../../../../assets/SVG/Cash';
import { MoneyBack } from '../../../../assets/SVG/MoneyBack';
import { Shield } from '../../../../assets/SVG/Shield';
import {
  SPaymentMethods,
  SProgram,
  SImage,
  SPrograms,
  STitle,
  SDescription,
  SHorizontalLine,
} from './PaymentMethods.styles';

export const PaymentMethods = () => {
  return (
    <SPaymentMethods>
      <STitle>We are accepting</STitle>
      <SPrograms>
        {Object.values(IMAGE_PAY).map((pic, index) => (
          <SProgram key={index}>
            <SImage src={pic} alt="paymentMethod" />
          </SProgram>
        ))}
      </SPrograms>
      <SPrograms>
        <SProgram width="95px">
          <Cash />
          <SDescription>Cash</SDescription>
        </SProgram>
        <SProgram width="180px">
          <BankTransaction />
          <SDescription>Bank transaction</SDescription>
        </SProgram>
      </SPrograms>
      <SHorizontalLine />
      <SPrograms>
        <SProgram width="auto">
          <Shield />
          <SDescription>12-month warrenty</SDescription>
        </SProgram>
        <SProgram width="auto">
          <MoneyBack />
          <SDescription>2-weeks money back garantee</SDescription>
        </SProgram>
      </SPrograms>
    </SPaymentMethods>
  );
};
