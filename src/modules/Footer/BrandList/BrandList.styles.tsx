import styled from 'styled-components';
import { IMAGES } from '../../../assets';
import { colors, devices, theme } from '../../../Theme';

export enum SIZE {
  LARGE = 'large',
}

export const SBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 5px;
  padding-bottom: 30px;
  border-bottom: 1px solid gray;

  @media screen and ${devices.mobileL} {
    gap: 30px 20px;
  }

  @media screen and ${devices.mobileS} {
    display: none;
  }
`;

export const STitle = styled.h3`
  font-size: 14px;
  color: ${colors.greyFont};
`;

export const SBrandList = styled.div`
  display: flex;
  gap: 15px 30px;
  flex-wrap: wrap;
  align-items: center;
`;

type SIconWrapperProps = {
  size?: SIZE;
};

export const SIconWrapper = styled.div<SIconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => (size ? '46px' : '32px')};

  @media screen and ${devices.laptopS} {
    height: ${({ size }) => (size ? '38px' : '28px')};
  }

  @media screen and ${devices.netbook} {
    height: ${({ size }) => (size ? '36px' : '24px')};
  }

  @media screen and ${devices.mobileL} {
    height: ${({ size }) => (size ? '32px' : '22px')};
  }
`;

export const SIcon = styled.img`
  display: flex;
  width: auto;
  height: 100%;
`;
