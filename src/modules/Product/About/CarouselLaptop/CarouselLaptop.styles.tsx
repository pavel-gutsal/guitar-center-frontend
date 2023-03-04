import styled from 'styled-components';
import { devices, theme } from '../../../../Theme';

export const SPhotoGallery = styled.div`
  background: #ffffff;
  padding: 10px 10px;
  height: calc(100vh - 140px);
  width: 100%;
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 10px;
  position: sticky;
  top: ${theme.sizes.stickyAfterTabBarLaptop};
  align-self: start;

  @media screen and ${devices.netbookS} {
    display: none;
  }
`;

export const SCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

interface SPhotoMainProps {
  position: number;
}

export const SPhotoMain = styled.div<SPhotoMainProps>`
  width: 100%;
  heigth: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ position }) => `calc(100% * ${position} * 1.2)`};
  transition: none;
`;

export const SPhoto = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: calc(100vh - 160px);
  cursor: pointer;
`;
