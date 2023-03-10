import { IMAGES } from '../../../assets';
import { CatalogItem, Details } from '../../../types';
import { BuyCard } from './BuyCard';
import {
  SSpecs,
  SSpecsBody,
  STitle,
  SGroup,
  SWarningMassage,
} from './Specs.styles';
import { SpecsSubList } from './SpecsSubList';

interface Props {
  briefData: CatalogItem;
  details: Details;
}

export const Specs = ({ briefData, details }: Props) => {
  return (
    <SSpecs>
      <SSpecsBody>
        <STitle>{`Specifications of ${briefData.name}`}</STitle>
        {details &&
          details.specifications &&
          Object.entries(details.specifications).map(
            ([sectionTitle, content]) => (
              <SpecsSubList
                key={sectionTitle}
                sectionTitle={sectionTitle}
                content={content}
              />
            )
          )}
        <SGroup>
          <img src={IMAGES.WARNING} alt="warning" />
          <SWarningMassage>
            Product characteristics and configuration may be changed by the
            manufacturer without notice. The store is not responsible for
            changes made by the manufacturer.
          </SWarningMassage>
        </SGroup>
      </SSpecsBody>
      <BuyCard briefData={briefData} />
    </SSpecs>
  );
};
