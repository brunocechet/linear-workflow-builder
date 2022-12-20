import styled from "@emotion/styled";
import { space, SpaceProps } from "styled-system";

import {
  DroppableProvidedProps,
} from "react-beautiful-dnd";

interface IStepsContainerBase extends SpaceProps, DroppableProvidedProps {}

export const StepsContainerBase = styled.ul<IStepsContainerBase>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${space};
`;