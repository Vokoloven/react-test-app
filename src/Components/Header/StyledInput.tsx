import styled from 'styled-components';

export const StyledInput = styled.input.attrs({
  type: 'text',
  id: 'input',
  placeholder: 'Enter an app name...',
})`
  /* @media screen and (max-width: 1024px) {
    width: 306px;
    height: 31px;
  } */

  position: relative;
  width: 602px;
  height: 37px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  padding-left: 10px;
  font-size: ${p => p.theme.fontSizes[0]}px;

  ::placeholder {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes[0]}px;
  }

  /* &:after {
    content: '';
    position: relative;
    background: url('Image/Vector.png');
  } */
`;
