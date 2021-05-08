import React from "react";
import styled from "@emotion/styled";
import { space, SpaceProps } from "styled-system";

import {
  Droppable,
  DroppableProvided,
  DroppableProvidedProps,
} from "react-beautiful-dnd";

import Step, { IStep } from "./components/Step";

const StepsContainerBase = styled.ul<IStepsContainerBase>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${space};
`;

const StepsContainer: React.FC<IStepsContainer> = ({ steps }) => (
  <Droppable droppableId="workflow">
    {(provided: DroppableProvided) => (
      <>
        <StepsContainerBase
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {steps.map(({ id, title, description }, index) => {
            return (
              <Step
                key={id}
                description={description}
                id={id}
                index={index}
                title={title}
              />
            );
          })}
        </StepsContainerBase>
        {provided.placeholder}
      </>
    )}
  </Droppable>
);

interface IStepsContainer extends React.HTMLAttributes<HTMLUListElement> {
  steps: IStep[];
}

interface IStepsContainerBase extends SpaceProps, DroppableProvidedProps {}

export default StepsContainer;
