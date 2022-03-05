import React from 'react'
import AboutSection from './../Components/AboutSection';
import ServicesSection from './../Components/ServicesSection';
import FaqSection from '../Components/FaqSection';
import {motion} from 'framer-motion';
import {pageAnimation} from'../animation';

const AboutUs = () => {
    return (
        <motion.div initial='hidden' animate='show' exit='exit' variants={pageAnimation}>
           <AboutSection/>
           <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}

export default AboutUs
