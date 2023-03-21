import TypeWriter from 'typewriter-effect';
import { SText, STextContainer, STextSmall } from './CategoryText.style';
import './CategoryText.style.css';

export const CategoryText = () => {
  return (
    <STextContainer>
      <SText>We have in store</SText>
      <TypeWriter
        options={{
          strings: ['Phones.', 'Tablets.', 'Laptops.'],
          autoStart: true,
          loop: true,
          wrapperClassName: 'Typewriter__wrapper--black',
          cursorClassName: 'Typewriter__cursor--black',
          delay: 70,
          deleteSpeed: 40,
        }}
      />

      <STextSmall>Choose gadget to continue ...</STextSmall>
    </STextContainer>
  );
};
