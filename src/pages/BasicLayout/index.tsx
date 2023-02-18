import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/Header';

export const BasicLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
