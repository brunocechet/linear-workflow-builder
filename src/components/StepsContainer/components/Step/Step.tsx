import React from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";

import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

import {
  BackgroundColorProps,
  BorderProps,
  ShadowProps,
  SpaceProps,
  border,
  color,
  shadow,
  space,
} from "styled-system";

import Title from "./components/Title";
import Description from "./components/Description";
import theme from "../../../../theme";

const StepInnerContainer = styled.li<IStepInnerContainer>`
  align-items: flex-start;
  background-color: ${theme.colors.white};
  border: ${(props) =>
    `2px solid ${props.isDragging ? theme.colors.accent : theme.colors.white}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 250px;

  &::before {
    content: "\u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF";
    align-items: center;
    box-sizing: border-box;
    color: ${(props) =>
      props.isDragging ? theme.colors.white : theme.colors.icon};
    background-color: ${(props) =>
      props.isDragging ? theme.colors.accent : theme.colors.white};
    display: flex;
    font-family: monospace;
    font-size: 0.4rem;
    height: 100%;
    left: 0;
    padding: 0.3rem;
    position: absolute;
    width: 1.4rem;
  }

  &:not(:last-child)::after {
    content: "";
    border: 1px solid ${(props) =>
      props.isDragging ? "transparent" : theme.colors.icon};
    bottom: -${theme.space[5] + 2}px;
    box-sizing: border-box;
    height: ${theme.space[5]}px;
    left: calc(50% - 2px);
    position: absolute;
    transform: matrix(1, 0, -0.01, 1, 0, 0);
    width: 1px;
  }

  &:hover {
    border-color: ${theme.colors.icon};
    &::before {
      color: ${theme.colors.white};
      background-color: ${theme.colors.icon};
    },
  }

  ${color}
  ${shadow}
  ${border}
  ${space}
`;

const Step: React.FC<IStep> = ({ id, title, description, index }) => (
  <Draggable key={id} draggableId={id} index={index}>
    {(provided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
      <StepInnerContainer
        borderRadius={3}
        boxShadow="medium"
        my={5}
        p={4}
        ref={provided.innerRef}
        isDragging={dragSnapshot.isDragging}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Box ml={2}>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </Box>
      </StepInnerContainer>
    )}
  </Draggable>
);

interface IStepInnerContainer
  extends BackgroundColorProps,
    BorderProps,
    ShadowProps,
    SpaceProps {
  isDragging: boolean;
}

export interface IStep {
  id: string;
  title: string;
  description: string;
  index: number;
}

export default Step;
