import React from 'react';
import img from 'Image/404NotFound.jpg';
import { Box } from 'Theme/Box';

export const NotFound: React.FC = () => {
  return (
    <Box mt={4}>
      <img src={img} alt={'404 Not Found'}></img>
    </Box>
  );
};
