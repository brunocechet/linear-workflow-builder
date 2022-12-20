import React from "react";

import {
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";

import AddNewStep, { IAddNewStep } from "../AddNewStep";

import Step, { IStep } from "./components/Step";
import { StepsContainerBase } from './styles';

interface IStepsContainer
  extends IAddNewStep,
  React.HTMLAttributes<HTMLUListElement> {
  steps: IStep[];
}

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

export default StepsContainer;
