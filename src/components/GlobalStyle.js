import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #1d1d1d;
    font-family: 'Inter', sans-serif;
}
button{
    font-size: 1.1rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #fff;
    transition: all .5s ease;
    outline: none;
    &:hover{
        background-color: #23d997;
        color: #000;
        border-radius: 22px;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
span{
    font-weight: bold;
    color: #23d997;
}
a{
    font-size: 1.1rem;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
}

`


export default GlobalStyle;