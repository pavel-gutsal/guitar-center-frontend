import { Correct } from '../../../../../assets/SVG/Correct';
import { SAvailable, SAvailableText } from './IsAvailableLabel.styles';

export const IsAvailableLabel = () => {
  return (
    <SAvailable>
      <Correct />
      <SAvailableText>Is avaialble</SAvailableText>
    </SAvailable>
  );
};
