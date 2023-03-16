import { useState, useCallback, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { SignupFormSchema } from '../../../schemas/form.schemas';
import { useSignup } from '../../../services/registration.service';
import styles from './SignupFrom.module.css';

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isLoading, isError, error } = useSignup();
  const formicRef = useRef<any>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (error?.response?.data?.statusCode === 409) {
      formicRef.current.setFieldError('email', error.response.data.message);
    }
  }, [error, error?.response]);

  const initState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const submitButton = useCallback(() => {
    if (isLoading) {
      return (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Waiting
        </LoadingButton>
      );
    }
    return (
      <Button
        variant="contained"
        type="submit"
        color={isError ? 'error' : 'primary'}
      >
        {isError ? 'Failed to sign up' : 'Sign up'}
      </Button>
    );
  }, [isLoading, isError]);

  return (
    <Formik
      innerRef={formicRef}
      initialValues={initState}
      validationSchema={SignupFormSchema}
      onSubmit={async (values) => {
        const { name, email, password } = values;
        await signup({ name, email, password });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <TextField
              id="name"
              label="name"
              variant="outlined"
              size="small"
              {...formik.getFieldProps('name')}
              error={!!(formik.touched.name && formik.errors.name)}
            />
            {formik.touched.name && formik.errors.name && (
              <p className={styles.error}>{formik.errors.name}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <TextField
              id="email"
              label="email"
              variant="outlined"
              size="small"
              {...formik.getFieldProps('email')}
              error={!!(formik.touched.email && formik.errors.email)}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.error}>{formik.errors.email}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <FormControl
              size="small"
              variant="outlined"
              error={!!(formik.touched.password && formik.errors.password)}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...formik.getFieldProps('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {formik.touched.password && formik.errors.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <FormControl
              size="small"
              variant="outlined"
              error={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
            >
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                {...formik.getFieldProps('confirmPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className={styles.error}>{formik.errors.confirmPassword}</p>
              )}
          </div>
          {submitButton()}
        </form>
      )}
    </Formik>
  );
};
