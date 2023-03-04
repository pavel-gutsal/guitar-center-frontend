import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const SAbout = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.backgroundApp};
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5px;

  @media screen and ${devices.netbookS} {
    display: flex;
    width: 100%;
  }
`;

export const SBlock = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 32px;

  @media screen and ${devices.netbookS} {
    padding: 24px;
  }
`;

export const SDescriptionWrapper = styled.div`
  display: grid;
  background: ${colors.backgroundApp};
  gap: 5px;

  @media screen and ${devices.netbookS} {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    gap: 15px;
  }
`;

export const SSpecsBlock = styled(SBlock)`
  height: auto;

  @media screen and ${devices.mobileL} {
    display: none;
  }
`;
