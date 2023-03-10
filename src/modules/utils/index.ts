import { SCROLL_ID } from '../../constants';

export const scrollToRouterTab = (
  scrollIntoViewOptions?: ScrollIntoViewOptions
) => {
  const routerBar = document.getElementById(SCROLL_ID.PRODUCT_TAB);

  if (routerBar) {
    routerBar.scrollIntoView(scrollIntoViewOptions);
  }
};
