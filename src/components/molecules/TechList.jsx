export const TechList = ({ tech }) => {

  return (
    <li
      style= {{ borderBottom: `1px solid ${tech.color}`, color: tech.color }}
      className='border-b pb-1 flex justify-center items-center gap-1'
    >
      <img src={tech.src} alt="MongoDB" className="w-4 h-4 inline-block" />
      {tech.name}
    </li>
  )
}
