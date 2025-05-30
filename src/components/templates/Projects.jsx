'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/const/const.js'
import styles from '@/style/Projects.module.css'
import { Link } from '@/components/atoms/Link'

const tabs = [
  'Gestor de Contraseñas',
  'Landing Page Metálicas J Y N',
  'Tienda Online con Fake Store API',
  'Landing Page de Matcos'
]

export const Projects = () => {
  const [info, setInfo] = useState('Gestor de Contraseñas')
  const [data, setData] = useState([])

  useEffect(() => {
    const filtered = projects.filter(pro => pro.title === info)
    setData(filtered)
  }, [info])

  return (
    <section  
      className='relative z-50 py-20 px-4 max-w-[1200px] mx-auto'
      id='proyectos'
    >
      <h3 className='text-white font-bold text-center text-[1.2rem] sm:text-[1.5rem] lg:text-[2rem] mb-8'>
        Mis Proyectos
      </h3>

      <section className={`${styles.main}`}>
        <ul className='flex flex-row  items-center justify-between border border-[#17569534] rounded-t-2xl text-white text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] bg-gradient-to-bl from-green-400/40 via-blue-500/60 to-purple-700/30 backdrop-blur-lg'>
          {tabs.map(title => (
            <motion.li
              key={title}
              onClick={() => setInfo(title)}
              className={`w-full text-center py-3 px-2 cursor-pointer transition-all ${
                title === info ? 'font-bold text-[#0cbbf5]' : 'font-medium'
              }`}
              initial={false}
              animate={{
                backgroundColor: title === info ? '##00A3CC' : 'transparent'
              }}
            >
              {title}
              {title === info && (
                <motion.div
                  className='mx-auto mt-1 h-0.5 w-[60%] bg-[#00A3CC] rounded-full'
                  layoutId='underline'
                />
              )}
            </motion.li>
          ))}
        </ul>
        <article className='border border-[#17569580] backdrop-blur-sm rounded-b-2xl px-4 py-6 overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={data[0]?.title}
              className='flex flex-col md:flex-row gap-6 items-center justify-center'
              initial={{ opacity: 0, y: -80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className='w-full max-w-[500px] aspect-video'>
                <img
                  src={data[0]?.img}
                  alt={data[0]?.title}
                  className='w-full h-full object-contain rounded-xl'
                />
              </div>

              <div className='text-white max-w-xl w-full'>
                <h4 className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.7rem] font-bold mb-3 text-[#00CFFF]  '>
                  {data[0]?.title}
                </h4>
                <p className='text-[#a6cfe2] text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] mb-4 line-clamp-3'>
                  {data[0]?.description}
                </p>

                <ul className='flex flex-wrap gap-2 text-white font-medium text-[0.75rem] sm:text-[0.85rem] lg:text-[1rem] mb-4'>
                  {data[0]?.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className='bg-blue-700 px-3 py-1 rounded-2xl'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-3 justify-end'>
                  <Link data={data[0]?.url} text={'Visitar'} />
                  <Link data={data[0]?.gitHub} git={data[0]?.featured} text={data[0]?.featured ? 'Ver Repositorio' : 'Repositorio en privado'} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </section>
    </section>
  )
}
