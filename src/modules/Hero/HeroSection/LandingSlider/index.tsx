import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IMAGES } from '../../../../assets';
import { SliderBlob } from '../SliderBlob';
import {
  SLandingSlider,
  SImage,
  SImageContainer,
  SVerticalMovement,
} from './LandingSlider.style';

const array = [
  IMAGES.MODALCRAWN.LAPTOP_RIGHT,
  IMAGES.LANDINGPAGE_SLIDER.HP,
  IMAGES.LANDINGPAGE_SLIDER.MSI,
  IMAGES.LANDINGPAGE_SLIDER.OMEN,
  IMAGES.LANDINGPAGE_SLIDER.THINKPAD,
  IMAGES.LANDINGPAGE_SLIDER.MSI2,
];

export const LandingSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev === array.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(loop);
  }, []);

  return (
    <SLandingSlider>
      <SliderBlob />
      <SImageContainer>
        <AnimatePresence mode="wait">
          <SVerticalMovement>
            <SImage
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              src={array[index]}
            />
          </SVerticalMovement>
        </AnimatePresence>
      </SImageContainer>
    </SLandingSlider>
  );
};
