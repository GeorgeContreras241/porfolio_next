import { Animation } from '@/components/organisms/Animation'
import { technologies, educationData } from '@/const/const.js'
import { TechList } from '@/components/molecules/TechList'
import { EducationCard } from '@/components/molecules/EducationCard'

export const About = () => {
  return (
    <section
      id='sobre-mi'
      className='h-fit md:min-h-[100dvh] max-w-[1280px] w-full m-auto grid place-items-center px-3 py-20'
    >
      <Animation>
        <h2 className='text-[#00CFFF] text-center font-bold md:text-4xl text-3xl mb-6 neon-text'>
                Sobre mi
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center md:pt-0  m-auto lg:gap-4 md:gap-2 gap-0'>
          <div className='xl:w-[500px] md:w-[300px] p-4 h-auto w-[80%]'>
            <img
              src='./logoPortafolio.png'
              alt='Avatar de George Contreras'
              title='Logo Portafolio'
              className='img rounded-lg opacity-[.7] brightness-200 neon-lavanda'
            />
          </div>
          <div className='flex flex-col w-fit justify-center text-white p-4 lg:gap-8 md:gap-4 gap-4'>
            <div className='flex flex-col lg:gap-6 md:gap-4 gap-3'>
              <span className='md:text-2xl font-semibold text-[#91b7c9] text-lg'>Desarrollador Frontend</span>
              <p className='text-[#d8f3ff] font-mono lg:text-[1.0rem]  sm:text-[.9rem] text-[.9rem]'>
                Soy George Contreras, me considero apasionado por el desarrollo web y las tecnologías modernas como React y Nextjs. Me encanta transformar ideas en interfaces claras y funcionales, cuidando cada detalle para ofrecer una buena experiencia a usuario final. Como desarrollador junior, estoy en constante aprendizaje y buscando nuevos retos que me permitan crecer y mejorar en cada proyecto.
                <br />
              </p>
            </div>
            <ul className='flex flex-wrap gap-4 text-sm'>
              {technologies.map((tech, index) => (
                <TechList key={index} tech={tech} />
              ))}
            </ul>
            <span className='flex font-light '>
              <i className='ml-auto px-4 p-2 border border-[#06d6dc] bg-black rounded-2xl text-[#a6cfe2] brightness-125'>
                Disponible para Trabajar
              </i>
            </span>
          </div>
        </div>
        <div className='relative z-50 text-white m-auto min-w-[300px] max-w-[1200px] w-[95%]'>
          <h3 className='font-bold text-[#0cbbf5] text-3xl mt-6 mb-6 lg:text-start px-2 sm:text-center text-start neon-text'>
            Mis Estudios
          </h3>

          <div className='flex flex-wrap  lg:gap-6  gap-2 justify-start px-4'>
            {educationData.map((item, index) => (
              <EducationCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Animation>
    </section>
  )
}
