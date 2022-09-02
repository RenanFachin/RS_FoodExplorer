import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto', sans-serif;

    -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
    outline: none;
    font-size: 16px;
}

h1{
    font-size: bold;
    
}

h2, h3, a, button {
    font-family: 'Poppins', sans-serif;
}

a{
    text-decoration: none;
}

button, a{
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    border: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9)
}

input{
    font-family: 'Roboto', sans-serif;
}

::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: 'Roboto', sans-serif;
}
    
`