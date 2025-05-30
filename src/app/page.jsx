import { About } from '@/components/templates/About'
import { Hero } from '@/components/templates/Hero'
import { Mini } from '@/components/templates/Mini'
import { Nanvar } from '@/components/organisms/Nanvar'
import { Projects } from '@/components/templates/Projects'
import { Footer } from '@/components/organisms/Footer'

export default function Home () {
  return (
    <main>
      <Hero />
      <Nanvar />
      <About />
      <Projects />
      <Mini />
      <Footer />
    </main>
  )
}
