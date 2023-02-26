import Button from '@mui/material/Button';
import { ROUTES } from '../../../constants';
import { MenuButton } from '../../../assets/SVG/MenuButton/MenuButton';
import { Store } from '../../../assets/SVG/Store';
import { SearchInput } from '../SearchInput';
import {
  ButtonWideSX,
  StyledContentLeft,
  StyledLi,
  StyledNavbar,
  StyledUl,
  SLink,
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
            <SLink to={ROUTES.HOME}>
              <Store />
            </SLink>
          </StyledLi>
          <StyledLi>
            <SLink to={ROUTES.PHONES}>
              <Button variant="text" sx={ButtonWideSX}>
                Phones
              </Button>
            </SLink>
          </StyledLi>
          <StyledLi>
            <SLink to={ROUTES.TABLETS}>
              <Button variant="text" sx={ButtonWideSX}>
                Tablets
              </Button>
            </SLink>
          </StyledLi>
          <StyledLi>
            <SLink to={ROUTES.LAPTOPS}>
              <Button variant="text" sx={ButtonWideSX}>
                Laptops
              </Button>
            </SLink>
          </StyledLi>
        </StyledUl>
        <SearchInput />
      </StyledNavbar>
    </StyledContentLeft>
  );
};
