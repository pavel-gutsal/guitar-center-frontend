import styled from 'styled-components';
import { devices } from '../../../../../Theme';

export const SAvailable = styled.div`
  background: #f0f9e8;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: fit-content;
  padding: 0 7px 0 2px;
  gap: 5px;

  @media screen and ${devices.mobileL} {
    transform: scale(0.8);
    position: relative;
    left: -13px;
  }

  @media screen and ${devices.mobileM} {
    display: none;
  }
`;

export const SAvailableText = styled.p`
  color: #5fb904;
  font-size: 14px;
`;
