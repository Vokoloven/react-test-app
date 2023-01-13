import React from 'react';
import { Container } from 'Components/Container/Container';
import { Header } from 'Components/Header/Header';
import { Box } from 'Theme/Box';
import { Posts } from 'Components/Posts/Posts';

export const Home: React.FC = () => {
  return (
    <Container>
      <Box pt={35}>
        <Header />
      </Box>
      <Posts />
    </Container>
  );
};
