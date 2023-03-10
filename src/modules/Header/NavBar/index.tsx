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
import { reset } from '../../../features/CatalogueQuery/CatalogueQueryReducer';
import { useAppDispatch } from '../../../app/hooks';

interface Props {
  setDrawBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setDrawBarOpen }: Props) => {
  const dispatch = useAppDispatch();

  const catalogueQueryReset = () => {
    dispatch(reset());
  };

  const drawBarToggle = () => {
    setDrawBarOpen((prev) => !prev);
  };

  return (
    <StyledContentLeft>
      <MenuButton onClick={drawBarToggle} />
      <StyledNavbar>
        <StyledUl>
          <StyledLi>
            <SLink to={ROUTES.HOME} onClick={catalogueQueryReset}>
              <Store />
            </SLink>
          </StyledLi>
          <StyledLi>
            <SLink to={ROUTES.PHONES} onClick={catalogueQueryReset}>
              <Button variant="text" sx={ButtonWideSX}>
                Phones
              </Button>
            </SLink>
          </StyledLi>
          <StyledLi>
            <SLink to={ROUTES.TABLETS} onClick={catalogueQueryReset}>
              <Button variant="text" sx={ButtonWideSX}>
                Tablets
              </Button>
            </SLink>
          </StyledLi>
          <StyledLi>
            <SLink to={ROUTES.LAPTOPS} onClick={catalogueQueryReset}>
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
