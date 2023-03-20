import TypeWriter from 'typewriter-effect';
import {
  SGroup,
  SText,
  STextClipped,
  STextContainer,
} from './LandingText.style';
import './LandingText.style.css';

export const LandingText = () => {
  return (
    <STextContainer>
      <STextClipped>eCommerce</STextClipped>
      <SText>Shop on your couch</SText>
      <SGroup>
        <TypeWriter
          options={{
            strings: [
              'Available any Time.',
              'Just click to order.',
              'Want it? Buy it.',
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: 'Typewriter__wrapper',
            cursorClassName: 'Typewriter__cursor',
            delay: 70,
            deleteSpeed: 40,
          }}
        />
      </SGroup>
    </STextContainer>
  );
};
