import React from 'react'

import StepsContainer from '../../components/StepsContainer'

const TEMP_MOCK = Array(6)
  .fill({})
  .map((_, index) => ({
    title: `Title for ${index}`,
    description: `Description for ${index}`,
  }))

const Builder: React.FC = () => {
  return <StepsContainer steps={TEMP_MOCK} />
}

export default Builder
