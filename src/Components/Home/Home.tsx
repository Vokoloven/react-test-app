import React from 'react';
import { Container } from 'Components/Container/Container';
import { Header } from 'Components/Header/Header';
import { Box } from 'Theme/Box';

export const Home: React.FC = () => {
  return (
    <Container>
      <Box pt={35}>
        <Header />
      </Box>
    </Container>
  );
};
