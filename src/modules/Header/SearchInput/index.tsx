import { Search } from '../../../SVG/Search';
import { StyledInput, StyledContainer } from './SearchInput.styles';

export const SearchInput = () => {
  return (
    <StyledContainer>
      <Search />
      <StyledInput placeholder="Search Product..." />
    </StyledContainer>
  );
};
