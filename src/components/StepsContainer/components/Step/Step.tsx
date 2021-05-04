import React from 'react'
import styled from '@emotion/styled'

import {
  BackgroundColorProps,
  BorderProps,
  ShadowProps,
  SpaceProps,
  border,
  color,
  shadow,
  space,
  variant,
} from 'styled-system'

import { Box } from 'theme-ui'

import Title from './components/Title'
import Description from './components/Description'
import theme from '../../../../theme'

type StepState = 'normal' | 'active' | 'hover'

export type StepProps = {
  state?: StepState
  title: string
  description: string
} & BackgroundColorProps &
  BorderProps &
  ShadowProps &
  SpaceProps &
  React.HTMLAttributes<HTMLLIElement>

const StepBase = styled.li<Omit<StepProps, 'title' | 'description'>>`
  align-items: flex-start;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 250px;

  &::before {
    content: "\u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF";
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-family: monospace;
    font-size: 0.4rem;
    left: 0;
    padding: 0.3rem;
    position: absolute;
    width: 1.4rem;
    color: ${theme.colors.icon};
    height: 100%;
  }

  &:not(:last-child)::after {
    content: '';
    border: 1px solid ${theme.colors.icon};
    bottom: -${theme.space[5] + 2}px;
    box-sizing: border-box;
    height: ${theme.space[5]}px;
    left: calc(50% - 2px);
    position: absolute;
    width: 1px;
    transform: matrix(1, 0, -0.01, 1, 0, 0);
  }

  ${color}
  ${shadow}
  ${border}
  ${space}

  ${variant({
    prop: 'state',
    variants: {
      normal: {
        borderColor: 'white',
      },
      hover: {
        borderColor: 'icon',
        '::before': {
          color: 'white',
          backgroundColor: 'icon',
        },
      },
      active: {
        borderColor: 'active',
      },
    },
  })}
`

const Step: React.FC<StepProps> = ({ state, title, description, ...rest }) => (
  <StepBase
    state={state}
    bg="white"
    borderRadius={1}
    boxShadow="medium"
    my={5}
    p={4}
    {...rest}
  >
    <Box ml={2}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Box>
  </StepBase>
)

Step.defaultProps = {
  state: 'normal' as StepState,
}

export default Step
