import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
       @media (max-width: 1700px){
           font-size: 75%;
       }
           
   }
    

    body{
        background: #eeeeee;
        font-family: 'Montserrat', cursive;
        overflow-x:hidden;
    }
    h1{
        font-size:90px;
        @media (max-width: 720px){
           font-size: 75px;

       }
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: black;
    }
    


`;

export default GlobalStyle;
