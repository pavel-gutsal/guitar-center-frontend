import styled from 'styled-components';
import { devices } from '../../../../../Theme';

export const SLocalStoresWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  gap: 10px;

  @media screen and ${devices.laptopS} {
    grid-template-columns: 30px 1fr 30px;
  }

  @media screen and ${devices.mobileL} {
    display: none;
  }
`;

export const SLocalStoreContainer = styled.div`
  width: 100%;
  height: 105px;
  overflow: hidden;
  position: relative;
`;

interface SLocalStoreListProps {
  position: number;
}

export const SLocalStoreList = styled.div<SLocalStoreListProps>`
  position: absolute;
  width: 100%;
  top: 0;
  left: ${({ position }) => `calc(-100% * ${position || 0} - 10px * ${position || 0})`};
  display: grid;
  grid-template-columns: repeat(8, calc(50% - 5px));
  gap: 10px;
  transition: all 0.3s ease-in-out;
`;
