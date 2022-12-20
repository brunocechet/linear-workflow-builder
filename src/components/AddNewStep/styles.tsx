import {
  BackgroundColorProps,
  BorderProps,
  ShadowProps,
  SpaceProps,
  border,
  shadow,
  space,
} from "styled-system";

import styled from "@emotion/styled";

import theme from "../../theme";

interface IAddStepInnerContainer
  extends BackgroundColorProps,
  BorderProps,
  ShadowProps,
  SpaceProps { }

export const AddStepInnerContainer = styled.div<IAddStepInnerContainer>`
  align-items: flex-start;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 250px;

  ${shadow}
  ${border}
  ${space}
`;