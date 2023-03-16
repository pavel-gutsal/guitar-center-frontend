import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';
import { ShoppingCart } from '../modules/ShoppingCart/ShoppingCart';
import { Liked } from '../modules/Liked';
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
          <Route path={ROUTES.LIKED}>
            <Route index element={<Liked />} />
            <Route
              path={ROUTES.LIKED_MODEL}
              element={<ProductPage category={Category.liked} />}
            />
          </Route>
          <Route path={ROUTES.CART}>
            <Route index element={<ShoppingCart />} />
            <Route
              path={ROUTES.CART_MODEL}
              element={<ProductPage category={Category.cart} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
