import { AppleStore } from './Buttons/AppleStore';
import { GooglePlay } from './Buttons/GooglePlay';
import {
  STitle,
  SDownloadApp,
  SPhoneFrame,
  SPhoneFrameSmall,
  SImageGroup,
  SButtonGroup,
  SDownloadGroup,
} from './DownloadApp.styles';
import { IMAGES } from '../../../assets';

export const DownloadApp = () => {
  return (
    <SDownloadApp>
      <SImageGroup>
        <SPhoneFrame src={IMAGES.APPINFRAME} alt="app in phone" />
        <SPhoneFrameSmall src={IMAGES.APPINFRAMESMALL} alt="app in phone" />
      </SImageGroup>
      <SDownloadGroup>
        <STitle>Download app from</STitle>
        <SButtonGroup>
          <GooglePlay />
          <AppleStore />
        </SButtonGroup>
      </SDownloadGroup>
    </SDownloadApp>
  );
};
