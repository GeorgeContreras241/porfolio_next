export const TechList = ({ tech }) => {

  return (
    <li
      style= {{ borderBottom: `1px solid ${tech.color}`, color: tech.color }}
      className='border-b inline-block pb-1'
    >
      {tech.name}
    </li>
  )
}
