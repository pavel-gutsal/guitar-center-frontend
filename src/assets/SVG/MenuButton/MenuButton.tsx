import Button from '@mui/material/Button';
import { devices } from '../../../Theme';
import '../SVG.styles.css';

export const ButtonSX = {
  display: 'none',
  width: '60px',
  height: '60px',
  borderRadius: '0',
  borderBottom: '3px solid #231f20',
  transition: 'all 0.3s ease-in-out',

  '&:hover, &:focus': {
    borderBottom: '3px solid #1787ff',
  },
  [`@media ${devices.netbook}`]: {
    display: 'inherit',
  },
};

interface Props {
  onClick: () => void;
}

export const MenuButton = ({ onClick }: Props) => {
  return (
    <Button variant="text" sx={ButtonSX} onClick={onClick}>
      <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M5 30v-2.792h30V30Zm0-8.625v-2.75h30v2.75Zm0-8.583V10h30v2.792Z" />
        </svg>
      </div>
    </Button>
  );
};
