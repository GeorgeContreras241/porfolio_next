'use client'
import { motion } from 'motion/react'
import { Cube } from '@/components/atoms/Cube'

export const Hero = () => {
  return (
    <section
      className='relative h-[90dvh] z-50 bg-cover bg-center flex flex-col justify-around items-center text-white'
      id='inicio'
    >
      <div className='flex flex-col flex-wrap justify-center px-4 '>
        <motion.h1
          className='text-[#00CFFF] lg:text-5xl font-extrabold lg:mb-8 mb-4 md:text-4xl text-2xl'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.1 }}
        >
          Hola, Soy George Contreras
        </motion.h1>
        <motion.p
          className=' lg:text-2xl sm:text-[1.2rem] font-semibold lg:mb-6 text-[1rem] md:mb-4 mb-2 text-[#8FE3FF]'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1 }}
        >
          Desarrollador Frontend | React · Next.js · Astro
        </motion.p>
        <motion.p
          className=' lg:text-lg sm:text-sm text-sm sm:text-blue-100 italic mb-8'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.9 }}
        >
          Apasionado por construir experiencias web modernas y eficientes.
        </motion.p>
        <motion.div
          className='flex flex-row justify-end items-center gap-4 mb-8  text-[#00CFFF]'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href='https://github.com/GeorgeContreras241'
            target='_blank'
            rel='noreferrer'
            title='Git Hub'
          >
            <img
              src='./git.svg'
              alt='GitHub'
              className='w-10 h-10 hover:scale-110 transition'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/georgecontreras241'
            target='_blank'
            rel='noreferrer'
            title='LinkedIn'
          >
            <img
              src='./linkedin.svg'
              alt='LinkedIn'
              className='w-10 h-10 hover:scale-110 transition'
            />
          </a>
          <a
            className='flex flex-row items-center w-50 gap-2 border border-gray-800 rounded-full px-4 py-2 font-semibold hover:bg-gray-700/50 hover:text-green-600 transition'
            href='./CV.pdf'
            target='_blank'
            rel='noreferrer'
            title='Descargar CV'
            download
          >
            <img
              src='./cv.svg'
              alt='Descargar hoja de vida'
              className='w-11 h-11 hover:scale-110 transition'
            />
            <span>Descargar CV</span>
          </a>
        </motion.div>
      </div>
      <Cube />
    </section>
  )
}
