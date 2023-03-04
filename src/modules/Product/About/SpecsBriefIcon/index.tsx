import { SPECS_IMAGE } from '../../../../assets/specsImage';
import { SpecsBriefDescription } from '../../../../constants';
import { SpecsBrief } from '../../../../types';
import {
  SSpecsBriefIcon,
  SGroup,
  SImage,
  SDescription,
  SValue,
  SVerticalGroup,
} from './SpecsBriefIcon.style';

interface Props {
  categoryProduct: string;
  specsBriefIcon: SpecsBrief;
}

export const SpecsBriefIcon = ({ categoryProduct, specsBriefIcon }: Props) => {
  return (
    <SSpecsBriefIcon>
      {specsBriefIcon &&
        Object.entries(specsBriefIcon).map(([categoryDescription, value]) => {
          return (
            <SGroup key={categoryDescription}>
              <SImage
                src={SPECS_IMAGE[`${categoryDescription}${categoryProduct}`]}
              />
              <SVerticalGroup>
                <SDescription>
                  {SpecsBriefDescription[categoryProduct][categoryDescription]}
                </SDescription>
                <SValue>{value}</SValue>
              </SVerticalGroup>
            </SGroup>
          );
        })}
    </SSpecsBriefIcon>
  );
};
