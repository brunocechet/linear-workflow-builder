import React from 'react'
import { ThemeProvider } from '@emotion/react'

import theme from './theme'

const App = () => <ThemeProvider theme={theme}></ThemeProvider>

export default App
