import { useState, useEffect } from 'react';
import { Category } from '../../types';
import { RouterBar } from '../Block/BlockHead/RouterBar';
import { About } from './About';
import { SProduct } from './Product.styles';
import { TabBar } from './TabBar';

interface Props {
  category: Category;
  model: string | undefined;
}

export const Product = ({ category, model }: Props) => {
  const [tabBarShadow, setTabBarShadow] = useState(false);

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
      <TabBar shadow={tabBarShadow} />
      <About />
    </SProduct>
  );
};
