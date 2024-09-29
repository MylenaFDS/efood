import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  coral: '#E66767',
  branca: '#FFF8F2',
  creme: '#FFEBD9',
  coralDark: '#CD5B45'
}

// Breakpoints para desktop, tablets e celulares
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px',
};


export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}


  body {
    background-color: ${cores.branca};
    color: ${cores.branca};
    
    overflow-x: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

// Aqui você usa um Styled Component para HomeContainer
export const HomeContainer = styled.div`
  position: relative;
  width: 1366px;
  height: 2148px;
  background-color: ${cores.branca};
`
