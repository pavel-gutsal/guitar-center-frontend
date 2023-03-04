import { useState } from 'react';
import { Tab } from '../../../constants';
import { STabBar, SSegemented, SButton } from './TabBar.styles';

interface Props {
  shadow: boolean;
}

export const TabBar = ({ shadow }: Props) => {
  const [tab, setTab] = useState(Tab.ABOUT);

  return (
    <STabBar shadow={shadow}>
      <SSegemented tab={tab}>
        <SButton
          onClick={() => {
            setTab(Tab.ABOUT);
          }}
        >
          {Tab.ABOUT}
        </SButton>
        <SButton
          onClick={() => {
            setTab(Tab.SPECIFICATION);
          }}
        >
          {Tab.SPECIFICATION}
        </SButton>
        <SButton
          onClick={() => {
            setTab(Tab.REVIEWS);
          }}
        >
          {Tab.REVIEWS}
        </SButton>
      </SSegemented>
    </STabBar>
  );
};
