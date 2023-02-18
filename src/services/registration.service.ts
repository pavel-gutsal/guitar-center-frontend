import { useMutation } from '@tanstack/react-query';
import { SignupData, LoginData } from '../types';
import { register } from '../api/registration';
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
  return { signup, isLoading, isError, error };
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
  return { login, isLoading, isError, error };
};
