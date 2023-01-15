import styled from 'styled-components';

export const StyledSearchLikeList = styled('button')`
  @media (min-width: 320px) and (max-width: 767px) {
    min-width: 134px;
    max-height: 30px;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 100px;
    height: 37px;
  }

  width: 134px;
  height: 37px;
  margin-left: 13px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${p => p.theme.colors.secondary};
`;
