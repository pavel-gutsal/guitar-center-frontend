import { IMAGES } from '../../../../../assets';
import { SApple, SButton, SLogoApple, STitle } from '../Buttons.styles';

export const AppleStore = () => {
  return (
    <SButton>
      <SLogoApple src={IMAGES.APPLESTORE} alt="logo" />
      <SApple>
        Download on
        <STitle>AppleStore</STitle>
      </SApple>
    </SButton>
  );
};
