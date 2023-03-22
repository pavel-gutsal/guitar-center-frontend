import { useAppDispatch } from '../../../app/hooks';
import { SCROLL_ID, Tab } from '../../../constants';
import { changeTab } from '../../../features/Tab/TabReducer';
import { scrollToView } from '../../utils';
import { STabBar, SSegemented, SButton, SReviewTag } from './TabBar.styles';

interface Props {
  shadow: boolean;
  tab: Tab;
  reviewsCount: number;
}

export const TabBar = ({ shadow, tab, reviewsCount }: Props) => {
  const dispatch = useAppDispatch();

  const toggleTab = (selectedTab: Tab) => {
    dispatch(changeTab(selectedTab));
    scrollToView(SCROLL_ID.PRODUCT_TAB);
  };

  return (
    <STabBar shadow={shadow}>
      <SSegemented tab={tab}>
        <SButton onClick={() => toggleTab(Tab.ABOUT)}>{Tab.ABOUT}</SButton>
        <SButton onClick={() => toggleTab(Tab.SPECIFICATION)}>
          {Tab.SPECIFICATION}
        </SButton>
        <SButton onClick={() => toggleTab(Tab.REVIEWS)}>
          {Tab.REVIEWS}
          <SReviewTag>{reviewsCount}</SReviewTag>
        </SButton>
      </SSegemented>
    </STabBar>
  );
};
