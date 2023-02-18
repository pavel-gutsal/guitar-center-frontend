import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import {
  SLinkSX,
  SDrawBar,
  SListContainer,
  SListItem,
  SBackground,
  SCloseButtonSX,
} from './DrawBack.styles';

interface Props {
  drawBarOpen: boolean;
  setDrawBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawBar = ({ drawBarOpen, setDrawBarOpen }: Props) => {
  const toggleDrawBar = () => {
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
            >
              Phones
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
            >
              TABLETS
            </Button>
          </SListItem>
          <SListItem>
            <Button
              variant="text"
              sx={SLinkSX}
              endIcon={<ArrowForwardIosIcon />}
            >
              ACCESSORIES
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
