import styled from 'styled-components';

export const StyledButtonPrice = styled('button')`
  width: 189px;
  height: 37px;
  margin-left: 13px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${p => p.theme.colors.secondary};
  display: flex;
  align-items: center;
`;

export const OpenedButtonPrice = styled('div')`
  width: 189px;
  height: 66px;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.secondary};
  margin-left: 13px;
  margin-top: 7px;
`;
