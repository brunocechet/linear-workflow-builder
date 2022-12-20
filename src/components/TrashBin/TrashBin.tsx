import React from "react";
import { Container, Image as BaseImage } from "theme-ui";
import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import styled from "@emotion/styled";

import DeleteIcon from "./images/delete.png";

const TrashBinContainer = styled(Container)`
  align-items: center;
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
          <>
            <span>Drag an element here to remove it</span>
            <TrashBinImage
              alt="Recicle bin"
              src={DeleteIcon}
              title="Drag an element here to remove it"
              variant="small"
            />
          </>
        </TrashBinContainer>
        {provided.placeholder}
      </>
    )}
  </Droppable>
);

export default TrashBin;
