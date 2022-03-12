import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from'../animation';
import ScrollTop from './../Components/ScrollTop';

import  styled  from 'styled-components';





const ContactUs = () => {
  return (
      <ContactStyle initial='hidden' exit="exit" animate='show' variants={pageAnimation} style={{background:"#fff"}}>
        <ScrollTop/>

          <Title>
               <Hide>
                  <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide> 
          </Title>

          <div>
            <Hide>

              <SocialLinks variants={titleAnim}>
                  <Circle></Circle>
                    <h2>Send us a massage</h2>
              </SocialLinks>

            </Hide>

            <Hide>

              <SocialLinks variants={titleAnim}>
                  <Circle></Circle>
                    <h2>Send an email</h2>
              </SocialLinks>

            </Hide>

            <Hide>

              <SocialLinks variants={titleAnim}>
                  <Circle></Circle>
                    <h2>Social media</h2>
              </SocialLinks>

            </Hide>
          </div>

      </ContactStyle>
  );
};


const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;

`

const Title = styled.div`
margin-bottom:4rem;
color: black;
`

const Circle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background-color: #353535;
`


 const SocialLinks = styled(motion.div)`
 display: flex;
 align-items: center;
 h2{
   margin: 2rem;
 }
 
 `


const Hide = styled.div`
overflow: hidden;
`

export default ContactUs;
