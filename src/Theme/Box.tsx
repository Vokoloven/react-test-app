import styled from 'styled-components';
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  border,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
} from 'styled-system';

interface IProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    BorderProps {
  children: React.ReactNode;
}

export const Box = styled('div')<IProps>(
  color,
  space,
  typography,
  layout,
  flexbox,
  border
);
