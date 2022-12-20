import React from "react";
import { Box } from "theme-ui";

import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

import Title from "./components/Title";
import Description from "./components/Description";
import { StepInnerContainer } from './styles';

export interface IStep {
  description?: string;
  id: string;
  index: number;
  title: string;
}

const Step: React.FC<IStep> = ({ id, title, description, index }) => (
  <Draggable key={id} draggableId={id} index={index}>
    {(provided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
      <StepInnerContainer
        borderRadius={3}
        boxShadow="medium"
        data-testid={`step-${id}`}
        isDragging={dragSnapshot.isDragging}
        my={5}
        p={4}
        ref={provided.innerRef}
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

export default Step;
