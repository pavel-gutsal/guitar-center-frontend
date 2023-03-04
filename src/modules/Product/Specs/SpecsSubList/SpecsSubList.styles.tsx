import styled from 'styled-components';
import { colors, devices } from '../../../../Theme';

export const SSpecsSubList = styled.div`
  padding: 20px 0;
`;

export const SSectionTitle = styled.h3`
  font-size: 24px;
  color: ${colors.fontSpecification};
  padding: 10px 0;

  @media screen and ${devices.tabletS} {
    font-size: 20px;
  }

  @media screen and ${devices.mobileL} {
    font-size: 16px;
  }
`;

interface SisOddProps {
  odd: boolean;
}

export const SPropertyWrapper = styled.div<SisOddProps>`
  width: 100%;
  min-height: 70px;
  padding: 24px 16px;
  background: ${({ odd }) => odd && '#F7FAFD'};

  @media screen and ${devices.tabletS} {
    padding: 18px 12px;
    min-height: fit-content;
  }
`;

export const SGroup = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and ${devices.mobileM} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 3px;
  }
`;

export const SKey = styled.p<SisOddProps>`
  max-width: 300px;
  font-size: 16px;
  font-weight: 300;
  background: ${({ odd }) => (odd ? '#F7FAFD' : 'white')};
  position: relative;

  @media screen and ${devices.netbookS} {
    max-width: 250px;
  }

  @media screen and ${devices.mobileL} {
    font-size: 14px;
    max-width: 200px;
  }
  @media screen and ${devices.mobileM} {
    max-width: 100%;
  }
`;

export const SValue = styled(SKey)`
  font-weight: 400;
  background: ${({ odd }) => (odd ? '#F7FAFD' : 'white')};
`;

export const SDots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16px;
  border-bottom: 1px dotted ${colors.fontSpecification};

  @media screen and ${devices.mobileM} {
    display: none;
  }
`;
