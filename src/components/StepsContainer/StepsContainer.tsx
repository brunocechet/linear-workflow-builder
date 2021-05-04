import React from 'react'
import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import Step, { StepProps } from './components/Step'

type StepsContainerProps = { steps: StepProps[] } & SpaceProps &
  React.HTMLAttributes<HTMLOListElement>

const StepsContainerBase = styled.ol<Omit<StepsContainerProps, 'steps'>>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${space};
`

const StepsContainer: React.FC<StepsContainerProps> = ({ steps }) => (
  <StepsContainerBase>
    {steps.map((stepValue) => (
      <Step
        description={stepValue.description}
        key={stepValue.title}
        title={stepValue.title}
      />
    ))}
  </StepsContainerBase>
)

export default StepsContainer
