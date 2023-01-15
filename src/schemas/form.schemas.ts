import * as yup from 'yup';

const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/;

export const SignupFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('enter name')
    .min(3, 'name is too short')
    .max(20, 'name is too long'),

  email: yup.string().required('enter email').email('not valid email'),

  password: yup
    .string()
    .required('enter password')
    .matches(
      passwordRegex,
      'Password must contain at least 1 number, 1 uppercase later, and be 6 charachters long'
    ),

  confirmPassword: yup
    .string()
    .required('Please confirm password.')
    .oneOf([yup.ref('password')], 'Passwords do not match.'),
});
