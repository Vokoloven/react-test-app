import styled from 'styled-components';

export const StyledBox = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 58px;
  margin-bottom: 58px;
  gap: 20px;
`;

export const StyledCard = styled('div')`
  display: flex;
  flex-direction: column;
  width: 262px;
  flex-basis: auto;
  background-color: ${p => p.theme.colors.card};
  border-radius: 10px;
`;

export const StyledImg = styled('img')`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
