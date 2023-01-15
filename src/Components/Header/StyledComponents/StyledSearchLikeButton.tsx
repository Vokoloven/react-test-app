import styled from 'styled-components';

export const StyledSearchButton = styled('span')`
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 5px;

  font-size: 12px;
  color: ${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.switcher};
  }
`;

export const StyledLikeButton = styled('span')`
  padding-top: 9px;
  padding-bottom: 9px;
  padding-right: 5px;
  margin-left: 11px;

  font-size: 12px;
  color: ${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.switcher};
  }
`;
