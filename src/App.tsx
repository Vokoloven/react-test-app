import React from 'react';
import { Home } from 'Components/Home/Home';
import { GlobalStyle } from 'Theme/globalStyled';
import { Routes, Route } from 'react-router';
import { Container } from 'Components/Container/Container';
import { Posts } from 'Components/Posts/Posts';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Posts />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};
