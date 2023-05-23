import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
    
  *{
    box-sizing: border-box;
  }
    
  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding-inline: 1.5em;
    font-family: 'Manrope', sans-serif;  
    background-color: ${({ theme }) => theme.colors.veryPaleBlue};
    font-size: 15px;
    color:${({ theme }) => theme.colors.grayishBlue};
    background-image: url("/images/bg-pattern.svg");
    background-repeat: no-repeat;
      
      @media (min-width: ${({ theme }) => theme.desktop}) {
        background-size: contain;
      }
  }
  

h1{
  font-size: 1.4em;
  margin: 0;
  color:${({ theme }) => theme.colors.darkDesaturatedBlue} ;
    
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2em;
    }   
}


  button{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkDesaturatedBlue};
    color: ${({ theme }) => theme.colors.paleBlue};
    border: none;
    border-radius: 100px;
    padding:1em 2.8em;
    font-size: 1em;
    font-weight: 600;

   &:hover{
    color: ${({ theme }) => theme.colors.white};
   }
  }
    `;

export default GlobalStyles;
