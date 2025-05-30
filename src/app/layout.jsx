
import { Background } from '@/components/organisms/Background'
import './globals.css'


export const metadata = {
  title: "George Contreras | Desarrollador Frontend | Portafolio Web Moderno ! Portafolio de George Contreras",
  description: "Portafolio de George Contreras, desarrollador web especializado en React, Next.js y Tailwind.",
  keywords: ["desarrollador frontend", "React", "Next.js", "portafolio", "George Contreras", "porfolio vercel", "porfolio next", "portfolio web moderno", "portfolio web", "portfolio next", "portfolio vercel", "desarrollador web", "desarrollador", "web", "frontend", "tecnología", "tecnologías", "programación", "programación web", "programación frontend", "programación backend", "programación full stack", "full stack", "fullstack", "backend", "frontend", "javascript", "typescript", "react", "nextjs", "tailwindcss", "css", "css modules", "astro", "vercel", "github", "linkedin", "twitter", "instagram", "youtube", "discord", "twitch", "tiktok"],
  authors: [{ name: "George Contreras" }],
  openGraph: {
    title: "George Contreras | Desarrollador Frontend",
    description: "Explora el portafolio de George Contreras, experto en tecnologías modernas como React y Next.js.",
    images: "./WebPor.webp",
  },
};
export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>
        <Background/>
            {children}
      </body>
    </html>
  )
}
  