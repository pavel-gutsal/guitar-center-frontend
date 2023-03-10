import styled from 'styled-components';
import { devices } from '../../../../../Theme';

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SHorizontalGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SReviews = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: none;
  gap: 5px;

  @media screen and ${devices.mobileM} {
    padding-right: 0;
  }
`;

export const SCommentText = styled.h3`
  font-size: 13px;
  font-weight: 300;
  color: gray;
`;

export const SGroup = styled(Flex)`
  gap: 20px;

  @media screen and ${devices.mobileL} {
    gap: 0;
  }

  @media screen and ${devices.mobileM} {
    width: 100%;
    justify-content: space-between;
  }
`;
