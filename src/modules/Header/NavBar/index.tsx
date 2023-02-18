import Button from '@mui/material/Button';
import { MenuButton } from '../../../SVG/MenuButton/MenuButton';
import { Store } from '../../../SVG/Store';
import { SearchInput } from '../SearchInput';
import {
  ButtonWideSX,
  StyledContentLeft,
  StyledLi,
  StyledNavbar,
  StyledUl,
} from './NavBar.styles';

interface Props {
  setDrawBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setDrawBarOpen }: Props) => {
  const drawBarToggle = () => {
    setDrawBarOpen((prev) => !prev);
  };

  return (
    <StyledContentLeft>
      <MenuButton onClick={drawBarToggle} />
      <StyledNavbar>
        <StyledUl>
          <StyledLi>
            <Store />
          </StyledLi>
          <StyledLi>
            <Button variant="text" sx={ButtonWideSX}>
              Phones
            </Button>
          </StyledLi>
          <StyledLi>
            <Button variant="text" sx={ButtonWideSX}>
              Tablets
            </Button>
          </StyledLi>
          <StyledLi>
            <Button variant="text" sx={ButtonWideSX}>
              Accesories
            </Button>
          </StyledLi>
        </StyledUl>
        <SearchInput />
      </StyledNavbar>
    </StyledContentLeft>
  );
};
