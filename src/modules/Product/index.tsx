import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Tab } from '../../constants';
import { Category } from '../../types';
import { RouterBar } from '../Block/BlockHead/RouterBar';
import { About } from './About';
import { SProduct } from './Product.styles';
import { Reviews } from './Reviews';
import { Specs } from './Specs';
import { TabBar } from './TabBar';

interface Props {
  category: Category;
  model: string | undefined;
}

export const Product = ({ category, model }: Props) => {
  const [tab, setTab] = useState(Tab.ABOUT);
  const [tabBarShadow, setTabBarShadow] = useState(false);

  const switchTab = () => {};

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
      <RouterBar category={category} model={model} />
      <TabBar shadow={tabBarShadow} tab={tab} setTab={setTab} />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab || Tab.ABOUT}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === Tab.ABOUT && <About />}
          {tab === Tab.SPECIFICATION && <Specs />}
          {tab === Tab.REVIEWS && <Reviews />}
        </motion.div>
      </AnimatePresence>
    </SProduct>
  );
};
