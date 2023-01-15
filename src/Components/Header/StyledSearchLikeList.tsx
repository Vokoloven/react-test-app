import styled from 'styled-components';

export const StyledSearchLikeList = styled('button')`
  @media screen and (max-width: 1200px) {
    width: 100px;
    height: 37px;
  }
  @media screen and (max-width: 768px) {
    min-width: 134px;
    height: 37px;
  }

  width: 134px;
  height: 37px;
  margin-left: 13px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${p => p.theme.colors.secondary};
`;
