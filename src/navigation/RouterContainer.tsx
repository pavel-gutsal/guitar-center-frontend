import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { ROUTES } from '../constants';
import { BasicLayout } from '../pages/BasicLayout';
import { BlockContent } from '../pages/BlockContent';
import { HomePage } from '../pages/HomePage';

export const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PHONES} element={<BlockContent />} />
        <Route path={ROUTES.TABLETS} element={<BlockContent />} />
        <Route path={ROUTES.LAPTOPS} element={<BlockContent />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        <Route path={ROUTES.SIGNUP} element={<SignupForm />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
