import React from "react";
import { Container, Image as BaseImage } from "theme-ui";
import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import styled from "@emotion/styled";

import DeleteIcon from "./images/delete.png";

const TrashBinContainer = styled(Container)`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TrashBinImage = styled(BaseImage)`
  &:hover {
    background-color: antiquewhite;
  }
`;

const TrashBin: React.FC = () => (
  <Droppable droppableId="trash">
    {(provided: DroppableProvided) => (
      <>
        <TrashBinContainer
          {...provided.droppableProps}
          ref={provided.innerRef}
          variant="footer"
        >
          <TrashBinImage
            src={DeleteIcon}
            alt="Delete"
            variant="small"
            title="Drag an element here to remove it"
          />
        </TrashBinContainer>
        {provided.placeholder}
      </>
    )}
  </Droppable>
);

export default TrashBin;
