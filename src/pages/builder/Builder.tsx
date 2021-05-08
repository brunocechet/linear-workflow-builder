import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { nanoid } from "nanoid";
import { useLocalStorage } from "react-use";

import StepsContainer from "../../components/StepsContainer";
import TrashBin from "../../components/TrashBin";
import { IStep } from "../../components/StepsContainer/components/Step";
import { extractValueFromEvent } from "./utils";

const LOCAL_STORAGE_ID = "workflow-builder";

const Builder: React.FC = () => {
  const [lsValue, setLsValue] = useLocalStorage<IStep[]>(LOCAL_STORAGE_ID, []);
  const [steps, setSteps] = useState<IStep[]>(lsValue ?? []);

  useEffect(() => {
    setLsValue(steps);
  }, [steps, setLsValue]);

  const handleOnDragEnd = (result: DropResult) => {
    // dropped outside the list or list is empty
    if (!result.destination || !steps.length) {
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

    const maxStepIndex = Math.max(
      ...[0].concat(steps.map((item) => item.index))
    );

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
