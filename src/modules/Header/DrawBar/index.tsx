import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import {
  SLinkSX,
  SDrawBar,
  SListContainer,
  SListItem,
  SBackground,
  SCloseButtonSX,
} from './DrawBack.styles';
import { ROUTES } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { reset as catalogueQueryReset } from '../../../features/CatalogueQuery/CatalogueQueryReducer';
import { useLogout } from '../../../hooks/useLogout.hook';
import { useLikedCartRoute } from '../../../hooks/useLikeCartRoute.hook';

interface Props {
  drawBarOpen: boolean;
  setDrawBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawBar = ({ drawBarOpen, setDrawBarOpen }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { logOut } = useLogout(user);
  const { likedSectionNavigate, inCartSectionNavigate } = useLikedCartRoute();

  const toggleDrawBar = () => {
    setDrawBarOpen((prev) => !prev);
  };

  const navigateHandler = (path: string) => {
    navigate(path);
    dispatch(catalogueQueryReset());
    setDrawBarOpen((prev) => !prev);
  };

  return (
    <>
      <SBackground open={drawBarOpen} onClick={toggleDrawBar} />
      <SDrawBar open={drawBarOpen}>
        <Button
          variant="text"
          sx={SCloseButtonSX}
          startIcon={<CloseIcon />}
          onClick={toggleDrawBar}
        />
        <SListContainer>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => {
                navigateHandler(ROUTES.PHONES);
              }}
            >
              PHONES
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => {
                navigateHandler(ROUTES.TABLETS);
              }}
            >
              TABLETS
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => {
                navigateHandler(ROUTES.LAPTOPS);
              }}
            >
              LAPTOPS
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
              onClick={inCartSectionNavigate}
            >
              CART
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
              onClick={likedSectionNavigate}
            >
              Liked
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
              onClick={logOut}
            >
              Logout
            </Button>
          </SListItem>
        </SListContainer>
      </SDrawBar>
    </>
  );
};
