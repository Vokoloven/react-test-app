import styled from 'styled-components';

import { ReactComponent as FilterSelectionSVG } from 'Image/OrderSelection.svg';

export const StyledFilterButton = styled('button')`
  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 33px;
    max-height: 30px;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
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
  @media (min-width: 320px) and (max-width: 767px) {
    width: 33px;
    max-height: 30px;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    max-width: 37px;
    max-height: 36px;
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
