import { IMAGES } from '../../../../../assets';
import { SButton, SLogoGoogle, SText, STitle } from '../Buttons.styles';

export const GooglePlay = () => {
  return (
    <SButton>
      <SLogoGoogle src={IMAGES.GOOGLEPLAY} alt="logo" />
      <SText>
        Download on
        <STitle>GooglePlay</STitle>
      </SText>
    </SButton>
  );
};
