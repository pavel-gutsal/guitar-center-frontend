import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { ROUTES } from '../constants';
import { BasicLayout } from '../pages/BasicLayout';
import { BlockContent } from '../pages/BlockContent';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { Category } from '../types';

export const RouterContainer = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PHONES}>
            <Route index element={<BlockContent />} />
            <Route
              path={ROUTES.PHONE_PRODUCT}
              element={<ProductPage category={Category.phones} />}
            />
          </Route>
          <Route path={ROUTES.TABLETS}>
            <Route index element={<BlockContent />} />
            <Route
              path={ROUTES.TABLETS_PRODUCT}
              element={<ProductPage category={Category.tablets} />}
            />
          </Route>
          <Route path={ROUTES.LAPTOPS}>
            <Route index element={<BlockContent />} />
            <Route
              path={ROUTES.LAPTOPS_PRODUCT}
              element={<ProductPage category={Category.laptops} />}
            />
          </Route>
          <Route path={ROUTES.LOGIN} element={<LoginForm />} />
          <Route path={ROUTES.SIGNUP} element={<SignupForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
