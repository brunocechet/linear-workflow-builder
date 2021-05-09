import React from "react";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";

import StepContainer from "./index";

const handleOnDragEnd = jest.fn();
const handleCreateNewStep = jest.fn();

const STEPS_MOCK = new Array(6).fill({}).map((_, index) => ({
  id: `id-${index}`,
  title: `title-${index}`,
  description: `description-${index}`,
  index,
}));

describe("StepContainer component", () => {
  it("Should render the component with children components according to step prop", () => {
    render(
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StepContainer
          handleCreateNewStep={handleCreateNewStep}
          steps={STEPS_MOCK}
        />
      </DragDropContext>
    );

    const containers = screen.getAllByTestId("step-", { exact: false });
    const descriptions = screen.getAllByText("description-", { exact: false });
    const titles = screen.getAllByText("title-", { exact: false });

    expect(containers).toHaveLength(STEPS_MOCK.length);
    expect(descriptions).toHaveLength(STEPS_MOCK.length);
    expect(titles).toHaveLength(STEPS_MOCK.length);
  });
});
