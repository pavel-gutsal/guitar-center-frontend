import styled from 'styled-components';
import { devices } from '../../../Theme';
import { SEmptyWishList, SText, SLink } from '../../Liked/Liked.style';

export const SEmptyCart = styled(SEmptyWishList)`
  background: #efe3fe;
  animation-delay: 0.5s;

  @media screen and ${devices.mobileL} {
    box-shadow: 0 0 50px 50px #efe3fe;
  }
`;

export const SImage = styled.img`
  width: 200px;
  position: relative;
  left: -10px;
`;

export const STitleCart = styled(SText)`
  color: #ff00bb;
`;

export const SLinkCart = styled(SLink)`
  color: #5781ff;
`;
