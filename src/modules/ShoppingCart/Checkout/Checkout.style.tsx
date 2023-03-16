import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

interface SCheckoutProps {
  fadeOut: boolean;
}

export const SCheckout = styled.div<SCheckoutProps>`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 24px 30px;
  border-radius: 7px;
  border: 1px solid ${colors.skeletonWhite};
  position: sticky;
  top: 70px;
  height: 290px;
  opacity: ${({ fadeOut }) => (fadeOut ? '0' : '1')};
  transition: all 0.3s ease-in-out;

  @media screen and ${devices.netbookS} {
    padding: 24px 15px;
  }

  @media screen and ${devices.tabletS} {
    position: fixed;
    top: inherit;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 2;
    isolation: isolate;
    box-shadow: 0 0 10px 0 rgba(62, 62, 62, 0.3);
    height: auto;
    border-radius: 10px 10px 0 0;
    padding: 15px 15px;
  }
`;

interface SProductPriceProps {
  padding?: string;
}

export const SProductPrice = styled.div<SProductPriceProps>`
  width: 100%;
  padding: ${({ padding }) => padding || '15px 0 '};
  border-bottom: 1px solid ${colors.skeletonWhite};

  &:last-child {
    border-bottom: none;
  }

  @media screen and ${devices.tabletS} {
    padding: 10px 0;
  }
`;

export const SText = styled.h3`
  display: flex;
  justify-content: space-between;
  color: #565656;
  font-size: 14px;

  & span {
    font-size: 16px;
    color: ${colors.greyTextUnhighlighted};
  }

  @media screen and ${devices.tabletS} {
    font-size: 12px;

    & span {
      font-size: 13px;
      color: ${colors.greyTextUnhighlighted};
    }
  }
`;

export const STotalPrice = styled.p`
  display: flex;
  justify-content: space-between;
  color: #2b2b2b;
  font-size: 20px;

  & span {
    font-size: 22px;
  }

  @media screen and ${devices.tabletS} {
    font-size: 16px;

    & span {
      font-size: 18px;
    }
  }
`;

export const SProceedButton = styled.button`
  background: ${colors.brightOrange};
  color: white;
  padding: 15px 0;
  outline: none;
  border-radius: 7px;
  font-size: 16px;
  border: 1px solid ${colors.brightOrange};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.successGreen};
    border: 1px solid ${colors.successGreen};
  }

  @media screen and ${devices.tabletS} {
    padding: 12px 0;
    font-size: 14px;
  }
`;
