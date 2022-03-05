import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide} from '../style';
import { Link } from 'react-router-dom';
//framer motion
import{motion} from 'framer-motion';
import {titleAnim} from '../animation';
import {fade} from '../animation';
import {photoAnim} from '../animation';
import Wave from './Wave';


const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                        {/* seperating description for animate each one */}
                        <Hide>
                            <motion.h2 variants={titleAnim}>we work to make</motion.h2>
                        </Hide>

                        <Hide>
                            <motion.h2 variants={titleAnim} >your <span>Dreams</span> come</motion.h2>
                        </Hide>

                        <Hide>
                            <motion.h2 variants={titleAnim}>true.</motion.h2>
                        </Hide>
                </motion.div>

                    <motion.p variants={fade}>Contact us for any photography or
                     videography ideas that you have.we have
                     professionals with amazing skills
                     </motion.p>

                    <Link to='/contact'><motion.button variants={fade}>Contact us</motion.button></Link>

            </Description>

            <Image>
                < motion.img variants={photoAnim}  src={home1} alt="guy with the camera"/>
            </Image>
            
            <Wave/>
        </About>
    )
}

export default AboutSection
