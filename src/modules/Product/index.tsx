import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Tab } from '../../constants';
import { resetTab } from '../../features/Tab/TabReducer';
import { CatalogItem, Category, Details } from '../../types';
import { RouterBar } from '../Block/BlockHead/RouterBar';
import { About } from './About';
import { SProduct } from './Product.styles';
import { Reviews } from './Reviews';
import { Specs } from './Specs';
import { TabBar } from './TabBar';

interface Props {
  category: Category;
  item: CatalogItem;
  details: Details;
}

export const Product = ({ category, item, details }: Props) => {
  const [tabBarShadow, setTabBarShadow] = useState(false);
  const dispatch = useAppDispatch();
  const { tab } = useAppSelector((state) => state.tab);

  const resetTabHandler = () => {
    dispatch(resetTab());
  };

  useEffect(() => {
    return () => resetTabHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const distributeShadow = () => {
    if (window.scrollY >= 64) {
      setTabBarShadow(true);
    } else {
      setTabBarShadow(false);
    }
  };

  window.addEventListener('scroll', distributeShadow);

  useEffect(() => {
    return () => window.removeEventListener('scroll', distributeShadow);
  }, []);

  return (
    <SProduct>
      <RouterBar category={category} model={item.model} />
      <TabBar shadow={tabBarShadow} tab={tab} reviewsCount={details.comments} />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab || Tab.ABOUT}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === Tab.ABOUT && <About briefData={item} details={details} />}
          {tab === Tab.SPECIFICATION && (
            <Specs briefData={item} details={details} />
          )}
          {tab === Tab.REVIEWS && (
            <Reviews briefData={item} limit={details.comments} />
          )}
        </motion.div>
      </AnimatePresence>
    </SProduct>
  );
};
