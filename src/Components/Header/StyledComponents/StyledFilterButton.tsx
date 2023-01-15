import styled from 'styled-components';

import { ReactComponent as FilterSelectionSVG } from 'Image/OrderSelection.svg';

export const StyledFilterButton = styled('button')`
  @media screen and (max-width: 1024px) {
    max-width: 33px;
    max-height: 30px;
  }
  @media screen and (max-width: 768px) {
    max-width: 33px;
    max-height: 30px;
  }

  width: auto;
  height: auto;
  padding: 0;
  border-radius: 10px;
  background-color: transparent;
  border-width: 0;
  margin-left: 6px;
`;

export const StyledFilterSvgIcon = styled(FilterSelectionSVG)`
  @media screen and (max-width: 1024px) {
    max-width: 37px;
    max-height: 36px;
  }
  @media screen and (max-width: 768px) {
    width: 33px;
    max-height: 30px;
  }

  max-width: 37px;
  max-height: 36px;
`;

export const OpenedFilterButton = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 134px;
  height: 53px;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.secondary};
`;

export const StyledParagraph = styled('p')`
  color: ${p => p.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;
