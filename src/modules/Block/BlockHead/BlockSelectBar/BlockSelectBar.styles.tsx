import styled from 'styled-components';
import { colors, devices } from '../../../../Theme';

export const SBlockSelectBar = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 20px;

  @media screen and ${devices.tabletS} {
    padding: 20px 0;
    justify-content: flex-start;
  }
`;

export const SkeletonSX = {
  backgroundColor: colors.skeletonWhite,
  height: '32px',
  borderRadius: '10px',
};
