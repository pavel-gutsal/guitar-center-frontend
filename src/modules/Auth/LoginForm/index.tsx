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
import { LoginFormSchema } from '../../../schemas/form.schemas';
import { useLogin } from '../../../services/registration.service';
import styles from '../SignupForm/SignupFrom.module.css';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, isError, error } = useLogin();
  const formicRef = useRef<any>(null);

  // @mui
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // @mui
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (error?.response?.data?.statusCode === 401) {
      formicRef.current.setFieldError('email', error.response.data.message);
      formicRef.current.setFieldError('password', error.response.data.message);
    }
  }, [error, error?.response]);

  const initState = {
    email: '',
    password: '',
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
        {isError ? 'Failed to Log in' : 'Log in'}
      </Button>
    );
  }, [isLoading, isError]);

  return (
    <Formik
      innerRef={formicRef}
      initialValues={initState}
      validationSchema={LoginFormSchema}
      onSubmit={async (values) => {
        const { email, password } = values;
        await login({ email, password });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
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
          {submitButton()}
        </form>
      )}
    </Formik>
  );
};
