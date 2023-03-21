import TypeWriter from 'typewriter-effect';
import {
  SCategorySmall,
  SText,
  SHorizontalGroup,
  SWrapper,
} from './CategorySmall.style';
import './CategoryText.style.css';
import { HexagonMenu } from './HexagonMenu';

export const CategorySmall = () => {
  return (
    <SCategorySmall>
      <SWrapper>
        <SHorizontalGroup>
          <SText>Looking for </SText>
          <TypeWriter
            options={{
              strings: ['Phones?', 'Tablets?', 'Laptops?'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'Typewriter__wrapper--black',
              cursorClassName: 'Typewriter__cursor--black',
              delay: 70,
              deleteSpeed: 40,
            }}
          />
        </SHorizontalGroup>
        <HexagonMenu />
      </SWrapper>
    </SCategorySmall>
  );
};
