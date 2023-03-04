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

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SAvailableText = styled.p`
  color: #5fb904;
  font-size: 14px;
`;

export const SHorizontalGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SRating = styled(Flex)`
  gap: 5px;

  @media screen and ${devices.mobileL} {
    gap: 0;
  }
`;

export const SRatingText = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: #9c9c9c;
  transform: translateX(20px);
  padding-right: 20px;

  @media screen and ${devices.mobileL} {
    padding-right: 10px;
    transform: translateX(10px);
    font-size: 13px;
  }
`;

export const SReviews = styled(Flex)`
  cursor: pointer;
  background: none;
  outline: none;
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
