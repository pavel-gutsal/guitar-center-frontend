import styled from 'styled-components';
import { colors, devices } from '../../../../Theme';
import { SBlock } from '../About.styles';

export const SCarousel = styled.div`
  display: none;
  width: 100%;
  height: 500px;
  padding: 10px 5px;
  overflow: hidden;

  @media screen and ${devices.netbookS} {
    display: inherit;
  }

  @media screen and ${devices.tabletS} {
    height: 450px;
  }

  @media screen and ${devices.mobileL} {
    height: 400px;
  }

  @media screen and ${devices.mobileS} {
    height: 350px;
  }
`;

export const SPhotoGallery = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

interface SPhotoWrapperProps {
  position: number;
}

export const SPhotoWrapper = styled.div<SPhotoWrapperProps>`
  width: 100%;
  height: calc(100% - 20px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ position }) => `calc(100% * ${position} * 1.1) `};
  transition: none;
  background: white;
  transition: none;
`;

export const SPhoto = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 500px;

  @media screen and ${devices.tabletS} {
    max-height: 450px;
  }

  @media screen and ${devices.mobileL} {
    max-height: 400px;
  }

  @media screen and ${devices.mobileS} {
    max-height: 350px;
  }
`;

export const SButton = styled.div`
  position: absolute;
  width: 100px;
  height: 100%;

  @media screen and ${devices.tabletS} {
    width: 80px;
  }

  @media screen and ${devices.mobileL} {
    width: 60px;
  }

  @media screen and ${devices.mobileS} {
    width: 55px;
  }
`;

export const SButtonLeft = styled(SButton)`
  left: 0;
`;

export const SButtonRight = styled(SButton)`
  right: 0;
`;

export const SDotsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  @media screen and ${devices.mobileL} {
    gap: 7px;
  }
`;

interface SDotProps {
  active: boolean;
}

export const SDot = styled.div<SDotProps>`
  background: ${({ active }) =>
    active ? colors.brightOrange : colors.greyFont};
  width: 6px;
  height: 6px;
  border: 1px solid
    ${({ active }) => (active ? colors.brightOrange : colors.greyFont)};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  @media screen and ${devices.mobileL} {
    width: 5px;
    height: 5px;
  }
`;

export const STitle = styled.h3`
  display: none;

  @media screen and ${devices.netbookS} {
    display: inherit;
    font-size: 22px;
  }

  @media screen and ${devices.mobileL} {
    font-size: 18px;
  }
`;

export const SCarouselWrapper = styled(SBlock)`
  display: none;
  flex-direction: column;
  padding-bottom: 10px;

  @media screen and ${devices.netbookS} {
    display: flex;
  }
`;

export const SHorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #dcdcdc;
  margin: 10px 0;
  display: none;

  @media screen and ${devices.netbookS} {
    display: inherit;
  }
`;

export const SUpperBarWrapper = styled.div`
  display: none;

  @media screen and ${devices.netbookS} {
    display: inherit;
  }
`;
