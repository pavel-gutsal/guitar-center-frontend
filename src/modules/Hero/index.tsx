import { Category } from './Category';
import { CategorySmall } from './CategorySmall';
import { SHero } from './Hero.style';
import { HeroSection } from './HeroSection';
import { WhiteCurve } from './WhiteCurve';

export const Hero = () => {
  return (
    <SHero>
      <HeroSection />
      <WhiteCurve />
      <Category />
      <CategorySmall />
    </SHero>
  );
};
