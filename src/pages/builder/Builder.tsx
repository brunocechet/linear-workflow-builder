import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import StepsContainer from "../../components/StepsContainer";

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

    // same position
    if (result.destination.index === result.source.index) {
      return;
    }

    const items = Array.from(steps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSteps(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <StepsContainer steps={steps} />
    </DragDropContext>
  );
};

export default Builder;
