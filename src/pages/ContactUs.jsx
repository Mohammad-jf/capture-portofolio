import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation} from'../animation';





const ContactUs = () => {
  return (
      <motion.div initial='hidden' exit="exit" animate='show' variants={pageAnimation} style={{background:"#fff"}}>
          <h1>contact us</h1>
      </motion.div>
  );
};

export default ContactUs;
