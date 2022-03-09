import {motion} from 'framer-motion';
import React,{useState} from 'react'

const Toggle = ({children,title}) => { 

    const [toggle,setToggle] = useState(false);
  return (
    <motion.div layout className='question' onClick={()=>setToggle(!toggle)}>
      {/* we bring the title here so when we click on it for
       seting the state it will stay there and 
       the children just will toggle */}
      <motion.h4 layout>{title}</motion.h4> 
      {/* if toggole was true show the children */}
        {toggle ? children : ''}

        <div className="faq-line"></div>
    </motion.div>
  )
}

export default Toggle;