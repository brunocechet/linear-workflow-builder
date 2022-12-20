import React from "react";
import { Button, Divider, Input, Label, Textarea } from "theme-ui";

import { AddStepInnerContainer } from './styles'

export interface IAddNewStep {
  handleCreateNewStep: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddNewStep: React.FC<IAddNewStep> = ({ handleCreateNewStep }) => {
  return (
    <AddStepInnerContainer borderRadius={3} boxShadow="medium" my={5} p={4}>
      <form onSubmit={handleCreateNewStep}>
        <legend>Create a new step</legend>
        <Divider />
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

export default AddNewStep;
