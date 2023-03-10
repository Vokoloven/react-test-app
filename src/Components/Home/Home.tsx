import React from 'react';

import { Header } from 'Components/Header/Header';
import { Box } from 'Theme/Box';

import { Outlet } from 'react-router';

import { Suspense } from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <Box pt={35}>
        <Header />
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
