import styled from 'styled-components';

export const SCarouselFullScreen = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-top: 45px;
  display: flex;
`;

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  display: flex;
  border-top: 1px solid #e1e1e1;
`;

export const SPhotoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SPhotoWrapper = styled.button`
  width: 56px;
  height: 56px;
  padding: 3px;
  border: 1px solid #dfdfdf;
  outline: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #ccc;
  }
`;

export const SPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SCarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

interface SPhotoWrapperProps {
  position: number;
}

export const SMainPhotoWrapper = styled.div<SPhotoWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${({ position }) => `calc(100% * ${position} * 1.1) `};
  transition: none;
`;

export const SImage = styled(SPhoto)``;

export const SArrowBackPosition = styled.div`
  height: 100%;
  width: 150px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const SArrowFarwardPosition = styled.div`
  height: 100%;
  width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
`;
