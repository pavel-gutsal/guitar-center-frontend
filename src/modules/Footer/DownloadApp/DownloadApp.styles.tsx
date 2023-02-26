import styled from 'styled-components';
import { IMAGES } from '../../../assets';
import { devices, theme } from '../../../Theme';

export const SDownloadApp = styled.div`
  width: 100%;
  height: 600px;
  background: url(${IMAGES.CURVE.DOWNLOADAPPLARGE});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 ${theme.sizes.paddingLaptop};
  padding-bottom: 100px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  overflow: hidden;

  @media screen and ${devices.default} {
    background: url(${IMAGES.CURVE.DOWNLOADAPP});
  }

  @media screen and ${devices.netbook} {
    background: url(${IMAGES.CURVE.DOWNLOADAPPNETWORK});
  }

  @media screen and ${devices.tabletS} {
    height: 500px;
    background: url(${IMAGES.CURVE.DOWNLOADAPPTABLETS});
    padding-left: 20px;
    padding-right: 20px;
    background-position: right;
  }

  @media screen and ${devices.mobileL} {
    height: 400px;
    background: url(${IMAGES.CURVE.DOWNLOADAPPMOBILEL});
    padding-bottom: 80px;
  }

  @media screen and ${devices.mobileS} {
    height: 350px;
    background: url(${IMAGES.CURVE.DOWNLOADAPPMOBILES});
    padding-bottom: 75px;
  }
`;

export const SDownloadGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and ${devices.netbook} {
    transform: translateY(-20px);
  }

  @media screen and ${devices.tabletS} {
    flex-direction: column-reverse;
    transform: translateY(-10px);
  }

  @media screen and ${devices.tabletS} {
    align-items: flex-end;
  }
`;

export const STitle = styled.h1`
  font-size: 22px;
  color: white;

  @media screen and ${devices.netbook} {
    font-size: 18px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 16px;
  }
`;

export const SImageGroup = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 1;
`;

export const SButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  @media screen and ${devices.tabletS} {
    flex-direction: column;
  }
`;

export const SPhoneFrame = styled.img`
  width: 200px;
  height: fit-content;

  @media screen and ${devices.netbook} {
    width: 180px;
  }

  @media screen and ${devices.tabletS} {
    width: 150px;
  }

  @media screen and ${devices.mobileL} {
    width: 120px;
  }

  @media screen and ${devices.mobileS} {
    width: 95px;
  }
`;

export const SPhoneFrameSmall = styled.img`
  width: 175px;
  height: fit-content;
  transform: translateX(-40px);

  @media screen and ${devices.netbook} {
    width: 150px;
    transform: translateX(-30px);
  }

  @media screen and ${devices.tabletS} {
    width: 130px;
  }

  @media screen and ${devices.mobileL} {
    width: 100px;
  }

  @media screen and ${devices.mobileS} {
    width: 70px;
  }
`;
