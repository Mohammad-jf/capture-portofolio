import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide} from '../style';
import { Link } from 'react-router-dom';
//framer motion
import{motion} from 'framer-motion';



const AboutSection = () => {

    return (
        <About>
            <Description>

                <div className="title">

                        {/* seperating description for animate each one */}
                        <Hide>
                            <h2>we work to make</h2>
                        </Hide>

                        <Hide>
                            <h2>your <span>Dreams</span> come</h2>
                        </Hide>

                        <Hide>
                            <h2>true.</h2>
                        </Hide>
                </div>

                    <p>Contact us for any photography or
                     videography ideas that you have.we have
                     professionals with amazing skills
                     </p>

                    <Link to='/contact'><button>Contact us</button></Link>

            </Description>

            <Image>
                <img src={home1} alt="guy with the camera"/>
            </Image>
            
        </About>
    )
}

export default AboutSection
