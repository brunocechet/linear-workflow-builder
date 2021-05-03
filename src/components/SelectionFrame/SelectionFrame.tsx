import React from 'react'
import styled from '@emotion/styled'
import { variant } from 'styled-system'

type SelectionFrameState = 'normal' | 'active' | 'hover'

type SelectionFrameProps = {
  state?: SelectionFrameState
} & React.ComponentProps<'div'>

const SelectionFrameBase = styled.div<SelectionFrameProps>`
  ${variant({
    prop: 'state',
    variants: {
      normal: {
        borderColor: 'white',
      },
      hover: {
        borderColor: 'icon',
      },
      active: {
        borderColor: 'active',
      },
    },
  })}
`

const SelectionFrame = ({ state, children, ...rest }: SelectionFrameProps) => (
  <SelectionFrameBase state={state} {...rest}>
    {children}
  </SelectionFrameBase>
)

SelectionFrame.defaultProps = {
  state: 'normal' as SelectionFrameState,
}

export default SelectionFrame
