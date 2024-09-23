import { createGlobalStyle } from 'styled-components'

export const cores = {
  coral:'#E66767',
  branca: '#FFF8F2',
  creme: '#FFEBD9',
  coralDark:'#CD5B45'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.branca};
    padding-top: 40px;
    object-cover:fit;
    overflow-x: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const HomeContainer = {
position: 'relative',
width: '1366px',
height: '2148px',
background: '#FFF8F2'
}