import styled from 'styled-components';

export const Container = styled('div')`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 320px;
    padding-left: 25px;
    padding-right: 29px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
  }
`;
