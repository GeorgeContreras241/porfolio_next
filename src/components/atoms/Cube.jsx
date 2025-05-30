'use client'
import '@/style/Cube.css'
import { useAnimationFrame } from 'motion/react'
import { useRef } from 'react'

export const Cube = () => {
  const ref = useRef(null)

  useAnimationFrame(t => {
    if (!ref.current) return

    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className='container'>
      <div className='cube ' ref={ref}>
        <div className='side front'>
          <img src='./react.svg' alt='' />
        </div>
        <div className='side left'>
          <img src='./express.svg' alt='Logo de React' />
        </div>
        <div className='side right'>
          <img src='./js.svg' alt='' />
        </div>
        <div className='side top'>
          <img src='./next.svg' alt='' />
        </div>
        <div className='side bottom'>
          <img src='./astro.svg' alt='' />
        </div>
        <div className='side back'>
          <img src='./node.svg' alt='' />
        </div>
      </div>
    </div>
  )
}
