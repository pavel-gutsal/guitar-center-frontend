import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const SSpecs = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 7px;

  @media screen and ${devices.netbookS} {
    grid-template-columns: 1fr;
  }
`;

export const SBlock = styled.div`
  background: white;
  border-radius: 5px;
  width: 100%;
`;

export const SSpecsBody = styled(SBlock)`
  padding: 40px;

  @media screen and ${devices.netbookS} {
    padding: 20px;
  }

  @media screen and ${devices.mobileL} {
    padding: 10px 5px;
  }
`;

export const STitle = styled.h3`
  font-size: 24px;
  color: ${colors.fontSpecification};

  @media screen and ${devices.mobileL} {
    font-size: 18px;
  }
`;

export const SGroup = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 24px 16px;
  gap: 10px;
  align-items: center;
`;

export const SWarningMassage = styled.p`
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 300;

  @media screen and ${devices.mobileL} {
    font-size: 11px;
  }
`;
