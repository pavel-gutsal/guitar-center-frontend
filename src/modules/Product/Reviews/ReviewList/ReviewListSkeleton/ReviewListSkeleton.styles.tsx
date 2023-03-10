import styled from 'styled-components';
import { colors } from '../../../../../Theme';

export const SAuthorGroup = styled.div`
  width: 130px;
  height: 36px;
  display: flex;
  gap: 8px;
`;

export const SVerticalGroup = styled.div`
  width: 130px;
  height: 36px;
`;

export const SMainText = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SkeletonTextSX = {
  backgroundColor: colors.skeletonWhite,
  height: '16px',
  borderRadius: '10px',
};

export const SkeletonRoundSX = {
  backgroundColor: colors.skeletonWhite,
  borderRadius: '50%',
  width: '36px',
  height: '36px',
};

export const SkeletonTextShortSX = {
  ...SkeletonTextSX,
  width: '50%',
};

export const SkeletonProsSX = {
  ...SkeletonTextSX,
  width: '50%',
};
