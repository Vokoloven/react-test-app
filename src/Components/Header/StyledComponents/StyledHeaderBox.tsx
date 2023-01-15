import styled from 'styled-components';

export const StyledHeaderBox = styled('div')`
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  align-items: flex-start;
`;
