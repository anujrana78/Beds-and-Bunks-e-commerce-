import React from 'react'
import { motion } from "framer-motion"
import { BsBag } from "react-icons/bs";

import {AiOutlinePlusCircle} from 'react-icons/ai'

const Productcard = ({image, title,category,price}) => {
  return (  
    <div className='flex-col basis-[25%] px-4 mt-5'>
         <motion.button
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.2},
            }}
            whileTap={{ scale: 0.9 }}
            
          >
        <div className=''>
        <img src={image} alt="chair" className='rounded-xl'></img>    
        </div>
        </motion.button>
        <h3 className='text-[18px] px-2 mt-2'>{title}</h3>
        <div className='relative'>
        <p className='text-gray-500 text-[10px] font-thin px-2'>{category}</p>
        <p className='text-gray-500 text-[14px] font-thin px-2 mt-3'>Rs     {price}</p>
        <AiOutlinePlusCircle className='absolute right-0 text-xl bottom-1 mr-5 add_icon'/>
        <BsBag className='bg-black text-white font-thin text-[20px] p-[4px] rounded-[5px] absolute right-0 bottom-1 mr-5 add_icon__cart hidden'></BsBag>
    
        </div>
    </div>

  )
}

export default Productcard