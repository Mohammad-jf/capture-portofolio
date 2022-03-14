import React from 'react';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {pageAnimation} from'../animation';
import {fade,photoAnim,LineAnim,slider,sliderContainer} from '../animation';
import UseScroll from './../Components/UseScroll';
import ScrollTop from './../Components/ScrollTop';






const OurWork = () => {
  const [element,controls] = UseScroll();
  const [element2,controls2] = UseScroll();


  return (
      <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'>

        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>

          <Movie>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
                  <Link to='/work/the-athlete'>
                    <Hide>
                       <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </Hide>
                 </Link>
          </Movie>

            <Movie ref={element} initial='hidden' variants={fade} animate={controls}>
            <h2>The Racer</h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
                  <Link to="/work/the-racer">
                    <Hide>
                      <img src={theracer} alt="the racer"/>
                    </Hide>
                 </Link>
          </Movie>

          <Movie ref={element2} initial='hidden' variants={fade} animate={controls2}>
            <h2>Good Times</h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
                
                  <Link to="/work/good-times">
                    <Hide>
                      <img src={goodtimes} alt="goodtimes"/>
                    </Hide>
                 </Link>
          </Movie>

          <ScrollTop/>

      </Work>
  );
};



const Work = styled(motion.div)`
  min-height:100vh;
  padding:3rem 5rem;
  overflow:hidden;

h2{
  padding:1rem 0rem;
  color:#fff;
}

@media(max-width:1000px){
    h2{
      text-align: center;
    }
    padding: 2rem 2rem;

  }


`

const Movie = styled(motion.div)`
padding-bottom : 7rem;

.line{
  height:0.5rem;
  background:#23d997;
  margin-bottom:3rem;
}
  img{
    width:100%;
    height: 100%;
    object-fit:cover;
  }

`

const Hide = styled.div`
  overflow: hidden;
`


//frame anim
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;`

  const Frame2 = styled(Frame1)`
    background: #ff8efb;
  `
  const Frame3 = styled(Frame1)`
    background: #8ed2ff;
   `

  const Frame4 = styled(Frame1)`
    background: #8effa0;
  `

export default OurWork;
