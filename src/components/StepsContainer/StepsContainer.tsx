import React from "react";
import styled from "@emotion/styled";
import { space, SpaceProps } from "styled-system";

import {
  Droppable,
  DroppableProvided,
  DroppableProvidedProps,
} from "react-beautiful-dnd";

import Step, { IStep } from "./components/Step";
import AddNewStep, { IAddNewStep } from "../AddNewStep";

const StepsContainerBase = styled.ul<IStepsContainerBase>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${space};
`;

const StepsContainer: React.FC<IStepsContainer> = ({
  steps,
  handleCreateNewStep,
}) => (
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
        <AddNewStep handleCreateNewStep={handleCreateNewStep} />
        {provided.placeholder}
      </>
    )}
  </Droppable>
);

interface IStepsContainer
  extends IAddNewStep,
    React.HTMLAttributes<HTMLUListElement> {
  steps: IStep[];
}

interface IStepsContainerBase extends SpaceProps, DroppableProvidedProps {}

export default StepsContainer;
