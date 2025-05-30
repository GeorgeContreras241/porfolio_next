import { Animation } from '@/components/organisms/Animation'
import { technologies, educationData } from '@/const/const.js'
import { TechList } from '@/components/molecules/TechList'
import { EducationCard } from '@/components/molecules/EducationCard'

export const About = () => {
  return (
    <main
      id='sobre-mi'
      className='h-fit md:min-h-[100dvh] max-w-[1280px] w-full m-auto grid place-items-center px-3'
    >
      <Animation>
        <div className='flex flex-col md:flex-row items-center justify-center md:pt-0 pt-12 m-auto lg:gap-4 md:gap-2 gap-0'>
          <div className='xl:w-[500px] md:w-[300px] w-[200px]'>
            <img
              src='./logoPortafolio.png'
              alt='Avatar de George Contreras'
              title='Logo Portafolio'
              className='img rounded-lg opacity-[.8] brightness-200'
            />
          </div>
          <div className='flex flex-col w-fit justify-center text-white p-4 lg:gap-8 md:gap-4 gap-4'>
            <div className='flex flex-col lg:gap-6 md:gap-4 gap-1'>
              <h2 className='text-[#00CFFF] font-bold md:text-4xl text-3xl'>
                Sobre mi
              </h2>
              <p className='text-[#d8f3ff]  lg:text-[1.0rem]  sm:text-[.9rem] text-[.8rem]'>
                Soy desarrollador frontend y tecnólogo en Desarrollo de Software
                por la Universidad de Cundinamarca. Tengo experiencia con el
                stack MERN y busco mi primera oportunidad laboral en el área.{' '}
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
          <h3 className='font-bold text-[#0cbbf5] text-3xl mt-4 mb-6 lg:text-start px-2 sm:text-center text-start'>
            Mis Estudios
          </h3>

          <div className='flex flex-wrap  lg:gap-6  gap-2 justify-start px-4'>
            {educationData.map((item, index) => (
              <EducationCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Animation>
    </main>
  )
}
