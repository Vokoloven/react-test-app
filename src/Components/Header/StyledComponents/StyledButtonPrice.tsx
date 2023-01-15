import styled from 'styled-components';
import { ReactComponent as BrowserIcon } from 'Image/🦆 icon _browser_.svg';
import { ReactComponent as PriceTags } from 'Image/🦆 icon _pricetags outline_.svg';

export const StyledButtonPrice = styled('button')`
  @media screen and (max-width: 1200px) {
    width: 100px;
    height: 37px;
    margin-left: 13px;
  }
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 37px;
    margin-left: 13px;
  }
  @media screen and (max-width: 768px) {
    width: 262px;
    height: 30px;
    margin-left: 0px;
  }

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

export const StyledParagraphPrice = styled('p')`
  display: flex;
  justify-content: space-between;

  color: ${p => p.theme.colors.white};
  margin-right: 18px;
  margin-left: 18px;
  padding-top: 10px;
  cursor: pointer;
`;

export const StyledParagraphDate = styled('p')`
  display: flex;
  justify-content: space-between;

  color: ${p => p.theme.colors.white};
  font-size: 12;
  margin-right: 18px;
  margin-left: 18px;
  padding-bottom: 4px;
  cursor: pointer;
`;
