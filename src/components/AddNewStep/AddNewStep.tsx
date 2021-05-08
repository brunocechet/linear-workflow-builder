import React from "react";
import styled from "@emotion/styled";
import { Button, Input, Label, Textarea } from "theme-ui";

import {
  BackgroundColorProps,
  BorderProps,
  ShadowProps,
  SpaceProps,
  border,
  shadow,
  space,
} from "styled-system";

import theme from "../../theme";

const AddStepInnerContainer = styled.div<IAddStepInnerContainer>`
  align-items: flex-start;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 250px;

  ${shadow}
  ${border}
  ${space}
`;

const AddNewStep: React.FC<IAddNewStep> = ({ handleCreateNewStep }) => {
  return (
    <AddStepInnerContainer borderRadius={3} boxShadow="medium" my={5} p={4}>
      <form onSubmit={handleCreateNewStep}>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          mb={3}
          name="title"
          placeholder="Type your title"
          required
        />
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          mb={3}
          name="description"
          placeholder="Provide a description"
          rows={2}
        />
        <Button>Submit</Button>
      </form>
    </AddStepInnerContainer>
  );
};

export interface IAddNewStep {
  handleCreateNewStep: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface IAddStepInnerContainer
  extends BackgroundColorProps,
    BorderProps,
    ShadowProps,
    SpaceProps {}

export default AddNewStep;
