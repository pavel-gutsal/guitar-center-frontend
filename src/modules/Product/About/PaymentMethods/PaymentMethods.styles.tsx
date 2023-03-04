import styled from 'styled-components';
import { devices } from '../../../../Theme';
import { SBlock } from '../About.styles';

export const SPaymentMethods = styled(SBlock)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SPrograms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and ${devices.netbookS} {
    gap: 10px;
  }

  @media screen and ${devices.mobileL} {
    gap: 8px;
  }
`;

interface SProgramProps {
  width?: string;
}

export const SProgram = styled.div<SProgramProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 7px;
  background: #f0f0fa;
  width: ${({ width }) => width || '66px'};
  height: 42px;
  padding: 0 10px;

  @media screen and ${devices.mobileL} {
    height: 36px;
  }
`;

export const SImage = styled.img``;

export const STitle = styled.h3`
  display: flex;
  font-size: 16px;
  color: #424242;
  padding-bottom: 8px;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }
`;

export const SDescription = styled.h3`
  font-size: 14px;
  color: #616161;

  @media screen and ${devices.mobileL} {
    font-size: 13px;
  }
`;

export const SHorizontalLine = styled.hr`
  border: 1px solid #ececec;
  margin: 10px 0;
`;
