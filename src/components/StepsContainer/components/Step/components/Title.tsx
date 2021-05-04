import React from 'react'
import { typography, TypographyProps, space, SpaceProps } from 'styled-system'
import styled from '@emotion/styled'

type TitleBaseProps = TypographyProps &
  SpaceProps &
  React.HTMLAttributes<HTMLParagraphElement>

const TitleBase = styled.p<TitleBaseProps>`
  ${space}
  ${typography};
`

const Title: React.FC = ({ children }) => (
  <TitleBase fontSize={1} p={0} m={0} fontWeight="semibold">
    {children}
  </TitleBase>
)

export default Title
