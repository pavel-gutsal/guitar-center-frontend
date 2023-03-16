import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../features/Auth/AuthReducer';
import { logoutCart } from '../features/userCart/UserCartReducer';

export const useLogout = (user: string | null) => {
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const logOut = () => {
    dispatch(logout());
    dispatch(logoutCart());
    localStorage.removeItem('user');
    queryClient.setQueryData([user, 'userCart'], null);
    queryClient.setQueryData(['current user'], null);
    toast.info(`User logged out !`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'dark',
    });
  };
  return { logOut };
};
