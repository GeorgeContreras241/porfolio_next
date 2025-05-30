'use client'
import { shortProjects } from '@/const/const.js'
import { Link } from '@/components/atoms/Link.jsx'
import { List } from '@/components/atoms/List.jsx'

export const Mini = () => {
  return (
    <section className='relative z-9999 flex flex-col gap-4 items-center px-4 py-6 min-w-[300px] max-w-[1200px] w-[95%] m-auto'>
      <h5 className='w-full text-[#0cbbf5] mb-2 font-bold text-[1.5rem] lg:text-[2rem] md:text-[1.2rem] xl:text-[1.8rem]'>
        Mini proyectos
      </h5>
      {shortProjects.map(pro => (
        <details
          key={pro.id}
          className='px-4 w-full border-[#0cbbf5]/50 
            bg-gradient-to-br from-neutral-700 via-blue-500/ to-purple-700/10  backdrop-blur-lg
            hover:scale-[1.01] hover:backdrop-blur-sm hover:border-[#0cbbf5] transition-trensform duration-400'
        >
          <summary className='text-[#8FE3FF] py-2 font-bold mb-2 cursor-pointer'>
            {pro.title}
          </summary>
          <article>
            <p className='text-[#d8f3ff] text-sm xl:text-[1rem] md:text-[0.8rem] mb-3 w-full'>
              {pro.description}
            </p>
            <ul className='flex flex-wrap gap-2 mb-4'>
              {pro.technologies.map((tech, index) => (
                <List data={tech} key={index} />
              ))}
            </ul>
            <div className='flex justify-end gap-2 items-center my-2 text-white'>
              <Link data={pro.url} />
              <Link data={pro.github} />
            </div>
          </article>
        </details>
      ))}
    </section>
  )
}
