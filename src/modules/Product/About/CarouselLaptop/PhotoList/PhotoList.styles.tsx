import styled from 'styled-components';

export const SPhotoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

export const SThumbNailWrapper = styled.button`
  cursor: pointer;
  width: 56px;
  height: 56px;
  padding: 3px;
  background: #ffffff;
  outline: none;
  border: 1px solid #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #9999995f;
  }
`;

export const SImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;
