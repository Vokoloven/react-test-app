import styled from 'styled-components';

import { ReactComponent as FilterSelectionSVG } from 'Image/OrderSelection.svg';

export const StyledFilterButton = styled('button')`
  width: auto;
  height: auto;
  padding: 0;
  border-radius: 10px;
  background-color: transparent;
  border-width: 0;
  margin-left: 13px;
`;

export const StyledFilterSvgIcon = styled(FilterSelectionSVG)`
  width: 37px;
  height: 36px;
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
