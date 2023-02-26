import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const SSpecification = styled.div`
  display: none;
  flex-direction: column;
  border-top: 1px solid gray;
  margin-top: 15px;
`;

export const SCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  position: relative;
  background: white;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #00000040;
    z-index: 1;

    ${SSpecification} {
      display: flex;
    }
  }

  @media screen and ${devices.mobileM} {
    padding: 10px;
  }

  @media screen and ${devices.mobileL} {
    &:hover,
    &:focus {
      ${SSpecification} {
        display: none;
      }
    }
  }
`;

export const SImageContainer = styled.button`
  outline: none;
  border: none;
  background: white;
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;

  @media screen and ${devices.mobileL} {
    height: 200px;
  }

  @media screen and ${devices.mobileM} {
    height: 130px;
  }
`;

export const SImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const STitle = styled.h3`
  display: flex;
  height: 40px;
  margin: 10px 0;
  color: #454545;
  font-size: 16px;
  line-height: 19px;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
    margin: 5px 0;
  }

  @media screen and ${devices.mobileM} {
    font-size: 12px;
    line-height: 15px;
    margin: 3px 0;
    overflow: hidden;
    height: 30px;
  }
`;

export const SRating = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;

  @media screen and ${devices.mobileL} {
    gap: 10px;
  }
`;

export const SRatingSX = {
  scale: '1.3',
  transform: 'translateX(5px)',

  [`@media screen and ${devices.mobileL}`]: {
    scale: '1',
    transform: 'translateX(0)',
  },
};

export const SRatingText = styled.h3`
  height: 14px;
  color: gray;

  @media screen and ${devices.mobileL} {
    font-size: 12px;
  }
`;

export const SButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 10px;
  width: 100%;
  height: 40px;
  margin-top: 10px;

  @media screen and ${devices.mobileL} {
    height: 32px;
    grid-template-columns: 1fr 32px;
  }
`;

export const SButtonBuy = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid black;
  background: none;
  cursor: pointer;
`;

export const SButtonHeart = styled.button`
  height: 100%;
  outline: none;
  border: 1px solid black;
  background: none;
  cursor: pointer;
`;

export const SPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const SPriceCurrent = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #444444;

  @media screen and ${devices.mobileL} {
    font-size: 16px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 14px;
  }
`;

export const SPriceDiscounted = styled.h3`
  font-size: 16px;
  text-decoration: line-through;
  color: #8a8a8a;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 12px;
  }
`;

export const SCartTags = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and ${devices.mobileL} {
    gap: 5px;
  }
`;

export const SDiscountTag = styled.h1`
  display: flex;
  width: fit-content;
  border-radius: 10px;
  font-size: 14px;
  line-height: 14px;
  padding: 3px 6px;
  background: ${colors.brigthRed};
  color: white;

  @media screen and ${devices.mobileL} {
    font-size: 12px;
  }
`;

export const SBestSellerTag = styled.h1`
  display: flex;
  width: fit-content;
  border-radius: 10px;
  font-size: 14px;
  line-height: 14px;
  padding: 3px 6px;
  background: ${colors.brightOrange};
  color: white;

  @media screen and ${devices.mobileL} {
    font-size: 12px;
  }
`;

export const SSpecificationTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0 5px 0;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const SSpecificationKey = styled.h2`
  font-size: 13px;
  font-weight: 400;

  @media screen and ${devices.mobileL} {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const SSpecificationValue = styled.h2`
  font-size: 12px;
  font-weight: 300;

  @media screen and ${devices.mobileL} {
    font-size: 11px;
  }
`;

export const SSpecificationDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 5px;
`;
