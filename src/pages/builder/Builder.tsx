import React from 'react'

import StepsContainer from '../../components/StepsContainer'
import Step from '../../components/Step'
import Title from '../../components/Step/components/Title'
import Description from '../../components/Step/components/Description'

const Builder: React.FC = () => {
  return (
    <StepsContainer>
      {Array(6) // temp mock
        .fill({})
        .map((_, index) => (
          <Step key={index}>
            <Title>Title for {index}</Title>
            <Description>Description for {index}</Description>
          </Step>
        ))}
    </StepsContainer>
  )
}

export default Builder
