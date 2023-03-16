import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import { isNil } from 'lodash';
import { ButtonSX } from '../IconBar/IconBar.styles';
import { User } from '../../../assets/SVG/User';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { modalHandle } from '../../../features/Auth/AuthReducer';
import { SAttention } from './AccountMenu.styles';
import { useLogout } from '../../../hooks/useLogout.hook';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { logOut } = useLogout(user);

  const openModalHandler = () => {
    dispatch(modalHandle(true));
    document.body.style.overflowY = ' hidden';
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="text" sx={ButtonSX} onClick={handleClick}>
        {!user && <SAttention>!</SAttention>}
        <User />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {!isNil(user) && (
          <MenuItem onClick={handleClose}>
            <Avatar /> {user}
          </MenuItem>
        )}
        {!isNil(user) && <Divider />}
        {isNil(user) && (
          <MenuItem onClick={openModalHandler}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            register
          </MenuItem>
        )}
        {!isNil(user) && (
          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Log out
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
