import styled from 'styled-components';
import { colors, devices } from '../../../../Theme';

export const SReviewList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 20px;
`;

export const SReview = styled.div`
  border: 1px solid ${colors.whitish};
  border-radius: 10px;
  background: white;
`;

export const SGroupHorizontal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  border-bottom: 1px solid ${colors.whitish};

  @media screen and ${devices.tabletS} {
    padding: 7px 10px;
  }
`;

export const SAuthorGroup = styled.div`
  display: flex;
  gap: 5px;
`;

export const SNameGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SAuthor = styled.h3`
  font-size: 18px;
  color: #222222;
`;

export const SIcon = styled.img`
  grid-row: 1 / span 2;
  width: 35px;
  height: 35px;
  display: flex;
`;

export const SBadge = styled.h4`
  font-size: 12px;
  color: ${colors.saladGreen};
`;

export const SVerticalGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SRatingGroup = styled.div`
  display: flex;
  transform: translateX(-5px);
`;

export const SPostDate = styled.p`
  font-size: 12px;
  color: ${colors.greyFont};
`;

export const SRatingValue = styled.h3`
  font-size: 14px;
  color: #5b5b5b;
  padding-left: 7px;
`;
