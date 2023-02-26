import styled from 'styled-components';
import { devices } from '../../../Theme';

export const SBlockPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  width: 100%;

  @media screen and ${devices.mobileL} {
    padding: 20px 0;
  }
`;
