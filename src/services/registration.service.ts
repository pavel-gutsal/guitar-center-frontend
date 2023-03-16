import { useMutation, useQuery } from '@tanstack/react-query';
import { isNil } from 'lodash';
import { toast } from 'react-toastify';
import { SignupData, LoginData, ServerError, BearerToken } from '../types';
import { get, post } from '../api/common';
import { PATH } from '../constants';
import { useAppDispatch } from '../app/hooks';
import { logout, register } from '../features/Auth/AuthReducer';
import 'react-toastify/dist/ReactToastify.css';

export const useSignup = () => {
  const path = PATH.SIGNUP;
  const dispatch = useAppDispatch();

  const {
    mutate: signup,
    isLoading,
    isError,
    error,
  } = useMutation((signupData: SignupData) => post(path, signupData), {
    onSuccess: (data: BearerToken) => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(register(data));
      toast.success(`Sign up successful, ${data.name}!`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    },
    onError: () => {
      toast.error(`Sign up failed!`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    },
  });

  const typedError = error as ServerError;

  return { signup, isLoading, isError, error: typedError };
};

export const useLogin = () => {
  const path = PATH.LOGIN;
  const dispatch = useAppDispatch();

  const {
    mutate: login,
    isLoading,
    isError,
    error,
  } = useMutation((loginData: LoginData) => post(path, loginData), {
    onSuccess: (data: BearerToken) => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(register(data));
      toast.success(`Welcome back, ${data.name}!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      });
    },
    onError: () => {
      toast.error(`Sign in failed!`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    },
  });

  const typedError = error as ServerError;

  return { login, isLoading, isError, error: typedError };
};

export const useValidate = () => {
  const dispatch = useAppDispatch();

  const unparsedString = localStorage.getItem('user');
  const token: string | null =
    unparsedString !== null ? JSON.parse(unparsedString)?.token : null;
  const name: string | null =
    unparsedString !== null ? JSON.parse(unparsedString)?.name : null;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['current user'],
    queryFn: () => get(PATH.VALIDATE, token),
    enabled: token !== '' && !isNil(token) && !isNil(name),
    onSuccess: (response: BearerToken) => {
      if (response?.name && response?.token) {
        localStorage.setItem('user', JSON.stringify(response));
        dispatch(register(response));
      }
    },
    onError: () => {
      localStorage.removeItem('user');
      dispatch(logout());
    },
  });

  return { data, isLoading, isError, error };
};
