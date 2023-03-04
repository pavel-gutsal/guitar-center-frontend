import { Tab } from '../../../constants';
import { STabBar, SSegemented, SButton } from './TabBar.styles';

interface Props {
  shadow: boolean;
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

export const TabBar = ({ shadow, tab, setTab }: Props) => {
  const routerBar = document.getElementById('Router__Bar__Top_Global');

  return (
    <STabBar shadow={shadow}>
      <SSegemented tab={tab}>
        <SButton
          onClick={() => {
            setTab(Tab.ABOUT);
            routerBar.scrollIntoView();
          }}
        >
          {Tab.ABOUT}
        </SButton>
        <SButton
          onClick={() => {
            setTab(Tab.SPECIFICATION);
            routerBar.scrollIntoView();
          }}
        >
          {Tab.SPECIFICATION}
        </SButton>
        <SButton
          onClick={() => {
            setTab(Tab.REVIEWS);
            routerBar.scrollIntoView();
          }}
        >
          {Tab.REVIEWS}
        </SButton>
      </SSegemented>
    </STabBar>
  );
};
