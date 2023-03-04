import { useState } from 'react';
import { IMAGES } from '../../../../../assets';
import { DeliveryOption } from '../type';
import {
  SAccardion,
  SAvailableWrapper,
  SButton,
  SImage,
  SSVGWrapper,
  STitleContent,
  SBaldText,
  SGroup,
  SChildrenContent,
  SImageArrow,
  SGroupVertical,
  SHiddenText,
} from './Accordion.styles';

interface Props {
  content: DeliveryOption;
  height?: string;
  children?: JSX.Element;
}

export const Accordion = ({ content, height, children }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SAccardion>
      <SButton onClick={toggleOpen}>
        <STitleContent>
          <SSVGWrapper>
            <SImage src={content.icon} />
            <SGroupVertical>
              {content.how}
              <SHiddenText>{content.when}</SHiddenText>
            </SGroupVertical>
          </SSVGWrapper>
          <SAvailableWrapper>
            <SImage src={IMAGES.DELIVERY.AVAILABLE} />
            {content.when}
          </SAvailableWrapper>
          <SGroup>
            <SBaldText>{content.price}</SBaldText>
            <SImageArrow src={IMAGES.DELIVERY.EXPAND} open={open} />
          </SGroup>
        </STitleContent>
      </SButton>
      <SChildrenContent open={open} height={height}>
        {children}
      </SChildrenContent>
    </SAccardion>
  );
};
