import React from 'react'
import { ThemeProvider } from '@emotion/react'

import Routes from './Routes'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)

export default App
