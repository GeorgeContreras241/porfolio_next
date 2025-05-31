'use client'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from 'react'
import { projects } from '@/const/const.js'
import { Link } from '@/components/atoms/Link'

const tabs = [
  "Local - Gestor de Contraseñas",
  "Landing Page Metálicas J Y N",
  "Tienda Online con Fake Store API",
  "Nube - Gestor de Contraseñas",
];

export const Projects = () => {
  const [info, setInfo] = useState("Local - Gestor de Contraseñas");
  const [data, setData] = useState([])

  useEffect(() => {
    const filtered = projects.filter(pro => pro.title === info)
    setData(filtered)
  }, [info])

  return (
    <section id='proyectos' className='relative z-50 py-20 px-4 max-w-[1280px] w-full m-auto'>
      <h3 className='text-center text-white font-bold text-3xl mb-10 drop-shadow-neon-blue'>
        Mis Proyectos
      </h3>

      <div className='flex flex-col gap-4 md:flex-row'>
        <aside className='md:w-1/4 w-full flex md:flex-col flex-wrap grow-1 gap-2 text-sm text-white'>
          {tabs.map(title => (
            <button
              key={title}
              onClick={() => setInfo(title)}
              className={`py-2 w-full px-3 rounded-xl transition-all border border-transparent hover:border-cyan-500 hover:text-cyan-400 ${
                title === info ? 'bg-cyan-700/20 text-cyan-300 font-semibold border-cyan-500' : ''
              }`}
            >
              {title}
            </button> 
          ))}
        </aside>
        <div className='md:w-3/4 border border-[#17569580] rounded-xl backdrop-blur-md p-6 shadow-neon-blue'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={data[0]?.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.2 }}
              className='flex flex-col lg:flex-row gap-6 items-center'
            >
              <img
                src={data[0]?.img}
                alt={data[0]?.title}
                className='w-full max-w-md rounded-xl shadow-neon-image object-cover aspect-video'
              />

              <div className='text-white w-full max-w-xl'>
                <h4 className='text-xl sm:text-2xl font-bold text-cyan-400 mb-2'>
                  {data[0]?.title}
                </h4>
                <p className='text-slate-300 text-sm mb-4'>
                  {data[0]?.description}
                </p>

                <ul className='flex flex-wrap gap-2 text-xs mb-4'>
                  {data[0]?.technologies.map((tech, index) => (
                    <li key={index} className='bg-cyan-800/60 px-3 py-1 rounded-full text-white'>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className='flex gap-4 justify-end'>
                  <Link data={data[0]?.url} text={'Visitar'} />
                  <Link data={data[0]?.gitHub} git={data[0]?.featured} text={data[0]?.featured ? 'Ver Repositorio' : 'Repositorio en privado'} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

