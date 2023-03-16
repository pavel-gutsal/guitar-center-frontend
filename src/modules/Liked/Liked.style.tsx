import styled from 'styled-components';

export const SLiked = styled.div`
  min-height: calc(100vh - 60px);
`;

interface SCartWrapperProps {
  liked: boolean;
  emptyPage: boolean;
}

export const SCartWrapper = styled.div<SCartWrapperProps>`
  opacity: ${({ liked, emptyPage }) => {
    if (emptyPage) return '0';
    if (!liked) return '0.7';
    return '1';
  }};
  transition: all 0.3s ease-in-out;
`;
