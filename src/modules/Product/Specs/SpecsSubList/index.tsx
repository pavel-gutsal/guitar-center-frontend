import {
  SPropertyWrapper,
  SSectionTitle,
  SSpecsSubList,
  SGroup,
  SKey,
  SValue,
  SDots,
} from './SpecsSubList.styles';

interface Props {
  sectionTitle: string;
  content: { [key: string]: string };
}

export const SpecsSubList = ({ sectionTitle, content }: Props) => {
  return (
    <SSpecsSubList>
      <SSectionTitle>{`${sectionTitle
        .slice(0, 1)
        .toUpperCase()}${sectionTitle.slice(1)}`}</SSectionTitle>
      {Object.entries(content).map(([property, value], index) => {
        return (
          <SPropertyWrapper key={property} odd={!(index % 2)}>
            <SGroup>
              <SDots />
              <SKey odd={!(index % 2)}>{property}</SKey>
              <SValue odd={!(index % 2)}>{value}</SValue>
            </SGroup>
          </SPropertyWrapper>
        );
      })}
    </SSpecsSubList>
  );
};
