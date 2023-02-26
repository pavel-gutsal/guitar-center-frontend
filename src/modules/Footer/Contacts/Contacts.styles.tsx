import styled from 'styled-components';
import { devices } from '../../../Theme';

export const SContacts = styled.div`
  width: 100%;
  padding: 20px 0 50px;
  display: flex;
  justify-content: space-between;

  @media screen and ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const SHorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #5f5f5f;
`;

export const SContactsGroup = styled.div`
  display: flex;
  gap: 30px;
  position: relative;

  @media screen and ${devices.tablet} {
    gap: 40px;
  }

  @media screen and ${devices.mobileL} {
    gap: 25px;
  }
`;

export const SCredantialsGroup = styled.div`
  display: flex;
  gap: 15px;

  @media screen and ${devices.mobileL} {
    gap: 10px;
  }

  @media screen and ${devices.mobileS} {
    gap: 7px;
  }
`;

export const SAddress = styled.a`
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 3px solid white;

  @media screen and ${devices.mobileM} {
    width: 32px;
    height: 32px;
  }
`;

export const SImage = styled.img`
  width: 100%;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SGmailImage = styled(SImage)`
  height: 70%;
  width: auto;
`;

export const SGitHubImage = styled(SImage)`
  height: 140%;
  width: auto;
`;

export const SIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SIcon = styled.img`
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const SCopyRight = styled.p`
  font-size: 13px;
  color: #a5a5a5;
  width: 300px;
  position: absolute;
  left: 0;
  bottom: -30px;

  @media screen and ${devices.tablet} {
    bottom: -70px;
  }

  @media screen and ${devices.mobileM} {
    left: -30px;
  }

  @media screen and ${devices.mobileS} {
    font-size: 11px;
    left: -40px;
    width: 250px;
  }
`;
