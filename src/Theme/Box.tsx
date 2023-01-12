import styled from 'styled-components';
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

interface IProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps {
  children: React.ReactNode;
}

export const Box = styled('div')<IProps>(
  color,
  space,
  typography,
  layout,
  flexbox
);
