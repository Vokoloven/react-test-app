import React from 'react';
import { Home } from 'Components/Home/Home';
import { GlobalStyle } from 'Theme/globalStyled';
import { Routes, Route } from 'react-router';
import { Container } from 'Components/Container/Container';

import { NotFound } from 'Components/NotFound/NotFound';
import { lazy } from 'react';

const lazyLoading = (path: string) => {
  return lazy(() => import(`${path}`));
};

const Posts = lazyLoading('Components/Posts/Posts');
const GameDatails = lazyLoading('Components/AppDetails/GameDatails');

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Posts />} />
            <Route path="details/:detailsId" element={<GameDatails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
