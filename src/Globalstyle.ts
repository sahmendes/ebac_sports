import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #FFFFFF;
    color: #3E4095;
  }

  button {
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }
`
