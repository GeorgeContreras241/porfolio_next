'use client'
import { motion } from 'motion/react'
import { Cube } from '@/components/atoms/Cube'
import { Linkedin } from '@/components/atoms/Linkedin'
import { Github } from '@/components/atoms/Github'
import { DownloadCv } from '@/components/atoms/DownloadCv'

export const Hero = () => {
  return (
    <section
      className='relative h-screen max-w-[1280px] w-full m-auto z-50 bg-cover bg-center flex flex-col justify-center gap-12 items-center text-white pt-2' 
      id='inicio'
    >
      <div className='flex flex-col flex-wrap justify-center px-4'>
        <motion.h1
          className='text-[#00CFFF] lg:text-6xl font-extrabold lg:mb-8 mb-4 md:text-4xl  text-3xl neon-text' 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.1 }}
        >
          Hola, Soy George Contreras
        </motion.h1>
        <motion.p
          className=' lg:text-3xl sm:text-[1.3rem] font-semibold lg:mb-6 text-[1.2rem] md:mb-4 mb-2 text-[#8FE3FF]'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1 }}
        >
          Desarrollador Frontend | React · Next.js · Astro
        </motion.p>
        <motion.p
          className=' lg:text-lg sm:text-lg text-sm sm:text-blue-100 italic mb-8'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.9 }}
        >
          Tecnólogo en Desarrollo de Software, enfocado en frontend. Apasionado por crear interfaces modernas, eficientes, combinando diseño, rendimiento y buenas prácticas de desarrollo.
        </motion.p>
        <motion.div
          className='flex flex-row justify-end items-center gap-4 mb-8  text-[#00CFFF]'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.8 }}
        >
          <Linkedin />
          <Github />
          <DownloadCv />
        </motion.div>
      </div>
      <Cube />
    </section>
  )
}
