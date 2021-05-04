import React from 'react'
import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

type StepsContainerProps = SpaceProps & React.HTMLAttributes<HTMLOListElement>

const StepsContainerBase = styled.ol<StepsContainerProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${space};
`

const StepsContainer: React.FC<StepsContainerProps> = ({
  children,
  ...rest
}) => <StepsContainerBase {...rest}>{children}</StepsContainerBase>

export default StepsContainer
