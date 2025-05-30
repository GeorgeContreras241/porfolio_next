export const shortProjects = [
  {
    id: 1,
    title: "Timer de Aplicaciones",
    description:
      "Esta aplicación te permite crear un cronómetro para medir el tiempo en tareas. Los datos se guardan en localStorage y son accesibles desde cualquier navegador.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    gitHub: "https://github.com/GeorgeContreras241/G-Timer",
    url: "https://timer-dun-ten.vercel.app/", 
    img: ""
  },
  {
    id: 2,
    title: "Prueba Técnica Midudev",
    description:
      "Prueba técnica propuesta por Midudev para evaluar habilidades de desarrollo frontend.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://tecnica-proyecto.vercel.app/",
    gitHub: "https://github.com/GeorgeContreras241/G-Tecnica_proyecto",
    img: ""
  },
  {
    id: 3,
    title: "Portfolio V1",
    description:
      "Mi primer portfolio personal desarrollado con Next.js, mostrando mis proyectos iniciales.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    url: "https://porfolio-george-contreras.vercel.app/",
    gitHub: "https://github.com/GeorgeContreras241/G-Porfolio",
    img: ""
  },
  {
    id: 4,
    title: "Portfolio V2",
    description:
      "Segunda versión de mi portfolio personal, desarrollado con Astro y Tailwind CSS para mejor rendimiento y diseño.",
    technologies: ["HTML", "CSS", "JavaScript", "Astro", "Tailwind CSS", "React"],
    url: "https://porfolio-v2-nu.vercel.app/#welcome",
    gitHub: "https://github.com/GeorgeContreras241/G-Porfolio_V2",
    img: ""
  },
  {
    id: 6,
    title: "API de Rick y Morty",
    description:
      "Aplicación que consume la API de Rick y Morty, mostrando personajes con filtros y detalles.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    url: "https://rick-next-red.vercel.app/episodes",
    gitHub: "https://github.com/GeorgeContreras241/G-Rick_next",
    img: ""
  },
  {
    id: 7,
    title: "Ejercicios Advent JS",
    description:
      "Colección de ejercicios de programación en JavaScript realizados durante el Advent JS.",
    technologies: ["JavaScript"],
    url: "https://github.com/joaopaulo-dev/calculator-app",
    gitHub: "https://github.com/joaopaulo-dev/calculator-app",
    img: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "Gestor de Contraseñas",
    description:
      "Aplicación full stack segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend antes de almacenarse en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.",
    technologies: ["React", "Node.js", "JavaScript", "Zustand", "Tailwind CSS", "CSS Modules", "MongoDB", "Bcrypt"],
    url: "https://password-manager-three-liard.vercel.app",
    gitHub: "https://github.com/GeorgeContreras241/newPass",
    img: "./project06.webp",
    featured: false
  },
  {
    id: 2,
    title: "Landing Page Metálicas J Y N",
    description:
      "Sitio web corporativo para Metálicas J Y N, mostrando sus productos y servicios. Desarrollado con Astro para máximo rendimiento y SEO.",
    technologies: ["Astro", "React", "JavaScript", "Tailwind CSS", "CSS Modules", "React Motion"],
    url: "https://metalicasjyn.vercel.app",
    gitHub: "https://github.com/GeorgeContreras241/Frontend-metalicas-j-y-n",
    img: "./project01.webp",
    featured: true
  },
  {
    id: 3,
    title: "Tienda Online con Fake Store API",
    description:
      "E-commerce completo que consume la API de Fake Store, con funcionalidades de filtrado, búsqueda y paginación. Próximamente incluirá pasarela de pagos y historial de compras.",
    technologies: ["Next.js", "CSS Modules", "JavaScript", "React", "Zustand"],
    url: "https://store-api-sage.vercel.app",
    gitHub: "https://github.com/GeorgeContreras241/Store-Api",
    img: "./project04.webp",
    featured: true
  },
  {
    id: 4,
    title: "Landing Page de Matcos",
    description:
      "Sitio web corporativo para Matcos, diseñado para mostrar sus productos y proyectos destacados. Desarrollado con Astro para óptimo rendimiento.",
    technologies: ["Astro", "React", "JavaScript", "Tailwind CSS", "CSS Modules", "React Motion"],
    url: "https://github.com/joaopaulo-dev/calculator-app",
    gitHub: "https://github.com/joaopaulo-dev/calculator-app",
    img: "./project05.webp",
    featured: true
  }
];

export const technologies = [
  { name: 'HTML', color: '#E34F26', category: 'frontend' },
  { name: 'CSS', color: '#1572B6', category: 'frontend' },
  { name: 'JavaScript', color: '#F7DF1E', category: 'language' },
  { name: 'React', color: '#61DAFB', category: 'frontend' },
  { name: 'Redux', color: '#764ABC', category: 'frontend' },
  { name: 'Zustand', color: '#6D3D7A', category: 'frontend' },
  { name: 'Astro', color: '#FF5D01', category: 'frontend' },
  { name: 'Next.js', color: '#a6cfe2', category: 'frontend' },
  { name: 'Tailwind CSS', color: '#06B6D4', category: 'frontend' },
  { name: 'CSS Modules', color: '#a6cfe2', category: 'frontend' },
  { name: 'Node.js', color: '#339933', category: 'backend' },
  { name: 'Express', color: '#a6cfe2', category: 'backend' },
  { name: 'JWT', color: '#a6cfe2', category: 'backend' },
  { name: 'MongoDB', color: '#47A248', category: 'database' },
  { name: 'MySql', color: '#336791', category: 'database' },
];

export const educationData = [
  {
    logo: './udec-logo.webp',
    alt: 'Logo de la Universidad de Cundinamarca',
    logoClass: 'h-16 w-16 object-contain aspect-square',
    title: 'Universidad de Cundinamarca',
    description: 'Tecnología en Desarrollo de Software',
    period: '2020 - 2024',
    degree: 'Tecnólogo'
  },
  {
    logo: './talento-logo.webp',
    alt: 'Logo de Talento Tech',
    logoClass: 'h-12 w-12 object-contain rounded-full',
    title: 'Talento Tech - Ministerio de Educación',
    description: 'Bootcamp intensivo de Desarrollo Web FullStack',
    period: '2024',
    degree: 'Certificación'
  }
];