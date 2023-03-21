import { Explore } from './Explore';
import { SBubble, SBubblesContainer, SHeroSection } from './HeroSection.style';
import { LandingSlider } from './LandingSlider';
import { LandingText } from './LandingText';

const bubbles = new Array(20)
  .fill(20)
  .map((speed) => Math.floor(Math.random() * speed) + 10);

export const HeroSection = () => {
  return (
    <SHeroSection>
      <SBubblesContainer>
        {bubbles.map((speed, index) => (
          <SBubble speed={speed} key={index} />
        ))}
      </SBubblesContainer>
      <LandingText />
      <LandingSlider />
      <Explore />
    </SHeroSection>
  );
};
