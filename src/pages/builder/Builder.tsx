import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import StepsContainer from "../../components/StepsContainer";
import TrashBin from "../../components/TrashBin";
import { extractValueFromEvent } from "./utils";

const TEMP_MOCK = Array(6)
  .fill({})
  .map((_, index) => {
    const id = nanoid();
    return {
      title: `Title for ${id}`,
      description: `Description for ${id}`,
      id,
      index,
    };
  });

const Builder: React.FC = () => {
  const [steps, setSteps] = useState(TEMP_MOCK);

  const handleOnDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = Array.from(steps);
    const [reorderedItem] = items.splice(result.source.index, 1);

    // when dropping to trash, we dont need to reinsert this item
    if (result.destination.droppableId !== "trash") {
      // same position
      if (result.destination.index === result.source.index) {
        return;
      }

      items.splice(result.destination.index, 0, reorderedItem);
    }

    setSteps(items);
  };

  const handleCreateNewStep = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    const title = extractValueFromEvent(event, "title");
    const description = extractValueFromEvent(event, "description");

    const maxStepIndex = Math.max(...steps.map((item) => item.index));

    const newStep = {
      title,
      description,
      id: nanoid(),
      index: maxStepIndex + 1,
    };

    setSteps((currentSteps) => currentSteps.concat(newStep));

    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <StepsContainer steps={steps} handleCreateNewStep={handleCreateNewStep} />
      <TrashBin />
    </DragDropContext>
  );
};

export default Builder;
