import styled from 'styled-components';
import { colors, devices } from '../../../../../Theme';

export const SPaymentBar = styled.div`
  display: grid;
  grid-template-columns: 100px 160px 250px 60px;
  gap: 20px;
  margin-top: 20px;

  @media screen and ${devices.laptop} {
    grid-template-columns: 90px 140px 220px 40px;
  }

  @media screen and ${devices.laptopS} {
    grid-template-columns: 80px 120px 200px 40px;
  }

  @media screen and ${devices.netbook} {
    grid-template-columns: 80px 110px 180px 40px;
    gap: 15px;
  }

  @media screen and ${devices.netbookS} {
    grid-template-columns: 100px 160px 250px 60px;
    gap: 20px;
  }

  @media screen and ${devices.tabletS} {
    grid-template-columns: 80px 1fr 1.6fr 40px;
    gap: 15px;
  }

  @media screen and ${devices.mobileL} {
    grid-template-columns: 1fr 1.5fr;
    gap: 15px;
  }
`;

export const SGroupHorizontal = styled.div`
  display: flex;
  gap: 10px;
`;

export const SGroupVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const STotalPrice = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #292929;

  &::after {
    content: ' $';
    font-size: 24px;
  }
`;

export const SBeforeDiscount = styled.h3`
  font-size: 14px;
  color: #9c9c9c;
  text-decoration: line-through;
`;

export const SDiscountTag = styled.h3`
  font-size: 11px;
  color: white;
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 3px 5px;
  border-radius: 15px;
  border: none;
  background: ${colors.brigthRed};
`;
