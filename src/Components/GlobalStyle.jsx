import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width:1000px){
            font-size: 80%;
        }
    }

    body{
        background-color: #1b1b1b;
        overflow-x: hidden;

    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.4s ease;
        &:hover{
            background-color:#23d997;
            color: #fff;
        }
    }

        h2{
            font-weight: lighter;
            font-size: 4rem;
        }

        h3{
            color: #fff;

        }

        p{
            padding: 3rem 0rem;
            color:#ccc;
            font-size:1.4rem;
            line-height: 150%;
        }

        h4{
            font-weight: bold;
            font-size: 2rem;
        }

        span{
            font-weight:bold;
            color: #23d997;
        }

        a{
            font-size: 1.1rem;
            
        }
`

export default GlobalStyle;