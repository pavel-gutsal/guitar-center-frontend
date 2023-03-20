import styled, { keyframes } from 'styled-components';
import { colors, devices } from '../../Theme';

const BubleLarge = '30px';
const BubleMedium = '25px';
const BubleSmall = '20px';
const BubleTiny = '15px';

const animate = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
`;

export const SHeroPage = styled.div`
  height: 100vh;
  background: linear-gradient(72deg, #05011c 0%, #040454 100%);
  position: relative;
  overflow: hidden;
`;

export const SBubblesContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

interface SBubbleProps {
  speed: number;
}

export const SBubble = styled.div<SBubbleProps>`
  width: ${BubleLarge};
  height: ${BubleLarge};
  min-width: ${BubleLarge};
  background: ${colors.darkBuble};
  margin: 0 0;
  border-radius: 50%;
  box-shadow: 0 0 0 10px ${colors.darkBubleTransparent},
    0 0 50px ${colors.darkBuble}, 0 0 100px ${colors.darkBuble};
  animation: ${animate} 15s linear infinite;
  animation-duration: ${({ speed }) => `calc(100s / ${speed})`};

  &:nth-child(even) {
    background: ${colors.lightBuble};
    box-shadow: 0 0 0 10px ${colors.lightBubleTransparent},
      0 0 50px ${colors.lightBuble}, 0 0 100px ${colors.lightBuble};
  }

  @media screen and ${devices.default} {
    width: ${BubleMedium};
    height: ${BubleMedium};
    min-width: ${BubleMedium};
    box-shadow: 0 0 0 8px ${colors.darkBubleTransparent},
      0 0 42px ${colors.darkBuble}, 0 0 90px ${colors.darkBuble};

    &:nth-child(even) {
      box-shadow: 0 0 0 8px ${colors.lightBubleTransparent},
        0 0 42px ${colors.lightBuble}, 0 0 90px ${colors.lightBuble};
    }
  }

  @media screen and ${devices.tablet} {
    width: ${BubleSmall};
    height: ${BubleSmall};
    min-width: ${BubleSmall};
    box-shadow: 0 0 0 6px ${colors.darkBubleTransparent},
      0 0 38px ${colors.darkBuble}, 0 0 75px ${colors.darkBuble};

    &:nth-child(even) {
      box-shadow: 0 0 0 6px ${colors.lightBubleTransparent},
        0 0 38px ${colors.lightBuble}, 0 0 75px ${colors.lightBuble};
    }
  }

  @media screen and ${devices.mobileL} {
    width: ${BubleTiny};
    height: ${BubleTiny};
    min-width: ${BubleTiny};
    box-shadow: 0 0 0 5px ${colors.darkBubleTransparent},
      0 0 25px ${colors.darkBuble}, 0 0 60px ${colors.darkBuble};

    &:nth-child(even) {
      box-shadow: 0 0 0 5px ${colors.lightBubleTransparent},
        0 0 25px ${colors.lightBuble}, 0 0 60px ${colors.lightBuble};
    }
  }
`;
