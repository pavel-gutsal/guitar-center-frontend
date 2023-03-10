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
import { useAppDispatch } from '../../../app/hooks';
import { reset as catalogueQueryReset } from '../../../features/CatalogueQuery/CatalogueQueryReducer';

interface Props {
  drawBarOpen: boolean;
  setDrawBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawBar = ({ drawBarOpen, setDrawBarOpen }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
            >
              CART
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
            >
              Liked
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
            >
              Logout
            </Button>
          </SListItem>
        </SListContainer>
      </SDrawBar>
    </>
  );
};
