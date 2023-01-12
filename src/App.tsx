import React from 'react';
import { Home } from 'Components/Home/Home';
import { GlobalStyle } from 'Theme/globalStyled';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
