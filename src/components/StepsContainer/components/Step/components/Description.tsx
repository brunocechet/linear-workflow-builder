import React from 'react'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'
import styled from '@emotion/styled'

type DescriptionBaseProps = TypographyProps &
  SpaceProps &
  React.HTMLAttributes<HTMLParagraphElement>

const DescriptionBase = styled.p<DescriptionBaseProps>`
  ${space};
  ${typography};
`

const Description: React.FC = ({ children }) => (
  <DescriptionBase fontSize={0} p={0} my={0}>
    {children}
  </DescriptionBase>
)

export default Description
