import styled from 'styled-components';
import { ReactComponent as BrowserIcon } from 'Image/🦆 icon _browser_.svg';
import { ReactComponent as PriceTags } from 'Image/🦆 icon _pricetags outline_.svg';

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
  display: flex;
  flex-direction: column;
  width: 189px;
  height: 66px;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.secondary};
  margin-left: 13px;
  margin-top: 7px;
`;

export const StyledBrowserIcon = styled(BrowserIcon)`
  width: 25px;
  height: 25px;
`;

export const StyledPriceTags = styled(PriceTags)`
  width: 25px;
  height: 25px;
`;
