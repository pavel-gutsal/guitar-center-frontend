import { SCROLL_ID, Tab } from '../../../constants';
import { STabBar, SSegemented, SButton } from './TabBar.styles';

interface Props {
  shadow: boolean;
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

export const TabBar = ({ shadow, tab, setTab }: Props) => {
  const routerBar = document.getElementById(SCROLL_ID.PRODUCT_TAB);

  const toggleTab = (selectedTab: Tab) => {
    setTab(selectedTab);

    if (routerBar) {
      routerBar.scrollIntoView();
    }
  };

  return (
    <STabBar shadow={shadow}>
      <SSegemented tab={tab}>
        <SButton onClick={() => toggleTab(Tab.ABOUT)}>{Tab.ABOUT}</SButton>
        <SButton onClick={() => toggleTab(Tab.SPECIFICATION)}>
          {Tab.SPECIFICATION}
        </SButton>
        <SButton onClick={() => toggleTab(Tab.REVIEWS)}>{Tab.REVIEWS}</SButton>
      </SSegemented>
    </STabBar>
  );
};
