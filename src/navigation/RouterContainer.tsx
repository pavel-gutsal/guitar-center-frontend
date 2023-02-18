import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { ROUTES } from '../constants';
import { BasicLayout } from '../pages/BasicLayout';
import { Phones } from '../pages/Phones';

export const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Phones />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        <Route path={ROUTES.SIGNUP} element={<SignupForm />} />
      </Route>
    </Routes>
  );
};
