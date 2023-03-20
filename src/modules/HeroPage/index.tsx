import { Explore } from './Explore';
import { SBubble, SBubblesContainer, SHeroPage } from './HeroPage.style';
import { LandingSlider } from './LandingSlider';
import { LandingText } from './LandingText';

const bubbles = new Array(20)
  .fill(20)
  .map((speed) => Math.floor(Math.random() * speed) + 10);

export const HeroPage = () => {
  return (
    <SHeroPage>
      <SBubblesContainer>
        {bubbles.map((speed, index) => (
          <SBubble speed={speed} key={index} />
        ))}
      </SBubblesContainer>
      <LandingText />
      <LandingSlider />
      <Explore />
    </SHeroPage>
  );
};
