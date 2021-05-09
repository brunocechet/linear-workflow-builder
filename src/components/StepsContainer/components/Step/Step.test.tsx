import React from "react";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";

import Step from "./index";

const handleOnDragEnd = jest.fn();

describe("Step component", () => {
  it("Should render the component", () => {
    render(
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Step description="Description" id="1234" title="Title" index={1} />
      </DragDropContext>
    );

    expect(screen.getByTestId("step-1234")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
