import styled from 'styled-components';
import { IMAGES } from '../../assets';
import { colors, devices, theme } from '../../Theme';

export const SFooter = styled.div``;

export const SFooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${theme.sizes.paddingLaptop};
  background: ${colors.footer};

  @media screen and ${devices.tablet} {
    padding: 0 20px;
  }

  @media screen and ${devices.mobileM} {
    padding: 0 10px;
  }
`;

export const SBrandCurve = styled.div`
  width: 100%;
  height: 70px;
  background: url(${IMAGES.CURVE.BRANDSCURVELAPTOPL});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  overflow: hidden;
  margin-bottom: -70px;
  transform: translateY(-68px);
  position: relative;

  @media screen and ${devices.default} {
    background: url(${IMAGES.CURVE.BRANDSCURVELAPTOP});
  }

  @media screen and ${devices.netbook} {
    background: url(${IMAGES.CURVE.BRANDSCURVENETBOOK});
  }

  @media screen and ${devices.tabletS} {
    background: url(${IMAGES.CURVE.BRANDSCURVETABLETS});
  }

  @media screen and ${devices.mobileL} {
    background: url(${IMAGES.CURVE.BRANDSCURVEMOBILEL});
  }

  @media screen and ${devices.mobileS} {
    background: url(${IMAGES.CURVE.BRANDSCURVEMOBILES});
  }
`;
