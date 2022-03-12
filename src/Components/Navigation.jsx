import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
      <StyleNav>
         <h1><Link id='logo' to="/">Capture</Link></h1>

         <ul className="list">
             <li><Link to="/">About Us</Link></li>
             <li><Link to="/work">Our Work</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
         </ul>
      </StyleNav>

  );
};

const StyleNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 4rem;
background:#282828;
position: sticky;
top: 0;
z-index: 10;

h1{
  a{
    text-decoration:none;
    color:#23d997;
    font-size:2.5rem;
    font-family:'lobster', cursive;
  }
}

ul{
  list-style:none;
  display:flex;

  li{
    position:reative;
    a{
        display:block;
        padding:20px 30px 20px 40px;
        text-decoration:none;
        color:#fff;
        transition:all 0.4s ease;
        &:hover{
      color:#23d997;
    }
    }

  }
}
`

export default Navigation;
