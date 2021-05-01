import React from 'react'
import { ThemeProvider } from '@emotion/react'

import theme from './theme'
import './App.css'

const App = () => <ThemeProvider theme={theme}></ThemeProvider>

export default App
