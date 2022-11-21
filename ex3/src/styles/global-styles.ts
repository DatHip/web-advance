import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    min-width: 250px;
  }
`
