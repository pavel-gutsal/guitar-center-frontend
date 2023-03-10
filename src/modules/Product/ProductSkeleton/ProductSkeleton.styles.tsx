import styled from 'styled-components';
import { colors } from '../../../Theme';
import { SProduct } from '../Product.styles';

export const SProductSkeleton = styled(SProduct)``;

export const SkeletonSX = {
  backgroundColor: colors.skeletonWhite,
  height: '24px',
  width: '60px',
  borderRadius: '10px',
};

export const SList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  padding-right: 8px;
  gap: 8px;
`;

export const ThumbNailSkeleton = {
  transform: 'scale(1)',
  backgroundColor: colors.skeletonWhite,
  width: '100%',
  height: '56px',
  borderRadius: '10px',
};

export const SCentered = styled.div`
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
