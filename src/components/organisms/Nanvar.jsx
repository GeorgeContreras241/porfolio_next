'use client'
import { motion } from 'motion/react'

export const Nanvar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      layout
      className='sticky  z-9999 top-0 left-0 right-0  h-[10dvh] w-fit  m-auto flex items-center justify-between'>
      <nav className='backdrop-blur-sm  bg-[#0c2c5d] border border-[#00A3CC] rounded-2xl max-w-7xl w-full mx-auto px-6 py-2 flex items-center justify-between text-white font-bold'>
        <ul className='flex space-x-8 lg:text-[1rem]  text-[.8rem] font-medium align-center justify-center w-full'>
          <li>
            <a href='#inicio' className='hover:text-[#00CFFF]  transition'>  
              Inicio
            </a>
          </li>
          <li>
            <a href='#sobre-mi' className='hover:text-[#00CFFF] transition'>
              Sobre mí
            </a>
          </li>
          <li>
            <a href='#proyectos' className='hover:text-[#00CFFF] transition'>
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
