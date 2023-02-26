import { useMutation } from '@tanstack/react-query';
import { SignupData, LoginData, ServerError } from '../types';
import { register } from '../api/common';
import { PATH } from '../constants';

export const useSignup = () => {
  const path = PATH.SIGNUP;
  const {
    mutate: signup,
    isLoading,
    isError,
    error,
  } = useMutation((signupData: SignupData) => register(path, signupData), {
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      // set to redux storage, navigate to another page
    },
  });

  const typedError = error as ServerError;

  return { signup, isLoading, isError, error: typedError };
};

export const useLogin = () => {
  const path = PATH.LOGIN;
  const {
    mutate: login,
    isLoading,
    isError,
    error,
  } = useMutation((loginData: LoginData) => register(path, loginData), {
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      // set to redux storage, navigate to another page
    },
  });

  const typedError = error as ServerError;

  return { login, isLoading, isError, error: typedError };
};
