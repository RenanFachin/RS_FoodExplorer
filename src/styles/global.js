import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
:root{
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};
}

body,
input,
textarea,
::placeholder{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea{
    outline: none;
    font-size: 1.6rem;
}

h1{
    font-size: 700;
}

h2, span {
    color: ${({ theme }) => theme.COLORS.GRAY};
}

h2, h3, a, button, span {
    font-family: 'Poppins', sans-serif;
}

a{
    text-decoration: none;
}

button, a{
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    border: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.3s;
}

button:hover, a:hover{
    filter: brightness(0.8)
}

::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
}
 
 
// ScrollBar
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
}

body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BRACKGROUND_HEADER};
}
`