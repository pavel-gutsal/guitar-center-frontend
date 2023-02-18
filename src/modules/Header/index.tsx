import { useState } from 'react';
import { DrawBar } from './DrawBar';
import { StyledHeader, StyledHeaderContent } from './Header.styled';
import { IconBar } from './IconBar';
import { NavBar } from './NavBar';

export const Header = () => {
  const [drawBarOpen, setDrawBarOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <NavBar setDrawBarOpen={setDrawBarOpen} />
        <DrawBar drawBarOpen={drawBarOpen} setDrawBarOpen={setDrawBarOpen} />
        <IconBar />
      </StyledHeaderContent>
    </StyledHeader>
  );
};
