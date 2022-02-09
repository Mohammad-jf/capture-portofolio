import React from 'react';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import styled from 'styled-components';
import {Link} from 'react-router-dom'




const OurWork = () => {
  return (
      <Work>

          <Movie>
            <h2>The Athlete</h2>
          ``  <div className="line"></div>
                  <Link>
                    <img src={athlete} alt="athlete"/>
                 </Link>
          </Movie>

          <Movie>
            <h2>The Racer</h2>
          ``  <div className="line"></div>
                  <Link>
                    <img src={theracer} alt="the racer"/>
                 </Link>
          </Movie>

          <Movie>
            <h2>Good Times</h2>
          ``  <div className="line"></div>
                  <Link>
                    <img src={goodtimes} alt="goodtimes"/>
                 </Link>
          </Movie>

      </Work>
  );
};



const Work = styled.div`
  min-height:100vh;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  

h2{
  padding:1rem 0rem;
  color:#23d997;
}
`

const Movie = styled.div`
padding-bottom : 10rem;

.line{
  height:0.5rem;
  background:#cccccc;
  margin-bottom:3rem;

  .img{
    width:100%;
    height:70vh;
    object-fit:cover;
  }
}
`

export default OurWork;