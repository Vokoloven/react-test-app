import styled from 'styled-components';

export const StyledNumEclipse = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.eclipse};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.card};
  }

  &:not(:last-child) {
    margin-right: 7px;
  }

  &.active {
    background-color: ${p => p.theme.colors.card};
  }
`;

export const StyledArrowEclipseLeft = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.eclipse};
  border-radius: 50%;
  margin-right: 7px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.card};
  }
`;

export const StyledArrowEclipseRight = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.eclipse};
  border-radius: 50%;
  margin-left: 7px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.card};
  }
`;

export const StyledList = styled('div')`
  display: flex;
`;
